// api/webhook.js - Webhook para notificações automáticas do Mercado Pago
const { MercadoPagoConfig, Payment } = require('mercadopago');
const { PRODUCTS_CATALOG } = require('./products');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send('OK');
  }

  try {
    const { type, data, action } = req.body || {};
    const queryId = req.query.id || req.query['data.id'];
    const paymentId = data?.id || queryId;

    if (!paymentId) {
      return res.status(200).send('No payment ID found');
    }

    const token = process.env.MERCADO_PAGO_ACCESS_TOKEN;
    if (!token) {
      return res.status(200).send('Token not set');
    }

    const client = new MercadoPagoConfig({ accessToken: token });
    const payment = new Payment(client);
    const paymentInfo = await payment.get({ id: paymentId });

    if (paymentInfo.status === 'approved') {
      console.log(`[PAGAMENTO APROVADO] Pedido ${paymentId} - Cliente: ${paymentInfo.payer?.email} - R$ ${paymentInfo.transaction_amount}`);
      // Aqui você pode integrar envio de e-mail via Resend, SendGrid ou disparo de webhook para o WhatsApp
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Erro no processamento do webhook:', error);
    return res.status(200).json({ received: true }); // Mercado Pago recomenda sempre retornar 200 para evitar retentativas desnecessárias em erros de lógica
  }
};
