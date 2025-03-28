(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_0305a9._.js", {

"[project]/src/components/TencentAd.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const TencentAd = ({ appId, placementId, containerId, type = 'native', count = 1 })=>{
    _s();
    const initialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TencentAd.useEffect": ()=>{
            const initAd = {
                "TencentAd.useEffect.initAd": ()=>{
                    if (!initialized.current) {
                        initialized.current = true;
                        // 确保 TencentGDT 已经初始化
                        if ("TURBOPACK compile-time truthy", 1) {
                            window.TencentGDT = window.TencentGDT || [];
                        }
                        // 等待一小段时间确保脚本完全加载
                        setTimeout({
                            "TencentAd.useEffect.initAd": ()=>{
                                if (window.TencentGDT) {
                                    window.TencentGDT.push({
                                        app_id: appId,
                                        placement_id: placementId,
                                        type: type,
                                        count: count,
                                        onComplete: {
                                            "TencentAd.useEffect.initAd": function(res) {
                                                if (res && Array.isArray(res)) {
                                                    try {
                                                        window.TencentGDT.NATIVE.renderAd(res[0], containerId);
                                                    } catch (error) {
                                                        console.error('Failed to render ad:', error);
                                                    }
                                                } else {
                                                    setTimeout({
                                                        "TencentAd.useEffect.initAd": function() {
                                                            window.TencentGDT.NATIVE.loadAd(placementId);
                                                        }
                                                    }["TencentAd.useEffect.initAd"], 3000);
                                                }
                                            }
                                        }["TencentAd.useEffect.initAd"]
                                    });
                                }
                            }
                        }["TencentAd.useEffect.initAd"], 100);
                    }
                }
            }["TencentAd.useEffect.initAd"];
            // 如果脚本已经加载完成，直接初始化
            if (window.TencentGDT) {
                initAd();
            }
            // 监听脚本加载完成事件
            const script = document.querySelector('#tencent-gdt-script');
            if (script) {
                script.addEventListener('load', initAd);
            }
            return ({
                "TencentAd.useEffect": ()=>{
                    if (script) {
                        script.removeEventListener('load', initAd);
                    }
                }
            })["TencentAd.useEffect"];
        }
    }["TencentAd.useEffect"], [
        appId,
        placementId,
        containerId,
        type,
        count
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "tencent-gdt-script",
                src: "//qzs.qq.com/qzone/biz/res/i.js",
                strategy: "beforeInteractive",
                onLoad: ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.TencentGDT = window.TencentGDT || [];
                    }
                },
                onError: (e)=>{
                    console.error('Failed to load TencentGDT script:', e);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TencentAd.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: containerId
            }, void 0, false, {
                fileName: "[project]/src/components/TencentAd.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(TencentAd, "tIxOXwwGx+mBqUqBhCFG9FDZ7Os=");
_c = TencentAd;
const __TURBOPACK__default__export__ = TencentAd;
var _c;
__turbopack_refresh__.register(_c, "TencentAd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/pk/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_0305a9._.js.map