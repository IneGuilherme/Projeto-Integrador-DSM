const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

// CONFIGURAÇÃO DE TESTE (MAILTRAP) - Usando a porta 587 que funcionou para você
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

    // 1. CRIAR AS LINHAS DA TABELA DE ITENS DINAMICAMENTE
    // O .map percorre cada item que o cliente selecionou no carrinho
    const itensHtml = dadosPedido.itens.map(item => `
        <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.nome || 'Produto'}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantidade}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">R$ ${Number(item.preco).toFixed(2)}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">R$ ${(item.quantidade * item.preco).toFixed(2)}</td>
        </tr>
    `).join('');

    try {
        await transporter.sendMail({
            from: '"Raiz Conecta" <sistema@raizconecta.com>',
            to: emailVendedor,
            subject: `Nota Fiscal - Pedido #${dadosPedido.id} 🎉`,
            html: `
            <div style="font-family: 'Courier New', Courier, monospace; max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; color: #333;">
                <div style="text-align: center; border-bottom: 2px dashed #333; padding-bottom: 10px; margin-bottom: 20px;">
                    <h1 style="margin: 0;">RAIZ CONECTA</h1>
                    <p style="font-size: 14px; margin: 5px 0;">O elo entre o campo e a sua mesa</p>
                </div>

                <h2 style="text-align: center;">COMPROVANTE DE VENDA</h2>
                
                <p><strong>Vendedor:</strong> ${nomeVendedor}</p>
                <p><strong>ID do Pedido:</strong> #${dadosPedido.id}</p>
                <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>

                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <thead>
                        <tr style="background-color: #f8f8f8;">
                            <th style="text-align: left; padding: 10px; border-bottom: 2px solid #333;">Item</th>
                            <th style="text-align: center; padding: 10px; border-bottom: 2px solid #333;">Qtd</th>
                            <th style="text-align: right; padding: 10px; border-bottom: 2px solid #333;">Preço</th>
                            <th style="text-align: right; padding: 10px; border-bottom: 2px solid #333;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itensHtml} 
                    </tbody>
                </table>

                <div style="margin-top: 20px; text-align: right; font-size: 18px; border-top: 2px solid #333; padding-top: 10px;">
                    <strong>VALOR TOTAL DA VENDA: R$ ${dadosPedido.valorTotal}</strong>
                </div>

                <div style="margin-top: 30px; border-top: 1px dashed #999; padding-top: 10px; text-align: center; font-size: 12px; color: #777;">
                    <p>Este é um comprovante gerado automaticamente pelo microserviço Raiz Conecta.</p>
                </div>
            </div>
            `
        });
        console.log(`Nota Fiscal enviada para: ${emailVendedor}`);
        res.status(200).json({ message: 'Nota Fiscal enviada com sucesso' });
    } catch (error) {
        console.error('Erro no envio:', error);
        res.status(500).json({ error: 'Falha ao gerar nota fiscal' });
    }
});

app.listen(3001, () => console.log('🚀 Microserviço de e-mail rodando na porta 3001'));