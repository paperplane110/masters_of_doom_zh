import{d as i,v as x,Z as m,b as u,c as h,g as n,w as _,e as c,t as o,N as e,j as l,E as b,s as y}from"./vYGAfbbz.js";const g={class:"grid grid-cols-2 gap-4"},f={class:"text-gray-500 dark:text-gray-300 text-sm"},k={class:"text-gray-500 dark:text-gray-300 text-sm"},B=i({__name:"PrevNext",async setup(v){let a,s;const p=x(),[t,r]=([a,s]=m(()=>y("/").only(["_path","title"]).where({_partial:!1}).findSurround(p.path)),a=await a,s(),a);return(N,w)=>{const d=b;return u(),h("div",g,[n(d,{class:"px-4 py-2 border !border-solid dark:border-slate-600 rounded-md hover:border-emerald-300 dark:hover:border-emerald-600",to:e(t)?e(t)._path:"/"},{default:_(()=>[c("p",f,o(e(t)?"上一章":"📚"),1),l(" "+o(e(t)?e(t).title:"回到封面"),1)]),_:1},8,["to"]),n(d,{class:"px-8 py-2 border !border-solid dark:border-slate-600 rounded-md text-right hover:border-emerald-300 dark:hover:border-emerald-600",to:e(r)?e(r)._path:"/"},{default:_(()=>[c("p",k,o(e(r)?"下一章":"📚"),1),l(" "+o(e(r)?e(r).title:"回到封面"),1)]),_:1},8,["to"])])}}});export{B as default};
