import{j as s,k as i}from"./index-8cf47a1c.js";const p="_input_1hkb4_1",u={input:p},{useState:f,useRef:l,useEffect:m,useCallback:x}=i;function I(t){return s.jsx("input",{className:u.input,...t})}function k({value:t,...r}){const[a,n]=f(t),e=l(t);m(()=>{e.current!==t&&n(t),e.current=t},[t]);const c=x(o=>n(o.target.value),[n]);return s.jsx("input",{className:u.input,value:a,onChange:c,...r})}export{I,k as S};
