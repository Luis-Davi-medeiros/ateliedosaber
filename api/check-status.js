// api/check-status.js - Verificação do status de pagamento do PIX
const { MercadoPagoConfig, Payment } = require('mercadopago');
const { PRODUCTS_CATALOG } = require('./products');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const paymentId = req.query.id || req.body?.id;

  if (!paymentId) {
    return res.status(400).json({ error: 'ID do pagamento não fornecido.' });
  }

  try {
    const token = process.env.MERCADO_PAGO_ACCESS_TOKEN;

    // Se for simulação ou sandbox de testes
    if (String(paymentId).startsWith('sim_')) {
      return res.status(200).json({
        id: paymentId,
        status: 'pending',
        isSandbox: true,
        message: 'Aguardando pagamento simulado.'
      });
    }

    if (!token || token.trim().length <= 10) {
      return res.status(200).json({
        id: paymentId,
        status: 'pending',
        isSandbox: true
      });
    }

    const client = new MercadoPagoConfig({ accessToken: token });
    const payment = new Payment(client);
    const mpPayment = await payment.get({ id: paymentId });

    const status = mpPayment.status; // 'approved', 'pending', 'rejected', 'cancelled'

    // Se aprovado, recupera os links de download dos produtos comprados
    let downloadLinks = [];
    if (status === 'approved') {
      const productIds = (mpPayment.metadata?.product_ids || '').split(',').filter(Boolean);
      downloadLinks = productIds.map(pid => {
        const prod = PRODUCTS_CATALOG[pid];
        return prod ? {
          id: prod.id,
          title: prod.title,
          fileName: prod.downloadFileName,
          downloadUrl: prod.downloadUrl
        } : null;
      }).filter(Boolean);

      // Se nenhum produto foi encontrado nos metadados, envia o catálogo de compras geral
      if (downloadLinks.length === 0) {
        downloadLinks = Object.values(PRODUCTS_CATALOG).slice(0, 2).map(p => ({
          id: p.id,
          title: p.title,
          fileName: p.downloadFileName,
          downloadUrl: p.downloadUrl
        }));
      }
    }

    return res.status(200).json({
      id: paymentId,
      status: status,
      statusDetail: mpPayment.status_detail,
      amount: mpPayment.transaction_amount,
      dateApproved: mpPayment.date_approved,
      customerEmail: mpPayment.payer?.email,
      downloadLinks: downloadLinks
    });

  } catch (error) {
    console.error('Erro ao verificar status do pagamento:', error);
    return res.status(500).json({
      error: 'Erro ao consultar status do pagamento.',
      details: error.message || error
    });
  }
};
