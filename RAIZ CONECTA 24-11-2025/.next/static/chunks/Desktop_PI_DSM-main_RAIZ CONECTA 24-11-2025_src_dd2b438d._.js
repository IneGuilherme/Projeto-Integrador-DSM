(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/styles/InputText.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "label": "InputText-module__McTQFW__label",
});
}),
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputText",
    ()=>InputText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$styles$2f$InputText$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/styles/InputText.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
;
;
;
function InputText(props) {
    const { label, inputName, placeholder, value, id, onChange, onBlur, error, touched, type = "text" } = props;
    // Só mostra erro se tiver mensagem de erro E o campo foi "tocado" (usuário clicou e saiu)
    const isInvalid = !!error && (touched !== undefined ? touched : true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                htmlFor: id,
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$styles$2f$InputText$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label, " font-medium text-gray-700 text-sm"),
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputText.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                id: id,
                type: type,
                name: inputName,
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                onBlur: onBlur,
                isInvalid: isInvalid,
                className: "shadow-sm border-gray-300 focus:border-green-500 focus:ring-green-500"
            }, void 0, false, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputText.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control.Feedback, {
                type: "invalid",
                className: "text-xs text-red-600 font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputText.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputText.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c = InputText;
var _c;
__turbopack_context__.k.register(_c, "InputText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputPassword",
    ()=>InputPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/react-bootstrap/esm/InputGroup.js [app-client] (ecmascript) <export default as InputGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$styles$2f$InputText$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/styles/InputText.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function InputPassword(props) {
    _s();
    const { label, inputName, placeholder, value, id, onChange, onBlur, error, touched } = props;
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isInvalid = !!error && (touched !== undefined ? touched : true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                htmlFor: id,
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$styles$2f$InputText$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label, " font-medium text-gray-700 text-sm"),
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputGroup$3e$__["InputGroup"], {
                hasValidation: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
                        id: id,
                        type: showPassword ? "text" : "password",
                        name: inputName,
                        placeholder: placeholder,
                        value: value,
                        onChange: onChange,
                        onBlur: onBlur,
                        isInvalid: isInvalid,
                        className: "shadow-sm border-r-0 border-gray-300 focus:border-green-500 focus:ring-green-500"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$InputGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputGroup$3e$__["InputGroup"].Text, {
                        onClick: ()=>setShowPassword(!showPassword),
                        className: "cursor-pointer bg-white border-l-0 border-gray-300 text-gray-500 hover:text-green-600 transition-colors",
                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
                            lineNumber: 50,
                            columnNumber: 27
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
                            lineNumber: 50,
                            columnNumber: 50
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control.Feedback, {
                        type: "invalid",
                        className: "text-xs text-red-600 font-medium",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(InputPassword, "daguiRHWMFkqPgCh/ppD7CF5VuQ=");
_c = InputPassword;
var _c;
__turbopack_context__.k.register(_c, "InputPassword");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/schemas/LoginSchema.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginSchema",
    ()=>loginSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("O usuário é obrigatório").max(20, "O usuário deve ter no máximo 20 caracteres"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("A senha é obrigatória").min(5, "A senha deve ter no mínimo 5 caracteres").max(20, "A senha deve ter no máximo 20 caracteres")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/schemas/RegisterSchema.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerSchema",
    ()=>registerSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Nome é obrigatório"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email("E-mail inválido").required("E-mail é obrigatório"),
    userType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Selecione um tipo"),
    cpfCnpj: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Documento é obrigatório"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Telefone é obrigatório"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Senha é obrigatória").min(5, "Senha deve ter no mínimo 5 caracteres"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().oneOf([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"]('password')
    ], "As senhas devem coincidir").required("Confirmação é obrigatória")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/react-bootstrap/esm/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/react-bootstrap/esm/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputPassword$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/components/InputPassword.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$schemas$2f$LoginSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/schemas/LoginSchema.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$schemas$2f$RegisterSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/schemas/RegisterSchema.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Login() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [cpfCnpjPlaceholder, setCpfCnpjPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("000.000.000-00");
    const [docLabel, setDocLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("CPF");
    // --- FORMIK LOGIN ---
    const formikLogin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"])({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$schemas$2f$LoginSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginSchema"],
        onSubmit: {
            "Login.useFormik[formikLogin]": (values)=>{
                const { username, password } = values;
                if (username === "mercadosecreto" && password === "segredo") {
                    router.push("/produtos");
                } else if (username === "produtorsecreto" && password === "segredo") {
                    router.push("/produtor");
                } else if (username === "admin" && password === "segredo") {
                    router.push("/admin");
                } else {
                    alert("Usuário ou senha incorretos.");
                }
            }
        }["Login.useFormik[formikLogin]"]
    });
    // --- FORMIK CADASTRO ---
    const formikRegister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"])({
        initialValues: {
            name: "",
            email: "",
            userType: "producer",
            cpfCnpj: "",
            phone: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$schemas$2f$RegisterSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSchema"],
        onSubmit: {
            "Login.useFormik[formikRegister]": (values)=>{
                alert("Cadastro de ".concat(values.name, " realizado com sucesso! (Simulação)"));
                console.log(values);
                setKey("login");
                formikRegister.resetForm();
            }
        }["Login.useFormik[formikRegister]"]
    });
    const handleUserTypeChange = (e)=>{
        formikRegister.handleChange(e);
        if (e.target.value === "market") {
            setDocLabel("CNPJ");
            setCpfCnpjPlaceholder("00.000.000/0000-00");
        } else {
            setDocLabel("CPF");
            setCpfCnpjPlaceholder("000.000.000-00");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex items-center justify-center p-4 py-12 bg-cover bg-center bg-no-repeat bg-fixed relative",
        style: {
            backgroundImage: "url('/imagemPage.jpg')"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 z-0"
            }, void 0, false, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-5xl bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/60 flex flex-col md:flex-row min-h-[650px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "absolute top-6 left-6 text-green-700 hover:text-green-900 transition-colors flex items-center gap-2 no-underline text-sm font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    " Voltar"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden text-center mb-6 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex p-3 bg-green-100 rounded-full text-green-600 mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-green-800",
                                        children: "Raiz Conecta"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
                                    id: "login-register-tabs",
                                    activeKey: key,
                                    onSelect: (k)=>k && setKey(k),
                                    className: "mb-6 border-b-0 justify-center custom-tabs gap-2",
                                    variant: "pills",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                            eventKey: "login",
                                            title: "Entrar",
                                            tabClassName: key === 'login' ? '!bg-green-600 !text-white shadow-md font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-fade-in mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-gray-800 mb-2",
                                                        children: "Bem-vindo de volta!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 mb-6 text-sm",
                                                        children: "Acesse sua conta para continuar."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: formikLogin.handleSubmit,
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                                                label: "Usuário",
                                                                inputName: "username",
                                                                id: "username",
                                                                placeholder: "Seu email ou usuário",
                                                                value: formikLogin.values.username,
                                                                onChange: formikLogin.handleChange,
                                                                onBlur: formikLogin.handleBlur,
                                                                error: formikLogin.errors.username,
                                                                touched: formikLogin.touched.username
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputPassword$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputPassword"], {
                                                                label: "Senha",
                                                                inputName: "password",
                                                                id: "password",
                                                                placeholder: "Sua senha",
                                                                value: formikLogin.values.password,
                                                                onChange: formikLogin.handleChange,
                                                                onBlur: formikLogin.handleBlur,
                                                                error: formikLogin.errors.password,
                                                                touched: formikLogin.touched.password
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                                type: "submit",
                                                                className: "w-full py-3 mt-4 fw-bold shadow-lg hover:scale-[1.02] transition-transform text-white",
                                                                style: {
                                                                    background: 'var(--color-secondary)',
                                                                    borderColor: 'var(--color-secondary)'
                                                                },
                                                                children: "ENTRAR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                                            eventKey: "cadastro",
                                            title: "Criar Conta",
                                            tabClassName: key === 'cadastro' ? '!bg-orange-500 !text-white shadow-md font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-fade-in mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-gray-800 mb-2",
                                                        children: "Junte-se a nós"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 mb-4 text-sm",
                                                        children: "Preencha os dados para começar a negociar."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: formikRegister.handleSubmit,
                                                        className: "flex flex-col gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                                                label: "Nome Completo / Razão Social",
                                                                inputName: "name",
                                                                id: "register-name",
                                                                placeholder: "Nome da empresa ou produtor",
                                                                value: formikRegister.values.name,
                                                                onChange: formikRegister.handleChange,
                                                                onBlur: formikRegister.handleBlur,
                                                                error: formikRegister.errors.name,
                                                                touched: formikRegister.touched.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                                                label: "E-mail Comercial",
                                                                inputName: "email",
                                                                id: "register-email",
                                                                type: "email",
                                                                placeholder: "email@exemplo.com",
                                                                value: formikRegister.values.email,
                                                                onChange: formikRegister.handleChange,
                                                                onBlur: formikRegister.handleBlur,
                                                                error: formikRegister.errors.email,
                                                                touched: formikRegister.touched.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
                                                                className: "mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
                                                                        className: "font-medium text-gray-700 text-sm",
                                                                        children: "Tipo de Usuário"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Select, {
                                                                        name: "userType",
                                                                        value: formikRegister.values.userType,
                                                                        onChange: handleUserTypeChange,
                                                                        onBlur: formikRegister.handleBlur,
                                                                        className: "shadow-sm border-gray-300 focus:border-green-500 focus:ring-green-500",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "producer",
                                                                                children: "Produtor Rural"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                                lineNumber: 180,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "market",
                                                                                children: "Mercado Local"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                                lineNumber: 181,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                                                        label: docLabel,
                                                                        inputName: "cpfCnpj",
                                                                        id: "doc",
                                                                        placeholder: cpfCnpjPlaceholder,
                                                                        value: formikRegister.values.cpfCnpj,
                                                                        onChange: formikRegister.handleChange,
                                                                        onBlur: formikRegister.handleBlur,
                                                                        error: formikRegister.errors.cpfCnpj,
                                                                        touched: formikRegister.touched.cpfCnpj
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                                                        label: "Telefone",
                                                                        inputName: "phone",
                                                                        id: "phone",
                                                                        placeholder: "(00) 00000-0000",
                                                                        value: formikRegister.values.phone,
                                                                        onChange: formikRegister.handleChange,
                                                                        onBlur: formikRegister.handleBlur,
                                                                        error: formikRegister.errors.phone,
                                                                        touched: formikRegister.touched.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputPassword$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputPassword"], {
                                                                        label: "Senha",
                                                                        inputName: "password",
                                                                        id: "reg-pass",
                                                                        placeholder: "******",
                                                                        value: formikRegister.values.password,
                                                                        onChange: formikRegister.handleChange,
                                                                        onBlur: formikRegister.handleBlur,
                                                                        error: formikRegister.errors.password,
                                                                        touched: formikRegister.touched.password
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$src$2f$components$2f$InputPassword$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputPassword"], {
                                                                        label: "Confirmar",
                                                                        inputName: "confirmPassword",
                                                                        id: "reg-confirm",
                                                                        placeholder: "******",
                                                                        value: formikRegister.values.confirmPassword,
                                                                        onChange: formikRegister.handleChange,
                                                                        onBlur: formikRegister.handleBlur,
                                                                        error: formikRegister.errors.confirmPassword,
                                                                        touched: formikRegister.touched.confirmPassword
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                                type: "submit",
                                                                className: "w-full py-3 mt-2 fw-bold text-white shadow-lg hover:scale-[1.02] transition-transform",
                                                                style: {
                                                                    background: 'var(--color-secondary)',
                                                                    borderColor: 'var(--color-secondary)'
                                                                },
                                                                children: "Finalizar Cadastro"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex w-1/2 bg-gradient-to-br from-green-50/80 to-green-100/80 items-center justify-center p-12 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex p-8 bg-white rounded-[3rem] shadow-xl mb-8 animate-float",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-48 h-48 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/logoRC.png",
                                                alt: "Logo Raiz Conecta",
                                                className: "w-full h-full object-contain",
                                                onError: (e)=>{
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement.classList.add('text-green-600');
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                                size: 96,
                                                className: "text-green-600 absolute -z-10 opacity-20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-green-900 mb-4 tracking-tight",
                                    children: "Raiz Conecta"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-800 text-lg max-w-md mx-auto leading-relaxed font-medium",
                                    children: "A ponte digital que faltava entre quem planta com amor e quem vende com qualidade."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/PI_DSM-main/RAIZ CONECTA 24-11-2025/src/app/login/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(Login, "1z2+5Rfx5tuLCk4e7Zav8EpbqjY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$PI_DSM$2d$main$2f$RAIZ__CONECTA__24$2d$11$2d$2025$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"]
    ];
});
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_PI_DSM-main_RAIZ%20CONECTA%2024-11-2025_src_dd2b438d._.js.map