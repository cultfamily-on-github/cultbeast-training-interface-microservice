(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function J(){}const ct=t=>t;function al(t,e){for(const l in e)t[l]=e[l];return t}function Wt(t){return t()}function Vt(){return Object.create(null)}function _e(t){t.forEach(Wt)}function at(t){return typeof t=="function"}function oe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ml(t){return Object.keys(t).length===0}function pl(t,e,l,n){if(t){const s=Bt(t,e,l,n);return t[0](s)}}function Bt(t,e,l,n){return t[1]&&n?al(l.ctx.slice(),t[1](n(e))):l.ctx}function _l(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let r=0;r<o;r+=1)i[r]=e.dirty[r]|s[r];return i}return e.dirty|s}return e.dirty}function dl(t,e,l,n,s,i){if(s){const o=Bt(e,l,n,i);t.p(o,s)}}function bl(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function q(t){return t==null?"":t}const Zt=typeof window<"u";let qt=Zt?()=>window.performance.now():()=>Date.now(),mt=Zt?t=>requestAnimationFrame(t):J;const Ne=new Set;function Jt(t){Ne.forEach(e=>{e.c(t)||(Ne.delete(e),e.f())}),Ne.size!==0&&mt(Jt)}function Qt(t){let e;return Ne.size===0&&mt(Jt),{promise:new Promise(l=>{Ne.add(e={c:t,f:l})}),abort(){Ne.delete(e)}}}function a(t,e){t.appendChild(e)}function Xt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kl(t){const e=p("style");return hl(Xt(t),e),e.sheet}function hl(t,e){return a(t.head||t,e),e.sheet}function _(t,e,l){t.insertBefore(e,l||null)}function m(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function I(){return L(" ")}function we(){return L("")}function K(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function u(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function vl(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Se(t,e){t.value=e==null?"":e}function xt(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function yl(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,l,n,e),s}const lt=new Map;let nt=0;function wl(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function gl(t,e){const l={stylesheet:kl(e),rules:{}};return lt.set(t,l),l}function el(t,e,l,n,s,i,o,r=0){const f=16.666/n;let c=`{
`;for(let b=0;b<=1;b+=f){const $=e+(l-e)*i(b);c+=b*100+`%{${o($,1-$)}}
`}const d=c+`100% {${o(l,1-l)}}
}`,y=`__svelte_${wl(d)}_${r}`,T=Xt(t),{stylesheet:v,rules:g}=lt.get(T)||gl(T,t);g[y]||(g[y]=!0,v.insertRule(`@keyframes ${y} ${d}`,v.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${y} ${n}ms linear ${s}ms 1 both`,nt+=1,y}function ft(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=l.length-n.length;s&&(t.style.animation=n.join(", "),nt-=s,nt||Tl())}function Tl(){mt(()=>{nt||(lt.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&m(e)}),lt.clear())})}let Ke;function Ye(t){Ke=t}function $l(){if(!Ke)throw new Error("Function called outside component initialization");return Ke}function tl(t){$l().$$.on_mount.push(t)}const Re=[],It=[],et=[],Ct=[],Vl=Promise.resolve();let ut=!1;function Il(){ut||(ut=!0,Vl.then(ll))}function Ie(t){et.push(t)}const rt=new Set;let xe=0;function ll(){const t=Ke;do{for(;xe<Re.length;){const e=Re[xe];xe++,Ye(e),Cl(e.$$)}for(Ye(null),Re.length=0,xe=0;It.length;)It.pop()();for(let e=0;e<et.length;e+=1){const l=et[e];rt.has(l)||(rt.add(l),l())}et.length=0}while(Re.length);for(;Ct.length;)Ct.pop()();ut=!1,rt.clear(),Ye(t)}function Cl(t){if(t.fragment!==null){t.update(),_e(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ie)}}let Ge;function nl(){return Ge||(Ge=Promise.resolve(),Ge.then(()=>{Ge=null})),Ge}function st(t,e,l){t.dispatchEvent(yl(`${e?"intro":"outro"}${l}`))}const tt=new Set;let ve;function ae(){ve={r:0,c:[],p:ve}}function me(){ve.r||_e(ve.c),ve=ve.p}function A(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function P(t,e,l,n){if(t&&t.o){if(tt.has(t))return;tt.add(t),ve.c.push(()=>{tt.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const sl={duration:0};function il(t,e,l){let n=e(t,l),s=!1,i,o,r=0;function f(){i&&ft(t,i)}function c(){const{delay:y=0,duration:T=300,easing:v=ct,tick:g=J,css:h}=n||sl;h&&(i=el(t,0,1,T,y,v,h,r++)),g(0,1);const b=qt()+y,$=b+T;o&&o.abort(),s=!0,Ie(()=>st(t,!0,"start")),o=Qt(w=>{if(s){if(w>=$)return g(1,0),st(t,!0,"end"),f(),s=!1;if(w>=b){const V=v((w-b)/T);g(V,1-V)}}return s})}let d=!1;return{start(){d||(d=!0,ft(t),at(n)?(n=n(),nl().then(c)):c())},invalidate(){d=!1},end(){s&&(f(),s=!1)}}}function ol(t,e,l){let n=e(t,l),s=!0,i;const o=ve;o.r+=1;function r(){const{delay:f=0,duration:c=300,easing:d=ct,tick:y=J,css:T}=n||sl;T&&(i=el(t,1,0,c,f,d,T));const v=qt()+f,g=v+c;Ie(()=>st(t,!1,"start")),Qt(h=>{if(s){if(h>=g)return y(0,1),st(t,!1,"end"),--o.r||_e(o.c),!1;if(h>=v){const b=d((h-v)/c);y(1-b,b)}}return s})}return at(n)?nl().then(()=>{n=n(),r()}):r(),{end(f){f&&n.tick&&n.tick(1,0),s&&(i&&ft(t,i),s=!1)}}}function rl(t,e){P(t,1,1,()=>{e.delete(t.key)})}function fl(t,e,l,n,s,i,o,r,f,c,d,y){let T=t.length,v=i.length,g=T;const h={};for(;g--;)h[t[g].key]=g;const b=[],$=new Map,w=new Map;for(g=v;g--;){const D=y(s,i,g),O=l(D);let E=o.get(O);E?n&&E.p(D,e):(E=c(O,D),E.c()),$.set(O,b[g]=E),O in h&&w.set(O,Math.abs(g-h[O]))}const V=new Set,k=new Set;function M(D){A(D,1),D.m(r,d),o.set(D.key,D),d=D.first,v--}for(;T&&v;){const D=b[v-1],O=t[T-1],E=D.key,U=O.key;D===O?(d=D.first,T--,v--):$.has(U)?!o.has(E)||V.has(E)?M(D):k.has(U)?T--:w.get(E)>w.get(U)?(k.add(E),M(D)):(V.add(U),T--):(f(O,o),T--)}for(;T--;){const D=t[T];$.has(D.key)||f(D,o)}for(;v;)M(b[v-1]);return b}function te(t){t&&t.c()}function x(t,e,l,n){const{fragment:s,on_mount:i,on_destroy:o,after_update:r}=t.$$;s&&s.m(e,l),n||Ie(()=>{const f=i.map(Wt).filter(at);o?o.push(...f):_e(f),t.$$.on_mount=[]}),r.forEach(Ie)}function ee(t,e){const l=t.$$;l.fragment!==null&&(_e(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ml(t,e){t.$$.dirty[0]===-1&&(Re.push(t),Il(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,l,n,s,i,o,r=[-1]){const f=Ke;Ye(t);const c=t.$$={fragment:null,ctx:null,props:i,update:J,not_equal:s,bound:Vt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Vt(),dirty:r,skip_bound:!1,root:e.target||f.$$.root};o&&o(c.root);let d=!1;if(c.ctx=l?l(t,e.props||{},(y,T,...v)=>{const g=v.length?v[0]:T;return c.ctx&&s(c.ctx[y],c.ctx[y]=g)&&(!c.skip_bound&&c.bound[y]&&c.bound[y](g),d&&Ml(t,y)),T}):[],c.update(),d=!0,_e(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const y=vl(e.target);c.fragment&&c.fragment.l(y),y.forEach(m)}else c.fragment&&c.fragment.c();e.intro&&A(t.$$.fragment),x(t,e.target,e.anchor,e.customElement),ll()}Ye(f)}class fe{$destroy(){ee(this,1),this.$destroy=J}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!ml(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ll(t){let e,l,n,s,i,o,r,f,c,d,y,T,v,g,h,b,$;return{c(){e=p("p"),e.innerHTML="<br/>",l=I(),n=p("h2"),n.textContent="Levels",s=I(),i=p("br"),o=L(`
1. Trainee: `),r=p("br"),f=L(`
As a trainee you can start executing the game of the day (see above). `),c=p("p"),c.innerHTML="<br/>",d=L(`

2. Apprentice: `),y=p("br"),T=L(`
You have trainee skills plus you can vote on Game of the Day Proposals.`),v=p("p"),v.innerHTML="<br/>",g=L(`

3. Master of the Game: `),h=p("br"),b=L(`
You have apprentice skills plus you can submit your own Game of the Day Proposals.

`),$=p("p"),$.innerHTML="<br/><br/>"},m(w,V){_(w,e,V),_(w,l,V),_(w,n,V),_(w,s,V),_(w,i,V),_(w,o,V),_(w,r,V),_(w,f,V),_(w,c,V),_(w,d,V),_(w,y,V),_(w,T,V),_(w,v,V),_(w,g,V),_(w,h,V),_(w,b,V),_(w,$,V)},p:J,i:J,o:J,d(w){w&&m(e),w&&m(l),w&&m(n),w&&m(s),w&&m(i),w&&m(o),w&&m(r),w&&m(f),w&&m(c),w&&m(d),w&&m(y),w&&m(T),w&&m(v),w&&m(g),w&&m(h),w&&m(b),w&&m($)}}}class Al extends fe{constructor(e){super(),re(this,e,null,Ll,oe,{})}}function Fl(t){let e,l,n,s,i,o,r,f,c,d,y,T,v,g,h,b,$,w,V;return{c(){e=p("p"),e.innerHTML="<br/><br/>",l=L(`
The games which can be found here might inspire people to inspire their friends to
explore
`),n=p("a"),n.textContent="CULT",s=L(`
and
`),i=p("a"),i.textContent="RVLT",o=L(`.
`),r=p("br"),f=p("br"),c=L(`
It seems fair to give all people the chance to come on board early. `),d=p("br"),y=p("br"),T=L(`



Let us play, learn and earn together in playful creativity to free the world. You might want to visit 
`),v=p("a"),v.textContent="cultmagazine.org",g=L(` and check the Play 2 Earn Menu.

`),h=p("br"),b=p("br"),$=L(`

If you do not like playing such games, you might want to let us know what we can
improve by
`),w=p("a"),w.textContent="submitting an issue",V=L("."),u(n,"href","https://rumble.com/v1lf51r-cultdao-in-100-seconds-michael-saylor-talks-about-cult.html"),u(n,"target","_blank"),u(n,"class","svelte-16scy71"),u(i,"href","https://rumble.com/v1lf3yb-revolt-2-earn-in-100-seconds-michael-saylor-talks-about-revolt-2-earn.html"),u(i,"target","_blank"),u(i,"class","svelte-16scy71"),u(v,"href","https://cultmagazine.org"),u(v,"target","_blank"),u(v,"class","svelte-16scy71"),u(w,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice/issues"),u(w,"target","_blank"),u(w,"class","svelte-16scy71")},m(k,M){_(k,e,M),_(k,l,M),_(k,n,M),_(k,s,M),_(k,i,M),_(k,o,M),_(k,r,M),_(k,f,M),_(k,c,M),_(k,d,M),_(k,y,M),_(k,T,M),_(k,v,M),_(k,g,M),_(k,h,M),_(k,b,M),_(k,$,M),_(k,w,M),_(k,V,M)},p:J,i:J,o:J,d(k){k&&m(e),k&&m(l),k&&m(n),k&&m(s),k&&m(i),k&&m(o),k&&m(r),k&&m(f),k&&m(c),k&&m(d),k&&m(y),k&&m(T),k&&m(v),k&&m(g),k&&m(h),k&&m(b),k&&m($),k&&m(w),k&&m(V)}}}class Dl extends fe{constructor(e){super(),re(this,e,null,Fl,oe,{})}}function Hl(t){let e,l,n,s,i,o,r,f,c,d,y,T,v,g,h;return{c(){e=p("p"),e.innerHTML="<br/><br/>",l=L(`
To become an Apprentice, please send a dm via
`),n=p("a"),n.textContent="Twitter",s=L(`
or via
`),i=p("a"),i.textContent="Telegram",o=L(`.
`),r=p("p"),r.innerHTML="<br/>",f=L(`

Depending on your track record of supporting the CULTDAO in constructive, range
increasing ways, the host of this playground decides if you are ready for the
role as apprentice or even for the role as master.
`),c=p("p"),c.innerHTML="<br/>",d=L(`
If this is too much power in the hands of the playground host from your perspective,
feel free to fork the
`),y=p("a"),y.textContent="Code Repository",T=L(`
and host your own CULT Playground. You might also consider to provide a
`),v=p("a"),v.textContent="decentralized backend",g=L(`.

`),h=p("p"),h.innerHTML="<br/><br/>",u(n,"href","https://twitter.com/Peer2PeerE"),u(n,"target","_blank"),u(n,"class","svelte-16scy71"),u(i,"href","https://t.me/freedomplayer"),u(i,"target","_blank"),u(i,"class","svelte-16scy71"),u(y,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice"),u(y,"target","_blank"),u(y,"class","svelte-16scy71"),u(v,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice/issues/2"),u(v,"target","_blank"),u(v,"class","svelte-16scy71")},m(b,$){_(b,e,$),_(b,l,$),_(b,n,$),_(b,s,$),_(b,i,$),_(b,o,$),_(b,r,$),_(b,f,$),_(b,c,$),_(b,d,$),_(b,y,$),_(b,T,$),_(b,v,$),_(b,g,$),_(b,h,$)},p:J,i:J,o:J,d(b){b&&m(e),b&&m(l),b&&m(n),b&&m(s),b&&m(i),b&&m(o),b&&m(r),b&&m(f),b&&m(c),b&&m(d),b&&m(y),b&&m(T),b&&m(v),b&&m(g),b&&m(h)}}}class Pl extends fe{constructor(e){super(),re(this,e,null,Hl,oe,{})}}const pt="https://cultplayground.org";function Ul(t){let e,l;const n=t[1].default,s=pl(n,t,t[0],null);return{c(){e=p("div"),s&&s.c(),u(e,"class","card svelte-1mj4ff7")},m(i,o){_(i,e,o),s&&s.m(e,null),l=!0},p(i,[o]){s&&s.p&&(!l||o&1)&&dl(s,n,i,i[0],l?_l(n,i[0],o,null):bl(i[0]),null)},i(i){l||(A(s,i),l=!0)},o(i){P(s,i),l=!1},d(i){i&&m(e),s&&s.d(i)}}}function Ol(t,e,l){let{$$slots:n={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&l(0,s=i.$$scope)},[s,n]}class it extends fe{constructor(e){super(),re(this,e,Ol,Ul,oe,{})}}function Mt(t){let e,l,n,s;return{c(){e=p("div"),l=L(t[2]),n=I(),s=p("p"),s.innerHTML="<br/>",u(e,"class","message")},m(i,o){_(i,e,o),a(e,l),a(e,n),a(e,s)},p(i,o){o&4&&ie(l,i[2])},d(i){i&&m(e)}}}function Lt(t){let e,l,n,s;return{c(){e=p("div"),l=p("button"),l.textContent="Send",u(l,"class","button-colors-on-Card"),u(e,"class","color-of-body")},m(i,o){_(i,e,o),a(e,l),n||(s=K(l,"click",t[6]),n=!0)},p:J,d(i){i&&m(e),n=!1,s()}}}function Sl(t){let e,l,n,s,i,o,r,f,c,d,y,T,v=t[2]&&Mt(t),g=t[0]!==""&&t[1]!==""&&Lt(t);return{c(){v&&v.c(),e=I(),l=p("div"),n=p("input"),s=I(),i=p("div"),o=p("input"),r=I(),f=p("p"),f.innerHTML="<br/>",c=I(),g&&g.c(),d=we(),u(n,"type","text"),u(n,"placeholder","Please enter your Masterkey."),u(l,"class","input-group"),u(o,"type","text"),u(o,"placeholder","Please enter your Gameproposal."),u(i,"class","input-group")},m(h,b){v&&v.m(h,b),_(h,e,b),_(h,l,b),a(l,n),Se(n,t[1]),_(h,s,b),_(h,i,b),a(i,o),Se(o,t[0]),_(h,r,b),_(h,f,b),_(h,c,b),g&&g.m(h,b),_(h,d,b),y||(T=[K(n,"input",t[4]),K(o,"input",t[5])],y=!0)},p(h,b){h[2]?v?v.p(h,b):(v=Mt(h),v.c(),v.m(e.parentNode,e)):v&&(v.d(1),v=null),b&2&&n.value!==h[1]&&Se(n,h[1]),b&1&&o.value!==h[0]&&Se(o,h[0]),h[0]!==""&&h[1]!==""?g?g.p(h,b):(g=Lt(h),g.c(),g.m(d.parentNode,d)):g&&(g.d(1),g=null)},d(h){v&&v.d(h),h&&m(e),h&&m(l),h&&m(s),h&&m(i),h&&m(r),h&&m(f),h&&m(c),g&&g.d(h),h&&m(d),y=!1,_e(T)}}}function Nl(t){let e,l;return e=new it({props:{$$slots:{default:[Sl]},$$scope:{ctx:t}}}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},p(n,[s]){const i={};s&135&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function El(t,e,l){let n="",s="",i;const o=async()=>{try{const y=await(await fetch(`${pt}/api/v1/addgameproposal`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({text:n,fromMasterKey:s})})).json();l(2,i=y.message),l(0,n=""),l(1,s="")}catch(d){alert(`an error occurred: ${d.message}`)}};function r(){s=this.value,l(1,s)}function f(){n=this.value,l(0,n)}return[n,s,i,o,r,f,()=>o()]}class jl extends fe{constructor(e){super(),re(this,e,El,Nl,oe,{})}}function Gl(t){let e,l,n,s,i,o,r,f,c;return{c(){e=p("div"),l=p("h4"),n=L("You have "),s=L(t[0]),i=L("h "),o=L(t[1]),r=L("m "),f=L(t[2]),c=L("s to complete this game."),u(e,"class","countdown svelte-j1uus7")},m(d,y){_(d,e,y),a(e,l),a(l,n),a(l,s),a(l,i),a(l,o),a(l,r),a(l,f),a(l,c)},p(d,[y]){y&1&&ie(s,d[0]),y&2&&ie(o,d[1]),y&4&&ie(f,d[2])},i:J,o:J,d(d){d&&m(e)}}}function zl(t,e,l){let{deadline:n}=e,s=new Date;s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate();let i,o,r;const f=()=>{const d=new Date().getTime(),y=n-d;l(0,i=Math.floor(y%(1e3*60*60*24)/(1e3*60*60))),l(1,o=Math.floor(y%(1e3*60*60)/(1e3*60))),l(2,r=Math.floor(y%(1e3*60)/1e3))};return tl(async()=>{f(),setInterval(function(){f()},1e3)}),t.$$set=c=>{"deadline"in c&&l(3,n=c.deadline)},[i,o,r,n]}class Rl extends fe{constructor(e){super(),re(this,e,zl,Gl,oe,{deadline:3})}}const Yl=t=>{let e="",l=t.indexOf("https://");if(l!==-1){let n=t.substr(l,t.length),s=n.indexOf(" ")-1;s===-2?e=n:e=n.substr(0,s)}return e},Ee=t=>{if(t.indexOf("https://")===-1)return t;var e=/(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,l=t.replace(e,`<a class="linkInText" href='$1' target="_blank">$1</a>`),n=/(^|[^\/])(www\.[\S]+(\b|$))/gim,s=l.replace(n,'$1<a class="linkInText" target="_blank" href="http://$2">$2</a>');return s},ye=t=>{const e=Number(t.substr(0,4)),l=Number(t.substr(5,2))-1,n=Number(t.substr(8,2));return new Date(Date.UTC(e,l,n,0,0,0,0))},ze=t=>t.toString().padStart(2,"0"),Kl=t=>[t.getUTCFullYear(),ze(t.getUTCMonth()+1),ze(t.getUTCDate())].join("-")+" "+[ze(t.getUTCHours()),ze(t.getUTCMinutes()),ze(t.getUTCSeconds())].join(":"),Wl=t=>`${t.split(" ")[0]} 23:59:59`,Bl=t=>{const e=Kl(t);return Wl(e)};function Zl(t){let e,l=t[0].rating+"",n,s,i,o,r,f,c,d=Ee(t[0].text)+"",y,T,v,g,h,b,$,w,V;return i=new Rl({props:{deadline:t[1]}}),{c(){e=p("div"),n=L(l),s=I(),te(i.$$.fragment),o=I(),r=p("p"),r.innerHTML="<br/>",f=I(),c=p("p"),y=I(),T=p("p"),T.innerHTML="<br/>",v=I(),g=p("button"),g.textContent="Let's Do It",h=I(),b=p("a"),b.textContent="you might only understand this if you try to delete it :)",u(e,"class","num-display"),u(c,"class","text-display"),u(g,"class","button-colors-on-Card"),u(b,"href","https://cultmagazine.org"),u(b,"class","linkInText"),xt(b,"display","none")},m(k,M){_(k,e,M),a(e,n),_(k,s,M),x(i,k,M),_(k,o,M),_(k,r,M),_(k,f,M),_(k,c,M),c.innerHTML=d,_(k,y,M),_(k,T,M),_(k,v,M),_(k,g,M),_(k,h,M),_(k,b,M),$=!0,w||(V=K(g,"click",t[3]),w=!0)},p(k,M){(!$||M&1)&&l!==(l=k[0].rating+"")&&ie(n,l),(!$||M&1)&&d!==(d=Ee(k[0].text)+"")&&(c.innerHTML=d)},i(k){$||(A(i.$$.fragment,k),$=!0)},o(k){P(i.$$.fragment,k),$=!1},d(k){k&&m(e),k&&m(s),ee(i,k),k&&m(o),k&&m(r),k&&m(f),k&&m(c),k&&m(y),k&&m(T),k&&m(v),k&&m(g),k&&m(h),k&&m(b),w=!1,V()}}}function ql(t){let e,l;return e=new it({props:{$$slots:{default:[Zl]},$$scope:{ctx:t}}}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},p(n,[s]){const i={};s&513&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function Jl(t,e,l){let{item:n}=e;const s=n.expiryDateUTC.substr(0,4),i=n.expiryDateUTC.substr(5,2)-1,o=n.expiryDateUTC.substr(8,2);let r=new Date(s,i,o,23,59,59,999);const f=r.getTimezoneOffset();r.setMinutes(r.getMinutes()-f);let c=r.getTime();const d=T=>{const v=Yl(T);T.indexOf("https://")===-1?alert("ok. just do it."):window.open(v,"_blank")},y=()=>d(n.text);return t.$$set=T=>{"item"in T&&l(0,n=T.item)},[n,c,d,y]}class Ql extends fe{constructor(e){super(),re(this,e,Jl,ql,oe,{item:0})}}function Xl(t){let e,l,n,s,i,o,r,f,c=t[3]&&At(t);return{c(){e=p("p"),e.innerHTML="<br/>",l=I(),n=p("div"),s=p("button"),s.textContent="Vote on this Proposal",i=I(),c&&c.c(),o=we(),u(s,"class","button-colors-on-Card"),u(n,"class","color-of-body")},m(d,y){_(d,e,y),_(d,l,y),_(d,n,y),a(n,s),_(d,i,y),c&&c.m(d,y),_(d,o,y),r||(f=K(s,"click",t[7]),r=!0)},p(d,y){d[3]?c?c.p(d,y):(c=At(d),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},d(d){d&&m(e),d&&m(l),d&&m(n),d&&m(i),c&&c.d(d),d&&m(o),r=!1,f()}}}function xl(t){let e,l,n,s;return{c(){e=p("div"),l=L(t[1]),n=I(),s=p("p"),u(e,"class","message")},m(i,o){_(i,e,o),a(e,l),a(e,n),a(e,s)},p(i,o){o&2&&ie(l,i[1])},d(i){i&&m(e)}}}function At(t){let e,l,n,s,i,o,r,f,c,d,y,T,v,g,h,b,$,w,V,k,M,D,O,E,U,N,z,C,F,ge,Te,Ce,ue,ne,pe,je,ce,Me,$e,de,se,le,Ve,Q,j,B,Y,Z,G,S,H,X,Le,_t,We,dt,Ae,be,Be,bt,Fe,kt,Ze,ht,De,ke,qe,vt,He,yt,Je,wt,Pe,he,Qe,gt,Ue,Tt,Xe,ot,$t;return{c(){e=p("ul"),l=p("li"),n=p("input"),s=I(),i=p("label"),o=L("1"),f=I(),c=p("li"),d=p("input"),T=I(),v=p("label"),g=L("2"),b=I(),$=p("li"),w=p("input"),k=I(),M=p("label"),D=L("3"),E=I(),U=p("li"),N=p("input"),C=I(),F=p("label"),ge=L("4"),Ce=I(),ue=p("li"),ne=p("input"),je=I(),ce=p("label"),Me=L("5"),de=I(),se=p("li"),le=p("input"),Q=I(),j=p("label"),B=L("6"),Z=I(),G=p("li"),S=p("input"),X=I(),Le=p("label"),_t=L("7"),dt=I(),Ae=p("li"),be=p("input"),bt=I(),Fe=p("label"),kt=L("8"),ht=I(),De=p("li"),ke=p("input"),vt=I(),He=p("label"),yt=L("9"),wt=I(),Pe=p("li"),he=p("input"),gt=I(),Ue=p("label"),Tt=L("10"),u(n,"type","radio"),u(n,"id","num1"),u(n,"class","svelte-dmekt9"),u(i,"class",r=q(t[0].currentVisitorsVoteForItem===1?"labelActive":"labelInActive")+" svelte-dmekt9"),u(i,"for","num1"),u(l,"class","svelte-dmekt9"),u(d,"type","radio"),u(d,"id","num2"),d.checked=y=t[0].currentVisitorsVoteForItem===2,u(d,"class","svelte-dmekt9"),u(v,"class",h=q(t[0].currentVisitorsVoteForItem===2?"labelActive":"labelInActive")+" svelte-dmekt9"),u(v,"for","num2"),u(c,"class","svelte-dmekt9"),u(w,"type","radio"),u(w,"id","num3"),w.checked=V=t[0].currentVisitorsVoteForItem===3,u(w,"class","svelte-dmekt9"),u(M,"class",O=q(t[0].currentVisitorsVoteForItem===3?"labelActive":"labelInActive")+" svelte-dmekt9"),u(M,"for","num3"),u($,"class","svelte-dmekt9"),u(N,"type","radio"),u(N,"id","num4"),N.checked=z=t[0].currentVisitorsVoteForItem===4,u(N,"class","svelte-dmekt9"),u(F,"class",Te=q(t[0].currentVisitorsVoteForItem===4?"labelActive":"labelInActive")+" svelte-dmekt9"),u(F,"for","num4"),u(U,"class","svelte-dmekt9"),u(ne,"type","radio"),u(ne,"id","num5"),ne.checked=pe=t[0].currentVisitorsVoteForItem===5,u(ne,"class","svelte-dmekt9"),u(ce,"class",$e=q(t[0].currentVisitorsVoteForItem===5?"labelActive":"labelInActive")+" svelte-dmekt9"),u(ce,"for","num5"),u(ue,"class","svelte-dmekt9"),u(le,"type","radio"),u(le,"id","num6"),le.checked=Ve=t[0].currentVisitorsVoteForItem===6,u(le,"class","svelte-dmekt9"),u(j,"class",Y=q(t[0].currentVisitorsVoteForItem===6?"labelActive":"labelInActive")+" svelte-dmekt9"),u(j,"for","num6"),u(se,"class","svelte-dmekt9"),u(S,"type","radio"),u(S,"id","num7"),S.checked=H=t[0].currentVisitorsVoteForItem===7,u(S,"class","svelte-dmekt9"),u(Le,"class",We=q(t[0].currentVisitorsVoteForItem===7?"labelActive":"labelInActive")+" svelte-dmekt9"),u(Le,"for","num7"),u(G,"class","svelte-dmekt9"),u(be,"type","radio"),u(be,"id","num8"),be.checked=Be=t[0].currentVisitorsVoteForItem===8,u(be,"class","svelte-dmekt9"),u(Fe,"class",Ze=q(t[0].currentVisitorsVoteForItem===8?"labelActive":"labelInActive")+" svelte-dmekt9"),u(Fe,"for","num8"),u(Ae,"class","svelte-dmekt9"),u(ke,"type","radio"),u(ke,"id","num9"),ke.checked=qe=t[0].currentVisitorsVoteForItem===9,u(ke,"class","svelte-dmekt9"),u(He,"class",Je=q(t[0].currentVisitorsVoteForItem===9?"labelActive":"labelInActive")+" svelte-dmekt9"),u(He,"for","num9"),u(De,"class","svelte-dmekt9"),u(he,"type","radio"),u(he,"id","num10"),he.checked=Qe=t[0].currentVisitorsVoteForItem===10,u(he,"class","svelte-dmekt9"),u(Ue,"class",Xe=q(t[0].currentVisitorsVoteForItem===10?"labelActive":"labelInActive")+" svelte-dmekt9"),u(Ue,"for","num10"),u(Pe,"class","svelte-dmekt9"),u(e,"class","rating svelte-dmekt9")},m(R,W){_(R,e,W),a(e,l),a(l,n),a(l,s),a(l,i),a(i,o),a(e,f),a(e,c),a(c,d),a(c,T),a(c,v),a(v,g),a(e,b),a(e,$),a($,w),a($,k),a($,M),a(M,D),a(e,E),a(e,U),a(U,N),a(U,C),a(U,F),a(F,ge),a(e,Ce),a(e,ue),a(ue,ne),a(ue,je),a(ue,ce),a(ce,Me),a(e,de),a(e,se),a(se,le),a(se,Q),a(se,j),a(j,B),a(e,Z),a(e,G),a(G,S),a(G,X),a(G,Le),a(Le,_t),a(e,dt),a(e,Ae),a(Ae,be),a(Ae,bt),a(Ae,Fe),a(Fe,kt),a(e,ht),a(e,De),a(De,ke),a(De,vt),a(De,He),a(He,yt),a(e,wt),a(e,Pe),a(Pe,he),a(Pe,gt),a(Pe,Ue),a(Ue,Tt),ot||($t=[K(n,"change",t[8]),K(d,"change",t[9]),K(w,"change",t[10]),K(N,"change",t[11]),K(ne,"change",t[12]),K(le,"change",t[13]),K(S,"change",t[14]),K(be,"change",t[15]),K(ke,"change",t[16]),K(he,"change",t[17])],ot=!0)},p(R,W){W&1&&r!==(r=q(R[0].currentVisitorsVoteForItem===1?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(i,"class",r),W&1&&y!==(y=R[0].currentVisitorsVoteForItem===2)&&(d.checked=y),W&1&&h!==(h=q(R[0].currentVisitorsVoteForItem===2?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(v,"class",h),W&1&&V!==(V=R[0].currentVisitorsVoteForItem===3)&&(w.checked=V),W&1&&O!==(O=q(R[0].currentVisitorsVoteForItem===3?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(M,"class",O),W&1&&z!==(z=R[0].currentVisitorsVoteForItem===4)&&(N.checked=z),W&1&&Te!==(Te=q(R[0].currentVisitorsVoteForItem===4?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(F,"class",Te),W&1&&pe!==(pe=R[0].currentVisitorsVoteForItem===5)&&(ne.checked=pe),W&1&&$e!==($e=q(R[0].currentVisitorsVoteForItem===5?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(ce,"class",$e),W&1&&Ve!==(Ve=R[0].currentVisitorsVoteForItem===6)&&(le.checked=Ve),W&1&&Y!==(Y=q(R[0].currentVisitorsVoteForItem===6?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(j,"class",Y),W&1&&H!==(H=R[0].currentVisitorsVoteForItem===7)&&(S.checked=H),W&1&&We!==(We=q(R[0].currentVisitorsVoteForItem===7?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(Le,"class",We),W&1&&Be!==(Be=R[0].currentVisitorsVoteForItem===8)&&(be.checked=Be),W&1&&Ze!==(Ze=q(R[0].currentVisitorsVoteForItem===8?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(Fe,"class",Ze),W&1&&qe!==(qe=R[0].currentVisitorsVoteForItem===9)&&(ke.checked=qe),W&1&&Je!==(Je=q(R[0].currentVisitorsVoteForItem===9?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(He,"class",Je),W&1&&Qe!==(Qe=R[0].currentVisitorsVoteForItem===10)&&(he.checked=Qe),W&1&&Xe!==(Xe=q(R[0].currentVisitorsVoteForItem===10?"labelActive":"labelInActive")+" svelte-dmekt9")&&u(Ue,"class",Xe)},d(R){R&&m(e),ot=!1,_e($t)}}}function Ft(t){let e,l,n,s;return{c(){e=p("div"),l=p("input"),u(l,"type","text"),u(l,"placeholder","Please enter your Apprentice- or Master Key."),u(e,"class","input-group")},m(i,o){_(i,e,o),a(e,l),Se(l,t[2]),n||(s=K(l,"input",t[18]),n=!0)},p(i,o){o&4&&l.value!==i[2]&&Se(l,i[2])},d(i){i&&m(e),n=!1,s()}}}function Dt(t){let e,l,n,s,i,o;return{c(){e=p("p"),e.innerHTML="<br/>",l=I(),n=p("div"),s=p("button"),s.textContent="Send Your Vote",u(s,"class","button-colors-on-Card"),u(n,"class","color-of-body")},m(r,f){_(r,e,f),_(r,l,f),_(r,n,f),a(n,s),i||(o=K(s,"click",t[19]),i=!0)},p:J,d(r){r&&m(e),r&&m(l),r&&m(n),i=!1,o()}}}function en(t){let e,l=t[0].rating+"",n,s,i,o,r,f,c=t[0].expiryDateUTC.split(" ")[0]+"",d,y,T,v,g,h,b=Ee(t[0].text)+"",$,w,V,k,M,D;function O(C,F){return C[1]?xl:Xl}let E=O(t),U=E(t),N=t[0].currentVisitorsVoteForItem>0&&t[1]===""&&t[3]&&Ft(t),z=t[2]!==""&&Dt(t);return{c(){e=p("div"),n=L(l),s=I(),i=p("p"),i.innerHTML="<br/>",o=I(),r=p("h3"),f=L("Scheduled for "),d=L(c),y=L(" UTC"),T=I(),v=p("p"),v.innerHTML="<br/>",g=I(),h=p("p"),$=I(),w=p("p"),V=I(),U.c(),k=I(),N&&N.c(),M=I(),z&&z.c(),D=we(),u(e,"class","num-display"),u(h,"class","text-display")},m(C,F){_(C,e,F),a(e,n),_(C,s,F),_(C,i,F),_(C,o,F),_(C,r,F),a(r,f),a(r,d),a(r,y),_(C,T,F),_(C,v,F),_(C,g,F),_(C,h,F),h.innerHTML=b,_(C,$,F),_(C,w,F),_(C,V,F),U.m(C,F),_(C,k,F),N&&N.m(C,F),_(C,M,F),z&&z.m(C,F),_(C,D,F)},p(C,F){F&1&&l!==(l=C[0].rating+"")&&ie(n,l),F&1&&c!==(c=C[0].expiryDateUTC.split(" ")[0]+"")&&ie(d,c),F&1&&b!==(b=Ee(C[0].text)+"")&&(h.innerHTML=b),E===(E=O(C))&&U?U.p(C,F):(U.d(1),U=E(C),U&&(U.c(),U.m(k.parentNode,k))),C[0].currentVisitorsVoteForItem>0&&C[1]===""&&C[3]?N?N.p(C,F):(N=Ft(C),N.c(),N.m(M.parentNode,M)):N&&(N.d(1),N=null),C[2]!==""?z?z.p(C,F):(z=Dt(C),z.c(),z.m(D.parentNode,D)):z&&(z.d(1),z=null)},d(C){C&&m(e),C&&m(s),C&&m(i),C&&m(o),C&&m(r),C&&m(T),C&&m(v),C&&m(g),C&&m(h),C&&m($),C&&m(w),C&&m(V),U.d(C),C&&m(k),N&&N.d(C),C&&m(M),z&&z.d(C),C&&m(D)}}}function tn(t){let e,l;return e=new it({props:{$$slots:{default:[en]},$$scope:{ctx:t}}}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},p(n,[s]){const i={};s&1048591&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function ln(t,e,l){let{item:n}=e,s="",i="",o=!1;const r=()=>{l(3,o=!o)},f=async O=>{try{const E=await fetch(`${pt}/api/v1/addvoteongameproposal`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:n.id,fromKey:i,rating:n.currentVisitorsVoteForItem})});console.log("debug milestone 1");const U=await E.json();console.log("debug milestone 2"),l(1,s=U.message),U.newRatingOfProposal!==void 0&&l(0,n.rating=U.newRatingOfProposal,n),l(2,i="")}catch(E){alert(`an error occurred: ${E.message}`)}},c=O=>{l(0,n.currentVisitorsVoteForItem=O,n)},d=()=>r(),y=()=>c(1),T=()=>c(2),v=()=>c(3),g=()=>c(4),h=()=>c(5),b=()=>c(6),$=()=>c(7),w=()=>c(8),V=()=>c(9),k=()=>c(10);function M(){i=this.value,l(2,i)}const D=()=>f();return t.$$set=O=>{"item"in O&&l(0,n=O.item)},[n,s,i,o,r,f,c,d,y,T,v,g,h,b,$,w,V,k,M,D]}class nn extends fe{constructor(e){super(),re(this,e,ln,tn,oe,{item:0})}}function sn(t){let e,l=t[0].rating+"",n,s,i,o,r,f,c=t[0].expiryDateUTC.split(" ")[0]+"",d,y,T,v,g,h,b=Ee(t[0].text)+"",$,w;return{c(){e=p("div"),n=L(l),s=I(),i=p("p"),i.innerHTML="<br/>",o=I(),r=p("h3"),f=L("Executed on "),d=L(c),y=L(" UTC"),T=I(),v=p("p"),v.innerHTML="<br/>",g=I(),h=p("p"),$=I(),w=p("p"),u(e,"class","num-display"),u(h,"class","text-display")},m(V,k){_(V,e,k),a(e,n),_(V,s,k),_(V,i,k),_(V,o,k),_(V,r,k),a(r,f),a(r,d),a(r,y),_(V,T,k),_(V,v,k),_(V,g,k),_(V,h,k),h.innerHTML=b,_(V,$,k),_(V,w,k)},p(V,k){k&1&&l!==(l=V[0].rating+"")&&ie(n,l),k&1&&c!==(c=V[0].expiryDateUTC.split(" ")[0]+"")&&ie(d,c),k&1&&b!==(b=Ee(V[0].text)+"")&&(h.innerHTML=b)},d(V){V&&m(e),V&&m(s),V&&m(i),V&&m(o),V&&m(r),V&&m(T),V&&m(v),V&&m(g),V&&m(h),V&&m($),V&&m(w)}}}function on(t){let e,l;return e=new it({props:{$$slots:{default:[sn]},$$scope:{ctx:t}}}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},p(n,[s]){const i={};s&3&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function rn(t,e,l){let{item:n}=e;return t.$$set=s=>{"item"in s&&l(0,n=s.item)},[n]}class fn extends fe{constructor(e){super(),re(this,e,rn,on,oe,{item:0})}}function un(t){let e,l,n,s,i,o,r,f,c,d,y,T,v,g,h;return document.title=e=t[0],{c(){l=p("meta"),n=p("meta"),s=p("meta"),o=p("meta"),r=p("meta"),f=p("meta"),c=p("meta"),d=p("meta"),y=p("meta"),T=p("meta"),v=p("meta"),h=p("meta"),u(l,"name","description"),u(l,"content",t[1]),u(n,"property","og:type"),u(n,"content","website"),u(s,"property","og:title"),u(s,"content",i=`${t[0]} - ${Oe}`),u(o,"property","og:site_name"),u(o,"content",Oe),u(r,"property","og:description"),u(r,"content",t[1]),u(f,"property","og:image"),u(f,"name","og:image"),u(f,"content",t[2]),u(c,"name","og:url"),u(c,"content",t[3]),u(d,"name","twitter:site"),u(d,"content",t[4]),u(y,"name","twitter:image"),u(y,"content",t[2]),u(T,"name","twitter:card"),u(T,"content","summary_large_image"),u(v,"name","twitter:title"),u(v,"content",g=`${t[0]} - ${Oe}`),u(h,"name","twitter:description"),u(h,"content",t[1])},m(b,$){a(document.head,l),a(document.head,n),a(document.head,s),a(document.head,o),a(document.head,r),a(document.head,f),a(document.head,c),a(document.head,d),a(document.head,y),a(document.head,T),a(document.head,v),a(document.head,h)},p(b,[$]){$&1&&e!==(e=b[0])&&(document.title=e),$&2&&u(l,"content",b[1]),$&1&&i!==(i=`${b[0]} - ${Oe}`)&&u(s,"content",i),$&2&&u(r,"content",b[1]),$&4&&u(f,"content",b[2]),$&8&&u(c,"content",b[3]),$&16&&u(d,"content",b[4]),$&4&&u(y,"content",b[2]),$&1&&g!==(g=`${b[0]} - ${Oe}`)&&u(v,"content",g),$&2&&u(h,"content",b[1])},i:J,o:J,d(b){m(l),m(n),m(s),m(o),m(r),m(f),m(c),m(d),m(y),m(T),m(v),m(h)}}}const Oe="CULT Challenge";function cn(t,e,l){let{title:n=Oe}=e,{description:s="We are a network of cultdao.io fans promoting freedom, fairness, education and love."}=e,{image:i="https://raw.githubusercontent.com/michael-spengler/fairness/main/diagrams-documents-images/cult-money-1500x500.jpeg"}=e,{url:o="https://cultplayground.org"}=e,{twitterHandle:r="@Peer2PeerE"}=e;return t.$$set=f=>{"title"in f&&l(0,n=f.title),"description"in f&&l(1,s=f.description),"image"in f&&l(2,i=f.image),"url"in f&&l(3,o=f.url),"twitterHandle"in f&&l(4,r=f.twitterHandle)},[n,s,i,o,r]}class an extends fe{constructor(e){super(),re(this,e,cn,un,oe,{title:0,description:1,image:2,url:3,twitterHandle:4})}}function mn(t){const e=t-1;return e*e*e+1}function ul(t,{delay:e=0,duration:l=400,easing:n=ct}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:l,easing:n,css:i=>`opacity: ${i*s}`}}function cl(t,{delay:e=0,duration:l=400,easing:n=mn,start:s=0,opacity:i=0}={}){const o=getComputedStyle(t),r=+o.opacity,f=o.transform==="none"?"":o.transform,c=1-s,d=r*(1-i);return{delay:e,duration:l,easing:n,css:(y,T)=>`
			transform: ${f} scale(${1-c*T});
			opacity: ${r-d*T}
		`}}function Ht(t,e,l){const n=t.slice();return n[19]=e[l],n}function Pt(t,e,l){const n=t.slice();return n[19]=e[l],n}function Ut(t){let e,l=t[2].split(" ")[0]+"",n,s;return{c(){e=p("a"),n=L(l),s=L(" UTC"),u(e,"href","https://time.is/UTC"),u(e,"target","_blank"),xt(e,"color","white")},m(i,o){_(i,e,o),a(e,n),a(e,s)},p(i,o){o&4&&l!==(l=i[2].split(" ")[0]+"")&&ie(n,l)},d(i){i&&m(e)}}}function Ot(t){let e,l;return e=new Ql({props:{item:t[1]}}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},p(n,s){const i={};s&2&&(i.item=n[1]),e.$set(i)},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function St(t){let e,l;return e=new Pl({}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function Nt(t){let e,l;return e=new Dl({}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function Et(t){let e,l;return e=new jl({}),{c(){te(e.$$.fragment)},m(n,s){x(e,n,s),l=!0},i(n){l||(A(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){ee(e,n)}}}function jt(t){let e=[],l=new Map,n,s,i=t[0];const o=r=>r[19].id;for(let r=0;r<i.length;r+=1){let f=Pt(t,i,r),c=o(f);l.set(c,e[r]=zt(c,f))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();n=we()},m(r,f){for(let c=0;c<e.length;c+=1)e[c].m(r,f);_(r,n,f),s=!0},p(r,f){f&7&&(i=r[0],ae(),e=fl(e,f,o,1,r,i,l,n.parentNode,rl,zt,n,Pt),me())},i(r){if(!s){for(let f=0;f<i.length;f+=1)A(e[f]);s=!0}},o(r){for(let f=0;f<e.length;f+=1)P(e[f]);s=!1},d(r){for(let f=0;f<e.length;f+=1)e[f].d(r);r&&m(n)}}}function Gt(t){let e,l,n,s,i,o;return l=new nn({props:{item:t[19]}}),{c(){e=p("div"),te(l.$$.fragment),n=I()},m(r,f){_(r,e,f),x(l,e,null),a(e,n),o=!0},p(r,f){const c={};f&1&&(c.item=r[19]),l.$set(c)},i(r){o||(A(l.$$.fragment,r),Ie(()=>{i&&i.end(1),s=il(e,cl,{}),s.start()}),o=!0)},o(r){P(l.$$.fragment,r),s&&s.invalidate(),i=ol(e,ul,{duration:500}),o=!1},d(r){r&&m(e),ee(l),r&&i&&i.end()}}}function zt(t,e){let l,n=ye(e[19].expiryDateUTC)>=ye(e[2])&&e[19].id!==e[1].id,s,i,o=n&&Gt(e);return{key:t,first:null,c(){l=we(),o&&o.c(),s=we(),this.first=l},m(r,f){_(r,l,f),o&&o.m(r,f),_(r,s,f),i=!0},p(r,f){e=r,f&7&&(n=ye(e[19].expiryDateUTC)>=ye(e[2])&&e[19].id!==e[1].id),n?o?(o.p(e,f),f&7&&A(o,1)):(o=Gt(e),o.c(),A(o,1),o.m(s.parentNode,s)):o&&(ae(),P(o,1,1,()=>{o=null}),me())},i(r){i||(A(o),i=!0)},o(r){P(o),i=!1},d(r){r&&m(l),o&&o.d(r),r&&m(s)}}}function Rt(t){let e=[],l=new Map,n,s,i,o=t[0];const r=f=>f[19].id;for(let f=0;f<o.length;f+=1){let c=Ht(t,o,f),d=r(c);l.set(d,e[f]=Kt(d,c))}return{c(){for(let f=0;f<e.length;f+=1)e[f].c();n=I(),s=p("p"),s.innerHTML="<br/>"},m(f,c){for(let d=0;d<e.length;d+=1)e[d].m(f,c);_(f,n,c),_(f,s,c),i=!0},p(f,c){c&5&&(o=f[0],ae(),e=fl(e,c,r,1,f,o,l,n.parentNode,rl,Kt,n,Ht),me())},i(f){if(!i){for(let c=0;c<o.length;c+=1)A(e[c]);i=!0}},o(f){for(let c=0;c<e.length;c+=1)P(e[c]);i=!1},d(f){for(let c=0;c<e.length;c+=1)e[c].d(f);f&&m(n),f&&m(s)}}}function Yt(t){let e,l,n,s,i;return l=new fn({props:{item:t[19]}}),{c(){e=p("div"),te(l.$$.fragment)},m(o,r){_(o,e,r),x(l,e,null),i=!0},p(o,r){const f={};r&1&&(f.item=o[19]),l.$set(f)},i(o){i||(A(l.$$.fragment,o),Ie(()=>{s&&s.end(1),n=il(e,cl,{}),n.start()}),i=!0)},o(o){P(l.$$.fragment,o),n&&n.invalidate(),s=ol(e,ul,{duration:500}),i=!1},d(o){o&&m(e),ee(l),o&&s&&s.end()}}}function Kt(t,e){let l,n=ye(e[19].expiryDateUTC)<ye(e[2]),s,i,o=n&&Yt(e);return{key:t,first:null,c(){l=we(),o&&o.c(),s=we(),this.first=l},m(r,f){_(r,l,f),o&&o.m(r,f),_(r,s,f),i=!0},p(r,f){e=r,f&5&&(n=ye(e[19].expiryDateUTC)<ye(e[2])),n?o?(o.p(e,f),f&5&&A(o,1)):(o=Yt(e),o.c(),A(o,1),o.m(s.parentNode,s)):o&&(ae(),P(o,1,1,()=>{o=null}),me())},i(r){i||(A(o),i=!0)},o(r){P(o),i=!1},d(r){r&&m(l),o&&o.d(r),r&&m(s)}}}function pn(t){let e,l,n,s,i,o,r,f,c,d,y,T,v,g,h,b,$,w,V,k,M,D,O,E,U,N,z,C,F,ge,Te,Ce,ue,ne,pe,je,ce,Me,$e,de,se,le,Ve;e=new an({props:{title:"CULT Game Of The Day",description:"We are a network of cultdao.io fans promoting freedom, fairness, education and love."}});let Q=t[2]&&Ut(t),j=t[1]&&Ot(t);v=new Al({});let B=t[3]&&St(),Y=t[4]&&Nt(),Z=t[5]&&Et(),G=t[6]&&jt(t),S=t[7]&&Rt(t);return{c(){te(e.$$.fragment),l=I(),n=p("main"),s=p("div"),i=p("h2"),i.textContent="CULT Game Of The Day",o=I(),r=p("p"),r.innerHTML="<br/>",f=I(),Q&&Q.c(),c=I(),d=p("p"),d.innerHTML="<br/>",y=I(),j&&j.c(),T=I(),te(v.$$.fragment),g=I(),h=p("button"),h.textContent="Show Details",b=I(),B&&B.c(),$=I(),w=p("p"),w.innerHTML="<br/>",V=I(),k=p("button"),k.textContent="Show Philosophy",M=I(),Y&&Y.c(),D=I(),O=p("p"),O.innerHTML="<br/>",E=I(),U=p("button"),U.textContent="Add Game Proposal",N=I(),Z&&Z.c(),z=I(),C=p("p"),C.innerHTML="<br/>",F=I(),ge=p("button"),ge.textContent="Show Game Proposals",Te=I(),G&&G.c(),Ce=I(),ue=p("p"),ue.innerHTML="<br/>",ne=I(),pe=p("button"),pe.textContent="Show Past Games",je=I(),S&&S.c(),ce=I(),Me=p("p"),Me.innerHTML="<br/>",$e=I(),de=p("a"),de.innerHTML="<button>Explore Architectures of Freedom</button>",u(de,"href","https://cultmagazine.org/"),u(de,"target","_blank"),u(s,"class","text-center"),u(n,"class","container")},m(H,X){x(e,H,X),_(H,l,X),_(H,n,X),a(n,s),a(s,i),a(s,o),a(s,r),a(s,f),Q&&Q.m(s,null),a(s,c),a(s,d),a(s,y),j&&j.m(s,null),a(s,T),x(v,s,null),a(s,g),a(s,h),a(s,b),B&&B.m(s,null),a(s,$),a(s,w),a(s,V),a(s,k),a(s,M),Y&&Y.m(s,null),a(s,D),a(s,O),a(s,E),a(s,U),a(s,N),Z&&Z.m(s,null),a(s,z),a(s,C),a(s,F),a(s,ge),a(s,Te),G&&G.m(s,null),a(s,Ce),a(s,ue),a(s,ne),a(s,pe),a(s,je),S&&S.m(s,null),a(s,ce),a(s,Me),a(s,$e),a(s,de),se=!0,le||(Ve=[K(h,"click",t[13]),K(k,"click",t[14]),K(U,"click",t[15]),K(ge,"click",t[16]),K(pe,"click",t[17])],le=!0)},p(H,[X]){H[2]?Q?Q.p(H,X):(Q=Ut(H),Q.c(),Q.m(s,c)):Q&&(Q.d(1),Q=null),H[1]?j?(j.p(H,X),X&2&&A(j,1)):(j=Ot(H),j.c(),A(j,1),j.m(s,T)):j&&(ae(),P(j,1,1,()=>{j=null}),me()),H[3]?B?X&8&&A(B,1):(B=St(),B.c(),A(B,1),B.m(s,$)):B&&(ae(),P(B,1,1,()=>{B=null}),me()),H[4]?Y?X&16&&A(Y,1):(Y=Nt(),Y.c(),A(Y,1),Y.m(s,D)):Y&&(ae(),P(Y,1,1,()=>{Y=null}),me()),H[5]?Z?X&32&&A(Z,1):(Z=Et(),Z.c(),A(Z,1),Z.m(s,z)):Z&&(ae(),P(Z,1,1,()=>{Z=null}),me()),H[6]?G?(G.p(H,X),X&64&&A(G,1)):(G=jt(H),G.c(),A(G,1),G.m(s,Ce)):G&&(ae(),P(G,1,1,()=>{G=null}),me()),H[7]?S?(S.p(H,X),X&128&&A(S,1)):(S=Rt(H),S.c(),A(S,1),S.m(s,ce)):S&&(ae(),P(S,1,1,()=>{S=null}),me())},i(H){se||(A(e.$$.fragment,H),A(j),A(v.$$.fragment,H),A(B),A(Y),A(Z),A(G),A(S),se=!0)},o(H){P(e.$$.fragment,H),P(j),P(v.$$.fragment,H),P(B),P(Y),P(Z),P(G),P(S),se=!1},d(H){ee(e,H),H&&m(l),H&&m(n),Q&&Q.d(),j&&j.d(),ee(v),B&&B.d(),Y&&Y.d(),Z&&Z.d(),G&&G.d(),S&&S.d(),le=!1,_e(Ve)}}}function _n(t,e,l){let n=[],s,i,o=!1,r=!1,f=!1,c=!1,d=!1;tl(async()=>{const D=await fetch(`${pt}/api/v1/getgameproposals`);l(0,n=await D.json()),l(2,i=Bl(new Date)),l(1,s=n.filter(O=>O.expiryDateUTC.substr(0,10)===i.substr(0,10))[0])});const T=()=>{l(3,o=!o),o&&(l(4,r=!1),l(6,c=!1),l(5,f=!1),l(7,d=!1))},v=()=>{l(4,r=!r),r&&(l(3,o=!1),l(6,c=!1),l(5,f=!1),l(7,d=!1))},g=()=>{l(6,c=!c),c&&(l(3,o=!1),l(4,r=!1),l(5,f=!1),l(7,d=!1))},h=()=>{l(7,d=!d),d&&(l(3,o=!1),l(4,r=!1),l(5,f=!1),l(6,c=!1))},b=()=>{l(5,f=!f),f&&(l(3,o=!1),l(4,r=!1),l(6,c=!1),l(7,d=!1))};return[n,s,i,o,r,f,c,d,T,v,g,h,b,()=>T(),()=>v(),()=>b(),()=>g(),()=>h()]}class dn extends fe{constructor(e){super(),re(this,e,_n,pn,oe,{})}}new dn({target:document.getElementById("app")});
