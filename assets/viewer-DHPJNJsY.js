import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";import"./marked.esm-Bmtv0uHa.js";var n=`# Shrink & Slide Page Transition\r
\r
A modern, fluid page transition built with [Barba.js](https://barba.js.org/) and [GSAP](https://gsap.com/). When navigating, the current page shrinks and blurs into the background, while the new page slides up smoothly from the bottom of the screen.\r
\r
## How It Works (For Beginners)\r
\r
When you use traditional links (\`<a href="...">\`), the browser completely reloads the page. You see a white flash, and all animations reset. \r
\r
**Barba.js** prevents this. Instead of a full reload, Barba intercepts your link clicks, fetches the next page in the background, and seamlessly swaps only the content you specify. \r
\r
To make this work, **every page on your website** needs a specific HTML structure. Barba needs a persistent "wrapper" that never leaves the screen, and a "container" inside it that gets replaced.\r
\r
## Step-by-Step Implementation\r
\r
### 1. The HTML Structure\r
\r
You need at least two pages to see a transition (e.g., \`index.html\` and \`about.html\`). Wrap your main content in both files using Barba's \`data-barba\` attributes.\r
\r
**\`index.html\` (Home)**\r
\`\`\`html\r
<!-- The wrapper stays on the screen forever -->\r
<div data-barba="wrapper" class="ts-wrapper">\r
  \r
  <!-- Navigation can go outside the container if you don't want it to animate -->\r
  <header class="ts-header">\r
    <nav>\r
      <a href="index.html">Home</a>\r
      <a href="about.html">About</a>\r
    </nav>\r
  </header>\r
\r
  <!-- The container gets swapped out -->\r
  <main data-barba="container" data-barba-namespace="home" class="ts-container" style="background-color: #1a1a1a;">\r
    <h1>Home Page</h1>\r
  </main>\r
</div>\r
\`\`\`\r
\r
**\`about.html\` (About)**\r
Make sure this file has the exact same \`wrapper\` structure, but change the \`namespace\` and content!\r
\`\`\`html\r
<div data-barba="wrapper" class="ts-wrapper">\r
  <!-- Same header -->\r
  <header class="ts-header">...</header>\r
\r
  <!-- New container! Notice the namespace is 'about' -->\r
  <main data-barba="container" data-barba-namespace="about" class="ts-container" style="background-color: #0f4c75;">\r
    <h1>About Page</h1>\r
  </main>\r
</div>\r
\`\`\`\r
\r
### 2. The CSS\r
\r
Copy the code from the **CSS** tab into your stylesheet. \r
\r
The secret to this effect is CSS Grid. By setting \`display: grid\` on the wrapper and \`grid-area: 1 / 1\` on the containers, we force the old page and the new page to perfectly overlap each other during the transition!\r
\r
### 3. Include Dependencies\r
\r
Before your main JavaScript file, include Barba.js and GSAP via CDN before the closing \`</body>\` tag:\r
\r
\`\`\`html\r
<script src="https://cdn.jsdelivr.net/npm/@barba/core"><\/script>\r
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>\r
\`\`\`\r
\r
### 4. The JavaScript Logic\r
\r
Finally, copy the code from the **JS** tab into your main script file. \r
\r
This script tells Barba to use GSAP to animate the \`leave\` hook (the old page shrinking) and the \`enter\` hook (the new page sliding up) simultaneously (\`sync: true\`).\r
\r
## Senior Dev Pro-Tips (Accessibility & Architecture)\r
\r
To make this transition truly professional and production-ready, we included two crucial features:\r
\r
1. **Accessibility (\`prefers-reduced-motion\`)**: Large swiping animations can trigger motion sickness. The JS code uses \`window.matchMedia('(prefers-reduced-motion: reduce)')\` to detect if the user has disabled OS animations. If so, it gracefully falls back to a simple, fast cross-fade.\r
2. **Screen Reader Focus**: When a page transitions without reloading, screen readers don't announce the change. By adding \`tabindex="-1"\` to our \`<main>\` container and calling \`data.next.container.focus()\` in the \`after()\` hook, we ensure visually impaired users know the page has updated.\r
3. **Script Re-initialization**: Remember, Barba.js only swaps the DOM container. It does **not** re-run \`<script>\` tags on the new page. If your new page has a slider or interactive element, you must manually re-initialize its logic inside the Barba \`after\` hook or using Barba Views!\r
`,r=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\r
  <title>内容展示 - 预览</title>\r
  <link rel="stylesheet" href="./src/transition-shrink-slide.css" />\r
</head>\r
<body data-barba="wrapper" class="ts-wrapper">\r
  \r
  <header class="ts-header">\r
    <nav>\r
      <a href="./preview.html">内容 01</a>\r
      <a href="./page2.html">内容 02</a>\r
    </nav>\r
  </header>\r
\r
  <!-- The container that gets swapped and animated -->\r
  <main tabindex="-1" data-barba="container" data-barba-namespace="home" class="ts-container" style="background-color: #1a1a1a;">\r
    <div class="ts-content">\r
      <h1>内容页</h1>\r
      <p>This is the initial page. Click 'About' in the navigation to see the shrink and slide effect.</p>\r
    </div>\r
  </main>\r
\r
  <!-- Libraries -->\r
  <script src="https://cdn.jsdelivr.net/npm/@barba/core"><\/script>\r
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>\r
  \r
  <!-- Component Logic -->\r
  <script type="module" src="./src/transition-shrink-slide.js"><\/script>\r
</body>\r
</html>\r
`,i=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\r
  <title>Transition Shrink & Slide - Page 2</title>\r
  <link rel="stylesheet" href="./src/transition-shrink-slide.css" />\r
</head>\r
<body data-barba="wrapper" class="ts-wrapper">\r
  \r
  <header class="ts-header">\r
    <nav>\r
      <a href="./preview.html">Home</a>\r
      <a href="./page2.html">About</a>\r
    </nav>\r
  </header>\r
\r
  <!-- The container that gets swapped and animated -->\r
  <!-- Notice the different background color to make the slide up obvious -->\r
  <main tabindex="-1" data-barba="container" data-barba-namespace="about" class="ts-container" style="background-color: var(--ts-overlay-bg);">\r
    <div class="ts-content">\r
      <h1>About Page</h1>\r
      <p>This is the second page. Notice the smooth slide up! Click 'Home' to transition back.</p>\r
    </div>\r
  </main>\r
\r
  <!-- Libraries -->\r
  <script src="https://cdn.jsdelivr.net/npm/@barba/core"><\/script>\r
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>\r
  \r
  <!-- Component Logic -->\r
  <script type="module" src="./src/transition-shrink-slide.js"><\/script>\r
</body>\r
</html>\r
`,a=`/* \r
  Transition: Shrink & Slide\r
  Prefix 'ts-' used to avoid class conflicts\r
*/\r
\r
:root {\r
  --ts-bg-color: #1a1a1a;\r
  --ts-text-color: #ffffff;\r
  --ts-header-bg: transparent;\r
  --ts-overlay-bg: #0f4c75;\r
}\r
\r
body {\r
  margin: 0;\r
  padding: 0;\r
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\r
  background-color: var(--ts-bg-color); /* Base background for the shrink effect */\r
  color: var(--ts-text-color);\r
  overflow-x: hidden;\r
}\r
\r
/* Grid wrapper to ensure transitioning containers overlap perfectly */\r
.ts-wrapper {\r
  display: grid;\r
  width: 100%;\r
  min-height: 100vh;\r
}\r
\r
/* Base header styling */\r
.ts-header {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  padding: 1.5rem;\r
  background: var(--ts-header-bg);\r
  backdrop-filter: blur(10px);\r
  z-index: 100;\r
  display: flex;\r
  justify-content: center;\r
  box-sizing: border-box;\r
}\r
\r
.ts-header a {\r
  color: var(--ts-text-color);\r
  text-decoration: none;\r
  margin: 0 1rem;\r
  font-weight: 600;\r
  font-size: 1.1rem;\r
  transition: opacity 0.3s ease;\r
}\r
\r
.ts-header a:hover {\r
  opacity: 0.7;\r
}\r
\r
/* Container overlapping layout */\r
.ts-container {\r
  grid-area: 1 / 1; /* Stack containers */\r
  width: 100%;\r
  min-height: 100vh;\r
  padding-top: 80px; /* Header offset */\r
  box-sizing: border-box;\r
  will-change: transform, filter;\r
  transform-origin: center top;\r
}\r
\r
/* Demo content styling */\r
.ts-content {\r
  max-width: 800px;\r
  margin: 0 auto;\r
  padding: 2rem;\r
  text-align: center;\r
}\r
\r
.ts-content h1 {\r
  font-size: clamp(2.5rem, 8vw, 4rem);\r
  margin-bottom: 1rem;\r
  word-wrap: break-word;\r
}\r
\r
.ts-content p {\r
  font-size: clamp(1rem, 4vw, 1.2rem);\r
  line-height: 1.6;\r
  opacity: 0.8;\r
}\r
\r
@media (max-width: 600px) {\r
  .ts-content {\r
    padding: 1rem;\r
  }\r
}\r
`,o=`// Ensure dependencies are loaded\r
if (typeof barba === 'undefined' || typeof gsap === 'undefined') {\r
  console.error('Barba.js or GSAP is not loaded. Please include them before this script.');\r
} else {\r
\r
  // Prevent reloading when clicking links to the current page\r
  document.addEventListener('click', (e) => {\r
    const link = e.target.closest('a');\r
    if (link && link.href === window.location.href) {\r
      e.preventDefault(); // Stop browser from reloading\r
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Just scroll to top\r
    }\r
  });\r
\r
  barba.init({\r
    preventRunning: true,\r
    \r
    transitions: [{\r
      name: 'shrink-slide-transition',\r
      sync: true,\r
      \r
      before() {\r
        document.body.style.overflow = 'hidden';\r
      },\r
      \r
      after(data) {\r
        document.body.style.overflow = '';\r
        \r
        // A11y: Move focus to the new container for screen readers\r
        if (data.next && data.next.container) {\r
          data.next.container.focus();\r
        }\r
      },\r
      \r
      leave(data) {\r
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
        \r
        if (reduceMotion) {\r
          return gsap.to(data.current.container, { opacity: 0, duration: 0.4 });\r
        }\r
        \r
        return gsap.to(data.current.container, {\r
          scale: window.tsConfig.scale,\r
          filter: \`blur(\${window.tsConfig.blur}px)\`,\r
          opacity: 0.5,\r
          duration: window.tsConfig.duration,\r
          ease: 'power2.inOut'\r
        });\r
      },\r
      \r
      enter(data) {\r
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
        \r
        if (reduceMotion) {\r
          gsap.set(data.next.container, { opacity: 0, yPercent: 0, scale: 1 });\r
          return gsap.to(data.next.container, { opacity: 1, duration: 0.4 });\r
        }\r
        \r
        gsap.set(data.next.container, {\r
          yPercent: 100,\r
          scale: 0.85,\r
          zIndex: 2\r
        });\r
        \r
        if (data.current.container) {\r
          gsap.set(data.current.container, { zIndex: 1 });\r
        }\r
        \r
        return gsap.to(data.next.container, {\r
          yPercent: 0,\r
          scale: 1,\r
          duration: window.tsConfig.duration,\r
          ease: 'power2.inOut'\r
        });\r
      }\r
    }]\r
  });\r
}\r
\r
/* --- Sketchbook Live Preview Config --- */\r
window.tsConfig = {\r
  duration: 1.0,\r
  scale: 0.85,\r
  blur: 15,\r
  overlayColor: '#0f4c75'\r
};\r
\r
window.addEventListener('message', (event) => {\r
  if (event.data && event.data.type === 'update-config') {\r
    window.tsConfig = event.data.config;\r
    document.documentElement.style.setProperty('--ts-overlay-bg', window.tsConfig.overlayColor);\r
  }\r
});\r
`,s=e({init:()=>c});function c(){let e=document.querySelector(`.preview-iframe`);e&&(e.src=e.src);let s={readme:{lang:`language-markdown`,content:n,isMarkdown:!0},homeHtml:{lang:`language-html`,content:r},aboutHtml:{lang:`language-html`,content:i},css:{lang:`language-css`,content:a},js:{lang:`language-javascript`,content:o}},c=`readme`;document.getElementById(`codeBlock`);let l=document.getElementById(`codeContainer`),u=document.getElementById(`markdownContainer`),d=document.getElementById(`copyBtn`),f=document.getElementById(`slideDuration`),p=document.getElementById(`valDuration`),m=document.getElementById(`slideScale`),h=document.getElementById(`valScale`),g=document.getElementById(`slideBlur`),_=document.getElementById(`valBlur`),v=document.getElementById(`colorOverlay`);function y(e){let t=s[e].content,n=parseFloat(f.value),r=parseFloat(m.value),i=parseInt(g.value),a=v.value;return e===`js`?(t=t.replace(/duration:\s*[\d.]+/g,`duration: ${n}`),t=t.replace(/scale:\s*[\d.]+/g,`scale: ${r}`),t=t.replace(/blur\(\d+px\)/g,`blur(${i}px)`)):e===`css`&&(t=t.replace(/--ts-overlay-bg:\s*[^;]+;/,`--ts-overlay-bg: ${a};`)),t}function b(){l.style.display=`none`,d.style.display=`none`,u.style.display=`block`,u.innerHTML=`
      <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
        <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
        <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
      </div>
    `}function x(){let t=parseFloat(f.value),n=parseFloat(m.value),r=parseInt(g.value),i=v.value;p.textContent=t.toFixed(1),h.textContent=n.toFixed(2),_.textContent=r,e&&e.contentWindow&&e.contentWindow.postMessage({type:`update-config`,config:{duration:t,scale:n,blur:r,overlayColor:i}},`*`),b()}[f,m,g,v].forEach(e=>{e&&e.addEventListener(`input`,x)}),e&&e.addEventListener(`load`,()=>{x()}),document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`).classList.remove(`active`),e.target.classList.add(`active`),c=e.target.dataset.target,b()})}),d.addEventListener(`click`,()=>{navigator.clipboard.writeText(y(c));let e=d.textContent;d.textContent=`Copied! ✨`,setTimeout(()=>d.textContent=e,2e3)}),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6})),b()}document.querySelector(`.book`)||c();export{s as t};