// api/create-pix.js - Serverless function para geração de cobrança PIX via Mercado Pago
const { MercadoPagoConfig, Payment } = require('mercadopago');
const { PRODUCTS_CATALOG, COUPONS } = require('./products');

module.exports = async function handler(req, res) {
  // Configuração de CORS para permitir requisições seguras
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Utilize POST.' });
  }

  try {
    const { items, customer, coupon } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Nenhum item selecionado para o pedido.' });
    }

    if (!customer || !customer.email || !customer.name || !customer.cpf) {
      return res.status(400).json({ error: 'Dados do cliente incompletos (nome, e-mail e CPF são obrigatórios para o PIX).' });
    }

    // 1. Calcular valor oficial pelo catálogo seguro
    let calculatedSubtotal = 0;
    const purchasedProducts = [];

    for (const item of items) {
      const product = PRODUCTS_CATALOG[item.id];
      if (product) {
        const qty = Math.max(1, parseInt(item.quantity) || 1);
        calculatedSubtotal += product.price * qty;
        purchasedProducts.push({
          id: product.id,
          title: product.title,
          quantity: qty,
          unit_price: product.price
        });
      }
    }

    if (calculatedSubtotal <= 0) {
      return res.status(400).json({ error: 'Valor total do pedido inválido.' });
    }

    // 2. Aplicar cupom se válido
    let discount = 0;
    const cleanCoupon = (coupon || '').trim().toUpperCase();
    if (cleanCoupon && COUPONS[cleanCoupon]) {
      discount = calculatedSubtotal * COUPONS[cleanCoupon];
    }

    const finalAmount = Math.max(1.00, parseFloat((calculatedSubtotal - discount).toFixed(2)));

    // 3. Preparar nomes e CPF
    const nameParts = customer.name.trim().split(' ');
    const firstName = nameParts[0] || 'Cliente';
    const lastName = nameParts.slice(1).join(' ') || 'Ateliê do Saber';
    const cleanCpf = customer.cpf.replace(/\D/g, '');

    const token = process.env.MERCADO_PAGO_ACCESS_TOKEN;

    // Se o token real do Mercado Pago estiver configurado:
    if (token && token.trim().length > 10 && !token.includes('SEU_TOKEN')) {
      const client = new MercadoPagoConfig({ accessToken: token });
      const payment = new Payment(client);

      const paymentData = {
        body: {
          transaction_amount: finalAmount,
          description: `Ateliê do Saber - ${purchasedProducts.length} Material(is) Pedagógico(s)`,
          payment_method_id: 'pix',
          payer: {
            email: customer.email.trim(),
            first_name: firstName,
            last_name: lastName,
            identification: {
              type: 'CPF',
              number: cleanCpf
            }
          },
          notification_url: process.env.NOTIFICATION_URL || undefined,
          metadata: {
            customer_name: customer.name,
            customer_email: customer.email,
            product_ids: purchasedProducts.map(p => p.id).join(',')
          }
        }
      };

      const mpResponse = await payment.create(paymentData);

      const qrCode = mpResponse.point_of_interaction?.transaction_data?.qr_code || '';
      const qrCodeBase64 = mpResponse.point_of_interaction?.transaction_data?.qr_code_base64 || '';
      const ticketUrl = mpResponse.point_of_interaction?.transaction_data?.ticket_url || '';

      return res.status(200).json({
        success: true,
        isSandbox: false,
        paymentId: mpResponse.id,
        status: mpResponse.status,
        amount: finalAmount,
        qrCode: qrCode,
        qrCodeBase64: qrCodeBase64 ? `data:image/png;base64,${qrCodeBase64}` : null,
        ticketUrl: ticketUrl,
        expiresAt: mpResponse.date_of_expiration,
        items: purchasedProducts
      });
    }

    // MODO SANDBOX / DEMONSTRAÇÃO (quando a chave de produção ainda não foi inserida no .env)
    const simulatedPaymentId = 'sim_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
    const simulatedPixCode = `00020126580014br.gov.bcb.pix0136ateliedosaber-pagamentos@pix.com.br520400005303986540${finalAmount.toFixed(2)}5802BR5925Atelie do Saber Educacional6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    return res.status(200).json({
      success: true,
      isSandbox: true,
      message: 'Modo de testes ativo. Configure sua MERCADO_PAGO_ACCESS_TOKEN para PIX bancário em tempo real.',
      paymentId: simulatedPaymentId,
      status: 'pending',
      amount: finalAmount,
      qrCode: simulatedPixCode,
      qrCodeBase64: null,
      ticketUrl: null,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      items: purchasedProducts
    });

  } catch (error) {
    console.error('Erro ao gerar PIX:', error);
    return res.status(500).json({
      error: 'Não foi possível gerar a cobrança PIX no momento.',
      details: error.message || error
    });
  }
};
