import{_ as j,x as f,o as t,e as m,w as b,a as u,t as h,v,n as x,f as B,c as l,j as L,d as g,y as M,F as w,k as C,r as y,b as S,T as N,p as V}from"./_plugin-vue_export-helper.js";const E=`.category{padding:1rem 1.5rem;border:none;border-radius:var(--kvass-project-selector-border-radius, 3px);font-size:.9em;background-color:var(--kvass-project-selector-light-grey, #efefef)}.category:focus-visible{outline:2px solid var(--kvass-project-selector-primary, #0523a8);outline-offset:2px}.category--primary.category--active{background-color:var(--kvass-project-selector-primary, #0523a8)}.category--sale.category--active{background-color:var(--kvass-project-selector-sale, #2da71d)}.category--sold.category--active{background-color:var(--kvass-project-selector-sold, #cc3434)}.category--development.category--active{background-color:var(--kvass-project-selector-development, #3d495b)}.category--upcoming.category--active{background-color:var(--kvass-project-selector-upcoming, #e9b03d)}.category--default.category--active{background-color:var(--kvass-project-selector-default, )}.category--active{color:#fff}
`,O={__name:"Category.ce",props:{value:{type:String,default:"development"},component:{type:String,default:"div"},active:{type:Boolean}},setup(e){const o={sale:"sale",upcoming:"upcoming",development:"development",sold:"sold"},a={sale:"Til salgs",upcoming:"Kommer for salg",development:"Under utvikling",all:"Alle",sold:"Utsolgt"},r=e,c=f(()=>o[r.value]?o[r.value]:"default"),s=f(()=>a[r.value]);return(d,p)=>(t(),m(B(e.component),{class:x(["category",[`category--${v(c)}`,{"category--active":e.active}]])},{default:b(()=>[u("span",null,h(v(s)),1)]),_:1},8,["class"]))}},z=j(O,[["styles",[E]]]),U=`.project-selector-card{position:relative;font-family:var(--kvass-project-selector-secondary-font, inherit);display:flex;flex-direction:column;border-radius:var(--kvass-project-selector-border-radius, 3px);background-color:#fff;text-decoration:none;color:inherit;overflow:hidden}.project-selector-card__header{min-height:var(--kvass-project-selector-header-min-height, 250px);background-color:var(--kvass-project-selector-dark, #272727)}@media (max-width: 767px){.project-selector-card__header{min-height:var(--kvass-project-selector-header-min-height-resposive, 150px)}}.project-selector-card__header-category{position:absolute;background-color:var(--kvass-project-selector-secondary, #3d495b);z-index:11;color:#fff;left:var(--kvass-project-selector-card-status-gap, .5rem);top:var(--kvass-project-selector-card-status-gap, .5rem);border-radius:var(--kvass-project-selector-border-radius, 3px)}.project-selector-card__header-category .category{font-size:var(--kvass-project-selector-card-status-font-size, .8em);padding:var(--kvass-project-selector-card-status-padding-x, .5rem) var(--kvass-project-selector-card-status-padding-x, 1rem)}.project-selector-card__header-cover{width:100%;background-repeat:no-repeat;height:100%;background-size:cover;background-position:center;transition:transform .62s cubic-bezier(.05,.2,.1,1)}.project-selector-card__header-cover:hover{transform:scale(1.11);-webkit-transform:scale(1.11)}.project-selector-card__title{font-weight:700;line-height:1;margin:0}.project-selector-card__content{background-color:var(--kvass-project-selector-background-color, #efeded);border-top:none;text-align:left;display:flex;flex-direction:column;gap:.5rem;padding:calc(var(--kvass-project-selector-card-spacing, 2.5rem) - .5rem);height:100%}.project-selector-card__content-name{color:var(--kvass-project-selector-dark, #272727);margin:0!important}.project-selector-card__content-url{color:var(--kvass-project-selector-primary, #0523a8);font-size:1.1em;margin-top:auto;text-decoration:underline;text-decoration-color:var(--kvass-project-selector-primary, #0523a8);text-underline-offset:.3em;text-decoration-thickness:1px}.project-selector-card__content-url:hover{color:var(--kvass-project-selector-secondary, #3d495b)}.project-selector-card__content-city{font-size:1.2rem}.project-selector-card__content-location{display:flex;align-items:center;align-content:center;gap:1rem;color:var(--kvass-project-selector-secondary, #3d495b)}.project-selector-card__content-location svg{opacity:.5;height:.9rem}.project-selector-card__content-location svg path{color:currentColor}@media (max-width: 767px){.project-selector-card__content{gap:.5rem;padding:calc(var(--kvass-project-selector-card-spacing, 2.5rem) - .5rem) calc(var(--kvass-project-selector-card-spacing, 2.5rem) - 1rem)}}.project-selector--theme-tiles .project-selector-card{border-radius:var(--kvass-project-selector-border-radius, 0px)}.project-selector--theme-tiles .project-selector-card:hover .project-selector-card__content{background:rgba(0,0,0,.2)!important}.project-selector--theme-tiles .project-selector-card__header{min-height:var(--kvass-project-selector-header-min-height, 400px)}@media (max-width: 767px){.project-selector--theme-tiles .project-selector-card__header{min-height:var(--kvass-project-selector-header-min-height-resposive, 250px)}}.project-selector--theme-tiles .project-selector-card__content{font-size:1.5rem;height:unset!important;position:absolute;inset:0;z-index:10;pointer-events:none;background:rgba(0,0,0,.4)!important;transition:background .2s ease;display:grid!important;place-content:center}.project-selector--theme-tiles .project-selector-card__content>*{color:#fff!important;text-align:center}.project-selector--theme-tiles .project-selector-card__content-url{text-decoration-color:currentColor;font-size:.8em}.project-selector--theme-tiles .project-selector-card__content-location{justify-content:center;margin-bottom:1rem}.project-selector--theme-tiles .project-selector-card__content-location svg{display:none}.project-selector--theme-tiles .project-selector-card__content-intro{font-size:.8em}
`,D={key:0,class:"project-selector-card__header-category"},H={class:"project-selector-card__content"},P={class:"project-selector-card__content-name"},G={key:0,class:"project-selector-card__content-location"},K=u("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"map-pin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 288 512"},[u("path",{fill:"currentColor",d:"M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"})],-1),W={class:"project-selector-card__content-city"},q=["innerHTML"],J=["href"],Q={__name:"Card.ce",props:{item:{type:Object,default:()=>({})},theme:{type:String,default:"default",enums:["default","primary","flat"]},disableLabel:{type:Boolean,default:!1}},setup(e){const o=e,a=f(()=>c(o.item.media&&o.item.media.cover?o.item.media.cover:null)||c(o.item.media&&o.item.media.gallery?o.item.media.gallery:null)),r=f(()=>o.item.status);function c(s){if(!s||!s.length)return;let d=s.find(p=>p.type?p.type.startsWith("image"):p);if(d)return d.url}return(s,d)=>(t(),l("div",{class:x(["project-selector-card","project-selector-card--"+e.theme])},[(t(),m(B(e.item.url&&!["development"].includes(v(r))?"a":"div"),{class:"project-selector-card__header",href:e.item.url},{default:b(()=>[e.disableLabel?g("",!0):(t(),l("div",D,[L(z,{value:v(r),component:"div",active:""},null,8,["value"])])),u("div",{class:"project-selector-card__header-cover",style:M({backgroundImage:`url(${v(a)})`})},null,4)]),_:1},8,["href"])),u("div",H,[u("h2",P,h(e.item.name),1),e.item.address&&e.item.address.city?(t(),l("span",G,[K,u("span",W,h(e.item.address?e.item.address.city:""),1)])):g("",!0),u("div",{class:"project-selector-card__content-intro",innerHTML:e.item.intro},null,8,q),e.item.url&&!["development"].includes(v(r))?(t(),l("a",{key:1,class:"project-selector-card__content-url",href:e.item.url}," Se prosjektet",8,J)):g("",!0)])],2))}},T=j(Q,[["styles",[U]]]),R=`.project-selector-category__selector{cursor:pointer}@media (max-width: 767px){.project-selector-category__selector{width:100%}}.project-selector-category__selector:hover{box-shadow:inset 0 0 0 2em #4a4a4a33}
`,X={class:"project-selector-category"},Y={__name:"CategorySelector.ce",props:{items:{type:Array,default:()=>[]},value:{type:String}},setup(e){return(o,a)=>(t(),l("div",X,[(t(!0),l(w,null,C(e.items,(r,c)=>(t(),m(z,{key:c,class:"project-selector-category__selector",value:r,active:e.value==r,component:"button",onClick:s=>o.$emit("input",r)},null,8,["value","active","onClick"]))),128))]))}},F=j(Y,[["styles",[R]]]),Z=`.project-type-selector .elder-dropdown__content{z-index:11}.project-type-selector__trigger{appearance:none;padding:1rem 2rem;border:none;border-radius:var(--kvass-project-selector-border-radius, 3px);font-size:.9em;background-color:var(--kvass-project-selector-primary, #0523a8);color:#fff}.project-type-selector__trigger:-ms-expand{display:none}@media (max-width: 767px){.project-type-selector__trigger{width:100%}}.project-type-selector__dropdown-item{text-align:center!important;padding:.5rem 1.5rem;font-size:.9em}.project-type-selector__dropdown-item--selected{background-color:#8f8f8f66}.project-type-selector__dropdown-item:hover{background-color:#24242466}
`,ee={class:"project-type-selector__trigger"},te=["value","onChange"],re={__name:"ProjectTypeSelector.ce",props:{items:{type:Array,default:()=>[]},value:{type:String}},setup(e){function o(a){return a.charAt(0).toUpperCase()+a.substring(1)}return(a,r)=>(t(),l("select",ee,[(t(!0),l(w,null,C(e.items,(c,s)=>(t(),l("option",{key:s,value:c,onChange:d=>a.$emit("input",c),class:"project-type-selector__dropdown-item"},h(o(c==="none"?"Velg type":c)),41,te))),128))]))}},I=j(re,[["styles",[Z]]]),oe=`.project-selector__navigation{display:flex;justify-content:var(--kvass-project-selector-nav-position, center);padding:0 2rem 3rem;gap:1.5rem}@media (max-width: 767px){.project-selector__navigation{flex-direction:column-reverse;justify-content:center;gap:.5rem}}.project-selector__navigation-category{display:flex;justify-content:center;gap:1.5rem}@media (max-width: 767px){.project-selector__navigation-category{flex-direction:column;gap:.5rem;align-items:center}}.project-selector__card{position:relative;display:grid;grid-template-columns:repeat(var(--kvass-project-selector-grid-columns, 4),1fr);gap:var(--kvass-project-selector-grid-gap, 2rem)}@media (max-width: 767px){.project-selector__card{grid-template-columns:1fr;padding-top:2rem}}.project-selector__no-result{font-size:1.2em;text-align:center;display:flex;justify-content:center;align-items:center;min-height:200px;margin:2rem 0;background-color:var(--kvass-project-selector-light-grey, #efefef)}@media (max-width: 767px){.project-selector__no-result{min-height:100px}}.project-selector .list-leave-active{position:absolute}.project-selector .list-move,.project-selector .list-enter-active,.project-selector .list-leave-active{transition:all .5s ease}.project-selector .list-enter{transform:scale(.95)}.project-selector .list-enter,.project-selector .list-leave-to{opacity:0}.project-selector--theme-tiles .project-selector__card{grid-template-columns:repeat(var(--kvass-project-selector-grid-columns, 2),1fr);gap:var(--kvass-project-selector-grid-gap, 0rem)}@media (max-width: 767px){.project-selector--theme-tiles .project-selector__card{grid-template-columns:1fr;padding-top:2rem}}
`,ce={key:0,class:"project-selector__navigation"},ae={key:2,class:"project-selector__no-result"},se={created(){this.fetch()}},le=Object.assign(se,{__name:"App.ce",props:{source:{type:String,default:"https://feature.kvass.no"},startCategory:{type:String,default:"all",enums:["all","sale","upcoming","development","sold"]},enabledCategories:{type:String,default:"all,sale,upcoming,development,sold"},theme:{type:String,enum:["default","tiles"],default:"default"},sortOn:{type:String,enum:["status","name"],default:"status"},disableNav:{type:Boolean,default:!1}},setup(e){const o=e,a=y(""),r=y("none"),c=y([]);var s=[];y(null);const d=S(()=>[...o.enabledCategories.split(",").filter(n=>n==="all"?!0:s.find(i=>i.status.includes(n)))]),p=S(()=>{let n=["none"].concat(s.map(i=>{if(i.customFields&&i.customFields["project-type"])return i.customFields["project-type"]}));return[...new Set(n||[])].filter(Boolean)});function $(){c.value=s.filter(n=>a.value==="all"?!0:n.status.includes(a.value)).filter(n=>{if(!p.length||r.value==="none")return!0;if(!(!n.customFields||!n.customFields["project-type"]))return n.customFields["project-type"].includes(r.value)})}return(n,i)=>(t(),l("div",{class:x(["project-selector",`project-selector--theme-${e.theme}`])},[!e.disableNav||!d.value.length?(t(),l("div",ce,[d.value.length?(t(),m(F,{key:0,class:"project-selector__navigation-category",items:d.value,value:a.value,onInput:i[0]||(i[0]=_=>{a.value=_,$()})},null,8,["items","value"])):g("",!0),p.value.length>1?(t(),m(I,{key:1,class:"project-selector__navigation-project-type",items:p.value,value:r.value,onInput:i[1]||(i[1]=_=>{r.value=_.target.value,$()})},null,8,["items","value"])):g("",!0)])):g("",!0),c.value&&c.value.length?(t(),m(N,{key:1,tag:"div",name:"list",appear:"",class:"project-selector__card"},{default:b(()=>[(t(!0),l(w,null,C(c.value,(_,A)=>(t(),m(T,{"disable-label":e.disableNav,key:A,item:_,theme:"border"},null,8,["disable-label","item"]))),128))]),_:1})):(t(),l("div",ae,"Ingen resultater"))],2))}}),k=j(le,[["styles",[oe]]]);k.styles=[...k.styles,...T.styles,...z.styles,...F.styles,...I.styles];customElements.define("kvass-project-portal",V(k));
