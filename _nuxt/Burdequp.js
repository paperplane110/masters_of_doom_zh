import{r,o as u,V as p,c,U as v,w as m,L as w,e as f,n as g,i as _,g as h,h as x,T as k,W as T}from"./CcehKyel.js";const V={__name:"BackToTop",setup(b){const n=r(!1),s=r(!1),a=r(0),t=r("down"),l=()=>{const o=window.innerHeight,e=window.scrollY||document.documentElement.scrollTop;e>a.value?t.value="down":t.value="up",a.value=e,s.value=e>o/2,s.value&&t.value==="up"?n.value=!0:n.value=!1},i=o=>{o.preventDefault(),o.stopPropagation(),window.scrollTo({top:0,behavior:"smooth"})};return u(()=>{window.addEventListener("scroll",l)}),p(()=>{window.removeEventListener("scroll",l)}),(o,e)=>{const d=T;return c(),v(k,null,{default:m(()=>[w(n)?(c(),f("div",{key:0,class:g(["fixed top-[1rem] left-1/2 -translate-x-[50%] z-10","cursor-pointer flex items-center bg-gray-50 dark:bg-slate-900 px-4 py-2 border border-gray-400 dark:border-slate-600 rounded-lg shadow-md ","hover:border-green-500 hover:text-green-500 dark:hover:border-green-500 dark:hover:text-green-500","transition-all duration-300"]),onClick:i},[_(d,{name:"lets-icons:up"}),e[0]||(e[0]=h(" 回到顶部 "))])):x("",!0)]),_:1})}}};export{V as default};