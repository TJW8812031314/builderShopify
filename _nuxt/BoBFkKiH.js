import{Q as S,d as g,R as N,S as T,T as p,U as $,V as a,W as h,X as w,g as x,t as B,Y as E,Z as A}from"./pz2FBFsi.js";const C=g({name:"block-styles",components:{InlinedStyles:N},props:["block","context"],data(){return{TARGET:T}},computed:{canShowBlock(){const s=this.block;return p(s.hide)?!s.hide:p(s.show)?s.show:!0},css(){var s,i,c;const o=this.block,e=o.responsiveStyles,r=this.context.content,l=$(((s=r==null?void 0:r.meta)==null?void 0:s.breakpoints)||{}),m=e==null?void 0:e.large,u=e==null?void 0:e.medium,y=e==null?void 0:e.small,t=o.id;if(!t)return"";const k=m?a({className:t,styles:m}):"",b=u?a({className:t,styles:u,mediaQuery:h("medium",l)}):"",f=y?a({className:t,styles:y,mediaQuery:h("small",l)}):"",n=o.animations&&o.animations.find(d=>d.trigger==="hover");let v="";if(n){const d=((c=(i=n.steps)==null?void 0:i[1])==null?void 0:c.styles)||{};v=a({className:`${t}:hover`,styles:{...d,transition:`all ${n.duration}s ${w(n.easing)}`,transitionDelay:n.delay?`${n.delay}s`:"0s"}})||""}return[k,b,f,v].join(" ")}}});function Q(s,i,c,o,e,r){const l=x("InlinedStyles");return s.TARGET!=="reactNative"&&s.css&&s.canShowBlock?(B(),E(l,{key:0,id:"builderio-block",styles:s.css,nonce:s.context.nonce},null,8,["styles","nonce"])):A("",!0)}const j=S(C,[["render",Q]]);export{j as default};
