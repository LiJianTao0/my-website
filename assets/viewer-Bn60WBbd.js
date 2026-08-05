import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";import"./marked.esm-Bmtv0uHa.js";var n=`# Train Flow Preloader\r
\r
This component is a cinematic, fullscreen preloader inspired by Awwwards-winning sites. It is powered by the **GSAP (GreenSock)** animation engine and is based on three key phases:\r
1. A giant marquee text slides in from the right edge and moves left across the screen.\r
2. A train of images follows the text, sliding in lockstep.\r
3. The train decelerates, and the designated hero image expands to fill the entire screen, seamlessly becoming the background of the Hero section.\r
\r
---\r
\r
## 1. HTML Structure\r
\r
Copy the relevant code sections to your project.\r
\r
### Preloader HTML (\`src/preloader.html\`)\r
Place it at the very beginning of your \`<body>\` tag (above the main page container) to overlay the rest of the layout during the loading phase.\r
The hero image that expands is identified by the \`data-hero\` attribute. Trailing images after the hero will be naturally covered by the expanding hero.\r
\r
### Hero HTML (\`src/hero.html\`)\r
This represents the Hero section of your page. Notice that it contains a background element with the exact same image as the hero image in the preloader, which guarantees a seamless handoff without any color flashes or jumps.\r
\r
---\r
\r
## 2. Critical Implementation Rules\r
\r
To successfully implement this preloader without breaking the transition, you **must** follow these three rules:\r
\r
### Rule #1: The Duplicate Image ("Pixel-Perfect Handoff")\r
The hero image is loaded twice: once inside the preloader (\`<img data-hero ...>\`) and once as the background of your actual Hero section (\`.hero-bg-img\`). They **must match exactly** in aspect ratio and \`object-fit\`. The preloader expands its own image to full screen, hides itself, and reveals your identical hero section underneath.\r
\r
### Rule #2: The Full Screen Rule\r
Because the preloader expands the image to exactly \`100vw\` and \`100vh\`, your actual Hero section underneath must also be exactly \`100vh\` tall and start at the very top of the page. If you have a relative navbar pushing the Hero section down, the image will instantly jump down when the preloader finishes. \r
\r
### Rule #3: Event-Driven Additions (Adding Buttons / Navbars)\r
If you add your own elements to the Hero section (e.g., a "Buy Now" button or a navbar), do **not** let them sit there statically. They will instantly pop onto the screen when the preloader vanishes, looking broken. \r
Instead, hide them by default (e.g., \`opacity: 0\` or \`transform: translateY(20px)\`) and use the custom event to animate them in smoothly:\r
\`\`\`javascript\r
document.addEventListener('preloaderComplete', () => {\r
  // Use GSAP or CSS classes here to animate in your buttons, navbars, and text!\r
});\r
\`\`\`\r
\r
---\r
\r
## 2. CSS Architecture\r
\r
Styles are divided into two modular files:\r
*   **\`src/preloader.css\`** – Handles the fullscreen container, marquee layout, and positioning of the image train.\r
*   **\`src/hero.css\`** – Handles the positioning of the hero text underneath, as well as the text mask reveal effect (\`overflow: hidden\`).\r
\r
---\r
\r
## 3. JavaScript Logic (Decoupled Architecture)\r
\r
The components are completely independent and communicate using native **Custom Events**:\r
\r
### 1. Preloader JS (\`src/preloader.js\`)\r
Controls the animation flow and saves the completion state to \`sessionStorage\`.\r
*   **First visit:** The preloader runs the full animation and dispatches the \`preloaderComplete\` event upon finishing.\r
*   **Subsequent visits:** The preloader hides immediately and dispatches the \`preloaderSkipped\` event.\r
\r
This ensures that returning users do not have to watch the entire sequence again.\r
\r
### 2. Hero JS (\`src/hero.js\`)\r
Listens for the above events and triggers the text entrance animation at the right moment:\r
\r
\`\`\`javascript\r
document.addEventListener('preloaderComplete', () => {\r
  // Animate the Hero section text with a slight delay\r
});\r
\r
document.addEventListener('preloaderSkipped', () => {\r
  // Preloader was skipped - show Hero immediately\r
});\r
\`\`\`\r
`,r=`<section class="train-preloader-container">\r
  <!-- Prevent flash of black screen on reload -->\r
  <script>\r
    if (sessionStorage.getItem('trainFlowPreloaderHasRun')) {\r
      document.currentScript.parentElement.style.display = 'none';\r
    }\r
  <\/script>\r
  <!-- Single Text Element -->\r
  <div class="train-marquee-wrapper">\r
    <div class="train-marquee-content">\r
      <span class="train-marquee-text">ITOM</span>\r
    </div>\r
  </div>\r
\r
  <!-- Image Train -->\r
  <div class="train-images-wrapper">\r
    <div class="train-images-container">\r
      <img class="train-img train-img-0" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23E24B4A'/></svg>" alt="Abstract 1">\r
      <img class="train-img train-img-1" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23EF9F27'/></svg>" alt="Abstract 2">\r
      <img class="train-img train-img-2" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23639922'/></svg>" alt="Abstract 3">\r
      <img class="train-img train-img-3" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%231D9E75'/></svg>" alt="Abstract 4">\r
      <img class="train-img train-img-4" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23378ADD'/></svg>" alt="Abstract 5">\r
      <!-- Hero image — zooms to fullscreen. data-hero marks it as the expand target -->\r
      <img class="train-img train-img-5" data-hero src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%237F77DD'/></svg>" alt="Hero Image">\r
      <!-- Trailing images — keep the train flowing; covered by hero as it expands -->\r
      <img class="train-img train-img-6" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23D4537E'/></svg>" alt="Abstract 6">\r
      <img class="train-img train-img-7" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23D85A30'/></svg>" alt="Abstract 7">\r
      <img class="train-img train-img-8" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23E24B4A'/></svg>" alt="Abstract 8">\r
    </div>\r
  </div>\r
</section>\r
`,i=`<main class="hero-section">\r
  <!-- Bright, Clean Background Image (No Overlay) -->\r
  <div class="hero-bg-wrapper">\r
    <img class="hero-bg-img" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23E24B4A'/></svg>" alt="Hero Background">\r
  </div>\r
\r
  <!-- Centered Hero Title only -->\r
  <div class="hero-container">\r
    <h1 class="hero-title">\r
      <span class="hero-title-line"><span class="hero-title-inner">HERO</span></span>\r
    </h1>\r
  </div>\r
</main>\r
`,a=`:root {\r
  --preloader-bg: #0B0B0B;\r
  --marquee-color: #FFFFFF;\r
  --font-display: 'Syne', 'Clash Display', 'Plus Jakarta Sans', system-ui, sans-serif;\r
  --preloader-font-size: 14vw;\r
}\r
\r
.train-preloader-container {\r
  position: fixed;\r
  inset: 0;\r
  z-index: 100;\r
  width: 100vw;\r
  height: 100vh;\r
  background-color: var(--preloader-bg);\r
  overflow: hidden;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
/* Marquee Text Layer */\r
.train-marquee-wrapper {\r
  position: absolute;\r
  inset: 0;\r
  pointer-events: none;\r
  z-index: 3;\r
  mix-blend-mode: difference;\r
}\r
\r
.train-marquee-content {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  font-family: var(--font-display);\r
  font-size: var(--preloader-font-size);\r
  font-weight: 800;\r
  text-transform: uppercase;\r
  color: var(--marquee-color);\r
  line-height: 1;\r
  letter-spacing: -0.02em;\r
  margin: 0;\r
  white-space: nowrap;\r
  will-change: transform;\r
  opacity: 0;\r
}\r
\r
.train-marquee-text {\r
  display: block;\r
  will-change: transform;\r
}\r
\r
/* Image Train Layer */\r
.train-images-wrapper {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 2;\r
  pointer-events: none;\r
}\r
\r
.train-images-container {\r
  position: relative;\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
.train-img {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 300px;\r
  height: 300px;\r
  object-fit: cover;\r
  border-radius: 0px;\r
  will-change: transform, opacity, width, height;\r
  opacity: 0; /* Images start hidden; GSAP makes them visible after positioning */\r
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);\r
  border: 1px solid rgba(255, 255, 255, 0.1);\r
}\r
\r
/* Ensure the final zoom image sits on top of everything, including the marquee */\r
.train-img-final {\r
  z-index: 4 !important;\r
  border: none;\r
}\r
\r
/* Responsive details */\r
@media (max-width: 768px) {\r
  .train-img {\r
    width: 200px;\r
    height: 200px;\r
    border-radius: 0px;\r
  }\r
}\r
`,o=`/* Hero Section CSS */\r
.hero-section {\r
  position: relative;\r
  width: 100vw;\r
  height: 100vh;\r
  overflow: hidden;\r
  color: #FFFFFF;\r
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;\r
  background-color: #0B0B0B;\r
}\r
\r
/* Background — always visible, no animation needed.\r
   The preloader's final image expands to cover this exact area. */\r
.hero-bg-wrapper {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 1;\r
}\r
\r
.hero-bg-img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
}\r
\r
/* Center Content Layer */\r
.hero-container {\r
  position: relative;\r
  z-index: 3;\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  box-sizing: border-box;\r
  padding: 2rem;\r
}\r
\r
/* Title with Mask Reveal */\r
.hero-title {\r
  font-family: var(--font-display);\r
  font-size: 10vw;\r
  font-weight: 900;\r
  line-height: 1;\r
  margin: 0;\r
  letter-spacing: 0.35em;\r
  text-transform: uppercase;\r
  text-align: center;\r
  will-change: letter-spacing;\r
}\r
\r
.hero-title-line {\r
  display: block;\r
  overflow: hidden; /* This is the mask — hides the inner text below */\r
}\r
\r
.hero-title-inner {\r
  display: block;\r
  /* GSAP controls translateY for the mask-reveal entrance */\r
  will-change: transform;\r
}\r
\r
/* Responsive */\r
@media (max-width: 768px) {\r
  .hero-title {\r
    font-size: 14vw;\r
  }\r
}\r
`,s=`/**\r
 * Train Flow Preloader\r
 * --------------------\r
 * Animation phases:\r
 *   1. Fade-in  — ITOM text appears on the right\r
 *   2. Train    — text + images slide left as one unit\r
 *   3. Zoom     — hero image expands to fill viewport (covers trailing images via z-index)\r
 *   4. Handoff  — pixel-perfect swap to hero section (same image underneath)\r
 *\r
 * The hero image is identified by the [data-hero] attribute. If not present,\r
 * falls back to the last image. Trailing images after the hero keep sliding\r
 * but are naturally covered by the expanding hero.\r
 */\r
\r
let activePreloaderTl = null;\r
\r
function runPreloaderAnimation() {\r
  return new Promise(resolve => {\r
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
\r
    if (activePreloaderTl) {\r
      activePreloaderTl.kill();\r
      activePreloaderTl = null;\r
    }\r
    gsap.killTweensOf('*');\r
\r
    const container = document.querySelector('.train-preloader-container');\r
    const marqueeContent = document.querySelector('.train-marquee-content');\r
    const images = Array.from(document.querySelectorAll('.train-img'))\r
      .filter(img => img.style.display !== 'none');\r
\r
    if (!container || !marqueeContent || images.length === 0) {\r
      return resolve();\r
    }\r
\r
    if (prefersReducedMotion) {\r
      gsap.set(container, { display: 'none' });\r
      return resolve();\r
    }\r
\r
    document.fonts.ready.then(() => {\r
      // ── Identify the hero image ──\r
      const heroImage = images.find(img => img.hasAttribute('data-hero')) || images[images.length - 1];\r
      const heroIndex = images.indexOf(heroImage);\r
      const otherImages = images.filter((_, i) => i !== heroIndex);\r
\r
      // Mark hero for z-index stacking (sits above all other train images)\r
      images.forEach(img => img.classList.remove('train-img-final'));\r
      heroImage.classList.add('train-img-final');\r
\r
      // ── Layout calculations ──\r
      const isMobile = window.innerWidth <= 768;\r
      const cardSize = isMobile ? 200 : 300;\r
      const gap = isMobile ? 30 : 60;\r
      const edgePadding = isMobile ? 15 : 40;\r
\r
      const vpW = document.documentElement.clientWidth;\r
      const vpH = document.documentElement.clientHeight;\r
\r
      const textWidth = marqueeContent.getBoundingClientRect().width || (isMobile ? 150 : 350);\r
\r
      // Position text so its RIGHT edge is flush with the RIGHT edge of the viewport.\r
      // All images start completely off-screen to the right.\r
      const startX = vpW / 2 - textWidth - edgePadding;\r
      const textCenterStart = startX + textWidth / 2;\r
\r
      // Calculate travel so the HERO image (not necessarily the last) lands at center\r
      const heroCenterOffset = textWidth + gap + heroIndex * (cardSize + gap) + cardSize / 2;\r
      const totalTravel = startX + heroCenterOffset;\r
\r
      // ── Reset all elements ──\r
      gsap.set(container, {\r
        visibility: 'visible',\r
        backgroundColor: 'var(--preloader-bg)',\r
        zIndex: 100\r
      });\r
\r
      gsap.set(marqueeContent, {\r
        x: textCenterStart,\r
        xPercent: -50,\r
        yPercent: -50,\r
        opacity: 0\r
      });\r
\r
      images.forEach((img, index) => {\r
        const offset = textWidth + gap + index * (cardSize + gap) + cardSize / 2;\r
        gsap.set(img, {\r
          x: startX + offset,\r
          xPercent: -50,\r
          yPercent: -50,\r
          scale: 1,\r
          rotation: 0,\r
          skewX: 0,\r
          opacity: 1,\r
          width: cardSize,\r
          height: cardSize,\r
          top: '50%',\r
          left: '50%',\r
          borderRadius: '0px'\r
        });\r
      });\r
\r
      // ── Build master timeline ──\r
      activePreloaderTl = gsap.timeline();\r
      const tl = activePreloaderTl;\r
\r
      // Timing constants (seconds)\r
      const FADE_DELAY = 0.2;\r
      const SLIDE_START = 0.7;\r
      const SLIDE_DUR = 4.5;\r
      const SLIDE_EASE = 'power3.inOut';\r
      const ZOOM_DUR = 2.0;\r
      const ZOOM_START = SLIDE_START + SLIDE_DUR - ZOOM_DUR;\r
      const SLIDE_END = SLIDE_START + SLIDE_DUR;\r
\r
      // ── Phase 1: Fade in ITOM text ──\r
      tl.to(marqueeContent, {\r
        opacity: 1,\r
        duration: 0.8,\r
        ease: 'power2.out'\r
      }, FADE_DELAY);\r
\r
      // ── Phase 2: Train lockstep slide ──\r
      // Text slides\r
      tl.to(marqueeContent, {\r
        x: textCenterStart - totalTravel,\r
        duration: SLIDE_DUR,\r
        ease: SLIDE_EASE\r
      }, SLIDE_START);\r
\r
      // ALL images slide in sync (including trailing ones after hero)\r
      images.forEach((img, index) => {\r
        const offset = textWidth + gap + index * (cardSize + gap) + cardSize / 2;\r
        const endX = (startX + offset) - totalTravel;\r
\r
        tl.to(img, {\r
          x: endX,\r
          duration: SLIDE_DUR,\r
          ease: SLIDE_EASE\r
        }, SLIDE_START);\r
      });\r
\r
      // ── Phase 3: Hero image zoom to fullscreen ──\r
      // Hero z-index is highest, so it naturally covers trailing images as it expands\r
      tl.to(heroImage, {\r
        width: vpW,\r
        height: vpH,\r
        duration: ZOOM_DUR,\r
        ease: 'power2.inOut'\r
      }, ZOOM_START);\r
\r
      // Fade out text and all non-hero images (including trailing ones behind the hero)\r
      tl.to([marqueeContent, ...otherImages], {\r
        opacity: 0,\r
        duration: 0.8,\r
        ease: 'power2.out'\r
      }, ZOOM_START + 0.4);\r
\r
      // NOTE: Container background stays OPAQUE until zoom is fully complete.\r
\r
      // ── Phase 4: Pixel-perfect handoff ──\r
      tl.set(heroImage, {\r
        top: 0,\r
        left: 0,\r
        x: 0,\r
        y: 0,\r
        xPercent: 0,\r
        yPercent: 0,\r
        width: '100%',\r
        height: '100%'\r
      }, SLIDE_END);\r
\r
      // One render frame later: hide container + dispatch event + resolve\r
      tl.call(() => {\r
        gsap.set(container, { visibility: 'hidden', zIndex: 0 });\r
        document.dispatchEvent(new Event('preloaderComplete'));\r
        resolve();\r
      }, null, SLIDE_END + 0.016);\r
    });\r
  });\r
}\r
\r
// ── Bootstrap ──\r
document.addEventListener('DOMContentLoaded', () => {\r
  const hasRun = sessionStorage.getItem('trainFlowPreloaderHasRun');\r
\r
  if (!hasRun) {\r
    runPreloaderAnimation().then(() => {\r
      sessionStorage.setItem('trainFlowPreloaderHasRun', 'true');\r
    });\r
  } else {\r
    const container = document.querySelector('.train-preloader-container');\r
    if (container) gsap.set(container, { display: 'none' });\r
    document.dispatchEvent(new Event('preloaderSkipped'));\r
  }\r
});\r
\r
// Expose for live-demo replay\r
window.runPreloaderAnimation = runPreloaderAnimation;\r
`,c=`/**\r
 * Hero Text Reveal\r
 * ----------------\r
 * Animates ONLY the "HERO" text. The background image is already visible —\r
 * it's the preloader's final image that expanded to fullscreen.\r
 *\r
 * Triggered by:\r
 *   'preloaderComplete' → cinematic mask-reveal entrance\r
 *   'preloaderSkipped'  → instant final state, no animation\r
 */\r
\r
function initHeroAnimations(isSkipped = false) {\r
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
  const title = document.querySelector('.hero-title');\r
  const titleInner = document.querySelector('.hero-title-inner');\r
\r
  if (!title || !titleInner) return;\r
\r
  if (isSkipped || prefersReducedMotion) {\r
    gsap.set(title, { opacity: 1, letterSpacing: '0.02em' });\r
    gsap.set(titleInner, { y: '0%' });\r
    return;\r
  }\r
\r
  // Hidden state — title is clipped below the mask\r
  gsap.set(title, { opacity: 1, letterSpacing: '0.35em' });\r
  gsap.set(titleInner, { y: '110%' });\r
\r
  // Fast, snappy entrance — no noticeable delay after preloader ends\r
  const tl = gsap.timeline({ delay: 0.05 });\r
\r
  // Mask-reveal: text slides up into view\r
  tl.to(titleInner, {\r
    y: '0%',\r
    duration: 0.9,\r
    ease: 'power4.out'\r
  }, 0);\r
\r
  // Letter-spacing settles for premium typographic feel\r
  tl.to(title, {\r
    letterSpacing: '0.02em',\r
    duration: 1.2,\r
    ease: 'power3.out'\r
  }, 0);\r
}\r
\r
// ── Event listeners ──\r
document.addEventListener('preloaderComplete', () => initHeroAnimations(false));\r
document.addEventListener('preloaderSkipped', () => initHeroAnimations(true));\r
`,l=e({init:()=>u});function u(){sessionStorage.removeItem(`trainFlowPreloaderHasRun`);let e=document.querySelector(`.preview-iframe`);e&&(e.src=e.src);let l={readme:{lang:`language-markdown`,content:n,isMarkdown:!0},preloaderHtml:{lang:`language-html`,content:r},heroHtml:{lang:`language-html`,content:i},preloaderCss:{lang:`language-css`,content:a},heroCss:{lang:`language-css`,content:o},preloaderJs:{lang:`language-javascript`,content:s},heroJs:{lang:`language-javascript`,content:c}},u=`preloaderHtml`;document.getElementById(`codeBlock`);let d=document.getElementById(`codeContainer`),f=document.getElementById(`markdownContainer`),p=document.getElementById(`copyBtn`),m=document.getElementById(`slideImages`),h=document.getElementById(`valImages`),g=document.getElementById(`inputPreloaderText`),_=document.getElementById(`inputHeroText`),v=document.getElementById(`colorBg`);function y(e){let t=l[e].content,n=parseInt(m.value),r=g.value,i=_.value,a=v.value;if(e===`preloaderHtml`){t=t.replace(/>ITOM</g,`>${r}<`);let e=0;t=t.replace(/<img class="train-img train-img-[^>]+>/g,t=>{if(e++,e>=6)return t;let r=n-1;return e<=r?t:``}),t=t.replace(/^\s*[\r\n]/gm,``)}else if(e===`heroHtml`)t=t.replace(/(<span class="hero-title-inner">)[^<]+(<\/span>)/,`$1${i}$2`);else if(e===`preloaderCss`){t=t.replace(/--preloader-bg:\s*[^;]+;/,`--preloader-bg: ${a};`);let e=r.length,n=14;e>4&&(n=Math.max(4,56/e),n=Math.round(n*10)/10),t=t.replace(/--preloader-font-size:\s*[^;]+;/,`--preloader-font-size: ${n}vw;`)}return t}function b(){d.style.display=`none`,p.style.display=`none`,f.style.display=`block`,f.innerHTML=`
      <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
        <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
        <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
      </div>
    `}function x(){let t=parseInt(m.value),n=g.value,r=_.value,i=v.value;h.textContent=t,e&&e.contentWindow&&e.contentWindow.postMessage({type:`update-config`,config:{imagesCount:t,preloaderText:n,heroText:r,bgColor:i}},`*`),b()}[m,g,_,v].forEach(e=>{e&&e.addEventListener(`input`,x)}),e&&e.addEventListener(`load`,()=>{x()}),document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`).classList.remove(`active`),e.target.classList.add(`active`),u=e.target.dataset.target,b()})}),p.addEventListener(`click`,()=>{let e=y(u);navigator.clipboard.writeText(e);let t=p.textContent;p.textContent=`Copied! ✨`,setTimeout(()=>p.textContent=t,2e3)}),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6})),b()}document.querySelector(`.book`)||u();export{l as t};