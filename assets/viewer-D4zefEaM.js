import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";var n=`<button class="t-magnetic-btn">\r
  <span class="t-hover-circle"></span>\r
  <span class="t-text">Hover Me</span>\r
</button>\r
`,r=`:root {\r
  --t-btn-bg: #111111; \r
  --t-btn-color: #ffffff; \r
  --t-btn-hover-bg: #ea4aaa; \r
  --t-btn-radius: 99px;\r
  --t-btn-padding: 1.5rem 3rem;\r
}\r
.t-magnetic-btn {\r
  padding: var(--t-btn-padding);\r
  border-radius: var(--t-btn-radius);\r
  background: var(--t-btn-bg);\r
  color: var(--t-btn-color);\r
  border: none;\r
  cursor: pointer;\r
  font-size: 1.1rem;\r
  font-weight: 500;\r
  position: relative;\r
  overflow: hidden;\r
  display: inline-flex;\r
  justify-content: center;\r
  align-items: center;\r
  will-change: transform;\r
  transition: background-color 0.3s ease, color 0.3s ease;\r
  z-index: 1;\r
}\r
.t-hover-circle {\r
  position: absolute;\r
  background: var(--t-btn-hover-bg);\r
  width: 0;\r
  height: 0;\r
  border-radius: 50%;\r
  transform: translate(-50%, -50%);\r
  pointer-events: none;\r
  z-index: 0;\r
}\r
.t-text {\r
  position: relative;\r
  z-index: 1;\r
  pointer-events: none;\r
  display: inline-block;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .t-magnetic-btn {\r
    transition: background-color 0.3s ease, color 0.3s ease !important;\r
  }\r
  .t-magnetic-btn:hover {\r
    background-color: var(--t-btn-hover-bg) !important;\r
    color: var(--t-btn-color) !important;\r
  }\r
  .t-hover-circle {\r
    display: none !important;\r
  }\r
}\r
`,i=`import gsap from 'gsap';\r
export class MagneticButton {\r
  constructor(element) {\r
    this.element = element;\r
    this.textElement = this.element.querySelector('.t-text');\r
    this.hoverCircle = this.element.querySelector('.t-hover-circle');\r
    \r
    this.magnetStrength = 0.5;\r
    this.textStrength = 0.2;  \r
    \r
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
    \r
    this.init();\r
  }\r
  init() {\r
    this.element.addEventListener('mousemove', (e) => this.onMouseMove(e));\r
    this.element.addEventListener('mouseleave', (e) => this.onMouseLeave(e));\r
    this.element.addEventListener('mouseenter', (e) => this.onMouseEnter(e));\r
  }\r
  onMouseEnter(e) {\r
    if (this.prefersReducedMotion) return;\r
    if (!this.hoverCircle) return;\r
    const rect = this.element.getBoundingClientRect();\r
    const x = e.clientX - rect.left;\r
    const y = e.clientY - rect.top;\r
    this.hoverCircle.style.left = \`\${x}px\`;\r
    this.hoverCircle.style.top = \`\${y}px\`;\r
    gsap.to(this.hoverCircle, {\r
      width: rect.width * 2.5,\r
      height: rect.width * 2.5,\r
      duration: 0.5,\r
      ease: "power2.out"\r
    });\r
  }\r
  onMouseMove(e) {\r
    if (this.prefersReducedMotion) return;\r
    const bounding = this.element.getBoundingClientRect();\r
    const x = e.clientX - bounding.left - bounding.width / 2;\r
    const y = e.clientY - bounding.top - bounding.height / 2;\r
    gsap.to(this.element, {\r
      x: x * this.magnetStrength,\r
      y: y * this.magnetStrength,\r
      duration: 1,\r
      ease: "power3.out"\r
    });\r
    if (this.textElement) {\r
      gsap.to(this.textElement, {\r
        x: x * this.textStrength,\r
        y: y * this.textStrength,\r
        duration: 1,\r
        ease: "power3.out"\r
      });\r
    }\r
  }\r
  onMouseLeave(e) {\r
    if (this.prefersReducedMotion) return;\r
    gsap.to(this.element, {\r
      x: 0,\r
      y: 0,\r
      duration: 1,\r
      ease: "elastic.out(1, 0.3)"\r
    });\r
    if (this.textElement) {\r
      gsap.to(this.textElement, {\r
        x: 0,\r
        y: 0,\r
        duration: 1,\r
        ease: "elastic.out(1, 0.3)"\r
      });\r
    }\r
    if (this.hoverCircle) {\r
      const rect = this.element.getBoundingClientRect();\r
      const x = e.clientX - rect.left;\r
      const y = e.clientY - rect.top;\r
      gsap.to(this.hoverCircle, {\r
        width: 0,\r
        height: 0,\r
        left: \`\${x}px\`,\r
        top: \`\${y}px\`,\r
        duration: 0.4,\r
        ease: "power2.out"\r
      });\r
    }\r
  }\r
}\r
`,a=e({init:()=>o});function o(){let e={html:{lang:`language-html`,content:n},css:{lang:`language-css`,content:r},js:{lang:`language-javascript`,content:i}},a=`html`,o=document.getElementById(`codeBlock`),s=document.getElementById(`copyBtn`),c=document.getElementById(`markdownContainer`);function l(t){let n=e[t].content,r=parseFloat(f.value),i=parseFloat(p.value),a=parseInt(m.value),o=y.value,s=b.value,c=x.value;return t===`css`?(n=n.replace(/--t-btn-bg:\s*[^;]+;/,`--t-btn-bg: ${o};`),n=n.replace(/--t-btn-color:\s*[^;]+;/,`--t-btn-color: ${s};`),n=n.replace(/--t-btn-hover-bg:\s*[^;]+;/,`--t-btn-hover-bg: ${c};`),n=n.replace(/--t-btn-radius:\s*[^;]+;/,`--t-btn-radius: ${a}px;`)):t===`js`&&(n=n.replace(/this\.magnetStrength\s*=\s*[^;]+;/,`this.magnetStrength = ${r.toFixed(2)};`),n=n.replace(/this\.textStrength\s*=\s*[^;]+;/,`this.textStrength = ${i.toFixed(2)};`)),n}function u(){c&&(o.parentElement.style.display=`none`,s.style.display=`none`,c.style.display=`block`,c.innerHTML=`
    <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
      <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
      <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
    </div>
  `)}document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`).classList.remove(`active`),e.target.classList.add(`active`),a=e.target.dataset.target,u()})}),s.addEventListener(`click`,()=>{let e=l(a);navigator.clipboard.writeText(e);let t=s.textContent;s.textContent=`Copied! ✨`,setTimeout(()=>s.textContent=t,2e3)});let d=document.querySelector(`.preview-iframe`),f=document.getElementById(`slideMagnet`),p=document.getElementById(`slideText`),m=document.getElementById(`slideRadius`),h=document.getElementById(`valMagnet`),g=document.getElementById(`valText`),_=document.getElementById(`valRadius`),v=document.querySelectorAll(`.theme-toggle-btn`),y=document.getElementById(`colorBg`),b=document.getElementById(`colorText`),x=document.getElementById(`colorHover`);function S(){let e=parseFloat(f.value),t=parseFloat(p.value),n=parseInt(m.value),r=y.value,i=b.value,a=x.value;h.textContent=e.toFixed(2),g.textContent=t.toFixed(2),_.textContent=n+`px`,d&&d.contentWindow&&d.contentWindow.postMessage({type:`update-config`,config:{magnetStrength:e,textStrength:t,borderRadius:n,bgColor:r,textColor:i,hoverColor:a}},`*`),u()}[f,p,m,y,b,x].forEach(e=>{e.addEventListener(`input`,S)}),v.forEach(e=>{e.addEventListener(`click`,()=>{let t=document.querySelector(`.theme-toggle-btn.active`);t&&t.classList.remove(`active`),e.classList.add(`active`);let n=e.dataset.theme;n===`dark`?(y.value=`#111111`,b.value=`#ffffff`,x.value=`#ea4aaa`):n===`light`?(y.value=`#ffffff`,b.value=`#111111`,x.value=`#ea4aaa`):(y.value=`#ea4aaa`,b.value=`#ffffff`,x.value=`#111111`),S()})}),d.addEventListener(`load`,()=>{S()}),u(),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6}))}document.querySelector(`.book`)||o();export{a as t};