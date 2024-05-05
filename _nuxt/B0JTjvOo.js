import{l as D,v as te,m as se,E as M,_ as q,w as K,s as oe,x as ne}from"./Bw09BZNk.js";import{x as y,F as ae,r as Y,K as ie,S as le,z as A,y as B,o as l,M as f,w as x,c as d,I as v,C as z,u as r,D as C,N as E,P as S,U as re,A as ce,n as de,V as R,O,a as e,d as b,q as V,W as I,t as g,b as h,_ as L,X as ue,Y as pe}from"./DM3dEHR9.js";import U from"./ZAfo9BR4.js";import{i as F}from"./Bvm4-phJ.js";import{a as me,u as W,b as H,d as _e,c as ge,E as fe}from"./BLjvEoH7.js";import{u as be,T as ye}from"./D_UJMy7N.js";import{u as he,E as Q}from"./DnKH-EBX.js";const J=Symbol("buttonGroupContextKey"),xe=(t,a)=>{be({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},y(()=>t.type==="text"));const o=ae(J,void 0),n=he("button"),{form:c}=me(),s=W(y(()=>o==null?void 0:o.size)),i=H(),u=Y(),m=ie(),_=y(()=>t.type||(o==null?void 0:o.type)||""),k=y(()=>{var $,T,N;return(N=(T=t.autoInsertSpace)!=null?T:($=n.value)==null?void 0:$.autoInsertSpace)!=null?N:!1}),P=y(()=>t.tag==="button"?{ariaDisabled:i.value||t.loading,disabled:i.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),j=y(()=>{var $;const T=($=m.default)==null?void 0:$.call(m);if(k.value&&(T==null?void 0:T.length)===1){const N=T[0];if((N==null?void 0:N.type)===le){const ee=N.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(ee.trim())}}return!1});return{_disabled:i,_size:s,_type:_,_ref:u,_props:P,shouldAddSpace:j,handleClick:$=>{t.nativeType==="reset"&&(c==null||c.resetFields()),a("click",$)}}},ve=["default","primary","success","warning","info","danger","text",""],ke=["button","submit","reset"],G=D({size:_e,disabled:Boolean,type:{type:String,values:ve,default:""},icon:{type:F},nativeType:{type:String,values:ke,default:"button"},loading:Boolean,loadingIcon:{type:F,default:()=>te},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:se([String,Object]),default:"button"}}),$e={click:t=>t instanceof MouseEvent};function w(t,a=20){return t.mix("#141414",a).toString()}function we(t){const a=H(),o=A("button");return y(()=>{let n={};const c=t.color;if(c){const s=new ye(c),i=t.dark?s.tint(20).toString():w(s,20);if(t.plain)n=o.cssVarBlock({"bg-color":t.dark?w(s,90):s.tint(90).toString(),"text-color":c,"border-color":t.dark?w(s,50):s.tint(50).toString(),"hover-text-color":`var(${o.cssVarName("color-white")})`,"hover-bg-color":c,"hover-border-color":c,"active-bg-color":i,"active-text-color":`var(${o.cssVarName("color-white")})`,"active-border-color":i}),a.value&&(n[o.cssVarBlockName("disabled-bg-color")]=t.dark?w(s,90):s.tint(90).toString(),n[o.cssVarBlockName("disabled-text-color")]=t.dark?w(s,50):s.tint(50).toString(),n[o.cssVarBlockName("disabled-border-color")]=t.dark?w(s,80):s.tint(80).toString());else{const u=t.dark?w(s,30):s.tint(30).toString(),m=s.isDark()?`var(${o.cssVarName("color-white")})`:`var(${o.cssVarName("color-black")})`;if(n=o.cssVarBlock({"bg-color":c,"text-color":m,"border-color":c,"hover-bg-color":u,"hover-text-color":m,"hover-border-color":u,"active-bg-color":i,"active-border-color":i}),a.value){const _=t.dark?w(s,50):s.tint(50).toString();n[o.cssVarBlockName("disabled-bg-color")]=_,n[o.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${o.cssVarName("color-white")})`,n[o.cssVarBlockName("disabled-border-color")]=_}}}return n})}const Se=B({name:"ElButton"}),Ce=B({...Se,props:G,emits:$e,setup(t,{expose:a,emit:o}){const n=t,c=we(n),s=A("button"),{_ref:i,_size:u,_type:m,_disabled:_,_props:k,shouldAddSpace:P,handleClick:j}=xe(n,o);return a({ref:i,size:u,type:m,disabled:_,shouldAddSpace:P}),(p,$)=>(l(),f(E(p.tag),re({ref_key:"_ref",ref:i},r(k),{class:[r(s).b(),r(s).m(r(m)),r(s).m(r(u)),r(s).is("disabled",r(_)),r(s).is("loading",p.loading),r(s).is("plain",p.plain),r(s).is("round",p.round),r(s).is("circle",p.circle),r(s).is("text",p.text),r(s).is("link",p.link),r(s).is("has-bg",p.bg)],style:r(c),onClick:r(j)}),{default:x(()=>[p.loading?(l(),d(v,{key:0},[p.$slots.loading?z(p.$slots,"loading",{key:0}):(l(),f(r(M),{key:1,class:C(r(s).is("loading"))},{default:x(()=>[(l(),f(E(p.loadingIcon)))]),_:1},8,["class"]))],64)):p.icon||p.$slots.icon?(l(),f(r(M),{key:1},{default:x(()=>[p.icon?(l(),f(E(p.icon),{key:0})):z(p.$slots,"icon",{key:1})]),_:3})):S("v-if",!0),p.$slots.default?(l(),d("span",{key:2,class:C({[r(s).em("text","expand")]:r(P)})},[z(p.$slots,"default")],2)):S("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var Be=q(Ce,[["__file","button.vue"]]);const Pe={size:G.size,type:G.type},ze=B({name:"ElButtonGroup"}),Ie=B({...ze,props:Pe,setup(t){const a=t;ce(J,de({size:R(a,"size"),type:R(a,"type")}));const o=A("button");return(n,c)=>(l(),d("div",{class:C(`${r(o).b("group")}`)},[z(n.$slots,"default")],2))}});var X=q(Ie,[["__file","button-group.vue"]]);const Z=K(Be,{ButtonGroup:X});oe(X);const Te=D({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:F}}),Ne={click:t=>t instanceof MouseEvent},Ee=["href","target"],Ve=B({name:"ElLink"}),Ae=B({...Ve,props:Te,emits:Ne,setup(t,{emit:a}){const o=t,n=A("link"),c=y(()=>[n.b(),n.m(o.type),n.is("disabled",o.disabled),n.is("underline",o.underline&&!o.disabled)]);function s(i){o.disabled||a("click",i)}return(i,u)=>(l(),d("a",{class:C(r(c)),href:i.disabled||!i.href?void 0:i.href,target:i.disabled||!i.href?void 0:i.target,onClick:s},[i.icon?(l(),f(r(M),{key:0},{default:x(()=>[(l(),f(E(i.icon)))]),_:1})):S("v-if",!0),i.$slots.default?(l(),d("span",{key:1,class:C(r(n).e("inner"))},[z(i.$slots,"default")],2)):S("v-if",!0),i.$slots.icon?z(i.$slots,"icon",{key:2}):S("v-if",!0)],10,Ee))}});var qe=q(Ae,[["__file","link.vue"]]);const je=K(qe),Me=D({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:ge,default:""},truncated:{type:Boolean},lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),Fe=B({name:"ElText"}),Ge=B({...Fe,props:Me,setup(t){const a=t,o=W(),n=A("text"),c=y(()=>[n.b(),n.m(a.type),n.m(o.value),n.is("truncated",a.truncated),n.is("line-clamp",!ne(a.lineClamp))]);return(s,i)=>(l(),f(E(s.tag),{class:C(r(c)),style:O({"-webkit-line-clamp":s.lineClamp})},{default:x(()=>[z(s.$slots,"default")]),_:3},8,["class","style"]))}});var De=q(Ge,[["__file","text.vue"]]);const Ke=K(De),Le={class:"bg-white",id:"about"},Ue={class:"relative isolate px-6 pt-14 lg:px-8 overflow-hidden"},Re=e("div",{class:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true"},[e("div",{class:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00f3fe] to-[#4337fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{"clip-path":`polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            )`}})],-1),Qe={class:"mx-auto max-w-3xl py-32 sm:py-48 lg:py-56"},Ye={class:"hidden sm:mb-8 sm:flex sm:justify-center"},Oe={class:"relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"},We=e("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),He={class:"text-center"},Je={class:"items-center",id:"about"},Xe={class:"grid justify-items-center"},Ze={class:"pl-10"},et={class:"text-5xl font-bold text-left"},tt={class:"words"},st=e("p",{class:"mt-6 text-lg leading-8 text-gray-600"},[b(" Easily share your data or software with your customers through an API. "),e("br"),b(" No code needed, plug your product and instantly let your users subscribe to it. ")],-1),ot={class:"mt-10 flex items-center justify-center gap-x-6"},nt=e("div",{class:"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]","aria-hidden":"true"},[e("div",{class:"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00f3fe] to-[#4337fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",style:{"clip-path":`polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            )`}})],-1),at={__name:"Summary",setup(t){const a={"SQL database":"text-blue-500",API:"text-red-500","CSV files":"text-green-500"};return(o,n)=>{const c=Z;return l(),d("div",Le,[e("div",Ue,[Re,e("div",Qe,[e("div",Ye,[e("div",Oe,[b(" Announcing our beta release. "),e("a",{onClick:n[0]||(n[0]=s=>("navigateTo"in o?o.navigateTo:r(V))("/documentation/get-started/quickstart")),class:"font-semibold text-indigo-600 hover:cursor-pointer"},[We,b("Read more ")])])]),e("div",He,[e("div",Je,[e("div",Xe,[e("div",Ze,[e("h1",et,[b(" Share & Sell your "),e("ol",tt,[(l(),d(v,null,I(a,(s,i,u)=>e("li",null,[e("span",{class:C(s)},g(i),3)])),64))])]),st,e("div",ot,[h(c,{class:"text-white bg-indigo-600 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500",size:"large",onClick:n[1]||(n[1]=s=>("navigateTo"in o?o.navigateTo:r(V))("/app/signup"))},{default:x(()=>[b("Get Started")]),_:1}),e("a",{onClick:n[2]||(n[2]=s=>("navigateTo"in o?o.navigateTo:r(V))("/documentation/get-started/quickstart")),class:"text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"},"Learn more")])])])])])]),nt])])}}},fs=at,it={data(){return{features:[{icon:"mdi:clock-fast",title:"Quick setup",desc:"Connect your data sources in a few clicks to get started. We'll setup a custom API for your customers to access your product."},{icon:"ic:baseline-dashboard-customize",title:"Fully customizable",desc:"Your API is completely customizable, from the endpoint to the user access and pricing, you have full control at all times."}]}}},lt={class:"overflow-hidden bg-white py-24 sm:py-32",id:"features"},rt={class:"mx-auto max-w-7xl px-6 lg:px-8"},ct={class:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"},dt={class:"lg:pr-8 lg:pt-4"},ut={class:"lg:max-w-lg"},pt=e("h2",{class:"text-base font-semibold leading-7 text-indigo-600"}," Build and deploy easily ",-1),mt=e("p",{class:"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},"Build a no-code API",-1),_t=e("p",{class:"mt-6 text-lg leading-8 text-gray-600"}," Upload your CSV file, connect your database, or paste your API endpoint, and you're good to go. We'll create a shareable link for your users to access your product, on your terms. ",-1),gt={class:"mt-12 max-w-lg lg:max-w-none"},ft={class:"space-y-8"},bt={class:"flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center"},yt={class:"text-lg text-gray-800 font-semibold"},ht={class:"mt-3"},xt=e("img",{src:"https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",alt:"Product screenshot",class:"w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0",width:"2432",height:"1442"},null,-1);function vt(t,a,o,n,c,s){const i=U;return l(),d("div",lt,[e("div",rt,[e("div",ct,[e("div",dt,[e("div",ut,[pt,mt,_t,e("div",gt,[e("ul",ft,[(l(!0),d(v,null,I(c.features,(u,m)=>(l(),d("li",{key:m,class:"flex gap-x-4"},[e("div",bt,[h(i,{name:u.icon,size:"30"},null,8,["name"])]),e("div",null,[e("h4",yt,g(u.title),1),e("p",ht,g(u.desc),1)])]))),128))])])])]),xt])])])}const bs=L(it,[["render",vt]]),kt={name:"FeaturesSection",data(){return{features:[{icon:"material-symbols:web",title:"Share",desc:"Let your customers register, make requests, manage their subscriptions and monitor their usage with our free integrated customer portal."},{icon:"material-symbols:attach-money-rounded",title:"Monetize",desc:"Free, recurring or one-off payments. Pick the monetization that suits your product."},{icon:"ic:baseline-monitor",title:"Monitor",desc:"Your users usage can be easily monitored from our dashboard. Know exactly what is happening at all times !"},{icon:"material-symbols:admin-panel-settings",title:"Manage",desc:"Restrict access, invite users or directly generate API keys for your users"}]}}},$t={class:"relative py-28 bg-gray-900"},wt={class:"relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8"},St=e("div",{class:"max-w-xl"},[e("h3",{class:"text-white text-3xl font-semibold sm:text-4xl"}," Simply share your product "),e("p",{class:"mt-3"}," No complexity, you share your product to your users in a few clicks and get to enjoy all the perks that come with Koalapi ! ")],-1),Ct={class:"mt-12 lg:mt-0"},Bt={class:"grid gap-8 sm:grid-cols-2"},Pt={class:"flex-none w-12 h-12 bg-gray-700 text-blue-400 rounded-lg flex items-center justify-center"},zt={class:"text-lg text-gray-100 font-semibold"},It={class:"mt-3"};function Tt(t,a,o,n,c,s){const i=U;return l(),d("section",$t,[e("div",wt,[St,e("div",Ct,[e("ul",Bt,[(l(!0),d(v,null,I(c.features,(u,m)=>(l(),d("li",{key:m,class:"flex gap-x-4"},[e("div",Pt,[h(i,{name:u.icon,size:"30"},null,8,["name"])]),e("div",null,[e("h4",zt,g(u.title),1),e("p",It,g(u.desc),1)])]))),128))])])]),e("div",{class:"absolute inset-0 max-w-md mx-auto h-72 blur-[118px]",style:O({background:"linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"})},null,4)])}const ys=L(kt,[["render",Tt]]),Nt={key:0,class:"absolute top-0 left-0 right-0 mx-auto w-32 -mt-5 px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold"},Et={class:"p-8 space-y-4 border-b"},Vt={class:"text-indigo-600 font-medium capitalize"},At={class:"text-gray-800 text-3xl font-semibold"},qt={key:0,class:"text-xl text-gray-600 font-normal"},jt={class:"p-8 space-y-3"},Mt=e("div",{class:"pb-2 text-gray-800 font-medium"},"Features",-1),Ft={class:"w-16"},Gt={key:1,class:"font-bold ml-1"},Dt={key:0},Kt={class:"text-lg text-slate-500"},Lt={__name:"Card",props:{subscription:{type:Object,required:!0},is_active:{type:Boolean,required:!0},is_premium:{type:Boolean,required:!1,default:!0}},setup(t){const a=t,o={nb_users:"Customers",nb_calls_per_user:"Calls per customer",nb_apis:"APIs",nb_sources:"Datasources",nb_endpoints:"Endpoints per API",nb_pricings:"Possible pricings per API",has_file_integration:"File connection",has_api_integration:"API connection",has_sql_integration:"SQL databases connection",percent_for_koalapi:"Service fees on earnings"},n={nb_calls:"Calls per month"};return(c,s)=>{const i=ue("PremiumStripePayment"),u=U;return l(),d(v,null,[a.subscription.isMostPop?(l(),d("span",Nt," Most popular ")):S("",!0),e("div",Et,[e("span",Vt,g(a.subscription.title),1),e("div",At,[b(g(a.subscription.price)+" € ",1),a.subscription.frequency?(l(),d("span",qt,"/ "+g(a.subscription.frequency),1)):S("",!0)]),e("p",null,g(a.subscription.description),1),h(i,{subscription:t.subscription},null,8,["subscription"])]),e("div",jt,[Mt,(l(!0),d(v,null,I(a.is_premium?o:n,(m,_)=>(l(),d("div",{key:c.featureIndex,class:"flex"},[e("div",Ft,[typeof t.subscription[_]=="boolean"?(l(),f(u,{key:0,name:t.subscription[_]?"ic:round-check":"ic:outline-close",color:t.subscription[_]?"green":"red",size:"25"},null,8,["name","color"])):typeof t.subscription[_]=="number"?(l(),d("span",Gt,[e("span",null,g(t.subscription[_]),1),_==="percent_for_koalapi"?(l(),d("span",Dt,"%")):S("",!0)])):(l(),f(u,{key:2,name:"ic:outline-close",color:"red",size:"25"}))]),e("div",null,[e("span",Kt,g(m),1)])]))),128))])],64)}}},Ut=Lt,Rt={class:"pt-14 pb-8",id:"premium"},Qt={class:"max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"},Yt=e("div",{class:"relative max-w-xl mx-auto text-center"},[e("h3",{class:"text-gray-800 text-3xl font-semibold sm:text-4xl"}," Pricing for all goals "),e("div",{class:"mt-3 max-w-xl"},[e("p",null,"Choose your pricing depending on your needs and goals")])],-1),Ot={class:"mt-8 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3"},Wt={__name:"Pricing",setup(t){const a=[{id:1,name:"free",price:0,nb_message:30,nb_qa:5,nb_url:1,nb_doc:1,max_doc_size:1,has_pdf:!0,has_csv:!1,memory:0,refresh_frequency:"monthly",link:" "},{id:2,name:"lite",price:29.99,nb_message:500,nb_qa:20,nb_url:3,nb_doc:3,max_doc_size:3,has_pdf:!0,has_csv:!1,memory:0,refresh_frequency:"weekly",link:"https://buy.stripe.com/test_14k8zP7Ked3A2S4aEH"},{id:3,name:"pro",price:99.99,nb_message:3e3,nb_qa:50,nb_url:10,nb_doc:10,max_doc_size:5,has_pdf:!0,has_csv:!1,memory:0,refresh_frequency:"daily",link:"https://buy.stripe.com/test_bIYbM12pU7JgcsEcMQ"}];return(o,n)=>{const c=Ut;return l(),d("section",Rt,[e("div",Qt,[Yt,e("div",Ot,[(l(),d(v,null,I(a,(s,i)=>e("div",{key:i,class:C(["relative flex flex-col items-stretch rounded-xl border-2 mt-6",{"mt-10":s.isMostPop}])},[h(c,{subscription:s},null,8,["subscription"])],2)),64))])])])}}},hs=Wt,Ht={},Jt={class:"py-12 relative"},Xt={class:"relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex"},Zt=e("div",{class:"flex-1 max-w-lg"},[e("h3",{class:"text-gray-800 text-2xl font-semibold sm:text-3xl"}," Ready to dive in ? "),e("p",{class:"mt-2 text-gray-600 text-xl"},"Create your free API today")],-1),es={class:"flex-1 mt-6 md:mt-0"},ts={class:"flex gap-3 items-end mt-4 md:justify-end"};function ss(t,a){return l(),d("section",Jt,[e("div",Xt,[Zt,e("div",es,[e("div",ts,[e("a",{onClick:a[0]||(a[0]=o=>("navigateTo"in t?t.navigateTo:r(V))("/app/signup")),class:"hover:cursor-pointer inline-block py-2 px-4 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 rounded-lg shadow-md hover:shadow-none"}," Get started "),e("a",{onClick:a[1]||(a[1]=o=>("navigateTo"in t?t.navigateTo:r(V))("/documentation/get-started/quickstart")),class:"hover:cursor-pointer inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"}," Learn more ")])])])])}const xs=L(Ht,[["render",ss]]),os={class:"sm:gap-x-28 gap-x-12 gap-y-12 flex flex-wrap justify-center mt-8"},ns={class:"text-semibold uppercase text-slate-400"},as=e("h1",{class:"text-semibold uppercase text-slate-400"}," Sign up to the Newsletter ",-1),is=e("br",null,null,-1),ls={class:"flex sm:flex-nowrap flex-wrap mt-2"},rs={__name:"Footer",setup(t){const a=Y(""),o=[{title:"Product",links:[{text:"About",url:"#about"},{text:"Features",url:"#features"},{text:"Pricing",url:"#premium"}]},{title:"Documentation",links:[{text:"Get Started",url:"/documentation/get-started/quickstart"},{text:"Assistant",url:"/documentation/assistant/overview"}]}],n=()=>{$fetch("https://api.headlessforms.cloud/api/v1/form/t8QbsCVx9i",{method:"post",body:{type:"newsletter subscription",app:"koalapi",email:a.value}}).then(()=>{Q({message:"You have successfully subscribed to the newsletter !",type:"success"})}).catch(()=>{Q.error({message:"Newsletter Subscription failed. An unexpected error happened. Please try again later"})})};return(c,s)=>{const i=je,u=Ke,m=fe,_=Z;return l(),d("div",os,[(l(),d(v,null,I(o,k=>e("div",null,[e("h1",ns,g(k.title),1),(l(!0),d(v,null,I(k.links,P=>(l(),d("div",null,[h(i,{type:"info",class:"ml-1 capitalize mt-2",underline:!1,href:P.url},{default:x(()=>[b(g(P.text),1)]),_:2},1032,["href"])]))),256))])),64)),e("div",null,[as,h(u,{type:"info",class:"mt-2"},{default:x(()=>[b("Stay in tune with KoalAPI's latest updates")]),_:1}),is,e("div",ls,[h(m,{modelValue:r(a),"onUpdate:modelValue":s[0]||(s[0]=k=>pe(a)?a.value=k:null),placeholder:"Email address",class:"w-38"},null,8,["modelValue"]),h(_,{class:"bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 text-white font-medium",onClick:n},{default:x(()=>[b("SUBSCRIBE")]),_:1})])])])}}},vs=rs;export{fs as _,bs as a,ys as b,hs as c,xs as d,vs as e};
