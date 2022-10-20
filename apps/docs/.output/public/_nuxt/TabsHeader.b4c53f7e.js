import{i as _,z as c,G as g,o as s,b as n,F as x,r as m,f as u,O as v,l as b,v as k,q as I,t as w,p as T,e as $,P as S,a as z}from"./entry.fb07763c.js";const C=t=>(T("data-v-5a59e144"),t=t(),$(),t),H={class:"tabs-header relative bg-gray-800 text-white"},q=["onClick"],B=C(()=>u("span",{class:"flex h-full w-full rounded-lg bg-gray-700 dark:bg-gray-900"},null,-1)),N=[B],U=_({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,o=c(),a=c(),l=e=>{!e||(a.value.style.left=`${e.offsetLeft}px`,a.value.style.top=`${e.offsetTop}px`,a.value.style.width=`${e.clientWidth}px`,a.value.style.height=`${e.clientHeight}px`,a.value.style.transform="scale(1)",a.value.style.opacity=1)},f=(e,i)=>{p("update:activeTabIndex",i),S(()=>l(e.target))};return g(o,e=>{!e||setTimeout(()=>{l(o.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,i)=>(s(),n("div",H,[t.tabs?(s(),n("div",{key:0,ref_key:"tabsRef",ref:o,class:"relative z-0 px-2"},[(s(!0),n(x,null,m(t.tabs,({label:d},r)=>(s(),n("button",{key:`${r}${d}`,class:I(["xs:py-3 xs:my-0 relative my-2 rounded-lg px-2 py-1.5 font-mono text-sm tracking-tight focus:outline-none",[t.activeTabIndex===r?"text-white":"text-gray-200 hover:text-white"]]),onClick:y=>f(y,r)},w(d),11,q))),128)),u("span",{ref_key:"highlightUnderline",ref:a,class:"highlight-underline xs:py-1.5 absolute -z-[1]",style:v({transform:"scale(0)",opacity:0})},N,4)],512)):b("",!0),k(e.$slots,"footer",{},void 0,!0)]))}});const L=z(U,[["__scopeId","data-v-5a59e144"]]);export{L as default};
