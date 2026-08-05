import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{t}from"./gsap-D_956-p2.js";var n=`<button class="t-kinetic-btn">Hover Kinetic</button>\r
`,r=`:root {\r
  --t-btn-bg: transparent;\r
  --t-btn-border-color: #111111;\r
  --t-btn-color: #111111;\r
  --t-hover-bg: #ea4aaa;\r
  --t-hover-color: #ffffff;\r
  --t-btn-radius: 50px;\r
  --t-btn-font: 'Inter', sans-serif;\r
}\r
\r
.t-kinetic-btn {\r
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
  transition: border-color 0.4s cubic-bezier(0.76, 0, 0.24, 1), color 0.4s cubic-bezier(0.76, 0, 0.24, 1);\r
}\r
\r
/* Bottom-up sliding background reveal */\r
.t-kinetic-btn::before {\r
  content: "";\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 0;\r
  background: var(--t-hover-bg);\r
  transition: height 0.4s cubic-bezier(0.76, 0, 0.24, 1);\r
  z-index: 0;\r
}\r
\r
.t-kinetic-btn:hover {\r
  border-color: var(--t-hover-bg);\r
  color: var(--t-hover-color);\r
}\r
\r
.t-kinetic-btn:hover::before {\r
  height: 100%;\r
}\r
\r
/* Kinetic Character Layout Styles */\r
.t-char-wrapper {\r
  position: relative;\r
  z-index: 2;\r
  pointer-events: none;\r
  display: flex;\r
}\r
\r
.t-char {\r
  position: relative;\r
  display: inline-block;\r
  overflow: hidden;\r
  line-height: 1.2;\r
}\r
\r
/* Support spacing for words */\r
.t-char-space {\r
  width: 0.28em;\r
  display: inline-block;\r
}\r
\r
.t-char-primary {\r
  display: inline-block;\r
  will-change: transform;\r
}\r
\r
.t-char-secondary {\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
  display: inline-block;\r
  transform: translateY(100%);\r
  will-change: transform;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .t-kinetic-btn::before {\r
    display: none !important;\r
  }\r
  .t-kinetic-btn {\r
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;\r
  }\r
  .t-kinetic-btn:hover {\r
    background-color: var(--t-hover-bg) !important;\r
  }\r
}\r
`,i=`import { gsap } from 'gsap';\r
\r
export class KineticButton {\r
  constructor(element) {\r
    this.element = element;\r
    \r
    this.stagger = 0.02;\r
    this.duration = 0.45;\r
    \r
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
    \r
    this.initDOM();\r
    this.initEvents();\r
  }\r
\r
  initDOM() {\r
    const text = this.element.textContent.trim();\r
    this.element.innerHTML = '';\r
    \r
    const wrapper = document.createElement('span');\r
    wrapper.className = 't-char-wrapper';\r
    \r
    [...text].forEach(char => {\r
      if (char === ' ') {\r
        const space = document.createElement('span');\r
        space.className = 't-char-space';\r
        wrapper.appendChild(space);\r
      } else {\r
        const charContainer = document.createElement('span');\r
        charContainer.className = 't-char';\r
        \r
        const primary = document.createElement('span');\r
        primary.className = 't-char-primary';\r
        primary.textContent = char;\r
        \r
        const secondary = document.createElement('span');\r
        secondary.className = 't-char-secondary';\r
        secondary.textContent = char;\r
        \r
        charContainer.appendChild(primary);\r
        charContainer.appendChild(secondary);\r
        wrapper.appendChild(charContainer);\r
      }\r
    });\r
    \r
    this.element.appendChild(wrapper);\r
    this.primaries = wrapper.querySelectorAll('.t-char-primary');\r
    this.secondaries = wrapper.querySelectorAll('.t-char-secondary');\r
  }\r
\r
  initEvents() {\r
    this.element.addEventListener('mouseenter', () => this.onMouseEnter());\r
    this.element.addEventListener('mouseleave', () => this.onMouseLeave());\r
  }\r
\r
  onMouseEnter() {\r
    if (this.prefersReducedMotion) return;\r
    gsap.killTweensOf([this.primaries, this.secondaries]);\r
    \r
    gsap.to(this.primaries, {\r
      y: '-100%',\r
      rotation: -8,\r
      opacity: 0,\r
      stagger: this.stagger,\r
      duration: this.duration,\r
      ease: "power2.out"\r
    });\r
    \r
    gsap.fromTo(this.secondaries, \r
      { y: '100%', rotation: 8, opacity: 0 },\r
      {\r
        y: '0%',\r
        rotation: 0,\r
        opacity: 1,\r
        stagger: this.stagger,\r
        duration: this.duration,\r
        ease: "power2.out"\r
      }\r
    );\r
  }\r
\r
  onMouseLeave() {\r
    if (this.prefersReducedMotion) return;\r
    gsap.killTweensOf([this.primaries, this.secondaries]);\r
    \r
    gsap.to(this.primaries, {\r
      y: '0%',\r
      rotation: 0,\r
      opacity: 1,\r
      stagger: this.stagger,\r
      duration: this.duration,\r
      ease: "power2.out"\r
    });\r
    \r
    gsap.to(this.secondaries, {\r
      y: '100%',\r
      rotation: 8,\r
      opacity: 0,\r
      stagger: this.stagger,\r
      duration: this.duration,\r
      ease: "power2.out"\r
    });\r
  }\r
}\r
`,a=e({init:()=>o});function o(){let e={html:{lang:`language-html`,content:n},css:{lang:`language-css`,content:r},js:{lang:`language-javascript`,content:i}},a=`html`,o=document.getElementById(`codeBlock`),s=document.getElementById(`copyBtn`),c=document.getElementById(`markdownContainer`);function l(t){let n=e[t].content,r=parseFloat(f.value),i=parseFloat(p.value),a=parseInt(m.value),o=b.value,s=y.value,c=x.value,l=C.checked?`transparent`:S.value;return t===`css`?(n=n.replace(/--t-btn-bg:\s*[^;]+;/,`--t-btn-bg: ${l};`),n=n.replace(/--t-btn-border-color:\s*[^;]+;/,`--t-btn-border-color: ${o};`),n=n.replace(/--t-btn-color:\s*[^;]+;/,`--t-btn-color: ${s};`),n=n.replace(/--t-hover-bg:\s*[^;]+;/,`--t-hover-bg: ${c};`),n=n.replace(/--t-btn-radius:\s*[^;]+;/,`--t-btn-radius: ${a}px;`)):t===`js`&&(n=n.replace(/this\.stagger\s*=\s*[^;]+;/,`this.stagger = ${r.toFixed(3)};`),n=n.replace(/this\.duration\s*=\s*[^;]+;/,`this.duration = ${i.toFixed(2)};`)),n}function u(){o.parentElement&&(o.parentElement.style.display=`none`),s.style.display=`none`,c.style.display=`block`,c.innerHTML=`
      <div class="content-input-template" style="padding: 1.5rem; font-family: var(--font-body); color: var(--text-ink);">
        <h3 style="font-family: var(--font-sketch); font-size: 1.6rem; margin: 0 0 1rem;">内容输入区域</h3>
        <div style="border: 3px dashed var(--text-ink); border-radius: 12px; padding: 1.5rem; min-height: 220px; font-family: var(--font-sketch); font-size: 1.3rem; line-height: 1.8; color: var(--text-ink); background: rgba(255,255,255,0.5); box-shadow: 4px 4px 0 rgba(0,0,0,0.85);">这里是内容输入区域，可以替换成任意文字。</div>
      </div>
    `}document.querySelectorAll(`.code-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelector(`.code-tab.active`).classList.remove(`active`),e.target.classList.add(`active`),a=e.target.dataset.target,u()})}),s.addEventListener(`click`,()=>{let e=l(a);navigator.clipboard.writeText(e);let t=s.textContent;s.textContent=`Copied! ✨`,setTimeout(()=>s.textContent=t,2e3)});let d=document.querySelector(`.preview-iframe`),f=document.getElementById(`slideStagger`),p=document.getElementById(`slideDuration`),m=document.getElementById(`slideRadius`),h=document.getElementById(`valStagger`),g=document.getElementById(`valDuration`),_=document.getElementById(`valRadius`),v=document.querySelectorAll(`.theme-toggle-btn`),y=document.getElementById(`colorText`),b=document.getElementById(`colorBorder`),x=document.getElementById(`colorHoverBg`),S=document.getElementById(`colorBg`),C=document.getElementById(`checkTransparentBg`);function w(){let e=parseFloat(f.value),t=parseFloat(p.value),n=parseInt(m.value),r=y.value,i=b.value,a=x.value,o=C.checked?`transparent`:S.value;h.textContent=e.toFixed(3)+`s`,g.textContent=t.toFixed(2)+`s`,_.textContent=n+`px`,d&&d.contentWindow&&d.contentWindow.postMessage({type:`update-config`,config:{stagger:e,duration:t,borderRadius:n,btnBg:o,borderColor:i,textColor:r,hoverBg:a,hoverColor:`#ffffff`}},`*`),u()}[f,p,m,y,b,x,S,C].forEach(e=>{e.addEventListener(`input`,w)}),v.forEach(e=>{e.addEventListener(`click`,()=>{let t=document.querySelector(`.theme-toggle-btn.active`);t&&t.classList.remove(`active`),e.classList.add(`active`);let n=e.dataset.theme;C.checked=!0,n===`dark`?(y.value=`#111111`,b.value=`#111111`,x.value=`#ea4aaa`):n===`light`?(y.value=`#ffffff`,b.value=`#ffffff`,x.value=`#ea4aaa`):(y.value=`#ea4aaa`,b.value=`#ea4aaa`,x.value=`#111111`),w()})}),d.addEventListener(`load`,()=>{w()}),u(),document.querySelector(`.book`)||(t.from(`.preview-section`,{opacity:0,x:-150,y:-80,rotation:-15,scale:.85,duration:1.4,ease:`expo.out`,delay:.1,clearProps:`all`}),t.from(`.code-section`,{opacity:0,x:150,y:80,rotation:15,scale:.85,duration:1.4,ease:`expo.out`,delay:.3,clearProps:`all`}),document.querySelector(`.back-btn`)&&t.from(`.back-btn`,{opacity:0,x:-30,rotation:-10,duration:1,ease:`back.out(1.5)`,delay:.6}))}document.querySelector(`.book`)||o();export{a as t};