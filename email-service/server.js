const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

// CONFIGURAÇÃO DE TESTE (MAILTRAP)
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    auth: {
        user: "1f05715dfeaf88",
        pass: "03de7587746408"
    }
});

app.post('/enviar-venda', async (req, res) => {
    const { emailVendedor, nomeVendedor, dadosPedido } = req.body;

    try {
        await transporter.sendMail({
            from: '"Raiz Conecta" <sistema@raizconecta.com>',
            to: emailVendedor,
            subject: 'Nova Venda Realizada! 🎉',
            html: `
        <div style="font-family: sans-serif;">
          <h1>Parabéns, ${nomeVendedor}!</h1>
          <p>Você realizou uma nova venda no valor de <strong>R$ ${dadosPedido.valorTotal}</strong>.</p>
          <p>ID do Pedido: #${dadosPedido.id}</p>
        </div>
      `
      // mensagens de erro
        });
        console.log(`E-mail enviado para: ${emailVendedor}`);
        res.status(200).json({ message: 'E-mail enviado com sucesso' });
    } catch (error) {
        console.error('Erro no envio:', error);
        res.status(500).json({ error: 'Falha ao enviar e-mail' });
    }
});

app.listen(3001, () => console.log('Microserviço de e-mail rodando na porta 3001'));