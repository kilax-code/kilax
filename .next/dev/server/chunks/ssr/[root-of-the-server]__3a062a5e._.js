module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/vjs/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VJsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "VJ Directory - VJ Junior, Omutaka Ice P, VJ Jingo & All Top Ugandan VJs",
    description: "Browse all top Ugandan Video Jockeys (VJs) on Kilax Movies. Watch translated movies and series by VJ Junior, Omutaka Ice P, VJ Jingo (VJ Jjingo), VJ Emmy, VJ Moon, VJ KK, VJ Mark and more.",
    keywords: [
        "vj junior",
        "omutaka ice p",
        "ice p",
        "vj jingo",
        "vj jjingo",
        "jingo",
        "junior",
        "vj emmy",
        "vj moon",
        "vj kk",
        "vj mark",
        "ugandan vjs",
        "luganda translated movies",
        "translated movies uganda"
    ],
    alternates: {
        canonical: "https://www.kilaxmovies.com/vjs"
    },
    openGraph: {
        title: "VJ Directory - VJ Junior, Omutaka Ice P, VJ Jingo | Kilax Movies",
        description: "Meet Uganda's top VJs who bring you the best Luganda translated movies and series. VJ Junior, Omutaka Ice P, VJ Jingo (VJ Jjingo), VJ Emmy, VJ Moon and more.",
        url: "https://www.kilaxmovies.com/vjs",
        type: "website"
    }
};
const vjListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kilax Movies VJ Directory - Top Ugandan Video Jockeys",
    description: "Directory of Uganda's top Video Jockeys (VJs) who translate and dub movies and series into Luganda on Kilax Movies.",
    url: "https://www.kilaxmovies.com/vjs",
    publisher: {
        "@type": "Organization",
        name: "Kilax Movies",
        url: "https://www.kilaxmovies.com"
    }
};
const VJS = [
    {
        slug: "vj-junior",
        name: "VJ Junior",
        aliases: [
            "Junior"
        ],
        specialty: "Action, Thriller & Crime",
        description: "VJ Junior is Uganda's most popular Video Jockey, celebrated for his energetic and authentic Luganda voice acting. His translations of blockbuster action and thriller movies have earned him a massive fan following across Uganda and East Africa.",
        movieCount: "500+",
        emoji: "🎬",
        color: "from-orange-600 to-orange-400",
        keywords: "vj junior movies, junior translated movies, luganda action movies"
    },
    {
        slug: "omutaka-ice-p",
        name: "Omutaka Ice P",
        aliases: [
            "Ice P",
            "Omutaka"
        ],
        specialty: "Sci-Fi, Kung Fu & Action",
        description: "Omutaka Ice P, known simply as Ice P, is a legendary Ugandan VJ renowned for his distinctive Luganda narration style. He specialises in Kung Fu, martial arts, sci-fi, and action movies, bringing his unique storytelling voice to complex plots.",
        movieCount: "400+",
        emoji: "🥋",
        color: "from-blue-600 to-blue-400",
        keywords: "omutaka ice p, ice p movies, ice p translated, luganda kung fu"
    },
    {
        slug: "vj-jingo",
        name: "VJ Jingo",
        aliases: [
            "VJ Jjingo",
            "Jingo"
        ],
        specialty: "Drama, Romance & Series",
        description: "VJ Jingo (also known as VJ Jjingo) is one of Uganda's most beloved and long-serving VJs. With a commanding Luganda voice and incredible storytelling ability, Jingo has translated countless drama, romance, and series episodes that resonate deeply with Ugandan audiences.",
        movieCount: "300+",
        emoji: "🎭",
        color: "from-purple-600 to-purple-400",
        keywords: "vj jingo, vj jjingo, jingo translated movies, luganda drama series"
    },
    {
        slug: "vj-emmy",
        name: "VJ Emmy",
        aliases: [
            "Emmy"
        ],
        specialty: "Comedy & Family",
        description: "VJ Emmy brings laughter and entertainment through his unique comedy and family movie translations. His light-hearted Luganda narration makes comedies accessible and funnier for Ugandan audiences of all ages.",
        movieCount: "200+",
        emoji: "😂",
        color: "from-yellow-600 to-yellow-400",
        keywords: "vj emmy, emmy movies, luganda comedy movies"
    },
    {
        slug: "vj-moon",
        name: "VJ Moon",
        aliases: [
            "Moon"
        ],
        specialty: "Horror & Suspense",
        description: "VJ Moon specialises in horror, suspense, and psychological thriller translations. His deep, atmospheric Luganda narration adds an extra layer of tension and excitement to spine-chilling movie experiences.",
        movieCount: "150+",
        emoji: "👻",
        color: "from-gray-700 to-gray-500",
        keywords: "vj moon, moon translated movies, luganda horror movies"
    },
    {
        slug: "vj-kk",
        name: "VJ KK",
        aliases: [
            "KK"
        ],
        specialty: "Action & Bollywood",
        description: "VJ KK is well known for his fast-paced narration style and sharp translations of action-packed and Bollywood movies into Luganda, captivating audiences who love high-energy cinema.",
        movieCount: "180+",
        emoji: "⚡",
        color: "from-red-600 to-red-400",
        keywords: "vj kk, kk movies, luganda bollywood movies"
    },
    {
        slug: "vj-mark",
        name: "VJ Mark",
        aliases: [
            "Mark"
        ],
        specialty: "Adventure & Fantasy",
        description: "VJ Mark brings adventure and fantasy movies to life in Luganda with his immersive storytelling. Whether it's epic fantasy sagas or action adventures, VJ Mark's translations keep audiences on the edge of their seats.",
        movieCount: "120+",
        emoji: "🗡️",
        color: "from-green-600 to-green-400",
        keywords: "vj mark, mark translated movies, luganda adventure fantasy"
    }
];
function VJsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(vjListSchema)
                }
            }, void 0, false, {
                fileName: "[project]/app/vjs/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-black text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1 text-orange-400 text-sm font-medium mb-4",
                                    children: "Uganda's Best VJs"
                                }, void 0, false, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-6xl font-black text-white mb-6 leading-tight",
                                    children: "The VJ Directory"
                                }, void 0, false, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-300 max-w-3xl mx-auto mb-4",
                                    children: [
                                        "Meet Uganda's top Video Jockeys — the talented translators who bring international movies and series to life in ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-orange-400",
                                            children: "Luganda"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 58
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 max-w-2xl mx-auto",
                                    children: [
                                        "Browse translated movies by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "VJ Junior"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 43
                                        }, this),
                                        ", ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Omutaka Ice P"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 71
                                        }, this),
                                        ",",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "VJ Jingo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        " (VJ Jjingo), ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "VJ Emmy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 54
                                        }, this),
                                        ", ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "VJ Moon"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 80
                                        }, this),
                                        ",",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "VJ KK"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        ", ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "VJ Mark"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 39
                                        }, this),
                                        " and more — all on Kilax Movies."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vjs/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/vjs/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 container mx-auto px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: VJS.map((vj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/vjs/${vj.slug}`,
                                    className: "group block bg-gray-900 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2 bg-gradient-to-r ${vj.color}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-4xl w-16 h-16 bg-gradient-to-br ${vj.color} rounded-xl flex items-center justify-center flex-shrink-0`,
                                                            children: vj.emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vjs/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-xl font-bold text-white group-hover:text-orange-400 transition-colors",
                                                                    children: vj.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vjs/page.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 23
                                                                }, this),
                                                                vj.aliases.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: [
                                                                        "Also known as: ",
                                                                        vj.aliases.join(", ")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/vjs/page.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-block mt-1 text-xs font-semibold text-orange-400 bg-orange-400/10 rounded-full px-2 py-0.5",
                                                                    children: vj.specialty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vjs/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/vjs/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3",
                                                    children: vj.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-white",
                                                                    children: vj.movieCount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vjs/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " translated titles"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/vjs/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-400 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block",
                                                            children: "Browse catalog →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vjs/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, vj.slug, true, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/vjs/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/vjs/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-gray-900/50 border-t border-gray-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4 max-w-4xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white mb-6",
                                    children: "What is a Ugandan VJ?"
                                }, void 0, false, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose prose-invert prose-orange max-w-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 leading-relaxed mb-4",
                                            children: [
                                                "In Uganda, a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Video Jockey (VJ)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 30
                                                }, this),
                                                " is a professional who translates and narrates international movies and TV series into ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Luganda"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 57
                                                }, this),
                                                " — Uganda's most widely spoken Bantu language. Unlike traditional dubbing, Ugandan VJs perform live or pre-recorded narration in a uniquely engaging conversational style that resonates deeply with local audiences."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 leading-relaxed mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "VJ Junior"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                ", ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Omutaka Ice P"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 45
                                                }, this),
                                                ", and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "VJ Jingo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 81
                                                }, this),
                                                " are household names in Uganda. Their Luganda translations of Hollywood blockbusters, Asian action films, and international series have made quality cinema accessible to millions of Ugandans who prefer their content in the local language."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 leading-relaxed",
                                            children: [
                                                "On ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Kilax Movies"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vjs/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 20
                                                }, this),
                                                ", you can browse and stream the complete catalogs of all top Ugandan VJs. Whether you're searching for a specific VJ's translated movies or want to discover new content, our VJ Directory helps you find exactly what you need."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/movies",
                                            className: "px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors",
                                            children: "Browse All Translated Movies"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/series",
                                            className: "px-5 py-2 rounded-full border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold transition-colors",
                                            children: "Browse Translated Series"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vjs/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vjs/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vjs/page.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/vjs/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vjs/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/vjs/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/vjs/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3a062a5e._.js.map