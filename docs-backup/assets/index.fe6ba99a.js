(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}})();function N(){}function fe(e){return e()}function ne(){return Object.create(null)}function R(e){e.forEach(fe)}function we(e){return typeof e=="function"}function me(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Le(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function v(e,t,l){e.insertBefore(t,l||null)}function _(e){e.parentNode.removeChild(e)}function de(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function d(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function H(){return M(" ")}function Te(e,t,l,o){return e.addEventListener(t,l,o),()=>e.removeEventListener(t,l,o)}function i(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Ce(e){return Array.from(e.childNodes)}function pe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let q;function U(e){q=e}function ke(){if(!q)throw new Error("Function called outside component initialization");return q}function xe(e){ke().$$.on_mount.push(e)}const O=[],le=[],S=[],oe=[],He=Promise.resolve();let K=!1;function Me(){K||(K=!0,He.then(_e))}function J(e){S.push(e)}const D=new Set;let I=0;function _e(){const e=q;do{for(;I<O.length;){const t=O[I];I++,U(t),ze(t.$$)}for(U(null),O.length=0,I=0;le.length;)le.pop()();for(let t=0;t<S.length;t+=1){const l=S[t];D.has(l)||(D.add(l),l())}S.length=0}while(O.length);for(;oe.length;)oe.pop()();K=!1,D.clear(),U(e)}function ze(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const j=new Set;let Be;function ge(e,t){e&&e.i&&(j.delete(e),e.i(t))}function Ee(e,t,l,o){if(e&&e.o){if(j.has(e))return;j.add(e),Be.c.push(()=>{j.delete(e),o&&(l&&e.d(1),o())}),e.o(t)}else o&&o()}function $e(e){e&&e.c()}function he(e,t,l,o){const{fragment:n,on_mount:s,on_destroy:f,after_update:p}=e.$$;n&&n.m(t,l),o||J(()=>{const r=s.map(fe).filter(we);f?f.push(...r):R(r),e.$$.on_mount=[]}),p.forEach(J)}function ye(e,t){const l=e.$$;l.fragment!==null&&(R(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(O.push(e),Me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,l,o,n,s,f,p=[-1]){const r=q;U(e);const c=e.$$={fragment:null,ctx:null,props:s,update:N,not_equal:n,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:ne(),dirty:p,skip_bound:!1,root:t.target||r.$$.root};f&&f(c.root);let b=!1;if(c.ctx=l?l(e,t.props||{},(u,a,...g)=>{const h=g.length?g[0]:a;return c.ctx&&n(c.ctx[u],c.ctx[u]=h)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](h),b&&Oe(e,u)),a}):[],c.update(),b=!0,R(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const u=Ce(t.target);c.fragment&&c.fragment.l(u),u.forEach(_)}else c.fragment&&c.fragment.c();t.intro&&ge(e.$$.fragment),he(e,t.target,t.anchor,t.customElement),_e()}U(r)}class ve{$destroy(){ye(this,1),this.$destroy=N}$on(t,l){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(l),()=>{const n=o.indexOf(l);n!==-1&&o.splice(n,1)}}$set(t){this.$$set&&!Le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="https://cultbeast.org";function Ue(e){let t,l,o,n,s,f,p,r,c,b,u,a,g,h,L;return document.title=t=e[0],{c(){l=d("meta"),o=d("meta"),n=d("meta"),f=d("meta"),p=d("meta"),r=d("meta"),c=d("meta"),b=d("meta"),u=d("meta"),a=d("meta"),g=d("meta"),L=d("meta"),i(l,"name","description"),i(l,"content",e[1]),i(o,"property","og:type"),i(o,"content","website"),i(n,"property","og:title"),i(n,"content",s=`${e[0]} - ${$}`),i(f,"property","og:site_name"),i(f,"content",$),i(p,"property","og:description"),i(p,"content",e[1]),i(r,"property","og:image"),i(r,"name","og:image"),i(r,"content",e[2]),i(c,"name","og:url"),i(c,"content",e[3]),i(b,"name","twitter:site"),i(b,"content",e[4]),i(u,"name","twitter:image"),i(u,"content",e[2]),i(a,"name","twitter:card"),i(a,"content","summary_large_image"),i(g,"name","twitter:title"),i(g,"content",h=`${e[0]} - ${$}`),i(L,"name","twitter:description"),i(L,"content",e[1])},m(C,w){m(document.head,l),m(document.head,o),m(document.head,n),m(document.head,f),m(document.head,p),m(document.head,r),m(document.head,c),m(document.head,b),m(document.head,u),m(document.head,a),m(document.head,g),m(document.head,L)},p(C,[w]){w&1&&t!==(t=C[0])&&(document.title=t),w&2&&i(l,"content",C[1]),w&1&&s!==(s=`${C[0]} - ${$}`)&&i(n,"content",s),w&2&&i(p,"content",C[1]),w&4&&i(r,"content",C[2]),w&8&&i(c,"content",C[3]),w&16&&i(b,"content",C[4]),w&4&&i(u,"content",C[2]),w&1&&h!==(h=`${C[0]} - ${$}`)&&i(g,"content",h),w&2&&i(L,"content",C[1])},i:N,o:N,d(C){_(l),_(o),_(n),_(f),_(p),_(r),_(c),_(b),_(u),_(a),_(g),_(L)}}}const $="CULT Challenge";function qe(e,t,l){let{title:o=$}=t,{description:n="We are a network of cultdao.io fans promoting freedom, fairness, education and love."}=t,{image:s="https://raw.githubusercontent.com/michael-spengler/fairness/main/diagrams-documents-images/cult-money-1500x500.jpeg"}=t,{url:f="https://cultplayground.org"}=t,{twitterHandle:p="@Peer2PeerE"}=t;return e.$$set=r=>{"title"in r&&l(0,o=r.title),"description"in r&&l(1,n=r.description),"image"in r&&l(2,s=r.image),"url"in r&&l(3,f=r.url),"twitterHandle"in r&&l(4,p=r.twitterHandle)},[o,n,s,f,p]}class Ae extends ve{constructor(t){super(),be(this,t,qe,Ue,me,{title:0,description:1,image:2,url:3,twitterHandle:4})}}function se(e,t,l){const o=e.slice();return o[2]=t[l],o}function re(e,t,l){const o=e.slice();return o[16]=t[l],o}function ae(e){let t,l,o=e[16].text+"",n;return{c(){t=d("p"),t.innerHTML="<br/>",l=H(),n=M(o)},m(s,f){v(s,t,f),v(s,l,f),v(s,n,f)},p(s,f){f&1&&o!==(o=s[16].text+"")&&pe(n,o)},d(s){s&&_(t),s&&_(l),s&&_(n)}}}function ce(e){let t,l,o,n,s,f,p,r,c,b=e[2],u=[];for(let a=0;a<b.length;a+=1)u[a]=ue(se(e,b,a));return{c(){t=d("p"),t.innerHTML="<br/>",l=M(`
      The CULT Beast wants you to
      `),o=d("a"),o.textContent="give him more example answers",n=M(`
      to the following inputs:
      `),s=d("p"),s.innerHTML="<br/>",f=H(),p=d("div");for(let a=0;a<u.length;a+=1)u[a].c();r=H(),c=d("p"),c.innerHTML="<br/>",i(o,"href","https://github.com/cultfamily-on-github/decentralized-open-source-ai-supporting-the-cultdao/issues/new?assignees=octocat&labels=trainingdata%2Cfaq&template=q-and-a-pair.yaml&title=A+new+example+q+%26+a+pair+is+coming+to+train+the+CULT+Beast."),i(o,"target","_blank"),i(o,"class","svelte-1xzts5y"),i(p,"id","learningopportunitiesdiv"),i(p,"class","svelte-1xzts5y")},m(a,g){v(a,t,g),v(a,l,g),v(a,o,g),v(a,n,g),v(a,s,g),v(a,f,g),v(a,p,g);for(let h=0;h<u.length;h+=1)u[h].m(p,null);v(a,r,g),v(a,c,g)},p(a,g){if(g&4){b=a[2];let h;for(h=0;h<b.length;h+=1){const L=se(a,b,h);u[h]?u[h].p(L,g):(u[h]=ue(L),u[h].c(),u[h].m(p,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=b.length}},d(a){a&&_(t),a&&_(l),a&&_(o),a&&_(n),a&&_(s),a&&_(f),a&&_(p),de(u,a),a&&_(r),a&&_(c)}}}function ue(e){let t,l,o,n=e[2].input+"",s,f,p;return{c(){t=d("p"),t.innerHTML="<br/>",l=M(`
          Unknown Input:
          `),o=d("a"),s=M(n),f=H(),p=d("p"),p.innerHTML="<br/>",i(o,"href","https://github.com/cultfamily-on-github/decentralized-open-source-ai-supporting-the-cultdao/issues/new?assignees=octocat&labels=trainingdata%2Cfaq&template=q-and-a-pair.yaml&title=A+new+example+q+%26+a+pair+is+coming+to+train+the+CULT+Beast."),i(o,"target","_blank"),i(o,"class","svelte-1xzts5y")},m(r,c){v(r,t,c),v(r,l,c),v(r,o,c),m(o,s),v(r,f,c),v(r,p,c)},p(r,c){c&4&&n!==(n=r[2].input+"")&&pe(s,n)},d(r){r&&_(t),r&&_(l),r&&_(o),r&&_(f),r&&_(p)}}}function Pe(e){let t,l,o,n,s,f,p,r,c,b,u,a,g,h,L,C,w,Q,F,X,A,Y,G,W,Z,B,P,V,ee;t=new Ae({props:{title:"CULT Beast Training Camp",description:"We are a network of cultdao.io fans promoting freedom, fairness, education and love."}});let E=e[0],k=[];for(let y=0;y<E.length;y+=1)k[y]=ae(re(e,E,y));let x=e[1]&&ce(e);return{c(){$e(t.$$.fragment),l=H(),o=d("main"),n=d("div"),s=d("h2"),s.textContent="CULT Beast Training Camp",f=H(),p=d("p"),p.innerHTML="<br/>",r=M(`
    Here you can observe messages which are sent to the
    `),c=d("a"),c.textContent="CULT Beast",b=M(`.
    `),u=d("p"),u.innerHTML="<br/>",a=M(`

    Please add question and answer pairs
    `),g=d("a"),g.textContent="here",h=M(`
    to coach the
    `),L=d("a"),L.textContent="CULT Beast",C=M(`.

    `),w=d("div");for(let y=0;y<k.length;y+=1)k[y].c();Q=H(),F=d("p"),F.innerHTML="<br/>",X=H(),A=d("button"),A.textContent="CULT Beast Learning Opportunities",Y=H(),x&&x.c(),G=H(),W=d("p"),W.innerHTML="<br/>",Z=H(),B=d("a"),B.innerHTML="<button>Explore Architectures of Freedom</button>",i(c,"href","https://t.me/cultmagazine_bot"),i(c,"target","_blank"),i(c,"class","svelte-1xzts5y"),i(g,"href","https://github.com/cultfamily-on-github/decentralized-open-source-ai-supporting-the-cultdao/issues/new?assignees=octocat&labels=trainingdata%2Cfaq&template=q-and-a-pair.yaml&title=A+new+example+q+%26+a+pair+is+coming+to+train+the+CULT+Beast."),i(g,"target","_blank"),i(g,"class","svelte-1xzts5y"),i(L,"href","https://t.me/cultmagazine_bot"),i(L,"target","_blank"),i(L,"class","svelte-1xzts5y"),i(w,"id","livechatdiv"),i(w,"class","svelte-1xzts5y"),i(B,"href","https://cultmagazine.org/"),i(B,"target","_blank"),i(B,"class","svelte-1xzts5y"),i(n,"class","text-center"),i(o,"class","container")},m(y,z){he(t,y,z),v(y,l,z),v(y,o,z),m(o,n),m(n,s),m(n,f),m(n,p),m(n,r),m(n,c),m(n,b),m(n,u),m(n,a),m(n,g),m(n,h),m(n,L),m(n,C),m(n,w);for(let T=0;T<k.length;T+=1)k[T].m(w,null);m(n,Q),m(n,F),m(n,X),m(n,A),m(n,Y),x&&x.m(n,null),m(n,G),m(n,W),m(n,Z),m(n,B),P=!0,V||(ee=Te(A,"click",e[4]),V=!0)},p(y,[z]){if(z&1){E=y[0];let T;for(T=0;T<E.length;T+=1){const te=re(y,E,T);k[T]?k[T].p(te,z):(k[T]=ae(te),k[T].c(),k[T].m(w,null))}for(;T<k.length;T+=1)k[T].d(1);k.length=E.length}y[1]?x?x.p(y,z):(x=ce(y),x.c(),x.m(n,G)):x&&(x.d(1),x=null)},i(y){P||(ge(t.$$.fragment,y),P=!0)},o(y){Ee(t.$$.fragment,y),P=!1},d(y){ye(t,y),y&&_(l),y&&_(o),de(k,y),x&&x.d(),V=!1,ee()}}}function Ie(e,t,l){let o=[],n=[],s=!1;const f=async()=>{const b=`${ie}/api/v1/getLearningOpportunities`;console.log(`fetching learning opportunities from ${b}`);const u=await fetch(b);l(2,o=await u.json());const a=`${ie}/api/v1/getReceivedMessages`;console.log(`fetching received messages from ${a}`);const g=await fetch(a);l(0,n=await g.json()),setTimeout(()=>{r("livechatdiv"),r("learningopportunitiesdiv")},1e3)};xe(f);const p=()=>{l(1,s=!s)},r=b=>{const u=document.getElementById(b);u.scrollTop=u.scrollHeight};return setInterval(()=>{f()},1e3*5),[n,s,o,p,()=>p()]}class Se extends ve{constructor(t){super(),be(this,t,Ie,Pe,me,{})}}new Se({target:document.getElementById("app")});