import{_ as f}from"./NuxtImg.vue_vue_type_script_lang.d5babce1.js";import{i as m,R as d,z as h,o as t,b as r,u as o,c as v,l as n,F as _,r as b,q as k,p as w,e as g,f as I,a as S}from"./entry.fb07763c.js";/* empty css                                                                    */const V=e=>(w("data-v-11a5685e"),e=e(),g(),e),B={key:1,class:"absolute top-0 left-0 w-full h-full video"},C=["poster"],$=["src"],x=["src","type"],N=["autoplay","src"],P=V(()=>I("button",{class:"play"},null,-1)),j=[P],q=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]}},setup(e){const s=e,a=d(()=>{if(s.src&&s.src.includes("youtube.com/watch")){const l=s.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${l[1]}?autoplay=1`,poster:s.poster||`https://i3.ytimg.com/vi/${l[1]}/hqdefault.jpg`}}}),p=h(!1);if(!s.src&&!s.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const i=d(()=>{var l,u;return s.src||((u=(l=s.sources)==null?void 0:l[0])==null?void 0:u.src)||!1});return(l,u)=>{const y=f;return t(),r("div",{class:k(["relative inline-block my-4 overflow-hidden bg-black bg-opacity-25 rounded-lg video-player",{loaded:p.value}])},[(o(a)?o(a).poster:e.poster)?(t(),v(y,{key:0,"image-classes":"video absolute top-0 left-0 h-full w-full object-fit",src:o(a)?o(a).poster:e.poster},null,8,["src"])):n("",!0),p.value?(t(),r("div",B,[o(a)?o(a).name==="youtube"?(t(),r("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:l.autoplay,class:"w-full h-full",src:o(a).src},null,8,N)):n("",!0):(t(),r("video",{key:0,poster:e.poster,controls:"",autoplay:""},[o(i)?(t(),r("source",{key:0,src:o(i)},null,8,$)):n("",!0),(t(!0),r(_,null,b(e.sources,c=>(t(),r("source",{key:c.src||c,src:c.src||c,type:c.type},null,8,x))),128))],8,C))])):n("",!0),p.value?n("",!0):(t(),r("div",{key:2,class:"absolute top-0 left-0 w-full h-full cursor-pointer overlay",onClick:u[0]||(u[0]=c=>p.value=!0)},j))],2)}}}),A=S(q,[["__scopeId","data-v-11a5685e"]]);export{A as default};
