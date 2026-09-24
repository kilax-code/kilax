(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/NetflixCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetflixCard",
    ()=>NetflixCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const NetflixCard = ({ content, type, isNonTranslated = false })=>{
    const getHref = ()=>{
        if (isNonTranslated) {
            return `/non-translated/${type === "movie" ? "movies" : "series"}/${content.id}`;
        }
        return `/${type === "movie" ? "movies" : "series"}/${content.id}`;
    };
    // Extract VJ Name comprehensively across all possible object shapes
    const getVjName = ()=>{
        if (!content) return null;
        if ('vjs' in content && content.vjs) {
            if (typeof content.vjs === 'string' && content.vjs) return content.vjs;
            if (typeof content.vjs.name === 'string' && content.vjs.name) return content.vjs.name;
        }
        if ('vj_name' in content && typeof content.vj_name === 'string' && content.vj_name) {
            return content.vj_name;
        }
        if ('vj' in content && content.vj) {
            if (typeof content.vj === 'string' && content.vj) return content.vj;
            if (typeof content.vj.name === 'string' && content.vj.name) return content.vj.name;
        }
        if ('translator' in content && typeof content.translator === 'string' && content.translator) {
            return content.translator;
        }
        return null;
    };
    const vjName = getVjName();
    // Get the best available image URL with type safety
    const getImageUrl = ()=>{
        return content.thumbnail_url || content.cover_image_url || ('poster_url' in content && content.poster_url ? content.poster_url : '') || ('poster_path' in content && content.poster_path ? content.poster_path : '') || ('backdrop_path' in content && content.backdrop_path ? content.backdrop_path : '') || `https://via.placeholder.com/240x360/1f2937/f97316?text=${encodeURIComponent(content.title || '')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: getHref(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer transition-transform duration-200 hover:scale-105",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-[2/3] relative rounded-lg overflow-hidden bg-gray-800 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: getImageUrl(),
                                alt: content.title || `Poster for ${type}`,
                                fill: true,
                                className: "object-cover transition-opacity duration-300",
                                unoptimized: true,
                                onError: (e)=>{
                                    const target = e.target;
                                    target.src = `https://via.placeholder.com/240x360/1f2937/f97316?text=${encodeURIComponent(content.title || '')}`;
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${type === "movie" ? "bg-[#FF7F50]" : "bg-[#1ABC9C]"}`,
                                children: type === "movie" ? "Movie" : "Series"
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            vjName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-1 right-1 bg-black/85 backdrop-blur-md border border-orange-500/60 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(249,115,22,0.35)] flex items-center z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-400 font-bold text-[10px] sm:text-[11px] truncate max-w-[85px] md:max-w-[110px] tracking-wide",
                                    children: vjName
                                }, void 0, false, {
                                    fileName: "[project]/components/NetflixCard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-gray-300 line-clamp-2 leading-tight",
                                    children: (typeof content.overview === 'string' && content.overview ? content.overview.slice(0, 40) : content.description?.slice(0, 40)) + '...' || 'Tap to view details'
                                }, void 0, false, {
                                    fileName: "[project]/components/NetflixCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NetflixCard.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/NetflixCard.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/NetflixCard.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium text-white text-xs truncate leading-tight",
                        children: content.title
                    }, void 0, false, {
                        fileName: "[project]/components/NetflixCard.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 text-[10px] text-gray-400 mt-0.5",
                        children: [
                            content.release_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: new Date(content.release_date).getFullYear()
                            }, void 0, false, {
                                fileName: "[project]/components/NetflixCard.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            'genre_ids' in content && Array.isArray(content.genre_ids) && content.genre_ids.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/NetflixCard.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-400 font-medium capitalize truncate max-w-[90px]",
                                        children: content.genre_ids.slice(0, 2).join(', ')
                                    }, void 0, false, {
                                        fileName: "[project]/components/NetflixCard.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NetflixCard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/NetflixCard.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/NetflixCard.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NetflixCard;
var _c;
__turbopack_context__.k.register(_c, "NetflixCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeartbeatLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ECGWaveform",
    ()=>ECGWaveform,
    "HeartbeatInlineLoader",
    ()=>HeartbeatInlineLoader,
    "HeartbeatPageLoader",
    ()=>HeartbeatPageLoader,
    "HeartbeatRowSkeleton",
    ()=>HeartbeatRowSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ECGWaveform({ className = "h-8 w-48 text-orange-500", glow = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden flex items-center justify-center ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 400 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: `w-full h-full ${glow ? "filter drop-shadow-[0_0_8px_rgba(249,115,22,0.85)]" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0,25 L60,25 L75,21 L85,25 L100,25 L110,6 L120,44 L130,17 L140,29 L150,25 L210,25 L225,21 L235,25 L250,25 L260,6 L270,44 L280,17 L290,29 L300,25 L360,25 L400,25",
                    stroke: "currentColor",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "animate-ecg-draw"
                }, void 0, false, {
                    fileName: "[project]/components/HeartbeatLoader.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeartbeatLoader.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-20 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent animate-ecg-scanline pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/HeartbeatLoader.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeartbeatLoader.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ECGWaveform;
function HeartbeatInlineLoader({ text = "Loading...", className = "py-8" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center justify-center gap-2.5 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ECGWaveform, {
                    className: "h-7 w-44 sm:w-56 text-orange-500",
                    glow: true
                }, void 0, false, {
                    fileName: "[project]/components/HeartbeatLoader.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeartbeatLoader.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs sm:text-sm font-medium text-orange-400/90 tracking-wide font-mono animate-pulse",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/HeartbeatLoader.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeartbeatLoader.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = HeartbeatInlineLoader;
function HeartbeatRowSkeleton({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl md:text-2xl font-bold text-white tracking-tight",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/HeartbeatLoader.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeartbeatLoader.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center w-full py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartbeatInlineLoader, {
                    text: `Loading ${title ? title.toLowerCase() : "content"}...`,
                    className: "py-4"
                }, void 0, false, {
                    fileName: "[project]/components/HeartbeatLoader.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeartbeatLoader.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeartbeatLoader.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = HeartbeatRowSkeleton;
function HeartbeatPageLoader({ text = "Loading Kilax..." }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black flex flex-col items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartbeatInlineLoader, {
            text: text,
            className: "py-12"
        }, void 0, false, {
            fileName: "[project]/components/HeartbeatLoader.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HeartbeatLoader.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c3 = HeartbeatPageLoader;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ECGWaveform");
__turbopack_context__.k.register(_c1, "HeartbeatInlineLoader");
__turbopack_context__.k.register(_c2, "HeartbeatRowSkeleton");
__turbopack_context__.k.register(_c3, "HeartbeatPageLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/reelplexi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReelplexiAppNotifications",
    ()=>getReelplexiAppNotifications,
    "getReelplexiEpisodeDownloadUrl",
    ()=>getReelplexiEpisodeDownloadUrl,
    "getReelplexiEpisodeStream",
    ()=>getReelplexiEpisodeStream,
    "getReelplexiEpisodes",
    ()=>getReelplexiEpisodes,
    "getReelplexiGenres",
    ()=>getReelplexiGenres,
    "getReelplexiMovieById",
    ()=>getReelplexiMovieById,
    "getReelplexiMovieDownloadUrl",
    ()=>getReelplexiMovieDownloadUrl,
    "getReelplexiMovieStream",
    ()=>getReelplexiMovieStream,
    "getReelplexiMovieTrailers",
    ()=>getReelplexiMovieTrailers,
    "getReelplexiMovies",
    ()=>getReelplexiMovies,
    "getReelplexiMoviesByGenre",
    ()=>getReelplexiMoviesByGenre,
    "getReelplexiRelatedMoviesByGenre",
    ()=>getReelplexiRelatedMoviesByGenre,
    "getReelplexiRelatedSeriesByGenre",
    ()=>getReelplexiRelatedSeriesByGenre,
    "getReelplexiSeries",
    ()=>getReelplexiSeries,
    "getReelplexiSeriesByGenre",
    ()=>getReelplexiSeriesByGenre,
    "getReelplexiSeriesById",
    ()=>getReelplexiSeriesById,
    "getReelplexiSeriesTrailers",
    ()=>getReelplexiSeriesTrailers,
    "getReelplexiTrendingAll",
    ()=>getReelplexiTrendingAll,
    "getReelplexiTrendingMovies",
    ()=>getReelplexiTrendingMovies,
    "getReelplexiTrendingSeries",
    ()=>getReelplexiTrendingSeries,
    "getReelplexiVJs",
    ()=>getReelplexiVJs,
    "normalizeReelplexiEpisode",
    ()=>normalizeReelplexiEpisode,
    "normalizeReelplexiMovie",
    ()=>normalizeReelplexiMovie,
    "normalizeReelplexiSeries",
    ()=>normalizeReelplexiSeries,
    "searchReelplexiAll",
    ()=>searchReelplexiAll,
    "searchReelplexiMovies",
    ()=>searchReelplexiMovies,
    "searchReelplexiSeries",
    ()=>searchReelplexiSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const REELPLEXI_API_KEY = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REELPLEXI_API_KEY || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REELPLEXI_API_KEY || '').replace(/[^\x20-\x7E]/g, '').trim();
const isServer = ("TURBOPACK compile-time value", "object") === 'undefined';
const REELPLEXI_BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '/api/reelplexi';
class ReelplexiError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
        this.name = 'ReelplexiError';
    }
}
async function fetchReelplexi(endpoint, params = {}) {
    let origin = '';
    if ("TURBOPACK compile-time truthy", 1) {
        origin = window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    const urlString = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${origin}${REELPLEXI_BASE_URL}${endpoint}`;
    let queryString = '';
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
        queryString = '?' + paramKeys.map((k)=>`${encodeURIComponent(k)}=${encodeURIComponent(String(params[k]))}`).join('&');
    }
    const fullUrl = `${urlString}${queryString}`;
    const headers = {
        'Content-Type': 'application/json'
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let res;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // Client-side: use XMLHttpRequest to bypass Next.js buggy fetch polyfills on old TVs
        res = await new Promise((resolve, reject)=>{
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', fullUrl, true);
                for(const k in headers){
                    if (Object.prototype.hasOwnProperty.call(headers, k)) {
                        xhr.setRequestHeader(k, headers[k]);
                    }
                }
                xhr.onload = function() {
                    resolve({
                        ok: xhr.status >= 200 && xhr.status < 300,
                        status: xhr.status,
                        text: async ()=>xhr.responseText,
                        json: async ()=>{
                            try {
                                return JSON.parse(xhr.responseText);
                            } catch (e) {
                                return {};
                            }
                        }
                    });
                };
                xhr.onerror = function() {
                    reject(new Error('Network request failed'));
                };
                xhr.send();
            } catch (e) {
                reject(e);
            }
        });
    }
    if (!res.ok) {
        let message = 'Unknown API error';
        const text = await res.text();
        try {
            const body = JSON.parse(text);
            if (body.detail) {
                const detailMsg = typeof body.detail === 'string' ? body.detail : body.detail.error?.message || JSON.stringify(body.detail);
                throw new ReelplexiError(res.status, `Reelplexi API error (HTTP ${res.status}): ${detailMsg}`);
            }
            if (body.error) {
                message = typeof body.error === 'string' ? body.error : body.error.message || JSON.stringify(body.error);
            }
        } catch (e) {
            if (e instanceof ReelplexiError) throw e;
            throw new ReelplexiError(res.status, `HTTP error ${res.status}: ${text.substring(0, 150)}`);
        }
        throw new ReelplexiError(res.status, `Reelplexi API error: ${message}`);
    }
    const body = await res.json();
    return body;
}
// Helpers
const asString = (val)=>val ? String(val).trim() : undefined;
const yearToDate = (year)=>year ? `${year}-01-01` : undefined;
function extractVjName(raw) {
    const direct = asString(raw.vj_name) || asString(raw.vj) || asString(raw.translator);
    if (direct) return direct;
    const versions = raw.available_vj_versions;
    if (Array.isArray(versions) && versions.length > 0 && typeof versions[0] === 'object') {
        return asString(versions[0].vj_name) || asString(versions[0].name) || null;
    }
    return null;
}
function normalizeGenres(genres) {
    if (!Array.isArray(genres)) return [];
    return genres.map((g)=>asString(g)).filter(Boolean);
}
function normalizeReelplexiMovie(raw) {
    if (!raw) return null;
    const genres = normalizeGenres(raw.genres);
    const vjName = extractVjName(raw);
    const posterUrl = asString(raw.poster_url) || asString(raw.thumbnail_url) || '';
    const backdropUrl = asString(raw.backdrop_url) || posterUrl;
    return {
        id: asString(raw.id) || '',
        title: asString(raw.title) || asString(raw.name) || 'Untitled',
        description: asString(raw.description) || asString(raw.overview) || asString(raw.plot) || asString(raw.synopsis) || asString(raw.storyline) || '',
        release_date: asString(raw.release_date) || asString(raw.released_at) || yearToDate(raw.year) || new Date().toISOString(),
        thumbnail_url: posterUrl,
        cover_image_url: backdropUrl,
        trailer_url: asString(raw.trailer_url),
        genre_ids: genres.map((g)=>g.toLowerCase()),
        duration: raw.duration_mins || raw.runtime || 120,
        published: true,
        premium: raw.premium !== false,
        recommend: raw.recommend === true,
        popular: raw.popular === true,
        latest: raw.latest === true,
        vj_id: vjName ? vjName.toLowerCase() : undefined,
        video_url: asString(raw.stream_url) || asString(raw.proxy_url),
        embed_url: asString(raw.embed_url) || `https://embed.reelplexi.com/movie/${raw.id}?key=${REELPLEXI_API_KEY}`,
        tmdb_id: raw.tmdb_id || undefined,
        vjs: vjName ? {
            id: vjName.toLowerCase(),
            name: vjName
        } : null,
        type: 'movie'
    };
}
function normalizeReelplexiSeries(raw) {
    if (!raw) return null;
    const genres = normalizeGenres(raw.genres);
    const vjName = extractVjName(raw);
    const posterUrl = asString(raw.poster_url) || asString(raw.thumbnail_url) || '';
    const backdropUrl = asString(raw.backdrop_url) || posterUrl;
    const seriesId = asString(raw.id) || '';
    // Preserve embedded seasons and their episodes — the dedicated episodes
    // endpoint is unreliable; this embedded data is the source of truth.
    const rawSeasons = Array.isArray(raw.seasons) ? raw.seasons : [];
    const seasons = rawSeasons.map((s)=>({
            season_number: s.season_number || 1,
            name: s.name || `Season ${s.season_number || 1}`,
            overview: s.overview || '',
            episode_count: s.episode_count || (Array.isArray(s.episodes) ? s.episodes.length : 0),
            poster_path: s.poster_path || s.poster_url || '',
            episodes: Array.isArray(s.episodes) ? s.episodes.map((ep)=>normalizeReelplexiEpisode(seriesId, s.season_number || 1, ep)) : []
        }));
    return {
        id: seriesId,
        title: asString(raw.title) || asString(raw.name) || 'Untitled',
        description: asString(raw.description) || asString(raw.overview) || asString(raw.plot) || asString(raw.synopsis) || asString(raw.storyline) || '',
        release_date: asString(raw.first_air_date) || yearToDate(raw.year) || asString(raw.release_date) || new Date().toISOString(),
        thumbnail_url: posterUrl,
        cover_image_url: backdropUrl,
        trailer_url: asString(raw.trailer_url),
        genre_ids: genres.map((g)=>g.toLowerCase()),
        published: true,
        premium: raw.premium !== false,
        created_at: raw.created_at || new Date().toISOString(),
        vj_id: vjName ? vjName.toLowerCase() : undefined,
        tmdb_id: raw.tmdb_id || undefined,
        vjs: vjName ? {
            id: vjName.toLowerCase(),
            name: vjName
        } : null,
        type: 'series',
        season_count: raw.no_of_seasons || seasons.length || 0,
        seasons
    };
}
function normalizeReelplexiEpisode(seriesId, seasonNumber, raw) {
    if (!raw) return null;
    const episodeNumber = parseInt(raw.episode_number || 0, 10);
    // Support both dedicated endpoint format (poster_url/thumbnail_url) and embedded format (still_path)
    const posterUrl = asString(raw.poster_url) || asString(raw.thumbnail_url) || asString(raw.still_path) || '';
    const backdropUrl = asString(raw.backdrop_url) || posterUrl;
    const syntheticId = `${seriesId}:season:${seasonNumber}:episode:${episodeNumber}`;
    return {
        id: syntheticId,
        season_id: `${seriesId}:season:${seasonNumber}`,
        title: asString(raw.title) || asString(raw.name) || `Episode ${episodeNumber}`,
        episode_number: episodeNumber,
        description: asString(raw.description) || asString(raw.overview) || '',
        // Support both dedicated endpoint (stream_url/proxy_url) and embedded format (video_url)
        video_url: asString(raw.stream_url) || asString(raw.proxy_url) || asString(raw.video_url),
        embed_url: asString(raw.embed_url) || `https://embed.reelplexi.com/tv/${seriesId}/${seasonNumber}/${episodeNumber}?key=${REELPLEXI_API_KEY}`,
        published: true,
        premium: raw.premium !== false,
        duration: raw.duration_mins || raw.runtime || 45,
        thumbnail_url: posterUrl,
        cover_image_url: backdropUrl,
        created_at: raw.created_at || new Date().toISOString()
    };
}
async function getReelplexiMovies(page = 1, perPage = 50, genre) {
    const params = {
        page,
        per_page: perPage
    };
    if (genre) params.genre = genre;
    const res = await fetchReelplexi('/v1/movies', params);
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function searchReelplexiMovies(query, page = 1, perPage = 50, vj, genre, year) {
    const params = {
        page,
        per_page: perPage
    };
    // Normalize VJ name to lowercase so ilike on the API side matches all casing variants
    const vjNorm = vj ? vj.toLowerCase() : undefined;
    if (genre) params.genre = genre;
    if (year) params.year = year;
    // /v1/movies/search requires q with min_length=1.
    // When there is no search text, use the list endpoint which accepts vj as an optional filter.
    if (!query.trim()) {
        if (vjNorm) params.vj = vjNorm;
        const res = await fetchReelplexi('/v1/movies', params);
        return (res.data || []).map(normalizeReelplexiMovie);
    }
    params.q = query.trim();
    if (vjNorm) params.vj = vjNorm;
    const res = await fetchReelplexi('/v1/movies/search', params);
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function searchReelplexiAll(query, page = 1, perPage = 50, vj, genre) {
    const vjNorm = vj ? vj.toLowerCase() : undefined;
    // /v1/search requires q with min_length=1.
    // When there is no search text, fetch movies and series list endpoints separately.
    if (!query.trim()) {
        const [moviesRes, seriesRes] = await Promise.all([
            searchReelplexiMovies('', page, Math.ceil(perPage / 2), vjNorm, genre),
            searchReelplexiSeries('', page, Math.ceil(perPage / 2), vjNorm, genre)
        ]);
        return [
            ...moviesRes.map((m)=>({
                    ...m,
                    type: 'movie'
                })),
            ...seriesRes.map((s)=>({
                    ...s,
                    type: 'series'
                }))
        ];
    }
    const params = {
        page,
        per_page: perPage,
        q: query.trim()
    };
    if (vjNorm) params.vj = vjNorm;
    if (genre) params.genre = genre;
    const res = await fetchReelplexi('/v1/search', params);
    // The search endpoint returns mixed content (movies and series)
    return (res.data || []).map((item)=>{
        if (item.type === 'movie' || item.type === undefined) {
            return {
                ...normalizeReelplexiMovie(item),
                type: 'movie'
            };
        } else {
            return {
                ...normalizeReelplexiSeries(item),
                type: 'series'
            };
        }
    });
}
async function getReelplexiVJs(page = 1, perPage = 100) {
    const params = {
        page,
        per_page: perPage
    };
    const res = await fetchReelplexi('/v1/vj', params);
    return res.data || [];
}
async function getReelplexiMovieById(id) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}`);
        return normalizeReelplexiMovie(res.data || res);
    } catch (e) {
        if (e instanceof ReelplexiError && e.status === 404) return null;
        throw e;
    }
}
async function getReelplexiSeries(page = 1, perPage = 50, genre) {
    const params = {
        page,
        per_page: perPage
    };
    if (genre) params.genre = genre;
    const res = await fetchReelplexi('/v1/series', params);
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function searchReelplexiSeries(query, page = 1, perPage = 50, vj, genre, year) {
    const params = {
        page,
        per_page: perPage
    };
    const vjNorm = vj ? vj.toLowerCase() : undefined;
    if (genre) params.genre = genre;
    if (year) params.year = year;
    // /v1/series/search requires q with min_length=1.
    // When there is no search text, use the list endpoint which accepts vj as an optional filter.
    if (!query.trim()) {
        if (vjNorm) params.vj = vjNorm;
        const res = await fetchReelplexi('/v1/series', params);
        return (res.data || []).map(normalizeReelplexiSeries);
    }
    params.q = query.trim();
    if (vjNorm) params.vj = vjNorm;
    const res = await fetchReelplexi('/v1/series/search', params);
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function getReelplexiSeriesById(id) {
    try {
        const res = await fetchReelplexi(`/v1/series/${id}`);
        return normalizeReelplexiSeries(res.data || res);
    } catch (e) {
        if (e instanceof ReelplexiError && e.status === 404) return null;
        throw e;
    }
}
async function getReelplexiEpisodes(seriesId, season) {
    // Try the dedicated endpoint first
    try {
        const res = await fetchReelplexi(`/v1/series/${seriesId}/seasons/${season}/episodes`);
        const episodes = (res.data || []).map((ep)=>normalizeReelplexiEpisode(seriesId, season, ep));
        if (episodes.length > 0) return episodes;
    // Empty result — fall through to embedded extraction below
    } catch (e) {
        if (!(e instanceof ReelplexiError && e.status === 404)) throw e;
    // 404 — fall through to embedded extraction below
    }
    // Fallback: the series endpoint already embeds seasons[].episodes[].
    // Extract from there instead of returning empty.
    try {
        const seriesRes = await fetchReelplexi(`/v1/series/${seriesId}`);
        const seriesRaw = seriesRes.data || seriesRes;
        const rawSeasons = Array.isArray(seriesRaw.seasons) ? seriesRaw.seasons : [];
        const target = rawSeasons.find((s)=>(s.season_number || 1) === season);
        if (target && Array.isArray(target.episodes) && target.episodes.length > 0) {
            return target.episodes.map((ep)=>normalizeReelplexiEpisode(seriesId, season, ep));
        }
    } catch  {
    // Ignore — return empty below
    }
    return [];
}
async function getReelplexiGenres() {
    const res = await fetchReelplexi('/v1/genres');
    if (!Array.isArray(res.data)) return [];
    return res.data.map((g)=>{
        const name = asString(g) || '';
        return {
            id: name.toLowerCase(),
            name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        };
    });
}
async function getReelplexiTrendingAll(page = 1, perPage = 20, timeWindow = 'week') {
    const res = await fetchReelplexi(`/v1/trending/all`, {
        page,
        per_page: perPage,
        time_window: timeWindow
    });
    return (res.data || []).map((item)=>{
        if (item.type === 'series' || item.first_air_date != null) {
            return normalizeReelplexiSeries(item);
        }
        return normalizeReelplexiMovie(item);
    });
}
async function getReelplexiTrendingMovies(page = 1, perPage = 20) {
    const res = await fetchReelplexi('/v1/trending/movies', {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function getReelplexiTrendingSeries(page = 1, perPage = 20) {
    const res = await fetchReelplexi('/v1/trending/series', {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function getReelplexiMoviesByGenre(genre, page = 1, perPage = 20) {
    const res = await fetchReelplexi(`/v1/genres/${genre.toLowerCase()}/movies`, {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiMovie);
}
async function getReelplexiSeriesByGenre(genre, page = 1, perPage = 20) {
    const res = await fetchReelplexi(`/v1/genres/${genre.toLowerCase()}/series`, {
        page,
        per_page: perPage
    });
    return (res.data || []).map(normalizeReelplexiSeries);
}
async function getReelplexiRelatedMoviesByGenre(id, page = 1, perPage = 20) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}/related/genre`, {
            page,
            per_page: perPage
        });
        return (res.data || []).map(normalizeReelplexiMovie);
    } catch  {
        return [];
    }
}
async function getReelplexiRelatedSeriesByGenre(id, page = 1, perPage = 20) {
    try {
        const res = await fetchReelplexi(`/v1/series/${id}/related/genre`, {
            page,
            per_page: perPage
        });
        return (res.data || []).map(normalizeReelplexiSeries);
    } catch  {
        return [];
    }
}
async function getReelplexiMovieTrailers(id) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}/trailers`);
        let trailers = res.trailers;
        if (trailers && !Array.isArray(trailers) && Array.isArray(trailers.trailers)) {
            trailers = trailers.trailers;
        }
        return Array.isArray(trailers) ? trailers : [];
    } catch  {
        return [];
    }
}
async function getReelplexiSeriesTrailers(id) {
    try {
        const res = await fetchReelplexi(`/v1/series/${id}/trailers`);
        let trailers = res.trailers;
        if (trailers && !Array.isArray(trailers) && Array.isArray(trailers.trailers)) {
            trailers = trailers.trailers;
        }
        return Array.isArray(trailers) ? trailers : [];
    } catch  {
        return [];
    }
}
async function getReelplexiMovieStream(id) {
    try {
        const res = await fetchReelplexi(`/v1/movies/${id}/stream`);
        const streamData = res.data || res;
        const url = streamData.stream_url || streamData.video_url || streamData.proxy_url || streamData.url;
        return {
            stream_url: url,
            proxy_url: streamData.proxy_url || url,
            video_url: url
        };
    } catch  {
        return null;
    }
}
async function getReelplexiEpisodeStream(seriesId, season, episode) {
    try {
        const res = await fetchReelplexi(`/v1/series/${seriesId}/seasons/${season}/episodes/${episode}/stream`);
        const streamData = res.data || res;
        const url = streamData.stream_url || streamData.video_url || streamData.proxy_url || streamData.url;
        return {
            stream_url: url,
            proxy_url: streamData.proxy_url || url,
            video_url: url
        };
    } catch  {
        return null;
    }
}
async function getReelplexiMovieDownloadUrl(id) {
    try {
        const res = await fetchReelplexi(`/v1/download/movie/${id}`);
        return res.download_url;
    } catch (e) {
        console.error('Error fetching movie download URL:', e);
        throw e;
    }
}
async function getReelplexiEpisodeDownloadUrl(seriesId, season, episode) {
    try {
        const res = await fetchReelplexi(`/v1/download/tv/${seriesId}/${season}/${episode}`);
        return res.download_url;
    } catch (e) {
        console.error('Error fetching episode download URL:', e);
        throw e;
    }
}
async function getReelplexiAppNotifications() {
    try {
        const res = await fetchReelplexi('/v1/account/app-notifications');
        return res.notifications || [];
    } catch (e) {
        console.error('Error fetching app notifications:', e);
        return [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEpisodeDownload",
    ()=>getEpisodeDownload,
    "getEpisodeStream",
    ()=>getEpisodeStream,
    "getEpisodes",
    ()=>getEpisodes,
    "getFeaturedMovie",
    ()=>getFeaturedMovie,
    "getGenreRowsForHome",
    ()=>getGenreRowsForHome,
    "getGenres",
    ()=>getGenres,
    "getKilaxExclusiveContent",
    ()=>getKilaxExclusiveContent,
    "getKilaxExclusiveMovies",
    ()=>getKilaxExclusiveMovies,
    "getKilaxExclusiveSeries",
    ()=>getKilaxExclusiveSeries,
    "getMovieById",
    ()=>getMovieById,
    "getMovieDownload",
    ()=>getMovieDownload,
    "getMovieStream",
    ()=>getMovieStream,
    "getMovieTrailers",
    ()=>getMovieTrailers,
    "getMovies",
    ()=>getMovies,
    "getMoviesByCategory",
    ()=>getMoviesByCategory,
    "getPopularMovies",
    ()=>getPopularMovies,
    "getRelatedMoviesByGenre",
    ()=>getRelatedMoviesByGenre,
    "getRelatedSeriesByGenre",
    ()=>getRelatedSeriesByGenre,
    "getSeries",
    ()=>getSeries,
    "getSeriesByCategory",
    ()=>getSeriesByCategory,
    "getSeriesById",
    ()=>getSeriesById,
    "getSeriesTrailers",
    ()=>getSeriesTrailers,
    "getTranslatedContent",
    ()=>getTranslatedContent,
    "getTranslatedMovies",
    ()=>getTranslatedMovies,
    "getTranslatedSeries",
    ()=>getTranslatedSeries,
    "getVJContent",
    ()=>getVJContent,
    "getVJMovies",
    ()=>getVJMovies,
    "getVJSeries",
    ()=>getVJSeries,
    "getVJs",
    ()=>getVJs,
    "searchAllContent",
    ()=>searchAllContent,
    "searchMovies",
    ()=>searchMovies,
    "searchSeries",
    ()=>searchSeries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reelplexi.ts [app-client] (ecmascript)");
;
async function getMovies(limit = 20, page = 1, genre) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovies"](page, limit, genre);
        return movies;
    } catch (error) {
        console.error('Error fetching movies from Reelplexi:', error);
        return [];
    }
}
async function getMovieById(id) {
    try {
        const movie = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieById"](id);
        return movie;
    } catch (error) {
        console.error(`Error fetching movie ${id}:`, error);
        return null;
    }
}
async function getMovieTrailers(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieTrailers"](id);
    } catch (error) {
        console.error(`Error fetching movie trailers ${id}:`, error);
        return [];
    }
}
async function getMovieStream(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieStream"](id);
    } catch (error) {
        console.error(`Error fetching movie stream ${id}:`, error);
        return null;
    }
}
async function getFeaturedMovie() {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingMovies"](1, 1);
        return movies[0] || null;
    } catch (error) {
        console.error('Error fetching featured movie from Reelplexi:', error);
        return null;
    }
}
async function getPopularMovies(limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingMovies"](1, limit);
        return movies;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
}
async function getSeries(limit = 24, page = 1, genre) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeries"](page, limit, genre);
        return series;
    } catch (error) {
        console.error('Error fetching series from Reelplexi:', error);
        return [];
    }
}
async function getSeriesById(id) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesById"](id);
        return series;
    } catch (error) {
        console.error(`Error fetching series ${id}:`, error);
        return null;
    }
}
async function getSeriesTrailers(id) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesTrailers"](id);
    } catch (error) {
        console.error(`Error fetching series trailers ${id}:`, error);
        return [];
    }
}
async function getEpisodes(seriesId, season) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiEpisodes"](seriesId, season);
    } catch (error) {
        console.error(`Error fetching episodes for series ${seriesId} season ${season}:`, error);
        return [];
    }
}
async function getEpisodeStream(seriesId, season, episode) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiEpisodeStream"](seriesId, season, episode);
    } catch (error) {
        console.error(`Error fetching stream for series ${seriesId} season ${season} episode ${episode}:`, error);
        return null;
    }
}
async function getTranslatedMovies(limit = 6) {
    try {
        // Fetch a larger batch to filter
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovies"](1, 50);
        return movies.filter((m)=>!m.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching translated movies:', error);
        return [];
    }
}
async function getTranslatedSeries(limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeries"](1, 50);
        return series.filter((s)=>!s.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching translated series:', error);
        return [];
    }
}
async function getTranslatedContent(limit = 12) {
    const movies = await getTranslatedMovies(limit);
    const series = await getTranslatedSeries(limit);
    const combined = [];
    const maxLength = Math.max(movies.length, series.length);
    for(let i = 0; i < maxLength; i++){
        if (movies[i]) combined.push(movies[i]);
        if (series[i]) combined.push(series[i]);
    }
    return combined.slice(0, limit);
}
async function getVJMovies(limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovies"](1, 50);
        return movies.filter((m)=>!!m.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching VJ movies:', error);
        return [];
    }
}
async function getVJSeries(limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeries"](1, 50);
        return series.filter((s)=>!!s.vj_id).slice(0, limit);
    } catch (error) {
        console.error('Error fetching VJ series:', error);
        return [];
    }
}
async function getVJContent(limit = 12) {
    const movies = await getVJMovies(limit);
    const series = await getVJSeries(limit);
    const combined = [];
    const maxLength = Math.max(movies.length, series.length);
    for(let i = 0; i < maxLength; i++){
        if (movies[i]) combined.push(movies[i]);
        if (series[i]) combined.push(series[i]);
    }
    return combined.slice(0, limit);
}
async function getGenres() {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiGenres"]();
    } catch (error) {
        console.error('Error fetching genres from Reelplexi:', error);
        return [];
    }
}
async function getGenreRowsForHome(limit = 12) {
    try {
        const genres = await getGenres();
        let genreRows = [];
        if (genres && genres.length > 0) {
            // Take top 3 genres
            const topGenres = genres.slice(0, 3);
            const fetchedRows = await Promise.all(topGenres.map(async (genre)=>{
                try {
                    const [movies, series] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMoviesByGenre"](genre.id, 1, limit),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesByGenre"](genre.id, 1, limit)
                    ]);
                    return {
                        name: genre.name,
                        movies: movies || [],
                        series: series || []
                    };
                } catch (error) {
                    console.error(`Error fetching content for genre ${genre.name}:`, error);
                    return {
                        name: genre.name,
                        movies: [],
                        series: []
                    };
                }
            }));
            genreRows = fetchedRows.filter((row)=>row.movies.length > 0 || row.series.length > 0);
        }
        // Fallback: If API returned no genres, build them from recent content
        if (!genreRows || genreRows.length === 0) {
            console.log('Using fallback genre row generation from recent content');
            const allMovies = await getMovies(limit * 2);
            const allSeries = await getSeries(limit * 2);
            const allContent = [
                ...allMovies,
                ...allSeries
            ];
            const genreMap = new Map();
            allContent.forEach((item)=>{
                if (item.genre_ids && Array.isArray(item.genre_ids)) {
                    item.genre_ids.forEach((g)=>{
                        const prettyName = g.charAt(0).toUpperCase() + g.slice(1);
                        if (!genreMap.has(prettyName)) genreMap.set(prettyName, []);
                        if (!genreMap.get(prettyName).find((existing)=>existing.id === item.id)) {
                            genreMap.get(prettyName).push(item);
                        }
                    });
                }
            });
            const extractedGenres = Array.from(genreMap.entries()).map(([name, content])=>({
                    name,
                    movies: content.filter((item)=>item.type === 'movie'),
                    series: content.filter((item)=>item.type === 'series')
                })).sort((a, b)=>b.movies.length + b.series.length - (a.movies.length + a.series.length)).slice(0, 3);
            genreRows = extractedGenres.filter((g)=>g.movies.length >= 2 || g.series.length >= 2);
        }
        return genreRows;
    } catch (error) {
        console.error('Error fetching genre rows for home:', error);
        return [];
    }
}
async function searchMovies(query, limit = 20, page = 1, vjName, genre) {
    try {
        if (!query.trim() && !vjName) {
            return await getMovies(limit, page, genre);
        }
        const q = query.trim();
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiMovies"](q, page, limit, vjName, genre);
        return movies;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}
async function searchSeries(query, limit = 20, page = 1, vjName, genre) {
    try {
        if (!query.trim() && !vjName) {
            return await getSeries(limit, page, genre);
        }
        const q = query.trim();
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiSeries"](q, page, limit, vjName, genre);
        return series;
    } catch (error) {
        console.error('Error searching series:', error);
        return [];
    }
}
async function searchAllContent(query, limit = 50, page = 1, vjName, genre) {
    try {
        if (!query.trim() && !vjName) {
            const [m, s] = await Promise.all([
                getMovies(limit, page, genre),
                getSeries(limit, page, genre)
            ]);
            const combined = [
                ...m,
                ...s
            ].sort((a, b)=>new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime());
            return combined.slice(0, limit);
        }
        const q = query.trim();
        const items = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiAll"](q, page, limit, vjName, genre);
        return items;
    } catch (error) {
        console.error('Error searching all content:', error);
        return [];
    }
}
async function getVJs() {
    try {
        const vjs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiVJs"](1, 100);
        // VJ ids must be case-insensitive to match correctly on the frontend filters
        return vjs.map((vj)=>({
                id: (vj.name || '').toLowerCase(),
                name: vj.name
            }));
    } catch (error) {
        console.error('Error fetching vjs:', error);
        return [];
    }
}
async function getRelatedMoviesByGenre(movieId, genreIds, limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiRelatedMoviesByGenre"](movieId, 1, limit);
        if (movies && movies.length > 0) {
            return movies;
        }
        // Fallback logic if API returns empty
        const allMovies = await getMovies(50, 1);
        const related = allMovies.filter((m)=>m.id !== movieId).sort(()=>Math.random() - 0.5).slice(0, limit);
        return related;
    } catch (error) {
        console.error('Error fetching related movies:', error);
        return [];
    }
}
async function getRelatedSeriesByGenre(seriesId, genreIds, limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiRelatedSeriesByGenre"](seriesId, 1, limit);
        if (series && series.length > 0) {
            return series;
        }
        // Fallback logic if API returns empty
        const allSeries = await getSeries(50, 1);
        const related = allSeries.filter((s)=>s.id !== seriesId).sort(()=>Math.random() - 0.5).slice(0, limit);
        return related;
    } catch (error) {
        console.error('Error fetching related series:', error);
        return [];
    }
}
async function getKilaxExclusiveMovies(limit = 6) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingMovies"](1, limit);
        return movies;
    } catch (error) {
        console.error('Error fetching Kilax exclusive movies:', error);
        return [];
    }
}
async function getKilaxExclusiveSeries(limit = 6) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingSeries"](1, limit);
        return series;
    } catch (error) {
        console.error('Error fetching Kilax exclusive series:', error);
        return [];
    }
}
async function getKilaxExclusiveContent(limit = 12, timeWindow = 'week', page = 1) {
    try {
        const all = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiTrendingAll"](page, limit, timeWindow);
        return all;
    } catch (error) {
        console.error('Error fetching Kilax exclusive content:', error);
        return [];
    }
}
async function getMoviesByCategory(category, limit = 20) {
    try {
        const movies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMoviesByGenre"](category.toLowerCase(), 1, limit);
        return movies;
    } catch (error) {
        console.error('Error fetching movies by category:', error);
        return [];
    }
}
async function getSeriesByCategory(category, limit = 20) {
    try {
        const series = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiSeriesByGenre"](category.toLowerCase(), 1, limit);
        return series;
    } catch (error) {
        console.error('Error fetching series by category:', error);
        return [];
    }
}
async function getMovieDownload(id) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiMovieDownloadUrl"](id);
}
async function getEpisodeDownload(seriesId, season, episode) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReelplexiEpisodeDownloadUrl"](seriesId, season, episode);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGenreRowsClient",
    ()=>getGenreRowsClient,
    "getKilaxExclusiveContentClient",
    ()=>getKilaxExclusiveContentClient,
    "getMovieByIdClient",
    ()=>getMovieByIdClient,
    "getMoviesByVJClient",
    ()=>getMoviesByVJClient,
    "getMoviesClient",
    ()=>getMoviesClient,
    "getSeriesByIdClient",
    ()=>getSeriesByIdClient,
    "getSeriesByVJClient",
    ()=>getSeriesByVJClient,
    "getSeriesClient",
    ()=>getSeriesClient,
    "getStreamUrlClient",
    ()=>getStreamUrlClient,
    "getTrendingContentClient",
    ()=>getTrendingContentClient,
    "getTrendingContentClientMonthly",
    ()=>getTrendingContentClientMonthly,
    "getVJContentClient",
    ()=>getVJContentClient,
    "getVJsClient",
    ()=>getVJsClient,
    "searchMoviesClient",
    ()=>searchMoviesClient,
    "searchSeriesClient",
    ()=>searchSeriesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reelplexi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
;
async function getMoviesClient(page = 1, limit = 50) {
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovies"])(limit, page);
        return {
            data,
            hasMore: data.length >= limit
        };
    } catch (error) {
        console.error('Error fetching movies:', error);
        return {
            data: [],
            hasMore: false
        };
    }
}
async function getSeriesClient(page = 1, limit = 50) {
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeries"])(limit, page);
        return {
            data,
            hasMore: data.length >= limit
        };
    } catch (error) {
        console.error('Error fetching series:', error);
        return {
            data: [],
            hasMore: false
        };
    }
}
async function getVJContentClient(limit = 12) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVJContent"])(limit);
    } catch (error) {
        console.error('Error fetching VJ content:', error);
        return [];
    }
}
async function getKilaxExclusiveContentClient(limit = 12) {
    try {
        const movies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovies"])(limit / 2);
        const series = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeries"])(limit / 2);
        const combined = [
            ...movies.map((item)=>({
                    ...item,
                    type: 'movie'
                })),
            ...series.map((item)=>({
                    ...item,
                    type: 'series'
                }))
        ];
        return combined.sort((a, b)=>new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()).slice(0, limit);
    } catch (error) {
        console.error('Error fetching exclusive content:', error);
        return [];
    }
}
async function getGenreRowsClient(limit = 12) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenreRowsForHome"])(limit);
    } catch (error) {
        console.error('Error fetching genre rows:', error);
        return [];
    }
}
async function getTrendingContentClient(limit = 16) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKilaxExclusiveContent"])(limit, 'day', 1);
    } catch (error) {
        console.error('Error fetching weekly trending content:', error);
        return [];
    }
}
async function getTrendingContentClientMonthly(limit = 16) {
    try {
        // Fetch page 2 to ensure we get a different set of trending items
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKilaxExclusiveContent"])(limit, 'week', 2);
    } catch (error) {
        console.error('Error fetching monthly trending content:', error);
        return [];
    }
}
async function searchMoviesClient(query) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchMovies"])(query);
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}
async function searchSeriesClient(query) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSeries"])(query);
    } catch (error) {
        console.error('Error searching series:', error);
        return [];
    }
}
async function getVJsClient() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVJs"])();
    } catch (error) {
        console.error('Error fetching VJs:', error);
        return [];
    }
}
async function getMoviesByVJClient(vjId, vjName) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiMovies"]('', 1, 50, vjName);
    } catch (error) {
        console.error('Error fetching movies by VJ:', error);
        return [];
    }
}
async function getSeriesByVJClient(vjId, vjName) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reelplexi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchReelplexiSeries"]('', 1, 50, vjName);
    } catch (error) {
        console.error('Error fetching series by VJ:', error);
        return [];
    }
}
async function getMovieByIdClient(id) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovieById"])(id);
    } catch (error) {
        console.error('Error fetching movie:', error);
        return null;
    }
}
async function getSeriesByIdClient(id, season) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeriesById"])(id);
    } catch (error) {
        console.error('Error fetching series:', error);
        return null;
    }
}
async function getStreamUrlClient(id, type, season, episode) {
    try {
        if (type === 'movie') {
            const stream = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMovieStream"])(id);
            return stream?.video_url || null;
        } else if (season !== undefined && episode !== undefined) {
            const stream = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEpisodeStream"])(id, season, episode);
            return stream?.video_url || null;
        }
        return null;
    } catch (error) {
        console.error('Error fetching stream URL:', error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/subscriptions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSubscription",
    ()=>createSubscription,
    "forceRefreshSubscription",
    ()=>forceRefreshSubscription,
    "getAllSubscriptions",
    ()=>getAllSubscriptions,
    "getSubscriptionPlans",
    ()=>getSubscriptionPlans,
    "getUserSubscription",
    ()=>getUserSubscription,
    "getUserSubscriptionStatus",
    ()=>getUserSubscriptionStatus,
    "hasActiveSubscription",
    ()=>hasActiveSubscription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function getSubscriptionPlans() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('plans').select('*').order('amount', {
        ascending: true
    });
    if (error) {
        console.error('Error fetching subscription plans:', error);
        return [];
    }
    return data || [];
}
async function getUserSubscription(userId) {
    try {
        const today = new Date();
        // Query the profiles table for subscription_expiry_date
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('subscription, subscription_start_date, subscription_expiry_date').eq('id', userId).maybeSingle();
        if (error) {
            console.error('Error fetching user profile for subscription:', error);
            return null;
        }
        if (!data || !data.subscription_expiry_date) return null;
        const expiry = new Date(data.subscription_expiry_date);
        if (expiry >= today) {
            // Return a subscription-like object for compatibility
            return {
                id: 0,
                user_id: userId,
                plan: data.subscription || '',
                payment_method: '',
                subscribed_at: data.subscription_start_date || ''
            };
        }
        return null;
    } catch (error) {
        console.error('Unexpected error fetching user subscription:', error);
        return null;
    }
}
async function createSubscription(userId, plan, paymentMethod) {
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscriptions').insert({
            user_id: userId,
            plan,
            payment_method: paymentMethod,
            subscribed_at: new Date().toISOString()
        });
        if (error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: 'An unexpected error occurred'
        };
    }
}
async function hasActiveSubscription(userId) {
    try {
        const { data: profile, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('subscription, subscription_expiry_date').eq('id', userId).single();
        if (error || !profile) {
            return false;
        }
        // Check if subscription exists and is not expired
        const hasSubscription = profile.subscription && profile.subscription !== 'free';
        const isNotExpired = profile.subscription_expiry_date && new Date(profile.subscription_expiry_date) > new Date();
        return hasSubscription && isNotExpired;
    } catch (error) {
        console.error('Error checking active subscription:', error);
        return false;
    }
}
async function getUserSubscriptionStatus(userId) {
    try {
        const { data: profile, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('subscription, subscription_expiry_date').eq('id', userId).single();
        if (error || !profile) {
            return {
                hasSubscription: false,
                isActive: false,
                isExpired: false
            };
        }
        const hasSubscription = profile.subscription && profile.subscription !== 'free';
        const expiryDate = profile.subscription_expiry_date ? new Date(profile.subscription_expiry_date) : null;
        const now = new Date();
        const isNotExpired = expiryDate && expiryDate > now;
        const isExpired = expiryDate && expiryDate <= now;
        const daysRemaining = expiryDate ? Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : undefined;
        return {
            hasSubscription,
            isActive: hasSubscription && isNotExpired,
            isExpired: hasSubscription && isExpired,
            subscription: profile.subscription,
            expiryDate: profile.subscription_expiry_date,
            daysRemaining: daysRemaining && daysRemaining > 0 ? daysRemaining : undefined
        };
    } catch (error) {
        console.error('Error getting subscription status:', error);
        return {
            hasSubscription: false,
            isActive: false,
            isExpired: false
        };
    }
}
async function forceRefreshSubscription(userId) {
    try {
        // Clear any cached subscription data and fetch fresh from database
        const { data: profile, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('subscription, subscription_expiry_date').eq('id', userId).single();
        if (error || !profile) {
            console.error('Error refreshing subscription:', error);
            return false;
        }
        // Check if subscription is active
        const hasSubscription = profile.subscription && profile.subscription !== 'free';
        const isNotExpired = profile.subscription_expiry_date && new Date(profile.subscription_expiry_date) > new Date();
        console.log('✅ Subscription refreshed - access granted immediately');
        return hasSubscription && isNotExpired;
    } catch (error) {
        console.error('Error force refreshing subscription:', error);
        return false;
    }
}
async function getAllSubscriptions() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscriptions').select('*');
    if (error) {
        console.error('Error fetching subscriptions:', error);
        return [];
    }
    return data || [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AuthRequiredModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthRequiredModal,
    "useAuthCheck",
    ()=>useAuthCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$subscriptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/subscriptions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AuthRequiredModal({ isOpen, onClose, action, requirePremium = true, customMessage }) {
    _s();
    const { user, loading, isPremium } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [subscriptionStatus, setSubscriptionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthRequiredModal.useEffect": ()=>{
            if (user?.id && requirePremium) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$subscriptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserSubscriptionStatus"])(user.id).then(setSubscriptionStatus);
            }
        }
    }["AuthRequiredModal.useEffect"], [
        user?.id,
        requirePremium
    ]);
    // Handle auto-close when user has required permissions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthRequiredModal.useEffect": ()=>{
            if (isOpen && !loading && user && isPremium) {
                onClose();
            }
        }
    }["AuthRequiredModal.useEffect"], [
        isOpen,
        loading,
        user,
        isPremium,
        onClose
    ]);
    if (!isOpen) return null;
    const handleLogin = ()=>{
        // Set redirect cookie to current location
        if ("TURBOPACK compile-time truthy", 1) {
            const currentPath = window.location.pathname + window.location.search;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRedirectCookie"])(currentPath);
            // Redirect to signin page with redirect parameter
            router.push(`/signin?redirect=${encodeURIComponent(currentPath)}`);
        }
        onClose();
    };
    const handleUpgrade = ()=>{
        router.push('/payment');
        onClose();
    };
    // Show loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center border border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/AuthRequiredModal.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white mt-4",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/components/AuthRequiredModal.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AuthRequiredModal.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AuthRequiredModal.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    // User not authenticated
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignInRequiredModal, {
                action: action,
                onLogin: handleLogin,
                onClose: onClose,
                customMessage: customMessage
            }, void 0, false, {
                fileName: "[project]/components/AuthRequiredModal.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        }, void 0, false);
    }
    // User authenticated but premium required
    if (!isPremium) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PremiumRequiredModal, {
            action: action,
            onUpgrade: handleUpgrade,
            onClose: onClose,
            subscriptionStatus: subscriptionStatus,
            customMessage: customMessage
        }, void 0, false, {
            fileName: "[project]/components/AuthRequiredModal.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    // User is authenticated and has required permissions
    return null;
}
_s(AuthRequiredModal, "LC4oLpJkb6W5smhzEE/TZJ4P0S0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthRequiredModal;
function SignInRequiredModal({ action, onLogin, onClose, customMessage }) {
    const actionText = action === 'play' ? 'watch' : 'download';
    const ActionIcon = action === 'play' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center border border-gray-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionIcon, {
                                    className: "w-8 h-8 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AuthRequiredModal.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 -right-1 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-3 h-3 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AuthRequiredModal.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AuthRequiredModal.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-white mb-3",
                    children: "Sign In Required"
                }, void 0, false, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 mb-6 leading-relaxed",
                    children: customMessage || `You need to sign in to ${actionText} this content. Create a free account or sign in to continue.`
                }, void 0, false, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-700/50 rounded-lg p-4 mb-6 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-white font-semibold mb-2 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-4 h-4 mr-2 text-orange-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                "Free Account Benefits:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "text-sm text-gray-300 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Access to all free content"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• HD & 4K streaming quality of free content"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Ad-free experience"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onLogin,
                            className: "w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 font-medium",
                            children: "Sign In / Create Account"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            variant: "outline",
                            className: "w-full border-gray-600 text-gray-300 hover:bg-gray-700 h-12",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AuthRequiredModal.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AuthRequiredModal.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c1 = SignInRequiredModal;
function PremiumRequiredModal({ action, onUpgrade, onClose, subscriptionStatus, customMessage }) {
    const actionText = action === 'play' ? 'watch' : 'download';
    const ActionIcon = action === 'play' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"];
    const getStatusMessage = ()=>{
        if (customMessage) return customMessage;
        if (!subscriptionStatus) return "This content requires a premium subscription.";
        if (subscriptionStatus.isExpired) {
            return `Your ${subscriptionStatus.subscription} subscription expired on ${new Date(subscriptionStatus.expiryDate).toLocaleDateString()}. Renew to continue watching.`;
        }
        if (!subscriptionStatus.hasSubscription) {
            return `This content requires a premium subscription to ${actionText}.`;
        }
        return `This content requires a premium subscription to ${actionText}.`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center border border-gray-700",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionIcon, {
                                    className: "w-8 h-8 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AuthRequiredModal.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center",
                                children: subscriptionStatus?.isExpired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-3 h-3 text-black"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-black",
                                    children: "★"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AuthRequiredModal.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AuthRequiredModal.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-white mb-3",
                    children: subscriptionStatus?.isExpired ? 'Subscription Expired' : 'Premium Content'
                }, void 0, false, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 mb-6 leading-relaxed",
                    children: getStatusMessage()
                }, void 0, false, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-white font-semibold mb-2 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-yellow-400 mr-2",
                                    children: "★"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                "Premium Benefits:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "text-sm text-gray-300 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Access to all premium content"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• HD & 4K streaming quality"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Ad-free experience"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Unlimited downloads"
                                }, void 0, false, {
                                    fileName: "[project]/components/AuthRequiredModal.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onUpgrade,
                            className: "w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white h-12 font-medium",
                            children: subscriptionStatus?.isExpired ? 'Renew Subscription' : 'Upgrade to Premium'
                        }, void 0, false, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            variant: "outline",
                            className: "w-full border-gray-600 text-gray-300 hover:bg-gray-700 h-12",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/AuthRequiredModal.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AuthRequiredModal.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AuthRequiredModal.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AuthRequiredModal.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_c2 = PremiumRequiredModal;
function useAuthCheck() {
    _s1();
    const { user, loading, isPremium } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const checkAuth = (requirePremium = true)=>{
        if (loading) return {
            allowed: false,
            reason: 'loading'
        };
        if (!user) {
            return {
                allowed: false,
                reason: 'auth_required'
            };
        }
        if (!isPremium) {
            return {
                allowed: false,
                reason: 'premium_required'
            };
        }
        return {
            allowed: true,
            reason: null
        };
    };
    return {
        user,
        loading,
        isPremium,
        checkAuth
    };
}
_s1(useAuthCheck, "KvLQkh+JSTx+6MQAP/KBytYX+Eo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AuthRequiredModal");
__turbopack_context__.k.register(_c1, "SignInRequiredModal");
__turbopack_context__.k.register(_c2, "PremiumRequiredModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NetflixCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartbeatLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeartbeatLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthRequiredModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AuthRequiredModal.tsx [app-client] (ecmascript)");
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
const dynamic = 'force-dynamic';
// FAQ data used in both the rendered FAQ section and JSON-LD schema
const FAQ_ITEMS = [
    {
        q: "What are Luganda Translated Movies (Katogo)?",
        a: "Luganda translated movies — also called 'katogo' movies — are international films that have been narrated and translated into Luganda, Uganda's most widely spoken local language, by a professional Video Jockey (VJ). VJs like VJ Junior, Omutaka Ice P, and VJ Jingo provide live or pre-recorded Luganda narration over the original audio, making Hollywood blockbusters and Asian action films accessible and entertaining for Ugandan audiences."
    },
    {
        q: "Where can I watch movies translated by VJ Junior, Omutaka Ice P, and VJ Jingo?",
        a: "Kilax Movies is the official home of Ugandan VJ-translated content. You can browse and stream the full catalogs of VJ Junior, Omutaka Ice P (Ice P), VJ Jingo (VJ Jjingo), VJ Emmy, VJ Moon, VJ KK, and many other top Ugandan VJs directly on kilaxmovies.com or by downloading the free Kilax Movies app for Android."
    },
    {
        q: "How do I download Luganda translated movies on Kilax Movies?",
        a: "Premium subscribers on Kilax Movies can download movies and series for offline viewing. Simply upgrade to a Kilax Premium subscription, find the movie or series you want, and tap the Download button. Downloads are available for all VJ-translated content including movies by VJ Junior, Omutaka Ice P, VJ Jingo, and more."
    },
    {
        q: "Is Kilax Movies the same as Kilax or KilaxMovies?",
        a: "Yes — Kilax Movies, Kilax, and KilaxMovies all refer to the same platform at kilaxmovies.com. We are Uganda's #1 dedicated streaming service for Luganda translated movies and series, featuring content from VJ Junior, Omutaka Ice P, VJ Jingo (VJ Jjingo), VJ Emmy, and other top Ugandan VJs."
    },
    {
        q: "Who are the best Ugandan VJs for translated movies?",
        a: "Uganda's most popular VJs include: VJ Junior (known for action and thriller translations), Omutaka Ice P/Ice P (legendary for Kung Fu and Sci-Fi movies), VJ Jingo/VJ Jjingo (famous for drama and series), VJ Emmy (comedy specialist), VJ Moon (horror and suspense), and VJ KK (action and Bollywood). All their translated content is available on Kilax Movies."
    },
    {
        q: "Can I watch Kilax Movies for free?",
        a: "Yes! Kilax Movies offers free access to a selection of Luganda translated movies and series. For the full library including downloads, HD streaming, and exclusive VJ content, upgrade to Kilax Premium — Uganda's most affordable movie subscription service."
    }
];
// Module-level in-memory cache for blazing fast 0ms return navigation
let cachedHomeData = null;
function HomePage() {
    _s();
    const [featuredContent, setFeaturedContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>cachedHomeData?.featured || []
    }["HomePage.useState"]);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [latestMovies, setLatestMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>cachedHomeData?.movies || []
    }["HomePage.useState"]);
    const [latestSeries, setLatestSeries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>cachedHomeData?.series || []
    }["HomePage.useState"]);
    const [genreRows, setGenreRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>cachedHomeData?.genres || []
    }["HomePage.useState"]);
    const [trendingContent, setTrendingContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>cachedHomeData?.trending || []
    }["HomePage.useState"]);
    const [trendingContentMonthly, setTrendingContentMonthly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>cachedHomeData?.trendingMonthly || []
    }["HomePage.useState"]);
    const [loadingHero, setLoadingHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>!cachedHomeData?.featured?.length
    }["HomePage.useState"]);
    const [loadingMovies, setLoadingMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>!cachedHomeData?.movies?.length
    }["HomePage.useState"]);
    const [loadingSeries, setLoadingSeries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>!cachedHomeData?.series?.length
    }["HomePage.useState"]);
    const [loadingGenres, setLoadingGenres] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>!cachedHomeData?.genres?.length
    }["HomePage.useState"]);
    const [loadingTrending, setLoadingTrending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>!cachedHomeData?.trending?.length
    }["HomePage.useState"]);
    const [loadingTrendingMonthly, setLoadingTrendingMonthly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>!cachedHomeData?.trendingMonthly?.length
    }["HomePage.useState"]);
    const [authModal, setAuthModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        action: 'play'
    });
    // Auth hook
    const { checkAuth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthRequiredModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthCheck"])();
    const hasFetchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (hasFetchedRef.current) return;
            hasFetchedRef.current = true;
            // Check sessionStorage fallback if module cache was empty
            if (!cachedHomeData) {
                try {
                    const stored = sessionStorage.getItem('kilax_home_cache_v1');
                    if (stored) {
                        const parsed = JSON.parse(stored);
                        if (parsed.featured?.length) setFeaturedContent(parsed.featured);
                        if (parsed.movies?.length) setLatestMovies(parsed.movies);
                        if (parsed.series?.length) setLatestSeries(parsed.series);
                        if (parsed.genres?.length) setGenreRows(parsed.genres);
                        if (parsed.trending?.length) {
                            setTrendingContent(parsed.trending);
                            setLoadingTrending(false);
                        }
                        if (parsed.trendingMonthly?.length) {
                            setTrendingContentMonthly(parsed.trendingMonthly);
                            setLoadingTrendingMonthly(false);
                        }
                        setLoadingHero(false);
                        setLoadingMovies(false);
                        setLoadingSeries(false);
                        setLoadingGenres(false);
                        cachedHomeData = parsed;
                    }
                } catch  {}
            }
            // 1. FAST PARALLEL FETCH: Hero Content
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVJContentClient"])(8).then({
                "HomePage.useEffect": (vjData)=>{
                    if (Array.isArray(vjData) && vjData.length > 0) {
                        const formatted = vjData.map({
                            "HomePage.useEffect.formatted": (item)=>({
                                    ...item,
                                    type: item.type || 'movie'
                                })
                        }["HomePage.useEffect.formatted"]);
                        setFeaturedContent(formatted);
                        cachedHomeData = {
                            ...cachedHomeData || {},
                            featured: formatted
                        };
                    }
                    setLoadingHero(false);
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{
                    setLoadingHero(false);
                }
            }["HomePage.useEffect"]);
            // 2. FAST PARALLEL FETCH: Latest Movies (Updates row independently immediately)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMoviesClient"])(1, 12).then({
                "HomePage.useEffect": (moviesRes)=>{
                    if (moviesRes?.data?.length > 0) {
                        setLatestMovies(moviesRes.data);
                        cachedHomeData = {
                            ...cachedHomeData || {},
                            movies: moviesRes.data
                        };
                    }
                    setLoadingMovies(false);
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{
                    setLoadingMovies(false);
                }
            }["HomePage.useEffect"]);
            // 3. FAST PARALLEL FETCH: Latest Series (Updates row independently immediately)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeriesClient"])(1, 12).then({
                "HomePage.useEffect": (seriesRes)=>{
                    if (seriesRes?.data?.length > 0) {
                        setLatestSeries(seriesRes.data);
                        cachedHomeData = {
                            ...cachedHomeData || {},
                            series: seriesRes.data
                        };
                    }
                    setLoadingSeries(false);
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{
                    setLoadingSeries(false);
                }
            }["HomePage.useEffect"]);
            // 4. FAST PARALLEL FETCH: Genre Collections
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenreRowsClient"])(12).then({
                "HomePage.useEffect": (genresRes)=>{
                    let finalGenres = genresRes;
                    if (!finalGenres || finalGenres.length === 0) {
                        // Fallback extract from existing items if needed
                        finalGenres = [];
                    }
                    setGenreRows(finalGenres);
                    cachedHomeData = {
                        ...cachedHomeData || {},
                        genres: finalGenres
                    };
                    setLoadingGenres(false);
                    try {
                        if (cachedHomeData) {
                            sessionStorage.setItem('kilax_home_cache_v1', JSON.stringify(cachedHomeData));
                        }
                    } catch  {}
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{
                    setLoadingGenres(false);
                }
            }["HomePage.useEffect"]);
            // 5. FAST PARALLEL FETCH: Trending Content (Week)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrendingContentClient"])(16).then({
                "HomePage.useEffect": (trendingRes)=>{
                    if (Array.isArray(trendingRes) && trendingRes.length > 0) {
                        setTrendingContent(trendingRes);
                        cachedHomeData = {
                            ...cachedHomeData || {},
                            trending: trendingRes
                        };
                        try {
                            if (cachedHomeData) {
                                sessionStorage.setItem('kilax_home_cache_v1', JSON.stringify(cachedHomeData));
                            }
                        } catch  {}
                    }
                    setLoadingTrending(false);
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{
                    setLoadingTrending(false);
                }
            }["HomePage.useEffect"]);
            // 6. FAST PARALLEL FETCH: Trending Content (Month)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTrendingContentClientMonthly"])(24).then({
                "HomePage.useEffect": (trendingRes)=>{
                    if (Array.isArray(trendingRes) && trendingRes.length > 0) {
                        // Randomize the items to ensure the monthly trending section looks completely different
                        const shuffled = [
                            ...trendingRes
                        ].sort({
                            "HomePage.useEffect.shuffled": ()=>Math.random() - 0.5
                        }["HomePage.useEffect.shuffled"]);
                        setTrendingContentMonthly(shuffled);
                        cachedHomeData = {
                            ...cachedHomeData || {},
                            trendingMonthly: shuffled
                        };
                        try {
                            if (cachedHomeData) {
                                sessionStorage.setItem('kilax_home_cache_v1', JSON.stringify(cachedHomeData));
                            }
                        } catch  {}
                    }
                    setLoadingTrendingMonthly(false);
                }
            }["HomePage.useEffect"]).catch({
                "HomePage.useEffect": ()=>{
                    setLoadingTrendingMonthly(false);
                }
            }["HomePage.useEffect"]);
        }
    }["HomePage.useEffect"], []);
    // Auto-slide functionality for Hero
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (featuredContent.length > 0) {
                const interval = setInterval({
                    "HomePage.useEffect.interval": ()=>{
                        setCurrentSlide({
                            "HomePage.useEffect.interval": (prev)=>(prev + 1) % featuredContent.length
                        }["HomePage.useEffect.interval"]);
                    }
                }["HomePage.useEffect.interval"], 5000);
                return ({
                    "HomePage.useEffect": ()=>clearInterval(interval)
                })["HomePage.useEffect"];
            }
        }
    }["HomePage.useEffect"], [
        featuredContent.length
    ]);
    if (loadingHero && featuredContent.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartbeatLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartbeatPageLoader"], {
            text: "Initializing Kilax Cinema..."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 215,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-black text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] w-full overflow-hidden",
                        children: featuredContent.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        featuredContent.map((content, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: content.cover_image_url || `https://via.placeholder.com/1920x1080/1f2937/f97316?text=${encodeURIComponent(content.title)}`,
                                                    alt: content.title,
                                                    fill: true,
                                                    priority: index === 0,
                                                    className: "object-cover",
                                                    onError: (e)=>{
                                                        const target = e.target;
                                                        target.src = `https://via.placeholder.com/1920x1080/1f2937/f97316?text=${encodeURIComponent(content.title)}`;
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this)
                                            }, content.id, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex items-center h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "container mx-auto px-4 md:px-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-2xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3 text-orange-500 leading-tight",
                                                    children: featuredContent[currentSlide]?.title || "Featured Content"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 md:gap-3 mb-3 md:mb-4 text-xs",
                                                    children: [
                                                        featuredContent[currentSlide]?.vjs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "border border-orange-400 text-orange-400 px-1.5 py-0.5 md:px-2 md:py-1 text-xs font-bold rounded",
                                                            children: featuredContent[currentSlide].vjs.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 25
                                                        }, this),
                                                        featuredContent[currentSlide]?.release_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300",
                                                            children: new Date(featuredContent[currentSlide].release_date).getFullYear()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 25
                                                        }, this),
                                                        featuredContent[currentSlide] && 'duration' in featuredContent[currentSlide] && featuredContent[currentSlide].duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300",
                                                            children: [
                                                                featuredContent[currentSlide].duration,
                                                                "m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm md:text-lg mb-4 md:mb-6 text-gray-100 leading-relaxed max-w-xs md:max-w-lg font-medium",
                                                    children: [
                                                        featuredContent[currentSlide]?.description?.slice(0, 120) || "Experience the best in entertainment with stunning visuals and captivating storytelling.",
                                                        featuredContent[currentSlide]?.description && featuredContent[currentSlide].description.length > 120 && "..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 md:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            size: "lg",
                                                            className: "font-bold px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base transition-all duration-200 hover:scale-105 bg-white text-black hover:bg-gray-200",
                                                            onClick: ()=>{
                                                                const authCheck = checkAuth(featuredContent[currentSlide]?.is_premium || false);
                                                                if (!authCheck.allowed) {
                                                                    setAuthModal({
                                                                        isOpen: true,
                                                                        action: 'play',
                                                                        requirePremium: authCheck.reason === 'premium_required'
                                                                    });
                                                                } else {
                                                                    window.location.href = `/${featuredContent[currentSlide]?.type === 'movie' ? 'movies' : 'series'}/${featuredContent[currentSlide]?.id}`;
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                    className: "w-4 h-4 md:w-5 md:h-5 mr-2 fill-current"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Play"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/${featuredContent[currentSlide]?.type === 'movie' ? 'movies' : 'series'}/${featuredContent[currentSlide]?.id}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "lg",
                                                                variant: "outline",
                                                                className: "border-2 border-gray-400 text-white hover:border-white hover:bg-white/10 bg-gray-600/50 font-bold px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base transition-all duration-200 hover:scale-105",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                        className: "w-4 h-4 md:w-5 md:h-5 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 299,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "More Info"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-8 right-8 flex gap-1 z-20",
                                    children: featuredContent.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentSlide(index),
                                            className: `w-1 h-8 transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`
                                        }, index, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 -mt-2 pb-8 pt-6 bg-gradient-to-t from-black via-black to-transparent trending-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: `
            @keyframes shimmer-purple {
              0% { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
            /* Add intense purple glow to NetflixCard inside trending sections */
            .trending-section .group > a > div {
              transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s ease;
            }
            .trending-section .group:hover > a > div {
              box-shadow: 0 0 35px 8px rgba(168, 85, 247, 0.5), 0 0 0 2px rgba(168, 85, 247, 0.9);
              border-radius: 0.5rem;
            }
          `
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            (trendingContent.length > 0 || loadingTrending) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-12 trending-section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "container mx-auto px-4 md:px-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl md:text-2xl font-black tracking-tight",
                                                        style: {
                                                            background: 'linear-gradient(90deg, #d8b4fe, #9333ea, #d8b4fe)',
                                                            backgroundClip: 'text',
                                                            WebkitBackgroundClip: 'text',
                                                            color: 'transparent',
                                                            backgroundSize: '200% auto',
                                                            animation: 'shimmer-purple 2s linear infinite'
                                                        },
                                                        children: "Trending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-px",
                                                    style: {
                                                        background: 'linear-gradient(90deg, rgba(168,85,247,0.8), transparent)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500 text-purple-300 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
                                                    children: "This Week"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this),
                                        loadingTrending && trendingContent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartbeatLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartbeatRowSkeleton"], {
                                            title: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 overflow-x-auto pb-4 scrollbar-hide pt-2 px-1 -mx-1",
                                            children: trendingContent.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetflixCard"], {
                                                        content: item,
                                                        type: item.type || 'movie'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 25
                                                    }, this)
                                                }, item.id, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 362,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            (trendingContentMonthly.length > 0 || loadingTrendingMonthly) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-12 trending-section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "container mx-auto px-4 md:px-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl md:text-2xl font-black tracking-tight",
                                                        style: {
                                                            background: 'linear-gradient(90deg, #d8b4fe, #9333ea, #d8b4fe)',
                                                            backgroundClip: 'text',
                                                            WebkitBackgroundClip: 'text',
                                                            color: 'transparent',
                                                            backgroundSize: '200% auto',
                                                            animation: 'shimmer-purple 2s linear infinite'
                                                        },
                                                        children: "Trending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-px",
                                                    style: {
                                                        background: 'linear-gradient(90deg, rgba(168,85,247,0.8), transparent)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500 text-purple-300 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
                                                    children: "This Month"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this),
                                        loadingTrendingMonthly && trendingContentMonthly.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartbeatLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartbeatRowSkeleton"], {
                                            title: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 overflow-x-auto pb-4 scrollbar-hide pt-2 px-1 -mx-1",
                                            children: trendingContentMonthly.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetflixCard"], {
                                                        content: item,
                                                        type: item.type || 'movie'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 25
                                                    }, this)
                                                }, item.id, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "container mx-auto px-4 md:px-12",
                                    children: loadingMovies && latestMovies.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartbeatLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartbeatRowSkeleton"], {
                                        title: "Latest Movies"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl md:text-2xl font-bold text-white",
                                                        children: "Latest Movies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/movies",
                                                        className: "text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors",
                                                        children: "See All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex overflow-x-auto gap-3 pb-4 scrollbar-hide",
                                                children: latestMovies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetflixCard"], {
                                                            content: movie,
                                                            type: "movie"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, movie.id, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "mb-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "container mx-auto px-4 md:px-12",
                                    children: loadingSeries && latestSeries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartbeatLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartbeatRowSkeleton"], {
                                        title: "Latest Series"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl md:text-2xl font-bold text-white",
                                                        children: "Latest Series"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/series",
                                                        className: "text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors",
                                                        children: "See All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex overflow-x-auto gap-3 pb-4 scrollbar-hide",
                                                children: latestSeries.map((show)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetflixCard"], {
                                                            content: show,
                                                            type: "series"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, show.id, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            genreRows.length > 0 ? genreRows.map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "container mx-auto px-4 md:px-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl md:text-2xl font-bold text-white",
                                                        children: [
                                                            genre.name,
                                                            " Movies"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/movies",
                                                        className: "text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors",
                                                        children: "See All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex overflow-x-auto gap-3 pb-4 scrollbar-hide",
                                                children: genre.movies.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-[120px] md:w-[150px] lg:w-[160px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NetflixCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetflixCard"], {
                                                            content: item,
                                                            type: item.type || 'movie'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, item.id, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this)
                                }, genre.name, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this)) : loadingGenres ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-4 md:px-12 mb-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartbeatLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeartbeatRowSkeleton"], {
                                    title: "Genre Collections"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthRequiredModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: authModal.isOpen,
                onClose: ()=>setAuthModal({
                        ...authModal,
                        isOpen: false
                    }),
                action: authModal.action,
                requirePremium: authModal.requirePremium
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "H2P6k0DuQXI7O0BcpI2YemrZN9U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthRequiredModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthCheck"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_30655da2._.js.map