import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";var n=`<button class="t-liquid-btn">\r
  <span class="t-text">Hover Liquid</span>\r
  <span class="t-blob-container">\r
    <span class="t-blob t-blob-base"></span>\r
    <span class="t-blob t-blob-1"></span>\r
    <span class="t-blob t-blob-2"></span>\r
    <span class="t-blob t-blob-3"></span>\r
    <span class="t-blob t-blob-4"></span>\r
  </span>\r
</button>\r
\r
<!-- SVG Gooey Filter (Required for the liquid effect) -->\r
<svg class="t-gooey-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">\r
  <defs>\r
    <filter id="t-gooey-effect">\r
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />\r
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />\r
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />\r
    </filter>\r
  </defs>\r
</svg>\r
`,r=`:root {\r
  --t-btn-bg: transparent;\r
  --t-btn-border-color: #111111;\r
  --t-btn-color: #111111;\r
  --t-blob-color: #ea4aaa;\r
  --t-btn-radius: 50px;\r
  --t-btn-font: 'Inter', sans-serif;\r
}\r
\r
.t-liquid-btn {\r
  position: relative;\r
  padding: 1.25rem 2.75rem;\r
  font-family: var(--t-btn-font);\r
  font-size: 1.1rem;\r
  font-weight: 600;\r
  color: var(--t-btn-color);\r
  background: var(--t-btn-bg);\r
  border: 2px solid var(--t-btn-border-color);\r
  border-radius: var(--t-btn-radius);\r
  cursor: pointer;\r
  outline: none;\r
  overflow: hidden;\r
  z-index: 1;\r
  display: inline-flex;\r
  justify-content: center;\r
  align-items: center;\r
  transition: border-color 0.4s ease, color 0.4s ease;\r
}\r
\r
.t-liquid-btn:hover {\r
  color: #ffffff;\r
  border-color: var(--t-blob-color);\r
}\r
\r
.t-text {\r
  position: relative;\r
  z-index: 2;\r
  pointer-events: none;\r
  transition: transform 0.3s ease;\r
}\r
\r
.t-blob-container {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  filter: url(#t-gooey-effect);\r
  pointer-events: none;\r
  z-index: 1;\r
  overflow: hidden;\r
  border-radius: calc(var(--t-btn-radius) - 2px);\r
}\r
\r
.t-blob {\r
  position: absolute;\r
  background: var(--t-blob-color);\r
  border-radius: 50%;\r
  pointer-events: none;\r
  transform: translate(-50%, -50%) scale(0);\r
  will-change: transform;\r
}\r
\r
/* Base blob sits in the middle and remains scale(0) until hover */\r
.t-blob-base {\r
  top: 50%;\r
  left: 50%;\r
  width: 80px;\r
  height: 80px;\r
}\r
\r
/* Secondary blobs that spread out to form a continuous fluid background */\r
.t-blob-1 { top: 50%; left: 15%; width: 70px; height: 70px; }\r
.t-blob-2 { top: 30%; left: 45%; width: 65px; height: 65px; }\r
.t-blob-3 { top: 70%; left: 55%; width: 65px; height: 65px; }\r
.t-blob-4 { top: 50%; left: 85%; width: 70px; height: 70px; }\r
\r
/* SVG hidden helper */\r
.t-gooey-svg {\r
  position: absolute;\r
  width: 0;\r
  height: 0;\r
  pointer-events: none;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .t-blob-container {\r
    display: none !important;\r
  }\r
  .t-liquid-btn {\r
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;\r
  }\r
  .t-liquid-btn:hover {\r
    background-color: var(--t-blob-color) !important;\r
  }\r
}\r
`,i=`import { gsap } from 'gsap';\r
\r
export class LiquidButton {\r
  constructor(element) {\r
    this.element = element;\r
    this.blobs = this.element.querySelectorAll('.t-blob');\r
    this.baseBlob = this.element.querySelector('.t-blob-base');\r
    this.floatingBlobs = this.element.querySelectorAll('.t-blob:not(.t-blob-base)');\r
    \r
    this.gooeyStrength = 10;\r
    this.speed = 0.5;\r
    \r
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
    \r
    this.init();\r
  }\r
\r
  init() {\r
    this.element.addEventListener('mouseenter', () => this.onMouseEnter());\r
    this.element.addEventListener('mousemove', (e) => this.onMouseMove(e));\r
    this.element.addEventListener('mouseleave', () => this.onMouseLeave());\r
  }\r
\r
  onMouseEnter() {\r
    if (this.prefersReducedMotion) return;\r
    gsap.killTweensOf(this.blobs);\r
    \r
    // Scale up base blob to cover the main center area\r
    gsap.to(this.baseBlob, {\r
      scale: 2.2,\r
      duration: this.speed,\r
      ease: "power2.out"\r
    });\r
    \r
    // Stagger scaling for the external blobs to flow into place\r
    gsap.to(this.floatingBlobs, {\r
      scale: 1.8,\r
      stagger: 0.04,\r
      duration: this.speed + 0.1,\r
      ease: "power2.out"\r
    });\r
  }\r
\r
  onMouseMove(e) {\r
    if (this.prefersReducedMotion) return;\r
    const rect = this.element.getBoundingClientRect();\r
    const x = e.clientX - rect.left - rect.width / 2;\r
    const y = e.clientY - rect.top - rect.height / 2;\r
\r
    // Apply minor parallax pull to text\r
    const text = this.element.querySelector('.t-text');\r
    if (text) {\r
      gsap.to(text, {\r
        x: x * 0.12,\r
        y: y * 0.12,\r
        duration: 0.3,\r
        ease: "power2.out"\r
      });\r
    }\r
\r
    // Distort floating blobs based on cursor distance to create dynamic liquid stretch\r
    this.floatingBlobs.forEach((blob, index) => {\r
      const depth = (index + 1) * 0.08;\r
      gsap.to(blob, {\r
        x: x * depth,\r
        y: y * depth,\r
        duration: 0.4,\r
        ease: "power2.out"\r
      });\r
    });\r
  }\r
\r
  onMouseLeave() {\r
    if (this.prefersReducedMotion) return;\r
    gsap.killTweensOf(this.blobs);\r
    \r
    // Reset all blobs to scale(0)\r
    gsap.to(this.blobs, {\r
      scale: 0,\r
      x: 0,\r
      y: 0,\r
      duration: this.speed,\r
      ease: "power3.inOut"\r
    });\r
\r
    const text = this.element.querySelector('.t-text');\r
    if (text) {\r
      gsap.to(text, {\r
        x: 0,\r
        y: 0,\r
        duration: 0.5,\r
        ease: "elastic.out(1, 0.4)"\r
      });\r
    }\r
  }\r
}\r
\r
\r
`,a=e({init:()=>o});function o(){let e={html:{lang:`language-html`,content:n},css:{lang:`language-css`,content:r},js:{lang:`language-javascript`,content:i}},a=`html`,o=document.getElementById(`codeBlock`),s=document.getElementById(`copyBtn`),c=document.getElementById(`markdownContainer`);function l(t){let n=e[t].content,r=parseInt(f.value),i=parseFloat(p.value),a=parseInt(m.value),o=y.value,s=b.value,c=x.value,l=C.checked?`transparent`:S.value;return t===`html`?n=n.replace(/stdDeviation="[^"]+"/,`stdDeviation="${r}"`):t===`css`?(n=n.replace(/--t-btn-bg:\s*[^;]+;/,`--t-btn-bg: ${l};`),n=n.replace(/--t-btn-border-color:\s*[^;]+;/,`--t-btn-border-color: ${o};`),n=n.replace(/--t-btn-color:\s*[^;]+;/,`--t-btn-color: ${s};`),n=n.replace(/--t-blob-color:\s*[^;]+;/,`--t-blob-color: ${c};`),n=n.replace(/--t-btn-radius:\s*[^;]+;/,`--t-btn-radius: ${a}px;`)):t===`js`&&(n=n.replace(/this\.speed\s*=\s*[^;]+;/,`this.speed = ${i.toFixed(2)};`)),n}function u(){o.parentElement&&(o.parentElement.style.display=`none`),s.style.display=`none`,c.style.display=`block`,c.innerHTML=`
      <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
        <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
        <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
      </div>
    `}document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`).classList.remove(`active`),e.target.classList.add(`active`),a=e.target.dataset.target,u()})}),s.addEventListener(`click`,()=>{let e=l(a);navigator.clipboard.writeText(e);let t=s.textContent;s.textContent=`Copied! ✨`,setTimeout(()=>s.textContent=t,2e3)});let d=document.querySelector(`.preview-iframe`),f=document.getElementById(`slideBlur`),p=document.getElementById(`slideSpeed`),m=document.getElementById(`slideRadius`),h=document.getElementById(`valBlur`),g=document.getElementById(`valSpeed`),_=document.getElementById(`valRadius`),v=document.querySelectorAll(`.theme-toggle-btn`),y=document.getElementById(`colorBorder`),b=document.getElementById(`colorText`),x=document.getElementById(`colorBlob`),S=document.getElementById(`colorBg`),C=document.getElementById(`checkTransparentBg`);function w(){let e=parseInt(f.value),t=parseFloat(p.value),n=parseInt(m.value),r=y.value,i=b.value,a=x.value,o=C.checked?`transparent`:S.value;h.textContent=e,g.textContent=t.toFixed(2)+`s`,_.textContent=n+`px`,d&&d.contentWindow&&d.contentWindow.postMessage({type:`update-config`,config:{gooeyStrength:e,speed:t,borderRadius:n,borderColor:r,textColor:i,blobColor:a,btnBg:o}},`*`),u()}[f,p,m,y,b,x,S,C].forEach(e=>{e.addEventListener(`input`,w)}),v.forEach(e=>{e.addEventListener(`click`,()=>{let t=document.querySelector(`.theme-toggle-btn.active`);t&&t.classList.remove(`active`),e.classList.add(`active`);let n=e.dataset.theme;C.checked=!0,n===`dark`?(y.value=`#111111`,b.value=`#111111`,x.value=`#ea4aaa`):n===`light`?(y.value=`#ffffff`,b.value=`#ffffff`,x.value=`#ea4aaa`):(y.value=`#ea4aaa`,b.value=`#ea4aaa`,x.value=`#111111`),w()})}),d.addEventListener(`load`,()=>{w()}),u(),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6}))}document.querySelector(`.book`)||o();export{a as t};