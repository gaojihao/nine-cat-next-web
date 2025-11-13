(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/share/partner/Wechat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Wechat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Wechat() {
    var _window_navigator_userAgent_toLowerCase_match;
    const inWechat = "object" !== 'undefined' && ((_window_navigator_userAgent_toLowerCase_match = window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === null || _window_navigator_userAgent_toLowerCase_match === void 0 ? void 0 : _window_navigator_userAgent_toLowerCase_match.includes('micromessenger'));
    if (inWechat) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontSize: '16px',
                textAlign: 'center',
                marginTop: '30px',
                color: 'rgba(0, 0, 0, 0.4)'
            },
            children: [
                "点击右上方 ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: '#000000'
                    },
                    children: "..."
                }, void 0, false, {
                    fileName: "[project]/src/components/share/partner/Wechat.tsx",
                    lineNumber: 12,
                    columnNumber: 23
                }, this),
                " 选择在浏览器打开"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/share/partner/Wechat.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this);
    }
    return null;
}
_c = Wechat;
var _c;
__turbopack_context__.k.register(_c, "Wechat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_share_partner_Wechat_tsx_b6b9f099._.js.map