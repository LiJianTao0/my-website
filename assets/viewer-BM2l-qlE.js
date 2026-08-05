import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";import"./marked.esm-Bmtv0uHa.js";import{t as n}from"./curved-arc-carousel-CSnACETF.js";var r=`# 个人内容输入模板\r
\r
这是你的**个人网站内容输入模板**。按照下面的结构，把内容填进去，就能生成你的个人主页。\r
\r
## 一、个人介绍\r
\r
填写你的基本信息，让访客认识你。\r
\r
| 内容项 | 填写位置 |\r
|--------|---------|\r
| 姓名 | 封面书名、左页品牌名 |\r
| 一句话简介 | 封面副标题 |\r
| 详细自我介绍 | 左页"你好"段落 |\r
\r
## 二、我的作品\r
\r
在作品网格里展示你的项目，每个作品一张卡片。\r
\r
| 内容项 | 填写位置 |\r
|--------|---------|\r
| 作品名称 | 卡片标题 |\r
| 作品简介 | 卡片描述（一句话） |\r
| 作品演示/下载 | 卡片的"打开/下载"入口 |\r
\r
## 三、联系方式\r
\r
让访客能找到你。\r
\r
| 内容项 | 填写位置 |\r
|--------|---------|\r
| 邮箱 | 联系按钮指向的链接 |\r
| 社交账号 | 联系区链接 |\r
| 头像 | 左页头像图片 |\r
\r
## 怎么填\r
\r
- **文字内容**：编辑 \`src/curved-arc-carousel.html\`，把卡片里的占位文字替换成你的内容（每张卡 = 编号 + 小标签 + 描述）\r
- **图片素材**：放进对应目录，替换引用路径\r
- **保存即刷新**：Vite 热更新，改完立刻看到效果\r
\r
## 模板已就绪\r
\r
动画、布局、样式都已配好，你只需要**替换文字和素材**，不需要写代码。\r
`,i=`/* \r
 * Curved Arc Carousel \r
 * Sketchbook & Paper Tactile Aesthetics\r
 */\r
\r
/* ========================================================\r
   EASY CONFIGURATION\r
   ======================================================== */\r
:root {\r
  /* Spacing & Position */\r
  --arc-vertical-position: 28%; /* Increase to lower the arc (e.g., 35%), decrease to raise it (e.g., 20%) */\r
  --arc-card-width: clamp(260px, min(80vw, 70svh), 800px); /* Width of card area - prevents clipping */\r
\r
  /* Typography - using min(vw, svh) to prevent layout shifts and clipping on mobile */\r
  --font-number-size: clamp(8rem, min(25vw, 45svh), 30rem); \r
  --font-pill-size: clamp(0.75rem, min(1.5vw, 3svh), 1.6rem);\r
  --font-desc-size: clamp(1rem, min(2.5vw, 5svh), 2.5rem);\r
\r
  /* Sketchbook Theme Colors */\r
  --sk-bg: #fbf9f4;\r
  --sk-paper: #f0ebd8;\r
  --sk-ink: #191b1f;\r
  --sk-ink-light: #333333;\r
  --sk-paper-shadow: rgba(0, 0, 0, 0.08);\r
  --sk-accent-red: #ef233c;\r
  --sk-accent-blue: #3a86ff;\r
  --sk-accent-yellow: #f4a261;\r
  --sk-accent-green: #2a9d8f;\r
  --sk-accent-purple: #9b5de5;\r
  --sk-grid: rgba(0, 0, 0, 0.04);\r
}\r
\r
/* Wrapper to isolate pinning logic and prevent jumpiness */\r
#arcCarouselPinWrapper {\r
  position: relative;\r
  width: 100%;\r
  background-color: var(--sk-bg);\r
  overflow: hidden;\r
}\r
\r
/* Main Section */\r
.arc-carousel-section {\r
  position: relative;\r
  width: 100vw;\r
  height: 100svh;\r
  background-color: var(--sk-bg);\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
  z-index: 1;\r
}\r
\r
/* Grid Overlay (Notebook Graph Paper) */\r
.sketch-grid-overlay {\r
  position: absolute;\r
  top: 0; left: 0; right: 0; bottom: 0;\r
  background-image: \r
    linear-gradient(var(--sk-grid) 1px, transparent 1px),\r
    linear-gradient(90deg, var(--sk-grid) 1px, transparent 1px);\r
  background-size: 30px 30px;\r
  pointer-events: none;\r
  z-index: 0;\r
}\r
\r
/* Header - Removed */\r
\r
/* System Coordinate Root */\r
.arc-system {\r
  position: absolute;\r
  top: var(--arc-vertical-position);\r
  left: 0;\r
  width: 100%;\r
  height: 0;\r
  z-index: 10;\r
}\r
\r
/* Integrated Header (Mobile Only) */\r
.arc-content-header {\r
  position: absolute;\r
  top: 8%;\r
  left: 0;\r
  width: 100%;\r
  text-align: center;\r
  z-index: 10;\r
  padding: 0 1.5rem;\r
  box-sizing: border-box;\r
}\r
\r
/* Integrated Footer (Mobile Only) */\r
.arc-content-footer {\r
  position: absolute;\r
  bottom: 8%;\r
  left: 0;\r
  width: 100%;\r
  text-align: center;\r
  z-index: 10;\r
  padding: 0 1.5rem;\r
  box-sizing: border-box;\r
}\r
\r
.arc-header-title {\r
  font-family: 'Outfit', sans-serif;\r
  font-size: clamp(2rem, 8vw, 3rem);\r
  font-weight: 900;\r
  color: var(--sk-ink);\r
  margin: 0 0 0.5rem 0;\r
}\r
\r
.arc-header-desc {\r
  font-family: 'Caveat', cursive;\r
  font-size: clamp(1.2rem, 5vw, 1.8rem);\r
  color: var(--sk-ink-light);\r
  margin: 0 auto;\r
  max-width: 600px;\r
}\r
\r
@media (max-width: 1023px) {\r
  :root {\r
    /* Perfect center alignment for mobile devices */\r
    --arc-vertical-position: 50%;\r
    \r
    /* Force larger text relative to screen on mobile, while preventing vertical clipping */\r
    --font-number-size: clamp(6rem, min(35vw, 40svh), 30rem);\r
    --font-desc-size: clamp(0.9rem, min(4.5vw, 4.5svh), 2.5rem);\r
  }\r
}\r
\r
/* Sketchbook preview fix: hide integrated header/footer on very short screens to prevent overlapping */\r
@media (max-width: 1023px) and (max-height: 650px) {\r
  .arc-content-header,\r
  .arc-content-footer {\r
    display: none !important;\r
  }\r
  :root {\r
    /* Since the card's visual weight is at the bottom (text under the number), \r
       on shorter screens the arc axis must be positioned higher (30%) so the description fits! */\r
    --arc-vertical-position: 30%;\r
  }\r
}\r
@media (min-width: 1024px) {\r
  /* On desktop, the 100vh area is strictly for the giant numbers.\r
     The standalone preview page handles the title above the component. */\r
  .arc-content-header,\r
  .arc-content-footer {\r
    display: none;\r
  }\r
}\r
\r
/* SVG Track */\r
.arc-svg {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  /* Height is large enough to not clip the arc */\r
  height: 1500px;\r
  overflow: visible;\r
  pointer-events: none;\r
  will-change: transform;\r
}\r
\r
.arc-path-bg {\r
  fill: none;\r
  stroke: var(--sk-ink);\r
  stroke-width: 2;\r
  opacity: 0.1;\r
  stroke-dasharray: 6 6;\r
}\r
\r
.arc-path-ticks {\r
  fill: none;\r
  stroke: var(--sk-ink);\r
  stroke-width: 12;\r
  stroke-dasharray: 2 120;\r
  opacity: 0.15;\r
}\r
\r
/* Removed doodle arrow */\r
\r
/* Cards Container */\r
.arc-cards-container {\r
  position: absolute;\r
  top: 0;\r
  left: 50%;\r
  width: 0;\r
  height: 0;\r
  /* Cards are positioned relative to this (50%, 0) point */\r
  perspective: 1000px;\r
}\r
\r
.arc-card {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: var(--arc-card-width);\r
  transform-origin: 50% 50%;\r
  will-change: transform, opacity;\r
  opacity: 0;\r
}\r
\r
/* Card Visuals - Minimalist */\r
.card-content {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
  gap: 1.25rem;\r
}\r
\r
.card-number {\r
  font-family: 'Outfit', sans-serif;\r
  font-size: var(--font-number-size);\r
  font-weight: 900;\r
  line-height: 1;\r
  color: transparent;\r
  -webkit-text-stroke: 3px var(--sk-ink);\r
  letter-spacing: -0.05em;\r
  margin: 0;\r
  /* Pull the number up by exactly half its height to perfectly center it on the arc line */\r
  margin-top: -0.5em;\r
  /* Use negative margin to offset the invisible vertical space inside the text's bounding box. \r
     Adjust this to change the gap between the number and the pill below it. */\r
  margin-bottom: -1rem; \r
}\r
\r
.card-pill {\r
  font-family: 'Space Grotesk', sans-serif;\r
  font-size: var(--font-pill-size);\r
  font-weight: 700;\r
  letter-spacing: 0.05em;\r
  padding: clamp(10px, 1.5vw, 16px) clamp(20px, 3vw, 32px);\r
  background: var(--sk-bg);\r
  border: clamp(2px, 0.2vw, 4px) solid var(--sk-ink);\r
  border-radius: 50px;\r
  white-space: nowrap;\r
}\r
\r
.card-desc {\r
  font-family: 'Space Grotesk', sans-serif;\r
  font-size: var(--font-desc-size);\r
  line-height: 1.4;\r
  color: var(--sk-ink);\r
  font-weight: 500;\r
  margin: 0;\r
  max-width: 100%;\r
}\r
`,a=`/**\r
 * Curved Arc Carousel - Javascript Logic\r
 * \r
 * Uses parametric circular math to arrange and rotate cards along a virtual circle,\r
 * ensuring they never overlap by dynamically calculating the required angle gap.\r
 */\r
\r
export function initCurvedArcCarousel() {\r
  // Check if GSAP and ScrollTrigger are loaded\r
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {\r
    console.error('GSAP or ScrollTrigger is missing. Please ensure they are loaded.');\r
    return;\r
  }\r
\r
  // Register ScrollTrigger\r
  gsap.registerPlugin(ScrollTrigger);\r
\r
  const DOM = {\r
    section: document.getElementById('arcCarouselSection'),\r
    pinWrapper: document.getElementById('arcCarouselPinWrapper'),\r
    svg: document.getElementById('arcSvg'),\r
    pathBg: document.getElementById('arcPathBg'),\r
    pathTicks: document.getElementById('arcPathTicks'),\r
    cardsContainer: document.getElementById('arcCardsContainer'),\r
    cards: gsap.utils.toArray('.arc-card')\r
  };\r
\r
  if (!DOM.section || DOM.cards.length === 0) return;\r
\r
  /* ========================================================\r
     EASY CONFIGURATION\r
     Change these values to customize the carousel.\r
     ======================================================== */\r
  const USER_SETTINGS = {\r
    // Gap between cards in pixels. \r
    // Increase this value to push cards further apart.\r
    cardGapDesktop: 220, \r
    cardGapMobile: 100,\r
    \r
    // Arc radius (controls how flat or curved the trajectory is)\r
    baseRadiusDesktop: 1800,\r
    baseRadiusMobile: 600,\r
  };\r
\r
  // System Configuration state (internal)\r
  let config = {\r
    radius: 800,       // dynamically calculated\r
    angleStepRad: 0.3, // dynamically calculated\r
    scrollDistance: 3000,\r
    totalCards: DOM.cards.length\r
  };\r
\r
  let scrollTriggerInstance = null;\r
\r
  /**\r
   * Recalculates the system geometry based on the current viewport and actual card width.\r
   * This guarantees cards will physically separate and the SVG arc will perfectly match.\r
   */\r
  function calculateGeometry() {\r
    const w = window.innerWidth;\r
    \r
    // 1. Calculate dynamic fluid radius based on window width\r
    const radiusProgress = Math.max(0, Math.min(1, (w - 400) / (1920 - 400)));\r
    config.radius = USER_SETTINGS.baseRadiusMobile + (USER_SETTINGS.baseRadiusDesktop - USER_SETTINGS.baseRadiusMobile) * radiusProgress;\r
\r
    // 2. Measure actual card width to guarantee no overlap\r
    const sampleCard = DOM.cards[0];\r
    const cardWidth = sampleCard.offsetWidth || (w < 768 ? 260 : 360);\r
    \r
    // We want physical arc length between cards = cardWidth + gap\r
    // Fluid gap calculation based on screen width\r
    const gapProgress = Math.max(0, Math.min(1, (w - 400) / (1440 - 400)));\r
    const gap = USER_SETTINGS.cardGapMobile + (USER_SETTINGS.cardGapDesktop - USER_SETTINGS.cardGapMobile) * gapProgress;\r
    const minArcLength = cardWidth + gap;\r
    \r
    // arc_length = radius * theta(radians) -> theta = arc_length / radius\r
    config.angleStepRad = minArcLength / config.radius;\r
\r
    // 3. Setup the perfect SVG Full Circle\r
    const svgWidth = DOM.svg.clientWidth || w;\r
    const cx = svgWidth / 2;\r
    const cy = config.radius; // The geometric center of the circle is 'radius' down from the apex\r
\r
    // Set circle attributes\r
    DOM.pathBg.setAttribute('cx', cx);\r
    DOM.pathBg.setAttribute('cy', cy);\r
    DOM.pathBg.setAttribute('r', config.radius);\r
\r
    DOM.pathTicks.setAttribute('cx', cx);\r
    DOM.pathTicks.setAttribute('cy', cy);\r
    DOM.pathTicks.setAttribute('r', config.radius);\r
\r
    // Apply pivot for SVG rotation so it matches the cards\r
    DOM.svg.style.transformOrigin = \`\${cx}px \${cy}px\`;\r
  }\r
\r
  /**\r
   * Positions a single card based on a specific angle (in radians)\r
   * Angle 0 = apex of the curve (top center)\r
   * Positive angle = Right side, Negative angle = Left side\r
   */\r
  function positionCard(card, angleRad, progress) {\r
    // Math: circle with center at (0, R)\r
    // x = R * sin(theta)\r
    // y = R - R * cos(theta) \r
    const x = config.radius * Math.sin(angleRad);\r
    const y = config.radius - (config.radius * Math.cos(angleRad));\r
    \r
    // Rotate card to match tangent. Since circle tangent is parallel to the radius, \r
    // rotation in degrees is simply angle in degrees.\r
    const rotationDeg = angleRad * (180 / Math.PI);\r
\r
    // Apply slightly randomized tilt that resolves when centered\r
    // This gives the sketchbook paper a messy feel\r
    const randomTilt = parseFloat(card.dataset.tilt || 0);\r
    const finalRot = rotationDeg + (randomTilt * (1 - progress)); // tilt goes away at center\r
\r
    // Visibility: fade out cards that go too far around the bend earlier so they don't get clipped by screen edges\r
    const absoluteAngleDeg = Math.abs(rotationDeg);\r
    let opacity = 1;\r
    if (absoluteAngleDeg > 55) opacity = 0;\r
    else if (absoluteAngleDeg > 35) opacity = 1 - ((absoluteAngleDeg - 35) / 20);\r
\r
    gsap.set(card, {\r
      x: x - (card.offsetWidth / 2), // center horizontally\r
      y: y,\r
      rotation: finalRot,\r
      opacity: opacity\r
    });\r
  }\r
\r
  /**\r
   * Initial Setup\r
   */\r
  function renderAtProgress(progress) {\r
    const maxSweep = (config.totalCards - 1) * config.angleStepRad;\r
    const currentCenterAngle = progress * maxSweep;\r
\r
    DOM.cards.forEach((card, i) => {\r
      const angleRad = (i * config.angleStepRad) - currentCenterAngle;\r
      const localizedProgress = Math.max(0, 1 - (Math.abs(angleRad) / config.angleStepRad));\r
      positionCard(card, angleRad, localizedProgress);\r
    });\r
\r
    // Rotate the entire SVG track to sync with the cards\r
    // Cards move left (negative angle) as progress increases, so the track should rotate left\r
    const rotationDeg = -currentCenterAngle * (180 / Math.PI);\r
    DOM.svg.style.transform = \`rotate(\${rotationDeg}deg)\`;\r
  }\r
\r
  function init() {\r
    DOM.cards.forEach(card => {\r
      card.dataset.tilt = (Math.random() * 8 - 4).toFixed(2);\r
    });\r
\r
    calculateGeometry();\r
\r
    if (scrollTriggerInstance) {\r
      scrollTriggerInstance.kill();\r
    }\r
\r
    config.scrollDistance = window.innerHeight * (config.totalCards * 0.8);\r
    \r
    // Force initial render before scroll trigger attaches\r
    renderAtProgress(0);\r
\r
    let snapTimeout;\r
    let lastProgress = 0;\r
    let macroDirection = 1;\r
\r
    scrollTriggerInstance = ScrollTrigger.create({\r
      trigger: DOM.pinWrapper,\r
      start: 'top top',\r
      // Less scroll distance on mobile devices\r
      end: () => window.innerWidth < 1024 ? "+=1500" : "+=3000",\r
      pin: DOM.section, \r
      pinSpacing: true,\r
      scrub: window.innerWidth < 1024 ? 0.3 : 0.5,\r
      // Custom magnetic snap system, compatible with smooth scrolling\r
      onUpdate: (self) => {\r
        // Track macro scroll direction, ignoring micro bounces\r
        if (Math.abs(self.progress - lastProgress) > 0.002) {\r
           macroDirection = self.progress > lastProgress ? 1 : -1;\r
        }\r
        lastProgress = self.progress;\r
\r
        renderAtProgress(self.progress);\r
\r
        clearTimeout(snapTimeout);\r
        snapTimeout = setTimeout(() => {\r
           // Don't snap if user is at the absolute start or end\r
           if (self.progress <= 0 || self.progress >= 1) return;\r
\r
           const step = 1 / (config.totalCards - 1);\r
           const currentStepIndex = self.progress / step;\r
           const decimal = currentStepIndex % 1; // Decimal remainder\r
           \r
           let targetIndex;\r
           if (macroDirection === 1) {\r
              // Scroll down: if passed 15% of the way to the next card, snap to it\r
              // \r
              targetIndex = decimal > 0.15 ? Math.ceil(currentStepIndex) : Math.floor(currentStepIndex);\r
           } else {\r
              // Scroll up: if scrolled back by 15%, snap to previous card\r
              targetIndex = decimal < 0.85 ? Math.floor(currentStepIndex) : Math.ceil(currentStepIndex);\r
           }\r
           \r
           targetIndex = Math.max(0, Math.min(config.totalCards - 1, targetIndex));\r
           const targetProgress = targetIndex * step;\r
           \r
           if (Math.abs(self.progress - targetProgress) < 0.005) return;\r
\r
           const targetScroll = self.start + (targetProgress * (self.end - self.start));\r
           \r
           // Use native Lenis scrollTo if available to avoid fighting its render engine \r
           // \r
           if (window.lenis) {\r
              window.lenis.scrollTo(targetScroll, { \r
                 duration: 1.2, \r
                 easing: (t) => 1 - Math.pow(1 - t, 4) // Smooth easeOutQuart\r
              });\r
           } else {\r
              // Manual scroll animation fallback (no ScrollToPlugin required)\r
              const scrollProxy = { y: window.scrollY || document.documentElement.scrollTop };\r
              gsap.to(scrollProxy, {\r
                 y: targetScroll,\r
                 duration: 0.8,\r
                 ease: "power3.out",\r
                 onUpdate: () => window.scrollTo(0, scrollProxy.y)\r
              });\r
           }\r
        }, 150); // Wait a moment for scroll momentum to settle\r
      }\r
    });\r
  }\r
\r
  let mm = gsap.matchMedia();\r
\r
  mm.add("(prefers-reduced-motion: no-preference)", () => {\r
    // Debounced resize\r
    let resizeTimer;\r
    const onResize = () => {\r
      clearTimeout(resizeTimer);\r
      resizeTimer = setTimeout(() => {\r
        // Save progress\r
        const p = scrollTriggerInstance ? scrollTriggerInstance.progress : 0;\r
        init();\r
        if (scrollTriggerInstance) {\r
           // Restore progress smoothly\r
           gsap.to(window, {\r
             scrollTo: scrollTriggerInstance.start + (p * config.scrollDistance),\r
             duration: 0\r
           });\r
        }\r
      }, 200);\r
    };\r
\r
    window.addEventListener('resize', onResize);\r
\r
    // Initialize\r
    init();\r
\r
    return () => {\r
      window.removeEventListener('resize', onResize);\r
      if (scrollTriggerInstance) {\r
        scrollTriggerInstance.kill();\r
      }\r
      clearTimeout(resizeTimer);\r
    };\r
  });\r
\r
  mm.add("(prefers-reduced-motion: reduce)", () => {\r
    // Provide a static, accessible layout without heavy animations\r
    gsap.set(DOM.svg, { display: 'none' });\r
    gsap.set(DOM.cardsContainer, { position: 'relative', left: 0, width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem 0' });\r
    gsap.set(DOM.cards, { position: 'relative', opacity: 1, width: '90%', maxWidth: '600px', transform: 'none' });\r
    const arcSystem = document.getElementById('arcSystem');\r
    if(arcSystem) gsap.set(arcSystem, { position: 'relative', height: 'auto', top: 0 });\r
    gsap.set(DOM.section, { height: 'auto', minHeight: '100vh' });\r
  });\r
\r
  // Return a clean API to allow external configurators to update settings\r
  // without polluting this file with postMessage listeners\r
  return {\r
    updateConfig: (newConfig) => {\r
      let shouldReinit = false;\r
      \r
      if (newConfig.radius) {\r
         USER_SETTINGS.baseRadiusDesktop = newConfig.radius;\r
         USER_SETTINGS.baseRadiusMobile = newConfig.radius * (600 / 1800);\r
         shouldReinit = true;\r
      }\r
      if (newConfig.gap) {\r
         USER_SETTINGS.cardGapDesktop = newConfig.gap;\r
         USER_SETTINGS.cardGapMobile = newConfig.gap * (100 / 220);\r
         shouldReinit = true;\r
      }\r
      \r
      if (shouldReinit) {\r
         init();\r
      }\r
    }\r
  };\r
}\r
`,o=e({init:()=>s});function s(){let e=document.querySelector(`.preview-iframe`);e&&(e.src=e.src);let o={readme:{lang:`language-markdown`,content:r,isMarkdown:!0},html:{lang:`language-html`,content:n},css:{lang:`language-css`,content:i},js:{lang:`language-javascript`,content:a}},s=`readme`;document.getElementById(`codeBlock`);let c=document.getElementById(`codeContainer`),l=document.getElementById(`markdownContainer`),u=document.getElementById(`copyBtn`);function d(e){let t=o[e].content;if(e===`js`){let e=document.getElementById(`slideArcRadius`),n=document.getElementById(`slideCardGap`);if(e){let n=parseInt(e.value,10);t=t.replace(/baseRadiusDesktop:\s*\d+/,`baseRadiusDesktop: ${n}`),t=t.replace(/baseRadiusMobile:\s*\d+/,`baseRadiusMobile: ${Math.round(600/1800*n)}`)}if(n){let e=parseInt(n.value,10);t=t.replace(/cardGapDesktop:\s*\d+/,`cardGapDesktop: ${e}`),t=t.replace(/cardGapMobile:\s*\d+/,`cardGapMobile: ${Math.round(100/220*e)}`)}}else if(e===`css`){let e=document.getElementById(`checkShowGrid`);e&&!e.checked&&(t=t.replace(/--sk-grid:\s*[^;]+;/,`--sk-grid: transparent;`))}return t}function f(){c.style.display=`none`,u.style.display=`none`,l.style.display=`block`,l.innerHTML=`
    <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
      <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
      <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
    </div>
  `}document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`)?.classList.remove(`active`),e.target.classList.add(`active`),s=e.target.dataset.target,f()})}),u&&u.addEventListener(`click`,()=>{navigator.clipboard.writeText(d(s));let e=u.textContent;u.textContent=`Copied! ✨`,setTimeout(()=>u.textContent=e,2e3)});let p=document.getElementById(`slideArcRadius`),m=document.getElementById(`valArcRadius`),h=document.getElementById(`slideCardGap`),g=document.getElementById(`valCardGap`),_=document.getElementById(`checkShowGrid`);function v(){e&&e.contentWindow&&e.contentWindow.postMessage({type:`updateArcConfig`,radius:p?parseInt(p.value,10):null,gap:h?parseInt(h.value,10):null,grid:_?_.checked:null},`*`),(s===`js`||s===`css`)&&f()}p&&m&&p.addEventListener(`input`,e=>{m.innerText=`${e.target.value}px`,v()}),h&&g&&h.addEventListener(`input`,e=>{g.innerText=`${e.target.value}px`,v()}),_&&_.addEventListener(`change`,v),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6})),f()}document.querySelector(`.book`)||s();export{o as t};