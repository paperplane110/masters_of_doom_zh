import{d as p,s as x,Y as m,c as u,e as h,i as n,w as _,f as c,t as o,L as e,g as l,C as y,q as b}from"./CcehKyel.js";const f={class:"grid grid-cols-2 gap-4"},g={class:"text-gray-500 dark:text-gray-300 text-sm"},k={class:"text-gray-500 dark:text-gray-300 text-sm"},B=p({__name:"PrevNext",async setup(v){let a,s;const i=x(),[t,r]=([a,s]=m(()=>b("/").only(["_path","title"]).where({_partial:!1}).findSurround(i.path)),a=await a,s(),a);return(w,C)=>{const d=y;return u(),h("div",f,[n(d,{class:"px-4 py-2 border !border-solid dark:border-slate-600 rounded-md hover:border-emerald-300 dark:hover:border-emerald-600",to:e(t)?e(t)._path:"/"},{default:_(()=>[c("p",g,o(e(t)?"上一章":"📚"),1),l(" "+o(e(t)?e(t).title:"回到封面"),1)]),_:1},8,["to"]),n(d,{class:"px-8 py-2 border !border-solid dark:border-slate-600 rounded-md text-right hover:border-emerald-300 dark:hover:border-emerald-600",to:e(r)?e(r)._path:"/"},{default:_(()=>[c("p",k,o(e(r)?"下一章":"📚"),1),l(" "+o(e(r)?e(r).title:"回到封面"),1)]),_:1},8,["to"])])}}});export{B as default};