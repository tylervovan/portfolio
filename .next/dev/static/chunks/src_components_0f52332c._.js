(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Hero() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    // Animate title letters
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.hero-title-letter', {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out',
                        stagger: 0.05,
                        delay: 0.2
                    });
                    // Animate subtitle
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(subtitleRef.current, {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out',
                        delay: 0.8
                    });
                    // Animate links
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.hero-link', {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        stagger: 0.1,
                        delay: 1
                    });
                }
            }["Hero.useEffect.ctx"], containerRef);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const title = 'Tyler Vovan';
    const splitTitle = title.split('').map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hero-title-letter inline-block",
            children: char === ' ' ? '\u00A0' : char
        }, i, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "flex min-h-screen flex-col items-center justify-center px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: titleRef,
                className: "text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl",
                children: splitTitle
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                ref: subtitleRef,
                className: "mt-6 max-w-xl text-center text-lg text-neutral-400 sm:text-xl",
                children: "CS Student · Builder · Creating things that matter"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 flex gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/tylervovan",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hero-link text-sm uppercase tracking-widest text-neutral-400 transition-colors hover:text-white",
                        children: "GitHub"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://linkedin.com/in/tyler-vovan-30330b2a8",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hero-link text-sm uppercase tracking-widest text-neutral-400 transition-colors hover:text-white",
                        children: "LinkedIn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: "hero-link text-sm uppercase tracking-widest text-neutral-400 transition-colors hover:text-white",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Hero, "7WXxZX/R/C/37E40eOrFebdAkHg=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/DitherSphere.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DitherSphere",
    ()=>DitherSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function DitherSphere() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0
    });
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DitherSphere.useEffect": ()=>{
            setMounted(true);
        }
    }["DitherSphere.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DitherSphere.useEffect": ()=>{
            if (!mounted || !canvasRef.current || !containerRef.current) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resize = {
                "DitherSphere.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["DitherSphere.useEffect.resize"];
            resize();
            window.addEventListener('resize', resize);
            // Sphere parameters
            const sphereRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25;
            const dotSpacing = 8;
            const maxDotSize = 4;
            let rotation = 0;
            // Animate position based on scroll
            const scrollTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                onUpdate: {
                    "DitherSphere.useEffect.scrollTrigger": (self)=>{
                        // Move from left (-30% of viewport) to right (+30% of viewport)
                        positionRef.current.x = (self.progress - 0.5) * window.innerWidth * 0.6;
                    }
                }["DitherSphere.useEffect.scrollTrigger"]
            });
            // Animation loop
            let animationId;
            const animate = {
                "DitherSphere.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const centerX = canvas.width / 2 + positionRef.current.x;
                    const centerY = canvas.height / 2;
                    // Draw dithered sphere
                    for(let lat = -90; lat <= 90; lat += dotSpacing / 2){
                        const latRad = lat * Math.PI / 180;
                        const ringRadius = Math.cos(latRad) * sphereRadius;
                        const y = centerY + Math.sin(latRad) * sphereRadius;
                        // Number of dots in this ring
                        const circumference = 2 * Math.PI * ringRadius;
                        const numDots = Math.max(1, Math.floor(circumference / dotSpacing));
                        for(let i = 0; i < numDots; i++){
                            const angle = i / numDots * Math.PI * 2 + rotation;
                            // 3D to 2D projection
                            const x3d = Math.cos(angle) * ringRadius;
                            const z3d = Math.sin(angle) * ringRadius;
                            // Only draw dots on the front half
                            if (z3d < 0) continue;
                            const x = centerX + x3d;
                            // Calculate lighting (simple directional light from top-right)
                            const nx = x3d / sphereRadius;
                            const ny = (y - centerY) / sphereRadius;
                            const nz = z3d / sphereRadius;
                            // Light direction (normalized)
                            const lx = 0.5;
                            const ly = -0.5;
                            const lz = 0.7;
                            const light = Math.max(0, nx * lx + ny * ly + nz * lz);
                            // Rim light
                            const rim = Math.pow(1 - nz, 2) * 0.3;
                            const brightness = Math.min(1, light * 0.8 + rim + 0.15);
                            // Halftone effect: dot size varies with brightness
                            const dotSize = brightness * maxDotSize;
                            // Add depth fade
                            const depthFade = 0.3 + z3d / sphereRadius * 0.7;
                            ctx.beginPath();
                            ctx.arc(x, y, dotSize * depthFade, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${brightness * depthFade})`;
                            ctx.fill();
                        }
                    }
                    rotation += 0.003;
                    animationId = requestAnimationFrame(animate);
                }
            }["DitherSphere.useEffect.animate"];
            animate();
            return ({
                "DitherSphere.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    cancelAnimationFrame(animationId);
                    scrollTrigger.kill();
                }
            })["DitherSphere.useEffect"];
        }
    }["DitherSphere.useEffect"], [
        mounted
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "pointer-events-none fixed inset-0 z-0",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "h-full w-full"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/DitherSphere.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/DitherSphere.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(DitherSphere, "YIXeIe679LSlEI81lnP3cq5R2wY=");
_c = DitherSphere;
var _c;
__turbopack_context__.k.register(_c, "DitherSphere");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0f52332c._.js.map