import{_ as h,o as d,c as u,a as i,k as y,w as f,z as p,A as b,y as l,B as g,C as w,t as c,d as k,q as v}from"./_plugin-vue_export-helper.js";import{E as n,L as _,W as S}from"./index.js";const B=`.widget-kvass-media-render-youtube{height:100%;width:100%;position:relative}.widget-kvass-media-render-youtube iframe{height:100%;width:100%}.widget-kvass-media-render-youtube>*{position:absolute;top:0;left:0;width:100%;height:100%}.widget-kvass-media-render-youtube__thumbnail{background-size:cover;background-repeat:no-repeat;background-position:center;filter:blur(10px);opacity:.7}.widget-kvass-media-render-youtube__blocked{display:flex;justify-content:center;align-items:center;left:50%;top:50%;transform:translate(-50%,-50%)}.widget-kvass-media-render-youtube__blocked svg{opacity:.3}@media (max-width: 992px){.widget-kvass-media-render-youtube__blocked svg{font-size:2.5em}}.widget-kvass-media-render-youtube__blocked-warning{pointer-events:initial;position:absolute;bottom:0;text-align:center;background-color:#f2f2f2;font-size:.6em;bottom:3rem;left:3rem;max-width:400px;font-size:.8em;padding:1.5em 2em}.widget-kvass-media-render-youtube__blocked-warning-button{padding:.5rem;border:1px solid #818181;backdrop-filter:none;background-color:transparent}@media (max-width: 992px){.widget-kvass-media-render-youtube__blocked-warning{left:.5rem;bottom:.5rem;font-size:.6em;max-width:200px}}.widget-kvass-media-render-youtube .fade-enter-active,.widget-kvass-media-render-youtube .fade-leave-active{transition:opacity .5s}.widget-kvass-media-render-youtube .fade-enter,.widget-kvass-media-render-youtube .fade-leave-to{opacity:0}
`,x={props:{url:{type:String,default:""},loop:{type:[String,Boolean],default:!0},autoplay:{type:[String,Boolean],default:!1},controls:{type:[String,Boolean],default:!0},mute:{type:[String,Boolean],default:!1},displayThumbnail:{type:[String,Boolean],default:!0},ignoreConsent:{type:[String,Boolean],default:!1},hideConsent:{type:[String,Boolean],default:!1},thumbnailSource:{type:String,default:""},consentBlockMessage:{type:String,default:"The video is blocked due to lack of consent to cookies"},consentButtonLabel:{type:String,default:"Edit consents"},aspectRatio:{type:String,default:"16/9"}},data(){return{ready:!1,player:null,thumbnail:null,consents:[]}},computed:{kvassDefined(){return typeof Kvass<"u"},showConsent(){return this.hideConsent||!this.kvassDefined?!1:!this.ignoreConsent&&!this.consents.includes("statistics")},videoId(){if(!this.url)return;let e=this.url;return[n(e,/https\:\/\/(w{3}\.)?youtube\.com\/watch\?v=(.+)\/?/,{group:2}),n(e,/https\:\/\/(w{3}\.)?youtube\.com\/embed\/(.+)\/?/,{group:2}),n(e,/https\:\/\/(w{3}\.)?youtube\.com\/watch\/(.+)\/?/,{group:2}),n(e,/https\:\/\/(w{3}\.)?youtu\.be\/(.+)\/?/,{group:2})].find(s=>!!s).split("&")[0]}},methods:{openConsent(){this.kvassDefined&&Kvass.emit("consent:show")},play(){!this.player||!this.ready||this.player.playVideo()},async init(){const e={loop:this.loop,autoplay:this.autoplay,controls:this.controls,muted:this.mute||this.autoplay,enablejsapi:1,playsinline:1};function s(t){return t==="false"?!1:t==="true"?!0:t}Object.entries(e).map(([t,r])=>e[t]=Number(s(r))),_("https://www.youtube.com/iframe_api"),await S(()=>window.YT&&window.YT.Player,{limit:100}),this.player=new YT.Player(this.$refs.youtubePlayer,{videoId:this.videoId,playerVars:{...e,videoId:this.videoId,origin:window.location.host},events:{onReady:t=>{this.ready=!0,e.mute&&t.target.mute(),e.autoplay&&t.target.playVideo()}}})}},async mounted(){if(this.displayThumbnail&&(this.thumbnail=!this.thumbnailSource&&this.kvassDefined?`/api/media/thumbnail?url=${this.url}`:this.thumbnailSource),this.ignoreConsent||!this.kvassDefined)return this.init();let e=s=>{if(this.consents=s||[],!(!this.consents||!this.consents.length)&&this.consents.includes("statistics"))return this.init()};this.kvassDefined&&(Kvass.emit("consent:get",s=>e(s)),Kvass.on("consent:change",e))}},C={ref:"youtubePlayer",class:"kvass-media-render-youtube__embed",frameborder:"0",allow:"autoplay; fullscreen;",webkitallowfullscreen:"",mozallowfullscreen:""},T={key:0,class:"widget-kvass-media-render-youtube__blocked"},z={class:"widget-kvass-media-render-youtube__blocked-warning"};function D(e,s,t,r,a,o){return d(),u("div",{class:"widget-kvass-media-render-youtube",style:l(`aspect-ratio: ${t.aspectRatio};`)},[i("div",C,null,512),y(g,{name:"fade",mode:"in-out"},{default:f(()=>[p(i("div",{class:"widget-kvass-media-render-youtube__thumbnail",style:l({backgroundImage:`url(${a.thumbnail})`})},null,4),[[b,!a.ready&&a.thumbnail]])]),_:1}),o.showConsent?(d(),u("div",T,[i("div",z,[w(c(t.consentBlockMessage)+" ",1),i("button",{class:"widget-kvass-media-render-youtube__blocked-warning-button",onClick:s[0]||(s[0]=(...m)=>o.openConsent&&o.openConsent(...m))},c(t.consentButtonLabel),1)])])):k("",!0)],4)}const V=h(x,[["render",D],["styles",[B]]]);customElements.define("kvass-youtube",v(V));
