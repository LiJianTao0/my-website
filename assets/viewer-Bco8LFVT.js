import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";import"./marked.esm-Bmtv0uHa.js";var n=`# Messy Stacking Sections\r
\r
A scroll-driven transition where full-screen sections stack on top of each other like carelessly tossed sheets of paper. Each incoming section slides in from below at a slight random angle, straightens out, and pins in place while the next one arrives.\r
\r
**Built with:** GSAP ScrollTrigger + Lenis smooth scroll. Zero frameworks, pure vanilla JS.\r
\r
---\r
\r
## How It Works\r
\r
### 1. HTML Structure\r
\r
Wrap your sections inside a \`.messy-stack-container\`. Each section gets the \`.messy-section\` class and custom colors via CSS variables:\r
\r
\`\`\`html\r
<div class="messy-stack-container">\r
  <section class="messy-section" style="--bg-color: #0f0f0f; --text-color: #f8f9fa;">\r
    <div class="messy-content">\r
      <h2 class="messy-heading" data-split>Your Title</h2>\r
      <p class="messy-paragraph">Your content here.</p>\r
    </div>\r
  </section>\r
  <!-- Add as many sections as you want -->\r
</div>\r
\`\`\`\r
\r
- \`--bg-color\` and \`--text-color\` let you theme each section individually.\r
- \`data-split\` on a heading enables the kinetic letter-by-letter entrance animation.\r
- Sections can be any height — the engine adapts automatically.\r
\r
### 2. CSS Essentials\r
\r
- **\`.messy-stack-container\`** — clips horizontal overflow (rotated sections would cause scrollbars otherwise) and adds bottom padding so the last section stays pinned.\r
- **\`.messy-section\`** — \`min-height: 100vh\` ensures each section covers at least the full viewport. GPU-accelerated with \`will-change: transform\` and \`backface-visibility: hidden\`.\r
- **Fluid typography** — all font sizes, paddings, and doodle positions use \`clamp()\` for smooth scaling from 320px to any screen size. No breakpoints needed.\r
\r
### 3. JavaScript Engine\r
\r
The JS does three things:\r
\r
1. **Lenis smooth scroll** — normalizes scroll speed across all browsers and devices. Connected to GSAP's ticker for frame-perfect sync.\r
\r
2. **Pinning** — each section gets pinned via \`ScrollTrigger.create()\` with \`pin: true\` and \`pinSpacing: false\`. Short sections (≤100vh) pin at \`top top\`. Tall sections (>100vh) let you scroll their content first, then pin at \`bottom bottom\`.\r
\r
3. **Entrance animation** — sections start positioned one viewport height below (\`y: window.innerHeight\`) with a random rotation. As you scroll, \`onUpdate\` maps scroll progress to position and rotation, bringing the section to \`y: 0, rotation: 0\`. Content animations (text, doodles) fire at 85% progress.\r
\r
### 4. Content Animations (Optional)\r
\r
These are demo extras — not required for the stacking engine:\r
\r
- **Text splitting** — headings with \`data-split\` get split into \`<span class="char">\` elements and animate in with a staggered cascade (\`back.out\` easing).\r
- **SVG doodles** — decorative hand-drawn elements with \`stroke-dashoffset\` draw-in animation.\r
- **Section labels** — big semi-transparent numbers in the background.\r
\r
You can remove all of these and just use the stacking engine with your own content.\r
\r
---\r
\r
## Installation\r
\r
### 1. Install dependencies\r
\r
\`\`\`bash\r
npm install gsap lenis\r
\`\`\`\r
\r
### 2. Copy the files\r
\r
Copy these three files into your project:\r
\r
- \`messy-stacking-sections.html\` — the HTML structure\r
- \`messy-stacking-sections.css\` — styles and fluid responsive layout\r
- \`messy-stacking-sections.js\` — the stacking engine + Lenis + animations\r
\r
### 3. Initialize\r
\r
\`\`\`js\r
import { initMessyStackingSections } from './messy-stacking-sections.js';\r
\r
document.addEventListener('DOMContentLoaded', () => {\r
  initMessyStackingSections();\r
});\r
\`\`\`\r
\r
That's it. The function finds all \`.messy-section\` elements inside \`.messy-stack-container\` and sets everything up automatically.\r
\r
---\r
\r
## Customization\r
\r
### Adding/removing sections\r
Just add or remove \`<section class="messy-section">\` elements. The engine loops through all of them automatically.\r
\r
### Changing colors\r
Set \`--bg-color\` and \`--text-color\` as inline styles on each section:\r
\`\`\`html\r
<section class="messy-section" style="--bg-color: #ff6b6b; --text-color: #fff;">\r
\`\`\`\r
\r
### Tall sections\r
Sections grow with their content. If a section is taller than the viewport (e.g., lots of text on mobile), the user scrolls through it normally. The next section only appears after reaching the bottom.\r
\r
### Disabling content animations\r
Remove \`data-split\` from headings and \`.doodle\` SVGs. The stacking engine works independently.\r
\r
---\r
\r
## Accessibility\r
\r
- **Reduced motion** — automatically detected via \`prefers-reduced-motion: reduce\`. All animations are killed, Lenis is destroyed, and content is shown immediately in its final state.\r
- **Screen readers** — split headings preserve the full text via \`aria-label\`.\r
- **Keyboard navigation** — native scroll behavior is preserved by Lenis.\r
\r
---\r
\r
## Browser Support\r
\r
Works in all modern browsers (Chrome, Firefox, Safari, Edge). Requires ES modules support.\r
`,r=`<div class="messy-stack-container">\r
  \r
  <section class="messy-section" style="--bg-color: #0f0f0f; --text-color: #f8f9fa;">\r
    <div class="messy-content">\r
      <div class="messy-label">01</div>\r
      <h2 class="messy-heading" data-split>内容展示</h2>\r
      <p class="messy-paragraph">向下滚动，查看内容。</p>\r
      <!-- Decorative doodle: arrow pointing down -->\r
      <svg class="doodle doodle-arrow" viewBox="0 0 60 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">\r
        <path d="M30 5 C28 25, 32 45, 30 65" />\r
        <path d="M20 55 L30 70 L40 55" />\r
      </svg>\r
    </div>\r
  </section>\r
\r
  <section class="messy-section" style="--bg-color: #1a1a2e; --text-color: #e0e0ff;">\r
    <div class="messy-content">\r
      <div class="messy-label">02</div>\r
      <h2 class="messy-heading" data-split>内容 02</h2>\r
      <p class="messy-paragraph">这里是内容输入区域，可以替换成任意文字。</p>\r
      <!-- Decorative doodle: circle emphasis -->\r
      <svg class="doodle doodle-circle" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">\r
        <ellipse cx="60" cy="60" rx="50" ry="45" transform="rotate(-5 60 60)" stroke-dasharray="6 4" />\r
      </svg>\r
    </div>\r
  </section>\r
\r
  <section class="messy-section" style="--bg-color: #16213e; --text-color: #94e2ff;">\r
    <div class="messy-content">\r
      <div class="messy-label">03</div>\r
      <h2 class="messy-heading" data-split>内容 03</h2>\r
      <p class="messy-paragraph">这里是内容输入区域，可以替换成任意文字。</p>\r
      <!-- Decorative doodle: squiggly underline -->\r
      <svg class="doodle doodle-underline" viewBox="0 0 200 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">\r
        <path d="M5 10 Q25 2, 45 10 Q65 18, 85 10 Q105 2, 125 10 Q145 18, 165 10 Q185 2, 195 10" />\r
      </svg>\r
    </div>\r
  </section>\r
\r
  <section class="messy-section" style="--bg-color: #0a1628; --text-color: #ff9f43;">\r
    <div class="messy-content">\r
      <div class="messy-label">04</div>\r
      <h2 class="messy-heading" data-split>内容 04</h2>\r
      <p class="messy-paragraph">这里是内容输入区域，可以替换成任意文字。</p>\r
      <!-- Decorative doodle: star/sparkle -->\r
      <svg class="doodle doodle-sparkle" viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">\r
        <path d="M30 5 L30 55" />\r
        <path d="M5 30 L55 30" />\r
        <path d="M12 12 L48 48" />\r
        <path d="M48 12 L12 48" />\r
      </svg>\r
    </div>\r
  </section>\r
\r
</div>\r
`,i=`.messy-stack-container {\r
  width: 100%;\r
  position: relative;\r
  overflow-x: hidden; /* fallback for Safari 15 and older */\r
  overflow-x: clip;\r
  padding-bottom: 50vh; \r
}\r
\r
.messy-section {\r
  width: 100%;\r
  min-height: 100vh;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  position: relative;\r
  background-color: var(--bg-color, #fff);\r
  color: var(--text-color, #000);\r
  font-family: system-ui, -apple-system, sans-serif;\r
  overflow: hidden;\r
  will-change: transform;\r
  backface-visibility: hidden;\r
  transform-origin: center bottom;\r
}\r
\r
/* Subtle paper texture */\r
.messy-section::before {\r
  content: '';\r
  position: absolute;\r
  top: 0; left: 0; right: 0; bottom: 0;\r
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");\r
  opacity: 0.03;\r
  pointer-events: none;\r
}\r
\r
/* ── Content ── */\r
.messy-content {\r
  text-align: center;\r
  max-width: min(700px, 90vw);\r
  /* Fluid padding: 1rem at 320px → 2.5rem at 1200px */\r
  padding: clamp(1rem, 0.5rem + 2vw, 2.5rem);\r
  position: relative;\r
}\r
\r
/* Section number label — fluid size */\r
.messy-label {\r
  /* 4rem at 320px → 10rem at 1200px */\r
  font-size: clamp(4rem, 2rem + 8vw, 10rem);\r
  font-weight: 900;\r
  opacity: 0.06;\r
  position: absolute;\r
  top: clamp(-2rem, -1rem + -1.5vw, -3rem);\r
  left: 50%;\r
  transform: translateX(-50%);\r
  line-height: 1;\r
  pointer-events: none;\r
  user-select: none;\r
  letter-spacing: -0.05em;\r
}\r
\r
/* Heading — fluid typography */\r
.messy-heading {\r
  /* 2rem at 320px → 5rem at 1200px */\r
  font-size: clamp(2rem, 1rem + 4vw, 5rem);\r
  font-weight: 800;\r
  margin-bottom: clamp(0.6rem, 0.3rem + 1vw, 1.5rem);\r
  text-transform: uppercase;\r
  letter-spacing: -0.03em;\r
  line-height: 1.05;\r
  position: relative;\r
}\r
\r
.messy-heading .word {\r
  display: inline-block;\r
  white-space: nowrap;\r
}\r
\r
.messy-heading .char {\r
  display: inline-block;\r
  will-change: transform, opacity;\r
}\r
\r
/* Paragraph — fluid */\r
.messy-paragraph {\r
  /* 1rem at 320px → 1.4rem at 1200px */\r
  font-size: clamp(1rem, 0.85rem + 0.5vw, 1.4rem);\r
  opacity: 0;\r
  line-height: 1.6;\r
  max-width: min(480px, 85vw);\r
  margin: 0 auto;\r
  font-weight: 300;\r
  letter-spacing: 0.01em;\r
}\r
\r
/* ── Decorative SVG Doodles — fluid sizes ── */\r
.doodle {\r
  position: absolute;\r
  opacity: 0;\r
  pointer-events: none;\r
  color: currentColor;\r
}\r
\r
.doodle-arrow {\r
  /* 30px at 320px → 50px at 1200px */\r
  width: clamp(30px, 20px + 2vw, 50px);\r
  bottom: clamp(-40px, -30px + -1.5vw, -70px);\r
  left: 50%;\r
  transform: translateX(-50%);\r
}\r
\r
.doodle-circle {\r
  /* 80px at 320px → 160px at 1200px */\r
  width: clamp(80px, 50px + 8vw, 160px);\r
  top: clamp(-15px, -10px + -1vw, -35px);\r
  right: clamp(-20px, -15px + -2vw, -55px);\r
  opacity: 0.15;\r
}\r
\r
.doodle-underline {\r
  /* 140px at 320px → 240px at 1200px */\r
  width: clamp(140px, 100px + 10vw, 240px);\r
  bottom: -10px;\r
  left: 50%;\r
  transform: translateX(-50%);\r
}\r
\r
.doodle-sparkle {\r
  /* 35px at 320px → 55px at 1200px */\r
  width: clamp(35px, 25px + 2vw, 55px);\r
  top: clamp(-10px, -5px + -1vw, -25px);\r
  right: clamp(-15px, -10px + -1.5vw, -35px);\r
}\r
\r
/* Doodle path animation */\r
.doodle path,\r
.doodle ellipse {\r
  stroke-dasharray: 300;\r
  stroke-dashoffset: 300;\r
}\r
`,a=`import gsap from 'gsap';\r
import { ScrollTrigger } from 'gsap/ScrollTrigger';\r
import Lenis from 'lenis';\r
\r
gsap.registerPlugin(ScrollTrigger);\r
\r
/**\r
 * Split heading text into individual <span class="char"> elements.\r
 */\r
function splitTextIntoChars(el) {\r
  const text = el.textContent;\r
  el.textContent = '';\r
  el.setAttribute('aria-label', text);\r
\r
  const words = text.split(' ');\r
\r
  words.forEach((word, wordIndex) => {\r
    const wordSpan = document.createElement('span');\r
    wordSpan.classList.add('word');\r
\r
    for (const char of word) {\r
      const charSpan = document.createElement('span');\r
      charSpan.classList.add('char');\r
      charSpan.textContent = char;\r
      wordSpan.appendChild(charSpan);\r
    }\r
\r
    el.appendChild(wordSpan);\r
\r
    if (wordIndex < words.length - 1) {\r
      const spaceSpan = document.createElement('span');\r
      spaceSpan.classList.add('char', 'space');\r
      spaceSpan.innerHTML = '&nbsp;';\r
      el.appendChild(spaceSpan);\r
    }\r
  });\r
}\r
\r
/**\r
 * Build a paused timeline for section content animations.\r
 */\r
function buildContentTimeline(section) {\r
  const chars = section.querySelectorAll('.messy-heading .char');\r
  const paragraph = section.querySelector('.messy-paragraph');\r
  const label = section.querySelector('.messy-label');\r
  const doodles = section.querySelectorAll('.doodle');\r
  const doodlePaths = section.querySelectorAll('.doodle path, .doodle ellipse');\r
\r
  const tl = gsap.timeline({ paused: true });\r
\r
  if (label) {\r
    tl.fromTo(label,\r
      { opacity: 0, scale: 0.8 },\r
      { opacity: 0.06, scale: 1, duration: 0.6, ease: 'power2.out' },\r
      0\r
    );\r
  }\r
\r
  if (chars.length) {\r
    tl.fromTo(chars,\r
      { opacity: 0, y: 40, rotateX: -90, scale: 0.6 },\r
      {\r
        opacity: 1, y: 0, rotateX: 0, scale: 1,\r
        duration: 0.7,\r
        ease: 'back.out(1.7)',\r
        stagger: { amount: 0.5, from: 'start' }\r
      },\r
      0.1\r
    );\r
  }\r
\r
  if (paragraph) {\r
    tl.fromTo(paragraph,\r
      { opacity: 0, y: 30 },\r
      { opacity: 0.8, y: 0, duration: 0.8, ease: 'power3.out' },\r
      0.4\r
    );\r
  }\r
\r
  if (doodles.length) {\r
    tl.fromTo(doodles,\r
      { opacity: 0 },\r
      { opacity: 0.5, duration: 0.6, ease: 'power2.out', stagger: 0.1 },\r
      0.5\r
    );\r
  }\r
\r
  if (doodlePaths.length) {\r
    tl.to(doodlePaths,\r
      { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', stagger: 0.1 },\r
      0.5\r
    );\r
  }\r
\r
  return tl;\r
}\r
\r
export function initMessyStackingSections(options = {}) {\r
  const rotationIntensity = options.rotationIntensity !== undefined ? options.rotationIntensity : 1;\r
  const sections = gsap.utils.toArray('.messy-section');\r
  \r
  if (sections.length === 0) return;\r
\r
  // ── Lenis smooth scroll ──\r
  const lenis = new Lenis({\r
    duration: 1.4,\r
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),\r
    smoothWheel: true,\r
    touchMultiplier: 1.5\r
  });\r
\r
  // Sync Lenis → ScrollTrigger (single source of truth)\r
  lenis.on('scroll', ScrollTrigger.update);\r
  gsap.ticker.add((time) => lenis.raf(time * 1000));\r
  gsap.ticker.lagSmoothing(0);\r
\r
  // ── Split headings into chars ──\r
  sections.forEach(section => {\r
    const heading = section.querySelector('[data-split]');\r
    if (heading) splitTextIntoChars(heading);\r
  });\r
\r
  // Deterministic rotations (consistent across refreshes)\r
  const rotations = sections.map((_, index) => {\r
    if (index === 0) return 0;\r
    const isEven = index % 2 === 0;\r
    const angle = 4 + (index * 3.7 % 8);\r
    return angle * (isEven ? 1 : -1) * rotationIntensity;\r
  });\r
\r
  // Build content timelines\r
  const contentTimelines = sections.map(section => buildContentTimeline(section));\r
\r
  // Track current viewport height (updated on resize)\r
  let vh = window.innerHeight;\r
  const resizeHandler = () => { vh = window.innerHeight; };\r
  window.addEventListener('resize', resizeHandler);\r
\r
  sections.forEach((section, index) => {\r
\r
    // ── PIN ──\r
    ScrollTrigger.create({\r
      trigger: section,\r
      start: () => section.offsetHeight > vh ? 'bottom bottom' : 'top top',\r
      endTrigger: '.messy-stack-container',\r
      end: 'bottom bottom',\r
      pin: true,\r
      pinSpacing: false\r
    });\r
\r
    // Section 0: no entrance animation, just play content\r
    if (index === 0) {\r
      gsap.delayedCall(0.3, () => contentTimelines[index].play());\r
      return;\r
    }\r
\r
    // ── ENTRANCE ──\r
    // Set initial off-screen state\r
    gsap.set(section, { y: vh, rotation: rotations[index] });\r
\r
    let contentPlayed = false;\r
\r
    // Use scrub: true (NOT 0.6) — Lenis already handles smoothing.\r
    // Double-smoothing causes desync and jumping.\r
    ScrollTrigger.create({\r
      trigger: section,\r
      start: 'top bottom',\r
      end: 'top top',\r
      scrub: true,\r
      onUpdate: (self) => {\r
        const p = self.progress;\r
        // Direct set — no tween interpolation, no invalidation issues\r
        gsap.set(section, {\r
          y: (1 - p) * vh,\r
          rotation: rotations[index] * (1 - p)\r
        });\r
\r
        // Fire content animations when section is almost fully in\r
        if (p > 0.85 && !contentPlayed) {\r
          contentPlayed = true;\r
          contentTimelines[index].play();\r
        } else if (p < 0.2 && contentPlayed) {\r
          contentPlayed = false;\r
          contentTimelines[index].pause(0);\r
        }\r
      },\r
      onRefresh: () => {\r
        // Recalculate vh and reset position if not yet scrolled\r
        vh = window.innerHeight;\r
      }\r
    });\r
  });\r
\r
  // ── a11y ──\r
  gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {\r
    lenis.destroy();\r
    ScrollTrigger.getAll().forEach(t => t.kill());\r
    gsap.set('.messy-section', { clearProps: 'all' });\r
    contentTimelines.forEach(tl => tl.progress(1));\r
  });\r
\r
  // ── Viewer UI: dynamic height changes ──\r
  const messageHandler = (e) => {\r
    if (e.data && e.data.type === 'updateHeight') {\r
      const section = sections[e.data.index];\r
      if (section) {\r
        lenis.stop();\r
        lenis.scrollTo(0, { immediate: true });\r
        section.style.minHeight = e.data.height;\r
        requestAnimationFrame(() => {\r
          requestAnimationFrame(() => {\r
            ScrollTrigger.refresh();\r
            lenis.start();\r
          });\r
        });\r
      }\r
    }\r
  };\r
  window.addEventListener('message', messageHandler);\r
\r
  // Return cleanup method\r
  return {\r
    destroy: () => {\r
      lenis.destroy();\r
      ScrollTrigger.getAll().forEach(t => t.kill());\r
      gsap.set('.messy-section', { clearProps: 'transform,y,rotation' });\r
      window.removeEventListener('resize', resizeHandler);\r
      window.removeEventListener('message', messageHandler);\r
    }\r
  };\r
}\r
`,o=e({init:()=>s});function s(){let e=document.querySelector(`.preview-iframe`);e&&(e.src=e.src);let o={readme:{lang:`language-markdown`,content:n,isMarkdown:!0},html:{lang:`language-html`,content:r},css:{lang:`language-css`,content:i},js:{lang:`language-javascript`,content:a}},s=`readme`;document.getElementById(`codeBlock`);let c=document.getElementById(`codeContainer`),l=document.getElementById(`markdownContainer`),u=document.getElementById(`copyBtn`);function d(e){return o[e].content}function f(){c.style.display=`none`,u.style.display=`none`,l.style.display=`block`,l.innerHTML=`
      <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
        <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
        <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
      </div>
    `}document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`)?.classList.remove(`active`),e.target.classList.add(`active`),s=e.target.dataset.target,f()})}),u&&u.addEventListener(`click`,()=>{navigator.clipboard.writeText(d(s));let e=u.textContent;u.textContent=`Copied! ✨`,setTimeout(()=>u.textContent=e,2e3)});let p=document.getElementById(`inputSecCount`),m=document.getElementById(`valSecCount`),h=document.getElementById(`slideRotInt`),g=document.getElementById(`valRotInt`);function _(){e&&e.contentWindow&&e.contentWindow.postMessage({type:`updateConfig`,count:parseInt(p.value,10)||4,intensity:parseFloat(h.value)||1},`*`)}p&&m&&p.addEventListener(`input`,e=>{m.innerText=e.target.value,_()}),h&&g&&h.addEventListener(`input`,e=>{g.innerText=`${e.target.value}x`,_()}),[`Sec1`,`Sec2`,`Sec3`,`Sec4`].forEach((t,n)=>{let r=document.getElementById(`slide${t}`),i=document.getElementById(`val${t}`);r&&i&&r.addEventListener(`input`,t=>{i.innerText=`${t.target.value}vh`,e&&e.contentWindow&&e.contentWindow.postMessage({type:`updateHeight`,index:n,height:`${t.target.value}vh`},`*`)})}),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6})),f()}document.querySelector(`.book`)||s();export{o as t};