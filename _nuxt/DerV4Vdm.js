const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BTgY0xof.js","./D1AceMII.js","./_...DGur0oyu.css"])))=>i.map(i=>d[i]);
import{d as t,J as n,g as r,t as s,M as l,R as p}from"./D1AceMII.js";import{g as c,l as i}from"./BTgY0xof.js";const a=()=>p(()=>import("./BTgY0xof.js").then(e=>e.i),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.G).then(e=>e.default).catch(e=>{throw console.error("Error while attempting to dynamically import component Block at ../block.vue",e),e}),m=t({name:"repeated-block",components:{Block:n(a)},props:["repeatContext","block","registeredComponents","linkComponent"],data(){return{store:this.repeatContext}},provide(){const e=this;return{[i.key]:e.store}}});function d(e,k,C,u,f,h){const o=r("Block");return s(),l(o,{block:e.block,context:e.store,registeredComponents:e.registeredComponents,linkComponent:e.linkComponent},null,8,["block","context","registeredComponents","linkComponent"])}const _=c(m,[["render",d]]);export{_ as default};