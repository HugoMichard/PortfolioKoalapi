import{r as x,z as R,x as c,Z as de,u as a,A as pe,$ as fe,m as V,F as me,y as z,o as m,c as E,C as U,b as $,w as _,a0 as j,a as w,D as v,t as q,a1 as J,a2 as Y,a3 as ve,G as ge,g as ye,M as b,O as Ce,P as T,N as be,I as he,a4 as Te,v as F,a5 as Q,E as B,a6 as P}from"./DM3dEHR9.js";import{y as H,l as W,z as M,_ as X,w as xe,m as Z,A as _e,B as ee,C as Ie,u as ze,E as A,D as Ne,F as Se,G as Ee}from"./Bw09BZNk.js";import{i as we,T as G,b as Be}from"./Bvm4-phJ.js";import{u as Me,a as $e,d as ke,l as Oe,z as De,E as Le}from"./5OHd8vYg.js";import{S as Fe}from"./BLjvEoH7.js";const se=Symbol(),I=x();function ne(s,n=void 0){const e=V()?me(se,I):I;return s?c(()=>{var o,t;return(t=(o=e.value)==null?void 0:o[s])!=null?t:n}):e}function Pe(s,n){const e=ne(),o=R(s,c(()=>{var l;return((l=e.value)==null?void 0:l.namespace)||de})),t=Me(c(()=>{var l;return(l=e.value)==null?void 0:l.locale})),r=$e(c(()=>{var l;return((l=e.value)==null?void 0:l.zIndex)||ke})),i=c(()=>{var l;return a(n)||((l=e.value)==null?void 0:l.size)||""});return He(c(()=>a(e)||{})),{ns:o,locale:t,zIndex:r,size:i}}const He=(s,n,e=!1)=>{var o;const t=!!V(),r=t?ne():void 0,i=(o=n==null?void 0:n.provide)!=null?o:t?pe:void 0;if(!i)return;const l=c(()=>{const f=a(s);return r!=null&&r.value?Ze(r.value,f):f});return i(se,l),i(Oe,c(()=>l.value.locale)),i(fe,c(()=>l.value.namespace)),i(De,c(()=>l.value.zIndex)),i(Fe,{size:c(()=>l.value.size||"")}),(e||!I.value)&&(I.value=l.value),l},Ze=(s,n)=>{var e;const o=[...new Set([...H(s),...H(n)])],t={};for(const r of o)t[r]=(e=n[r])!=null?e:s[r];return t},K={},Ae=W({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Ge=["textContent"],Ke=z({name:"ElBadge"}),Re=z({...Ke,props:Ae,setup(s,{expose:n}){const e=s,o=R("badge"),t=c(()=>e.isDot?"":M(e.value)&&M(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:t}),(r,i)=>(m(),E("div",{class:v(a(o).b())},[U(r.$slots,"default"),$(Y,{name:`${a(o).namespace.value}-zoom-in-center`,persisted:""},{default:_(()=>[j(w("sup",{class:v([a(o).e("content"),a(o).em("content",r.type),a(o).is("fixed",!!r.$slots.default),a(o).is("dot",r.isDot)]),textContent:q(a(t))},null,10,Ge),[[J,!r.hidden&&(a(t)||r.isDot)]])]),_:1},8,["name"])],2))}});var Ve=X(Re,[["__file","badge.vue"]]);const Ue=xe(Ve),te=["success","info","warning","error"],d=_e({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:ee?document.body:void 0}),je=W({customClass:{type:String,default:d.customClass},center:{type:Boolean,default:d.center},dangerouslyUseHTMLString:{type:Boolean,default:d.dangerouslyUseHTMLString},duration:{type:Number,default:d.duration},icon:{type:we,default:d.icon},id:{type:String,default:d.id},message:{type:Z([String,Object,Function]),default:d.message},onClose:{type:Z(Function),required:!1},showClose:{type:Boolean,default:d.showClose},type:{type:String,values:te,default:d.type},offset:{type:Number,default:d.offset},zIndex:{type:Number,default:d.zIndex},grouping:{type:Boolean,default:d.grouping},repeatNum:{type:Number,default:d.repeatNum}}),qe={destroy:()=>!0},p=ve([]),Je=s=>{const n=p.findIndex(t=>t.id===s),e=p[n];let o;return n>0&&(o=p[n-1]),{current:e,prev:o}},Ye=s=>{const{prev:n}=Je(s);return n?n.vm.exposed.bottom.value:0},Qe=(s,n)=>p.findIndex(o=>o.id===s)>0?20:n,We=["id"],Xe=["innerHTML"],es=z({name:"ElMessage"}),ss=z({...es,props:je,emits:qe,setup(s,{expose:n}){const e=s,{Close:o}=Be,{ns:t,zIndex:r}=Pe("message"),{currentZIndex:i,nextZIndex:l}=r,f=x(),y=x(!1),C=x(0);let N;const ae=c(()=>e.type?e.type==="error"?"danger":e.type:"info"),le=c(()=>{const u=e.type;return{[t.bm("icon",u)]:u&&G[u]}}),k=c(()=>e.icon||G[e.type]||""),re=c(()=>Ye(e.id)),O=c(()=>Qe(e.id,e.offset)+re.value),ie=c(()=>C.value+O.value),ue=c(()=>({top:`${O.value}px`,zIndex:i.value}));function S(){e.duration!==0&&({stop:N}=Ne(()=>{h()},e.duration))}function D(){N==null||N()}function h(){y.value=!1}function ce({code:u}){u===Le.esc&&h()}return ge(()=>{S(),l(),y.value=!0}),ye(()=>e.repeatNum,()=>{D(),S()}),Ie(document,"keydown",ce),ze(f,()=>{C.value=f.value.getBoundingClientRect().height}),n({visible:y,bottom:ie,close:h}),(u,L)=>(m(),b(Y,{name:a(t).b("fade"),onBeforeLeave:u.onClose,onAfterLeave:L[0]||(L[0]=rs=>u.$emit("destroy")),persisted:""},{default:_(()=>[j(w("div",{id:u.id,ref_key:"messageRef",ref:f,class:v([a(t).b(),{[a(t).m(u.type)]:u.type},a(t).is("center",u.center),a(t).is("closable",u.showClose),u.customClass]),style:Ce(a(ue)),role:"alert",onMouseenter:D,onMouseleave:S},[u.repeatNum>1?(m(),b(a(Ue),{key:0,value:u.repeatNum,type:a(ae),class:v(a(t).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),a(k)?(m(),b(a(A),{key:1,class:v([a(t).e("icon"),a(le)])},{default:_(()=>[(m(),b(be(a(k))))]),_:1},8,["class"])):T("v-if",!0),U(u.$slots,"default",{},()=>[u.dangerouslyUseHTMLString?(m(),E(he,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),w("p",{class:v(a(t).e("content")),innerHTML:u.message},null,10,Xe)],2112)):(m(),E("p",{key:0,class:v(a(t).e("content"))},q(u.message),3))]),u.showClose?(m(),b(a(A),{key:2,class:v(a(t).e("closeBtn")),onClick:Te(h,["stop"])},{default:_(()=>[$(a(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,We),[[J,y.value]])]),_:3},8,["name","onBeforeLeave"]))}});var ns=X(ss,[["__file","message.vue"]]);let ts=1;const oe=s=>{const n=!s||F(s)||Q(s)||B(s)?{message:s}:s,e={...d,...n};if(!e.appendTo)e.appendTo=document.body;else if(F(e.appendTo)){let o=document.querySelector(e.appendTo);Se(o)||(o=document.body),e.appendTo=o}return e},os=s=>{const n=p.indexOf(s);if(n===-1)return;p.splice(n,1);const{handler:e}=s;e.close()},as=({appendTo:s,...n},e)=>{const o=`message_${ts++}`,t=n.onClose,r=document.createElement("div"),i={...n,id:o,onClose:()=>{t==null||t(),os(C)},onDestroy:()=>{P(null,r)}},l=$(ns,i,B(i.message)||Q(i.message)?{default:B(i.message)?i.message:()=>i.message}:null);l.appContext=e||g._context,P(l,r),s.appendChild(r.firstElementChild);const f=l.component,C={id:o,vnode:l,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:l.component.props};return C},g=(s={},n)=>{if(!ee)return{close:()=>{}};if(M(K.max)&&p.length>=K.max)return{close:()=>{}};const e=oe(s);if(e.grouping&&p.length){const t=p.find(({vnode:r})=>{var i;return((i=r.props)==null?void 0:i.message)===e.message});if(t)return t.props.repeatNum+=1,t.props.type=e.type,t.handler}const o=as(e,n);return p.push(o),o.handler};te.forEach(s=>{g[s]=(n={},e)=>{const o=oe(n);return g({...o,type:s},e)}});function ls(s){for(const n of p)(!s||s===n.props.type)&&n.handler.close()}g.closeAll=ls;g._context=null;const fs=Ee(g,"$message");export{fs as E,ne as u};
