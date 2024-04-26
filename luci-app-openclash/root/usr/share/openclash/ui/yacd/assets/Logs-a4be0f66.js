import{r as u,R as m,P as d,j as t,w as y,x as R,y as T,l as C,n as w,u as L,z as N,d as W,C as O,S as k,A as z,k as I,c as E,D as M}from"./index-8cf47a1c.js";import{a as $,F}from"./index.esm-eb217302.js";import{r as A,s as D,f as B}from"./logs-281e0071.js";import{d as H}from"./debounce-c1ba2006.js";import{u as q}from"./useRemainingViewPortHeight-b3800ff0.js";import{F as K,p as V}from"./Fab-6279b0bb.js";import{P as Y,a as G}from"./play-85de9511.js";function f(){return f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},f.apply(this,arguments)}function J(e,a){if(e==null)return{};var r=Q(e,a),s,o;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)s=n[o],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function Q(e,a){if(e==null)return{};var r={},s=Object.keys(e),o,n;for(n=0;n<s.length;n++)o=s[n],!(a.indexOf(o)>=0)&&(r[o]=e[o]);return r}var _=u.forwardRef(function(e,a){var r=e.color,s=r===void 0?"currentColor":r,o=e.size,n=o===void 0?24:o,c=J(e,["color","size"]);return m.createElement("svg",f({ref:a,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),m.createElement("circle",{cx:"11",cy:"11",r:"8"}),m.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});_.propTypes={color:d.string,size:d.oneOfType([d.string,d.number])};_.displayName="Search";const U=_,X="_RuleSearch_bd30s_1",Z="_RuleSearchContainer_bd30s_5",ee="_inputWrapper_bd30s_10",te="_input_bd30s_10",se="_iconWrapper_bd30s_36",g={RuleSearch:X,RuleSearchContainer:Z,inputWrapper:ee,input:te,iconWrapper:se};function oe({dispatch:e,searchText:a,updateSearchText:r}){const[s,o]=u.useState(a),n=u.useCallback(l=>{e(r(l))},[e,r]),c=u.useMemo(()=>H(n,300),[n]),h=l=>{o(l.target.value),c(l.target.value)};return t.jsx("div",{className:g.RuleSearch,children:t.jsxs("div",{className:g.RuleSearchContainer,children:[t.jsx("div",{className:g.inputWrapper,children:t.jsx("input",{type:"text",value:s,onChange:h,className:g.input})}),t.jsx("div",{className:g.iconWrapper,children:t.jsx(U,{size:20})})]})})}const ae=e=>({searchText:R(e),updateSearchText:T}),re=y(ae)(oe),ne="_logMeta_7a1x3_1",ce="_logType_7a1x3_8",ie="_logTime_7a1x3_18",le="_logText_7a1x3_24",ge="_logsWrapper_7a1x3_37",pe="_logPlaceholder_7a1x3_51",de="_logPlaceholderIcon_7a1x3_64",ue="_search_7a1x3_68",i={logMeta:ne,logType:ce,logTime:ie,logText:le,logsWrapper:ge,logPlaceholder:pe,logPlaceholderIcon:de,search:ue},{useCallback:j,memo:he,useEffect:me}=I,x=30,xe={debug:"#28792c",info:"var(--bg-log-info-tag)",warning:"#b99105",error:"#c11c1c"};function fe({time:e,even:a,payload:r,type:s}){const o=E({even:a},"log");return t.jsx("div",{className:o,children:t.jsxs("div",{className:i.logMeta,children:[t.jsx("div",{className:i.logTime,children:e}),t.jsx("div",{className:i.logType,style:{backgroundColor:xe[s]},children:s}),t.jsx("div",{className:i.logText,children:r})]})})}function _e(e,a){return a[e].id}const S=he(({index:e,style:a,data:r})=>{const s=r[e];return t.jsx("div",{style:a,children:t.jsx(fe,{...s})})},$);S.displayName="MemoRow";function ve({dispatch:e,logs:a}){const{data:r}=C(),s=r["log-level"],[o,n]=w(M),c=L(),h=j(()=>{o?A({...c,logLevel:s}):D(),n(!o)},[c,s,o,n]),l=j(P=>e(N(P)),[e]);me(()=>{B({...c,logLevel:s},l)},[c,s,l]);const[b,v]=q(),{t:p}=W();return t.jsxs("div",{children:[t.jsx(O,{title:p("Logs")}),t.jsx("div",{className:i.search,children:t.jsx(re,{})}),t.jsx("div",{ref:b,style:{paddingBottom:x},children:a.length===0?t.jsxs("div",{className:i.logPlaceholder,style:{height:v-x},children:[t.jsx("div",{className:i.logPlaceholderIcon,children:t.jsx(k,{width:200,height:200})}),t.jsx("div",{children:p("no_logs")})]}):t.jsxs("div",{className:i.logsWrapper,children:[t.jsx(F,{height:v-x,width:"100%",itemCount:a.length,itemSize:80,itemData:a,itemKey:_e,children:S}),t.jsx(K,{icon:o?t.jsx(Y,{size:16}):t.jsx(G,{size:16}),mainButtonStyles:o?{background:"#e74c3c"}:{},style:V,text:p(o?"Resume Refresh":"Pause Refresh"),onClick:h})]})})]})}const je=e=>({logs:z(e)}),we=y(je)(ve);export{we as default};
