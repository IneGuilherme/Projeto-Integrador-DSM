(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProdutosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProdutosPage() {
    _s();
    // const router = useRouter(); // Removido para corrigir o erro
    const [produtos, setProdutos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- NOVOS ESTADOS ---
    // Estado para guardar o valor dos inputs de "quantidade a adicionar"
    const [inputQuantidades, setInputQuantidades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // --- ESTADO DO POPUP REMOVIDO ---
    // const [popupInfo, setPopupInfo] = useState({ visible: false, message: "" });
    // -----------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProdutosPage.useEffect": ()=>{
            fetch("http://localhost:3000/api/produto", {
                method: "GET"
            }).then({
                "ProdutosPage.useEffect": async (response)=>{
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    const resposta = await response.json();
                    // Inicializa os produtos com quantidade 0
                    const produtosComQuantidade = resposta.map({
                        "ProdutosPage.useEffect.produtosComQuantidade": (p)=>({
                                ...p,
                                quantidade: 0
                            })
                    }["ProdutosPage.useEffect.produtosComQuantidade"]);
                    setProdutos(produtosComQuantidade);
                }
            }["ProdutosPage.useEffect"]).catch({
                "ProdutosPage.useEffect": (err)=>console.error("Erro ao buscar produtos:", err)
            }["ProdutosPage.useEffect"]);
        }
    }["ProdutosPage.useEffect"], []);
    const [mostrarModal, setMostrarModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [novoNome, setNovoNome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [novoPreco, setNovoPreco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [novoTipo, setNovoTipo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Fruta");
    const [novaImagem, setNovaImagem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // --- NOVA FUNÇÃO ---
    // Lógica para adicionar ao carrinho (sem popup)
    const handleAdicionarAoCarrinho = (produto)=>{
        // Pega a quantidade do input, ou usa "1" como padrão se estiver vazio
        const strQtd = inputQuantidades[produto.id] || "1";
        const qtdParaAdicionar = parseInt(strQtd, 10);
        // Validação
        if (isNaN(qtdParaAdicionar) || qtdParaAdicionar <= 0) {
            console.error("Quantidade inválida");
            return;
        }
        // Atualiza o estado de 'produtos' somando a nova quantidade
        setProdutos((prev)=>prev.map((item)=>item.id === produto.id ? {
                    ...item,
                    quantidade: item.quantidade + qtdParaAdicionar
                } : item));
        // Reseta o input do card para "" (vazio)
        setInputQuantidades((prev)=>({
                ...prev,
                [produto.id]: ""
            }));
    // --- POPUP REMOVIDO ---
    };
    const adicionarProduto = ()=>{
        if (!novoNome || !novoPreco) return;
        const novo = {
            id: produtos.length + 1,
            nome: novoNome,
            preco: parseFloat(novoPreco),
            tipo: novoTipo,
            imagem: novaImagem || "https://cdn-icons-png.flaticon.com/512/415/415733.png",
            quantidade: 0
        };
        setProdutos((prev)=>[
                ...prev,
                novo
            ]);
        setMostrarModal(false);
        setNovoNome("");
        setNovoPreco("");
        setNovaImagem("");
    };
    const irParaCheckout = async ()=>{
        const carrinho = produtos.filter((p)=>p.quantidade > 0);
        if (carrinho.length > 0) {
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            try {
                const promessasDeAtualizacao = carrinho.map((produto)=>atualizarItemNoCarrinho(produto, produto.quantidade));
                await Promise.all(promessasDeAtualizacao);
                console.log("Carrinho salvo na API, redirecionando...");
                window.location.href = "/checkout";
            } catch (error) {
                console.error("Erro ao salvar o carrinho na API:", error);
            // Opcional: Mostrar um alerta de erro (popup foi removido)
            // alert("Erro ao salvar o carrinho. Tente novamente.");
            }
        } else {
            localStorage.removeItem("carrinho");
            window.location.href = "/checkout";
        }
    };
    const atualizarItemNoCarrinho = async (produto, novaQuantidade)=>{
        const response = await fetch("/api/pedido", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: novaQuantidade,
                imagem: produto.imagem,
                unidade: "un"
            })
        });
        const carrinhoAtualizado = await response.json();
        console.log("Carrinho atualizado pela API:", carrinhoAtualizado);
    };
    // ------------------- FILTROS -----------------------
    const [busca, setBusca] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [categoriaSelecionada, setCategoriaSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Todos");
    const produtosFiltrados = produtos.filter((p)=>{
        const nomeCombina = p.nome.toLowerCase().includes(busca.toLowerCase());
        const categoriaCombina = categoriaSelecionada === "Todos" || p.tipo === categoriaSelecionada;
        return nomeCombina && categoriaCombina;
    });
    // ------------------- INTERFACE -----------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-green-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 container mx-auto p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center mb-4 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-green-800",
                                children: "Produtos"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar produto...",
                                        value: busca,
                                        onChange: (e)=>setBusca(e.target.value),
                                        className: "border border-green-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: categoriaSelecionada,
                                        onChange: (e)=>setCategoriaSelecionada(e.target.value),
                                        className: "border border-green-300 rounded-md px-2 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Todos",
                                                children: "Todos"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Fruta",
                                                children: "Frutas"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Verdura",
                                                children: "Verduras"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Legume",
                                                children: "Legumes"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "mb-6"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full",
                        children: produtosFiltrados.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex flex-col items-center border border-green-300 rounded-xl p-4 bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300",
                                children: [
                                    p.quantidade > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow",
                                        children: [
                                            p.quantidade,
                                            " no carrinho"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: p.imagem,
                                        alt: p.nome,
                                        className: "w-28 h-28 object-contain mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-green-800 text-sm mb-1",
                                        children: p.nome
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-800 font-bold text-base",
                                            children: [
                                                "R$ ",
                                                p.preco.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 w-full mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            // O valor agora é "" por padrão
                                            value: inputQuantidades[p.id] || "",
                                            // Adicionado placeholder para sugerir "_"
                                            placeholder: "__",
                                            onChange: (e)=>{
                                                const valor = e.target.value;
                                                // Permite apenas números inteiros positivos
                                                if (/^\d*$/.test(valor)) {
                                                    setInputQuantidades((prev)=>({
                                                            ...prev,
                                                            [p.id]: valor
                                                        }));
                                                }
                                            },
                                            // Estilo ajustado
                                            className: "w-16 text-center text-sm font-medium border border-gray-300 rounded-md py-1.5 focus:outline-none focus:ring-1 focus:ring-green-500 no-spinners"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        // Chama a nova função
                                        onClick: ()=>handleAdicionarAoCarrinho(p),
                                        className: "w-full bg-green-500 hover:bg-green-600 text-white py-2 !rounded-full text-sm font-medium transition",
                                        children: "Adicionar ao Carrinho 🛒"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-3 bg-white rounded shadow-sm flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: [
                                    "Total de itens no carrinho:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: produtos.reduce((a, b)=>a + b.quantidade, 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: irParaCheckout,
                                    className: "bg-orange-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded text-sm",
                                    children: "Ir para o Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            mostrarModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center bg-black/40 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-5 rounded-lg w-80 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-3 text-green-700",
                            children: "Novo Produto"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Nome",
                            value: novoNome,
                            onChange: (e)=>setNovoNome(e.target.value),
                            className: "border p-2 rounded-md w-full mb-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            placeholder: "Preço",
                            value: novoPreco,
                            onChange: (e)=>setNovoPreco(e.target.value),
                            className: "border p-2 rounded-md w-full mb-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "URL da imagem (opcional)",
                            value: novaImagem,
                            onChange: (e)=>setNovaImagem(e.target.value),
                            className: "border p-2 rounded-md w-full mb-2 text-sm"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: novoTipo,
                            onChange: (e)=>setNovoTipo(e.target.value),
                            className: "border p-2 rounded-md w-full mb-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Fruta",
                                    children: "Fruta"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Verdura",
                                    children: "Verdura"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "Legume",
                                    children: "Legume"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMostrarModal(false),
                                    className: "px-3 py-1 rounded bg-gray-200",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: adicionarProduto,
                                    className: "px-3 py-1 rounded bg-green-600 text-white",
                                    children: "Adicionar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                    lineNumber: 282,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/produtos/page.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(ProdutosPage, "qNJGel49N9dqHwR5RKCgm7nN9BU=");
_c = ProdutosPage;
var _c;
__turbopack_context__.k.register(_c, "ProdutosPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_PI_DSM-main_RAIZ%20CONECTA%2024-11-2025_src_app_produtos_page_tsx_f012aefd._.js.map