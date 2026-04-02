import { NextResponse } from "next/server";

// Simulação de base de dados em memória
let carrinho: any[] = [];

export async function GET() {
  return NextResponse.json(carrinho, { status: 200 });
}

/**
 * POST: Agora funciona como FINALIZAR COMPRA
 */
export async function POST(request: Request) {
  try {
    // 1. Recebemos a intenção do frontend (pode ser um novo item ou o sinal de finalizar)
    const corpo = await request.json().catch(() => ({}));

    // Se o corpo vier com uma flag 'finalizar: true', enviamos o e-mail com TUDO
    if (corpo.finalizar) {
      if (carrinho.length === 0) {
        return NextResponse.json({ message: "Carrinho vazio!" }, { status: 400 });
      }

      // Calculamos o total de todos os itens no carrinho
      const valorTotalGeral = carrinho.reduce(
        (acc, item) => acc + (item.preco || 0) * item.quantidade, 
        0
      ).toFixed(2);

      // Chamada ao microserviço com a LISTA COMPLETA
      try {
        await fetch('http://localhost:3001/enviar-venda', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            emailVendedor: "vendedor@teste.com", 
            nomeVendedor: "Produtor Raiz Conecta",
            dadosPedido: {
              id: Math.floor(Math.random() * 10000), // ID aleatório do pedido
              valorTotal: valorTotalGeral,
              itens: carrinho // ENVIAMOS O ARRAY COMPLETO AQUI
            }
          }),
        });
        
        // Opcional: Esvaziar o carrinho após finalizar a compra com sucesso
        // carrinho = []; 
        
      } catch (err) {
        console.log("Erro ao conectar com microserviço de e-mail.");
      }

      return NextResponse.json({ message: "Compra finalizada e nota enviada!", total: valorTotalGeral }, { status: 200 });
    }

    // --- LÓGICA DE ADICIONAR ITEM (Se não for para finalizar) ---
    const itemAdicionado = corpo;
    if (!itemAdicionado.id || !itemAdicionado.quantidade) {
      return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
    }

    const itemExistenteIndex = carrinho.findIndex(item => item.id === itemAdicionado.id);

    if (itemExistenteIndex > -1) {
      carrinho[itemExistenteIndex].quantidade = itemAdicionado.quantidade;
      if (carrinho[itemExistenteIndex].quantidade <= 0) {
        carrinho = carrinho.filter(item => item.id !== itemAdicionado.id);
      }
    } else if (itemAdicionado.quantidade > 0) {
      // Importante: certifique-se que o itemAdicionado tenha 'nome' e 'preco' vindo do front
      carrinho.push(itemAdicionado);
    }

    return NextResponse.json(carrinho, { status: 201 });

  } catch (error) {
    console.log("Erro no POST:", error);
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 });
  }
}

// ... manter PUT e DELETE como estão
/**
 * PUT: Atualiza a quantidade de um item específico
 */
export async function PUT(request: Request) {
  try {
    const itemAtualizado = await request.json();

    if (!itemAtualizado.id || itemAtualizado.quantidade === undefined) {
      return NextResponse.json({ message: "ID e quantidade são obrigatórios." }, { status: 400 });
    }

    const index = carrinho.findIndex(item => item.id === itemAtualizado.id);

    if (index === -1) {
      return NextResponse.json({ message: "Item não encontrado." }, { status: 404 });
    }

    carrinho[index].quantidade = itemAtualizado.quantidade;

    if (carrinho[index].quantidade <= 0) {
      carrinho = carrinho.filter(item => item.id !== itemAtualizado.id);
    }

    return NextResponse.json(carrinho, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Erro interno." }, { status: 500 });
  }
}

/**
 * DELETE: Esvazia o carrinho
 */
export async function DELETE() {
  carrinho = [];
  console.log("Carrinho esvaziado.");
  return NextResponse.json({ message: "Carrinho esvaziado com sucesso!" }, { status: 200 });
}