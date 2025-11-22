"use strict";(self.webpackChunkliberion=self.webpackChunkliberion||[]).push([[276],{96276:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(96540),i=l(23217),n=l(70306),s=l(27581),r=l(79133),o=l(74848);const d=s.Ay.div`
  font-family: "Segoe UI", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: ${e=>e.theme.colors.text.primary};

  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  p.docx-paragraph {
    margin: 0.75em 0;
  }

  table.docx-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  table.docx-table td,
  table.docx-table th {
    border: 1px solid ${e=>e.theme.colors.universal.lightSmoke};
    padding: 8px;
  }

  ul,
  ol {
    padding-left: 2em;
    margin: 1em 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em 0;
  }
`,h=s.Ay.div`
  width: 100%;
  height: 100%;
  padding: 8px;
`;function c(e){let{buffer:t}=e;const[l,s]=(0,a.useState)(""),[c,m]=(0,a.useState)(!0),[u,p]=(0,a.useState)(null),g=(0,a.useMemo)((()=>t),[t]);return(0,a.useEffect)((()=>{let e=!1;return async function(){if(!g)return s(""),void m(!1);m(!0),p(null);try{const{value:t}=await n.convertToHtml({arrayBuffer:g},{convertImage:n.images.inline((async e=>{const t=await e.read("base64");return{src:`data:${e.contentType};base64,${t}`}})),styleMap:["b => strong","i => em","u => u","strike => s","p[style-name='Title'] => h1:fresh","p[style-name='Subtitle'] => h2:fresh","p[style-name='Heading 1'] => h2:fresh","p[style-name='Heading 2'] => h3:fresh","p[style-name='Heading 3'] => h4:fresh","** => p.docx-paragraph"]});e||s(t||"")}catch(t){e||p(t?.message||"DOCX conversion error")}finally{e||m(!1)}}(),()=>{e=!0}}),[g]),c?(0,o.jsx)(r.so,{$full:!0,children:(0,o.jsx)(r.Z,{})}):u?(0,o.jsx)(r.so,{$full:!0,children:(0,o.jsx)(r.EY,{$secondary:!0,children:u})}):l?(0,o.jsx)(h,{children:(0,o.jsx)(i.GT,{initialScale:1,minScale:.5,maxScale:3,limitToBounds:!1,wheel:{disabled:!1},pinch:{disabled:!1},doubleClick:{disabled:!1},panning:{disabled:!1},children:(0,o.jsx)("div",{style:{width:"100%",height:"100%"},children:(0,o.jsx)(i.WZ,{wrapperStyle:{width:"100%",height:"100%"},contentStyle:{touchAction:"none"},children:(0,o.jsx)(d,{dangerouslySetInnerHTML:{__html:l}})})})})}):(0,o.jsx)(r.so,{$full:!0,children:(0,o.jsx)(r.EY,{$secondary:!0,children:"Empty DOCX"})})}}}]);