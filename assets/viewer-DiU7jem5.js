import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";var n=`<button class="t-glass-btn">\r
  <span class="t-glow"></span>\r
  <span class="t-text">Hover Glass</span>\r
  \r
  <!-- SVG Border Drawing Overlay -->\r
  <svg class="t-border-svg" width="100%" height="100%">\r
    <rect class="t-border-rect" x="0" y="0" width="100%" height="100%" rx="24" ry="24" vector-effect="non-scaling-stroke" />\r
  </svg>\r
</button>\r
`,r=`:root {\r
  --t-btn-bg: rgba(17, 17, 17, 0.7);\r
  --t-btn-border-color: rgba(255, 255, 255, 0.1);\r
  --t-btn-color: #ffffff;\r
  --t-glow-color: #ea4aaa;\r
  --t-border-draw-color: #ea4aaa;\r
  --t-btn-radius: 24px;\r
  --t-btn-font: 'Inter', sans-serif;\r
}\r
\r
.t-glass-btn {\r
  position: relative;\r
  padding: 1.25rem 2.75rem;\r
  font-family: var(--t-btn-font);\r
  font-size: 1.1rem;\r
  font-weight: 600;\r
  color: var(--t-btn-color);\r
  background: var(--t-btn-bg);\r
  border: 1px solid var(--t-btn-border-color);\r
  border-radius: var(--t-btn-radius);\r
  backdrop-filter: blur(12px);\r
  -webkit-backdrop-filter: blur(12px);\r
  cursor: pointer;\r
  outline: none;\r
  overflow: hidden;\r
  z-index: 1;\r
  display: inline-flex;\r
  justify-content: center;\r
  align-items: center;\r
  will-change: transform;\r
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);\r
  transition: background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;\r
}\r
\r
.t-glass-btn:hover {\r
  background-color: color-mix(in srgb, var(--t-btn-bg) 85%, #ffffff 15%);\r
  border-color: rgba(255, 255, 255, 0.2);\r
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5);\r
}\r
\r
.t-text {\r
  position: relative;\r
  z-index: 2;\r
  pointer-events: none;\r
  will-change: transform;\r
}\r
\r
/* Mouse-reactive radial glow */\r
.t-glow {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  background: radial-gradient(circle 100px at var(--mx, -200px) var(--my, -200px), color-mix(in srgb, var(--t-glow-color) 22%, transparent), transparent 75%);\r
  pointer-events: none;\r
  z-index: 0;\r
  opacity: 0;\r
  transition: opacity 0.4s ease;\r
}\r
\r
.t-glass-btn:hover .t-glow {\r
  opacity: 1;\r
}\r
\r
/* SVG border outline overlay */\r
.t-border-svg {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  pointer-events: none;\r
  z-index: 1;\r
}\r
\r
.t-border-rect {\r
  fill: none;\r
  stroke: var(--t-border-draw-color);\r
  stroke-width: 2px;\r
  stroke-dasharray: 600;\r
  stroke-dashoffset: 600;\r
  transition: stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1);\r
}\r
\r
.t-glass-btn:hover .t-border-rect {\r
  stroke-dashoffset: 0;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .t-border-svg {\r
    display: none !important;\r
  }\r
}\r
`,i=`import { gsap } from 'gsap';\r
\r
export class MagneticGlassButton {\r
  constructor(element) {\r
    this.element = element;\r
    this.textElement = this.element.querySelector('.t-text');\r
    this.borderRect = this.element.querySelector('.t-border-rect');\r
    \r
    this.magnetStrength = 0.45;\r
    this.textStrength = 0.20;\r
    \r
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
    \r
    this.init();\r
    this.syncBorderRadius();\r
  }\r
\r
  init() {\r
    this.element.addEventListener('mousemove', (e) => this.onMouseMove(e));\r
    this.element.addEventListener('mouseleave', () => this.onMouseLeave());\r
    this.element.addEventListener('mouseenter', () => this.onMouseEnter());\r
  }\r
\r
  syncBorderRadius() {\r
    if (!this.borderRect) return;\r
    const style = window.getComputedStyle(this.element);\r
    const radius = style.borderRadius;\r
    if (radius) {\r
      const radiusVal = parseInt(radius);\r
      this.borderRect.setAttribute('rx', radiusVal);\r
      this.borderRect.setAttribute('ry', radiusVal);\r
    }\r
\r
    const rectWidth = this.element.offsetWidth;\r
    const rectHeight = this.element.offsetHeight;\r
    const perimeter = (rectWidth + rectHeight) * 2;\r
    this.borderRect.style.strokeDasharray = perimeter;\r
    \r
    // Set dashoffset only if element is not currently hovered\r
    if (!this.element.matches(':hover')) {\r
      this.borderRect.style.strokeDashoffset = perimeter;\r
    }\r
  }\r
\r
  onMouseEnter() {\r
    this.syncBorderRadius();\r
  }\r
\r
  onMouseMove(e) {\r
    const bounding = this.element.getBoundingClientRect();\r
    const x = e.clientX - bounding.left;\r
    const y = e.clientY - bounding.top;\r
\r
    this.element.style.setProperty('--mx', \`\${x}px\`);\r
    this.element.style.setProperty('--my', \`\${y}px\`);\r
\r
    if (this.prefersReducedMotion) return;\r
\r
    const centerX = x - bounding.width / 2;\r
    const centerY = y - bounding.height / 2;\r
\r
    gsap.to(this.element, {\r
      x: centerX * this.magnetStrength,\r
      y: centerY * this.magnetStrength,\r
      duration: 0.8,\r
      ease: "power3.out"\r
    });\r
\r
    if (this.textElement) {\r
      gsap.to(this.textElement, {\r
        x: centerX * this.textStrength,\r
        y: centerY * this.textStrength,\r
        duration: 0.8,\r
        ease: "power3.out"\r
      });\r
    }\r
  }\r
\r
  onMouseLeave() {\r
    if (this.borderRect) {\r
      const perimeter = parseFloat(this.borderRect.style.strokeDasharray);\r
      if (!isNaN(perimeter)) {\r
        this.borderRect.style.strokeDashoffset = perimeter;\r
      }\r
    }\r
\r
    if (this.prefersReducedMotion) return;\r
\r
    gsap.to(this.element, {\r
      x: 0,\r
      y: 0,\r
      duration: 1,\r
      ease: "elastic.out(1, 0.4)"\r
    });\r
\r
    if (this.textElement) {\r
      gsap.to(this.textElement, {\r
        x: 0,\r
        y: 0,\r
        duration: 1,\r
        ease: "elastic.out(1, 0.4)"\r
      });\r
    }\r
  }\r
}\r
`,a=e({init:()=>o});function o(){let e={html:{lang:`language-html`,content:n},css:{lang:`language-css`,content:r},js:{lang:`language-javascript`,content:i}},a=`html`,o=document.getElementById(`codeBlock`),s=document.getElementById(`copyBtn`),c=document.getElementById(`markdownContainer`);function l(t){let n=e[t].content,r=parseFloat(p.value),i=parseFloat(m.value),a=parseInt(h.value),o=b.value,s=x.value,c=S.value;return t===`css`?(n=n.replace(/--t-btn-bg:\s*[^;]+;/,`--t-btn-bg: rgba(${u(o)}, 0.7);`),n=n.replace(/--t-btn-color:\s*[^;]+;/,`--t-btn-color: ${s};`),n=n.replace(/--t-glow-color:\s*[^;]+;/,`--t-glow-color: ${c};`),n=n.replace(/--t-border-draw-color:\s*[^;]+;/,`--t-border-draw-color: ${c};`),n=n.replace(/--t-btn-radius:\s*[^;]+;/,`--t-btn-radius: ${a}px;`)):t===`js`&&(n=n.replace(/this\.magnetStrength\s*=\s*[^;]+;/,`this.magnetStrength = ${r.toFixed(2)};`),n=n.replace(/this\.textStrength\s*=\s*[^;]+;/,`this.textStrength = ${i.toFixed(2)};`)),n}function u(e){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)}, ${parseInt(t[2],16)}, ${parseInt(t[3],16)}`:`17, 17, 17`}function d(){o.parentElement&&(o.parentElement.style.display=`none`),s.style.display=`none`,c.style.display=`block`,c.innerHTML=`
      <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
        <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
        <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
      </div>
    `}document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`).classList.remove(`active`),e.target.classList.add(`active`),a=e.target.dataset.target,d()})}),s.addEventListener(`click`,()=>{let e=l(a);navigator.clipboard.writeText(e);let t=s.textContent;s.textContent=`Copied! ✨`,setTimeout(()=>s.textContent=t,2e3)});let f=document.querySelector(`.preview-iframe`),p=document.getElementById(`slideMagnet`),m=document.getElementById(`slideText`),h=document.getElementById(`slideRadius`),g=document.getElementById(`valMagnet`),_=document.getElementById(`valText`),v=document.getElementById(`valRadius`),y=document.querySelectorAll(`.theme-toggle-btn`),b=document.getElementById(`colorBg`),x=document.getElementById(`colorText`),S=document.getElementById(`colorGlow`);function C(){let e=parseFloat(p.value),t=parseFloat(m.value),n=parseInt(h.value),r=b.value,i=x.value,a=S.value;g.textContent=e.toFixed(2),_.textContent=t.toFixed(2),v.textContent=n+`px`,f&&f.contentWindow&&f.contentWindow.postMessage({type:`update-config`,config:{magnetStrength:e,textStrength:t,borderRadius:n,btnBg:`rgba(${u(r)}, 0.7)`,borderColor:`rgba(${u(i)}, 0.1)`,textColor:i,glowColor:a,borderDrawColor:a}},`*`),d()}[p,m,h,b,x,S].forEach(e=>{e.addEventListener(`input`,C)}),y.forEach(e=>{e.addEventListener(`click`,()=>{let t=document.querySelector(`.theme-toggle-btn.active`);t&&t.classList.remove(`active`),e.classList.add(`active`);let n=e.dataset.theme;n===`dark`?(b.value=`#111111`,x.value=`#ffffff`,S.value=`#ea4aaa`):n===`light`?(b.value=`#ffffff`,x.value=`#111111`,S.value=`#ea4aaa`):(b.value=`#ea4aaa`,x.value=`#ffffff`,S.value=`#111111`),C()})}),f.addEventListener(`load`,()=>{C()}),d(),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6}))}document.querySelector(`.book`)||o();export{a as t};