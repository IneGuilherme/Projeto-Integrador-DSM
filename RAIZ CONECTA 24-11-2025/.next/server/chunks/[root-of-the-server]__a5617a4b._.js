module.exports = [
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/.next-internal/server/app/api/pedido/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/api/pedido/route.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/server.js [app-route] (ecmascript)");
;
// Simulação de base de dados em memória (limpa ao reiniciar o servidor)
let carrinho = [];
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(carrinho, {
        status: 200
    });
}
async function POST(request) {
    try {
        const itemAdicionado = await request.json();
        // Validação básica
        if (!itemAdicionado.id || !itemAdicionado.quantidade) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Requisição inválida. 'id' e 'quantidade' são obrigatórios."
            }, {
                status: 400
            });
        }
        // Verifica se o item já existe
        const itemExistenteIndex = carrinho.findIndex((item)=>item.id === itemAdicionado.id);
        if (itemExistenteIndex > -1) {
            carrinho[itemExistenteIndex].quantidade = itemAdicionado.quantidade;
            if (carrinho[itemExistenteIndex].quantidade <= 0) {
                carrinho = carrinho.filter((item)=>item.id !== itemAdicionado.id);
            }
        } else if (itemAdicionado.quantidade > 0) {
            carrinho.push(itemAdicionado);
        }
        // micorserviço
        try {
            await fetch('http://localhost:3001/enviar-venda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailVendedor: "glhrmbaeza@gmail.com",
                    nomeVendedor: "Produtor Teste",
                    dadosPedido: {
                        id: itemAdicionado.id,
                        valorTotal: (itemAdicionado.preco || 0) * itemAdicionado.quantidade
                    }
                })
            });
        } catch (err) {
            console.log("Aviso: Microserviço de e-mail offline, mas o item foi gerido no carrinho.");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(carrinho, {
            status: 201
        });
    } catch (error) {
        console.log("Erro no POST:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Erro interno no servidor."
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const itemAtualizado = await request.json();
        if (!itemAtualizado.id || itemAtualizado.quantidade === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "ID e quantidade são obrigatórios."
            }, {
                status: 400
            });
        }
        const index = carrinho.findIndex((item)=>item.id === itemAtualizado.id);
        if (index === -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Item não encontrado."
            }, {
                status: 404
            });
        }
        carrinho[index].quantidade = itemAtualizado.quantidade;
        if (carrinho[index].quantidade <= 0) {
            carrinho = carrinho.filter((item)=>item.id !== itemAtualizado.id);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(carrinho, {
            status: 200
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Erro interno."
        }, {
            status: 500
        });
    }
}
async function DELETE() {
    carrinho = [];
    console.log("Carrinho esvaziado.");
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message: "Carrinho esvaziado com sucesso!"
    }, {
        status: 200
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5617a4b._.js.map