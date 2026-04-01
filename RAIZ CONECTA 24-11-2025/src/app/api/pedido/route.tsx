import { NextResponse } from "next/server";

// Simulação de base de dados em memória (limpa ao reiniciar o servidor)
let carrinho: any[] = [];

/**
 * GET: Retorna o estado atual do carrinho
 */
export async function GET() {
  return NextResponse.json(carrinho, { status: 200 });
}

/**
 * POST: Finaliza o pedido e notifica o vendedor via Microserviço
 */
export async function POST(request: Request) {
  try {
    const itemAdicionado = await request.json();

    // Validação básica
    if (!itemAdicionado.id || !itemAdicionado.quantidade) {
      return NextResponse.json(
        { message: "Requisição inválida. 'id' e 'quantidade' são obrigatórios." },
        { status: 400 }
      );
    }

    // Verifica se o item já existe
    const itemExistenteIndex = carrinho.findIndex(item => item.id === itemAdicionado.id);

    if (itemExistenteIndex > -1) {
      carrinho[itemExistenteIndex].quantidade = itemAdicionado.quantidade;
      if (carrinho[itemExistenteIndex].quantidade <= 0) {
        carrinho = carrinho.filter(item => item.id !== itemAdicionado.id);
      }
    } else if (itemAdicionado.quantidade > 0) {
      carrinho.push(itemAdicionado);
    }

    // micorserviço
    try {
      await fetch('http://localhost:3001/enviar-venda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emailVendedor: "vendedorteste@email.com", // Exemplo de email
          nomeVendedor: "Produtor Teste",
          dadosPedido: {
            id: itemAdicionado.id,
            valorTotal: (itemAdicionado.preco || 0) * itemAdicionado.quantidade
          }
        }),
      });
    } catch (err) {
      console.log("Aviso: Microserviço de e-mail offline, mas o item foi gerido no carrinho.");
    }

    return NextResponse.json(carrinho, { status: 201 });

  } catch (error) {
    console.log("Erro no POST:", error);
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 });
  }
}

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