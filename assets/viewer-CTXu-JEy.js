import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";import"./marked.esm-Bmtv0uHa.js";var n=`# Split Text Preloader\r
\r
This component demonstrates an enterprise-grade, completely decoupled architecture. The **Preloader** is entirely separated from the **Hero** content. They communicate purely through native JavaScript Custom Events, preventing spaghetti code and ensuring they can be dropped into large codebases independently.\r
\r
## 1. HTML Structure\r
\r
Copy the HTML into their respective layout locations.\r
\r
**Preloader HTML (\`src/preloader.html\`)**\r
This should be placed at the very top of your DOM (e.g. just inside \`<body>\`), so it sits above your website.\r
\r
**Hero HTML (\`src/hero.html\`)**\r
This represents your actual website's hero section.\r
\r
## 2. CSS Architecture\r
\r
The styles are fully modular. \r
- **\`src/preloader.css\`** handles the fixed overlay, blending modes, and image montage.\r
- **\`src/hero.css\`** handles the typography and layout of the page underneath.\r
\r
*Note: Be sure to set \`body { margin: 0; overflow: hidden; }\` globally if you want a true full-screen experience.*\r
\r
## 3. JavaScript Logic (Decoupled)\r
\r
We use a Custom Event architecture. The preloader runs its animation and then "announces" to the rest of the application that it's done.\r
\r
**1. \`src/preloader.js\`:**\r
Handles the GSAP animation and Session Storage. It checks if the user has visited already.\r
- If it's a first visit, it plays the animation and dispatches a \`preloaderComplete\` event.\r
- If it's a subsequent visit, it hides itself instantly and dispatches a \`preloaderSkipped\` event.\r
\r
**2. \`src/hero.js\`:**\r
Your hero section (or any other component on your page) simply listens for these events. It knows exactly *when* to animate in, but it has zero knowledge of *how* the preloader works.\r
\r
\`\`\`javascript\r
// Inside your hero or page logic\r
document.addEventListener('preloaderComplete', () => {\r
   // Animate hero text in smoothly\r
});\r
\r
document.addEventListener('preloaderSkipped', () => {\r
   // Preloader was bypassed, animate hero text immediately\r
});\r
\`\`\`\r
\r
### Why this architecture?\r
If you are building a massive application, you do not want your Hero component to be tightly coupled to your Preloader. By splitting them into \`preloader.css\`/\`preloader.js\` and \`hero.css\`/\`hero.js\`, you achieve perfect modularity.\r
`,r=`<section class="split-hero-container">\r
  <div class="montage-wrapper">\r
    <div class="montage-container">\r
      <img class="montage-img montage-img-0" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23E24B4A'/></svg>" alt="Abstract 1">\r
      <img class="montage-img montage-img-1" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23EF9F27'/></svg>" alt="Abstract 2">\r
      <img class="montage-img montage-img-2" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23639922'/></svg>" alt="Abstract 3">\r
      <img class="montage-img montage-img-3" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%231D9E75'/></svg>" alt="Abstract 4">\r
      <img class="montage-img montage-img-4" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23378ADD'/></svg>" alt="Abstract 5">\r
      <img class="montage-img montage-img-5" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%237F77DD'/></svg>" alt="Abstract 6">\r
      <img class="montage-img montage-img-6" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23D4537E'/></svg>" alt="Abstract 7">\r
      <img class="montage-img montage-img-7" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23D85A30'/></svg>" alt="Abstract 8">\r
      <img class="montage-img montage-img-8" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23E24B4A'/></svg>" alt="Abstract 9">\r
      <img class="montage-img montage-img-9" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%25' height='100%25' fill='%23EF9F27'/></svg>" alt="Abstract 10">\r
      <div class="montage-overlay"></div>\r
    </div>\r
  </div>\r
\r
  <div class="preloader-text-wrapper">\r
    <div class="text-container">\r
      <h1 class="split-word-full text-ITOM">ITOM</h1>\r
      <h1 class="split-word-top text-ITOM">ITOM</h1>\r
      <h1 class="split-word-bottom text-ITOM">ITOM</h1>\r
    </div>\r
  </div>\r
</section>\r
`,i=`<main>\r
  <div class="hero-content">\r
    <h1 class="hero-title">HERO</h1>\r
  </div>\r
</main>\r
`,a=`/* Preloader CSS */\r
:root {\r
  --preloader-bg: #FAFAF9;\r
}\r
\r
.split-hero-container {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 9999;\r
  width: 100vw;\r
  height: 100vh;\r
  background-color: var(--preloader-bg);\r
  overflow: hidden;\r
  visibility: hidden; /* Prevent FOUC, GSAP will make it visible */\r
}\r
\r
/* Montage Images Layer */\r
.montage-wrapper {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 100;\r
  pointer-events: none;\r
}\r
\r
.montage-container {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
  overflow: hidden;\r
  border-radius: 2rem;\r
  will-change: transform, width, height, border-radius;\r
  z-index: -1;\r
  width: 0vw;\r
  height: 0vh;\r
  opacity: 0;\r
}\r
\r
.montage-img {\r
  position: absolute;\r
  inset: 0;\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  opacity: 0;\r
}\r
\r
.montage-overlay {\r
  position: absolute;\r
  inset: 0;\r
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));\r
}\r
\r
/* Split Text Layer */\r
.preloader-text-wrapper {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 90;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  pointer-events: none;\r
  mix-blend-mode: difference;\r
  color: white;\r
}\r
\r
.text-container {\r
  position: relative;\r
  width: 100%;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.text-ITOM {\r
  position: absolute;\r
  font-size: 20vw;\r
  font-weight: 900;\r
  line-height: 1;\r
  letter-spacing: -0.05em;\r
  text-transform: uppercase;\r
  white-space: nowrap;\r
  will-change: transform, opacity;\r
  margin: 0;\r
}\r
\r
.split-word-full {\r
  opacity: 0;\r
  transform: scale(0.9);\r
}\r
\r
.split-word-top {\r
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);\r
  opacity: 0;\r
  transform: scale(0.9);\r
}\r
\r
.split-word-bottom {\r
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);\r
  opacity: 0;\r
  transform: scale(0.9);\r
}\r
`,o=`/* Hero CSS */\r
:root {\r
  --hero-text-color: #ffffff;\r
}\r
\r
.hero-content {\r
  position: relative;\r
  z-index: 120;\r
  width: 100%;\r
  height: 100vh;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  pointer-events: none;\r
}\r
\r
.hero-title {\r
  font-size: 15vw;\r
  font-weight: 900;\r
  color: var(--hero-text-color);\r
  opacity: 0;\r
  transform: translateY(80px);\r
  margin: 0;\r
}\r
`,s=`let activePreloaderTl = null;\r
\r
function runPreloaderAnimation() {\r
  return new Promise(resolve => {\r
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
\r
    // Kill any existing GSAP timelines and tweens if we are restarting\r
    if (activePreloaderTl) {\r
      activePreloaderTl.kill();\r
    }\r
    gsap.killTweensOf('*');\r
    \r
    const container = document.querySelector('.split-hero-container');\r
    const fullText = document.querySelector('.split-word-full');\r
    const topText = document.querySelector('.split-word-top');\r
    const bottomText = document.querySelector('.split-word-bottom');\r
    const montageContainer = document.querySelector('.montage-container');\r
    // Only select images that are actually active/visible\r
    const images = Array.from(document.querySelectorAll('.montage-img')).filter(img => img.style.display !== 'none');\r
\r
    if(!container || !topText) return resolve();\r
\r
    if (prefersReducedMotion) {\r
      gsap.set(container, { display: 'none' });\r
      return resolve();\r
    }\r
\r
    // Initialization (Reset states for replayability)\r
    gsap.set(container, { visibility: "visible", backgroundColor: "var(--preloader-bg)", zIndex: 9999 });\r
    gsap.set([fullText, topText, bottomText], { scale: 0.9, opacity: 0, y: "0vh" });\r
    gsap.set(montageContainer, { width: "0vw", height: "0vh", opacity: 0, xPercent: -50, yPercent: -50, force3D: true });\r
    gsap.set(images, { opacity: 0 });\r
\r
    activePreloaderTl = gsap.timeline({ defaults: { ease: "power4.inOut" }, onComplete: resolve });\r
    const tl = activePreloaderTl;\r
\r
    // Fade in FULL text first (it doesn't have the clip-path subpixel gap)\r
    tl.to(fullText, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }, 0.5);\r
    \r
    // Scale top/bottom text invisibly in the background so they are ready\r
    tl.to([topText, bottomText], { scale: 1, duration: 1.2, ease: "power3.out" }, 0.5);\r
\r
    // At the exact moment they split, swap the full text for the clipped halves\r
    tl.set(fullText, { opacity: 0 }, 2.0);\r
    tl.set([topText, bottomText], { opacity: 1 }, 2.0);\r
\r
    tl.to(topText, { y: "-15vh", duration: 1.4 }, 2.0);\r
    tl.to(bottomText, { y: "15vh", duration: 1.4 }, 2.0);\r
    tl.to(montageContainer, { opacity: 1, width: "40vw", height: "22vh", duration: 1.4, force3D: true }, 2.0);\r
\r
    const totalImages = images.length;\r
    images.forEach((img, index) => {\r
      if (index === 0) tl.set(img, { opacity: 1 }, 2.0);\r
      else tl.to(img, { opacity: 1, duration: 0 }, 2.4 + (index * 0.12));\r
    });\r
\r
    const scaleUpStart = 2.4 + (totalImages * 0.12) + 0.3;\r
\r
    tl.to(montageContainer, { width: "100vw", height: "100vh", borderRadius: "0px", duration: 1.5, force3D: true }, scaleUpStart);\r
    tl.to(topText, { y: "-38vh", duration: 1.5 }, scaleUpStart);\r
    tl.to(bottomText, { y: "38vh", duration: 1.5 }, scaleUpStart);\r
\r
    // Drop z-index early so the Hero text can appear ON TOP of the expanding image\r
    tl.set(container, { zIndex: 0 }, scaleUpStart);\r
    \r
    // Resolve the promise early (0.9s after expansion starts) to trigger the Hero text animation\r
    tl.add(resolve, scaleUpStart + 0.9);\r
\r
    // Fade out preloader background AFTER the image finishes expanding (prevents black background flashing on edges)\r
    tl.to(container, { backgroundColor: "transparent", duration: 0.5 }, scaleUpStart + 1.5);\r
  });\r
}\r
\r
document.addEventListener("DOMContentLoaded", () => {\r
  const hasRun = sessionStorage.getItem('splitHeroPreloaderHasRun');\r
  \r
  if (!hasRun) {\r
    // First visit: run animation, then dispatch custom event\r
    runPreloaderAnimation().then(() => {\r
      sessionStorage.setItem('splitHeroPreloaderHasRun', 'true');\r
      document.dispatchEvent(new Event('preloaderComplete'));\r
    });\r
  } else {\r
    // Subsequent visits: hide preloader instantly, dispatch skip event\r
    const container = document.querySelector('.split-hero-container');\r
    if (container) {\r
      gsap.set(container, { display: 'none' });\r
    }\r
    document.dispatchEvent(new Event('preloaderSkipped'));\r
  }\r
});\r
\r
// Expose for live demo config updates\r
window.runPreloaderAnimation = runPreloaderAnimation;\r
`,c=`// Hero Logic\r
function initHeroAnimations() {\r
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
  const heroTitle = document.querySelector('.hero-title');\r
  \r
  if (heroTitle) {\r
    if (prefersReducedMotion) {\r
      gsap.set(heroTitle, { y: 0, opacity: 1 });\r
    } else {\r
      gsap.fromTo(heroTitle, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" });\r
    }\r
  }\r
}\r
\r
// Decoupled architecture: Wait for the preloader to announce it has finished or been skipped\r
document.addEventListener('preloaderComplete', initHeroAnimations);\r
document.addEventListener('preloaderSkipped', initHeroAnimations);\r
`,l=e({init:()=>u});function u(){sessionStorage.removeItem(`splitHeroPreloaderHasRun`);let e=document.querySelector(`.preview-iframe`);e&&(e.src=e.src);let l={readme:{lang:`language-markdown`,content:n,isMarkdown:!0},preloaderHtml:{lang:`language-html`,content:r},heroHtml:{lang:`language-html`,content:i},preloaderCss:{lang:`language-css`,content:a},heroCss:{lang:`language-css`,content:o},preloaderJs:{lang:`language-javascript`,content:s},heroJs:{lang:`language-javascript`,content:c}},u=`preloaderHtml`;document.getElementById(`codeBlock`);let d=document.getElementById(`codeContainer`),f=document.getElementById(`markdownContainer`),p=document.getElementById(`copyBtn`),m=document.getElementById(`slideImages`),h=document.getElementById(`valImages`),g=document.getElementById(`inputPreloaderText`),_=document.getElementById(`inputHeroText`),v=document.getElementById(`colorBg`);function y(){d.style.display=`none`,p.style.display=`none`,f.style.display=`block`,f.innerHTML=`
      <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
        <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
        <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
      </div>
    `}function b(){let t=parseInt(m.value),n=g.value,r=_.value,i=v.value;h.textContent=t,e&&e.contentWindow&&e.contentWindow.postMessage({type:`update-config`,config:{imagesCount:t,preloaderText:n,heroText:r,bgColor:i}},`*`),y()}[m,g,_,v].forEach(e=>{e&&e.addEventListener(`input`,b)}),e&&e.addEventListener(`load`,()=>{b()}),document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`).classList.remove(`active`),e.target.classList.add(`active`),u=e.target.dataset.target,y()})}),p.addEventListener(`click`,()=>{let e=l[u].content;navigator.clipboard.writeText(e);let t=p.textContent;p.textContent=`Copied! ✨`,setTimeout(()=>p.textContent=t,2e3)}),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6})),y()}document.querySelector(`.book`)||u();export{l as t};