!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=r.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(s,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new i(r,t,s)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var a;const l=window,h=l.trustedTypes,c=h?h.emptyScript:"",u=l.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:p},f="finalized";let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const r=this._$Ep(s,e);void 0!==r&&(this._$Ev.set(r,s),t.push(r))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var s;const r=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,r)=>{e?s.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((e=>{const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=g){var r;const i=this.constructor._$Ep(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==(null===(r=s.converter)||void 0===r?void 0:r.toAttribute)?s.converter:d).toAttribute(e,s.type);this._$El=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var s;const r=this.constructor,i=r._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=r.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:d;this._$El=i,this[i]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let r=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var m;y[f]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:y}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const _=window,v=_.trustedTypes,$=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,A="?"+E,b=`<${A}>`,S=document,T=()=>S.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,R="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,O=/>/g,N=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,I=/"/g,D=/^(?:script|style|textarea|title)$/i,k=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),H=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),L=new WeakMap,j=S.createTreeWalker(S,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const V=(t,e)=>{const s=t.length-1,r=[];let i,n=2===e?"<svg>":"",o=P;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===P?"!--"===l[1]?o=x:void 0!==l[1]?o=O:void 0!==l[2]?(D.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=N):void 0!==l[3]&&(o=N):o===N?">"===l[0]?(o=null!=i?i:P,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?N:'"'===l[3]?I:U):o===I||o===U?o=N:o===x||o===O?o=P:(o=N,i=void 0);const u=o===N&&t[e+1].startsWith("/>")?" ":"";n+=o===P?s+b:h>=0?(r.push(a),s.slice(0,h)+w+s.slice(h)+E+u):s+E+(-2===h?(r.push(void 0),e):u)}return[B(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),r]};class z{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,n=0;const o=t.length-1,a=this.parts,[l,h]=V(t,e);if(this.el=z.createElement(l,s),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=j.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(w)||e.startsWith(E)){const s=h[n++];if(t.push(e),void 0!==s){const t=r.getAttribute(s.toLowerCase()+w).split(E),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?X:"@"===e[1]?Z:Y})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(D.test(r.tagName)){const t=r.textContent.split(E),e=t.length-1;if(e>0){r.textContent=v?v.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],T()),j.nextNode(),a.push({type:2,index:++i});r.append(t[e],T())}}}else if(8===r.nodeType)if(r.data===A)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(E,t+1));)a.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,r){var i,n,o,a;if(e===H)return e;let l=void 0!==r?null===(i=s._$Co)||void 0===i?void 0:i[r]:s._$Cl;const h=M(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,r)),void 0!==r?(null!==(o=(a=s)._$Co)&&void 0!==o?o:a._$Co=[])[r]=l:s._$Cl=l),void 0!==l&&(e=K(t,l._$AS(t,e.values),l,r)),e}class W{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);j.currentNode=i;let n=j.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new F(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new G(n,this,t)),this._$AV.push(e),l=r[++a]}o!==(null==l?void 0:l.index)&&(n=j.nextNode(),o++)}return j.currentNode=S,i}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class F{constructor(t,e,s,r){var i;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cp=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=z.createElement(B(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(s);else{const t=new W(i,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new z(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new F(this.k(T()),this.k(T()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,s,r,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){const i=this.strings;let n=!1;if(void 0===i)t=K(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const r=t;let o,a;for(t=i[0],o=0;o<i.length-1;o++)a=K(this,r[s+o],e,o),a===H&&(a=this._$AH[o]),n||(n=!M(a)||a!==this._$AH[o]),a===q?t=q:t!==q&&(t+=(null!=a?a:"")+i[o+1]),this._$AH[o]=a}n&&!r&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const Q=v?v.emptyScript:"";class X extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Z extends Y{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=K(this,t,e,0))&&void 0!==s?s:q)===H)return;const r=this._$AH,i=t===q&&r!==q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==q&&(r===q||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const tt=_.litHtmlPolyfillSupport;null==tt||tt(z,F),(null!==(m=_.litHtmlVersions)&&void 0!==m?m:_.litHtmlVersions=[]).push("2.8.0");var et,st;class rt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var r,i;const n=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:e;let o=n._$litPart$;if(void 0===o){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;n._$litPart$=o=new F(e.insertBefore(T(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}rt.finalized=!0,rt._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:rt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:rt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");class nt{static prepareOutgoingData(t){return JSON.stringify(t)}constructor(t){if(!t)throw new Error("Source must be spcified");if(!this.constructor.type)throw new Error("Type not defined");if(this.constructor.name||console.warn("No name provided"),this.constructor.description||console.warn("No description provided"),!this.sendMessage)throw new Error("A new target requires a sendMessage method")}}const ot={},at={};class lt{static registerPlugin(t,e){return t.init(lt,e),lt}static registerTargetType(t,e){if(t in at)throw new Error("Target type has already been registered");if(!(e.prototype instanceof nt))throw new Error("Target constructors must inherit from the Target base class");return at[t]=e,lt}static registerEpmlMessageType(t,e){return ot[t]=e,lt}registerPlugin(t){return t.init(this),this}static handleMessage(t,e){const s=lt.prepareIncomingData(t);"EpmlMessageType"in s&&ot[s.EpmlMessageType](s,e,this)}static prepareIncomingData(t){return"string"!=typeof t?t:JSON.parse(t)}static createTargets(t){Array.isArray(t)||(t=[t]);const e=[];for(const s of t)void 0===s.allowObjects&&(s.allowObjects=!1),e.push(...lt.createTarget(s));return e}static createTarget(t){if(!at[t.type])throw new Error(`Target type '${t.type}' not registered`);let e=new at[t.type](t.source);Array.isArray(e)||(e=[e]);for(const s of e)s.allowObjects=t.allowObjects;return e}constructor(t){this.targets=this.constructor.createTargets(t)}}var ht=(t,e)=>{for(e=t="";t++<36;e+=51*t&52?(15^t?8^Math.random()*(20^t?16:4):4).toString(16):"-");return e};const ct=15,ut="EPML_READY_STATE_CHECK",dt="EPML_READY_STATE_CHECK_RESPONSE",pt={},gt={init:(t,e)=>{if(t.prototype.ready)throw new Error("Epml.prototype.ready is already defined");if(t.prototype.imReady)throw new Error("Epml.prototype.imReady is already defined");t.prototype.ready=mt,t.prototype.resetReadyCheck=_t,t.prototype.imReady=yt,t.registerEpmlMessageType(ut,ft),t.registerEpmlMessageType(dt,$t)}};function ft(t,e){e._i_am_ready&&e.sendMessage({EpmlMessageType:dt,requestID:t.requestID})}function yt(){for(const t of this.targets)t._i_am_ready=!0}function mt(){return this._ready_plugin=this._ready_plugin||{},this._ready_plugin.pendingReadyResolves=this._ready_plugin.pendingReadyResolves?this._ready_plugin.pendingReadyResolves:[],this._pending_ready_checking||(this._pending_ready_checking=!0,vt.call(this,this.targets).then((()=>{this._ready_plugin.pendingReadyResolves.forEach((t=>t()))}))),new Promise((t=>{this._ready_plugin.isReady?t():this._ready_plugin.pendingReadyResolves.push(t)}))}function _t(){this._ready_plugin=this._ready_plugin||{},this._ready_plugin.isReady=!1}function vt(t){return this._ready_plugin=this._ready_plugin||{},this._ready_plugin.pendingReadyResolves=[],Promise.all(t.map((t=>new Promise(((e,s)=>{const r=ht(),i=setInterval((()=>{t.sendMessage({EpmlMessageType:ut,requestID:r})}),ct);pt[r]=()=>{clearInterval(i),e()}}))))).then((()=>{this._ready_plugin.isReady=!0}))}function $t(t,e){e._ready_plugin=e._ready_plugin||{},e._ready_plugin._is_ready=!0,pt[t.requestID]()}const wt=new Map;class Et extends nt{static get sources(){return Array.from(wt.keys())}static get targets(){return Array.from(wt.values())}static getTargetFromSource(t){return wt.get(t)}static hasTarget(t){return wt.has(t)}static get type(){return"WINDOW"}static get name(){return"Content window plugin"}static get description(){return"Allows Epml to communicate with iframes and popup windows."}static test(t){return"object"==typeof t&&t===t.self}isFrom(t){}constructor(t){if(super(t),wt.has(t))return wt.get(t);if(!this.constructor.test(t))throw new Error("Source can not be used with target");this._source=t,this._sourceOrigin="*",wt.set(t,this)}get source(){return this._source}sendMessage(t){t=nt.prepareOutgoingData(t),this._source.postMessage(t,this._sourceOrigin)}}var At={init:function(t){!function(t,e,s){if(t.addEventListener)t.addEventListener(e,s,!1);else{if(!t.attachEvent)throw new Error("Could not bind event.");t.attachEvent("on"+e,s)}}(window,"message",(e=>{Et.hasTarget(e.source)&&t.handleMessage(e.data,Et.getTargetFromSource(e.source))})),t.registerTargetType(Et.type,Et)}};const bt="REQUEST",St="REQUEST_RESPONSE",Tt=new Map,Mt={},Ct={init:(t,e)=>{if(t.prototype.request)throw new Error("Epml.prototype.request is already defined");if(t.prototype.route)throw new Error("Empl.prototype.route is already defined");t.prototype.request=Rt,t.prototype.route=Ot,t.registerEpmlMessageType(bt,xt),t.registerEpmlMessageType(St,Pt)}},Rt=function(t,e,s){return Promise.all(this.targets.map((r=>{const i=ht(),n={EpmlMessageType:bt,requestOrResponse:"request",requestID:i,requestType:t,data:e};return r.sendMessage(n),new Promise(((t,e)=>{let r;s&&(r=setTimeout((()=>{delete Mt[i],e(new Error("Request timed out"))}),s)),Mt[i]=(...e)=>{r&&clearTimeout(r),t(...e)}}))}))).then((t=>{if(1===this.targets.length)return t[0]}))};function Pt(t,e,s){if(t.requestID in Mt){const e=t.data;Mt[t.requestID](e)}else console.warn("requestID not found in pendingRequests")}function xt(t,e){if(!Tt.has(e))return void console.warn("Route does not exist - missing target");const s=Tt.get(e)[t.requestType];s?s(t,e):console.warn("Route does not exist")}function Ot(t,e){if(this.routes||(this.routes={}),!this.routes[t])for(const s of this.targets){Tt.has(s)||Tt.set(s,{});Tt.get(s)[t]=(t,s)=>{Promise.resolve(e(t)).catch((t=>t instanceof Error?t.message:t)).then((e=>{s.sendMessage({data:e,EpmlMessageType:St,requestOrResponse:"request",requestID:t.requestID})}))}}}const Nt="PROXY_MESSAGE",Ut=new class{constructor(t){this._map=t||new Map,this._revMap=new Map,this._map.forEach(((t,e)=>{this._revMap.set(e,t)}))}values(){return this._map.values()}entries(){return this._map.entries()}push(t,e){this._map.set(t,e),this._revMap.set(e,t)}getByKey(t){return this._map.get(t)}getByValue(t){return this._revMap.get(t)}hasKey(t){return this._map.has(t)}hasValue(t){return this._revMap.has(t)}deleteByKey(t){const e=this._map.get(t);this._map.delete(t),this._revMap.delete(e)}deleteByValue(t){const e=this._revMap.get(t);this._map.delete(e),this._revMap.delete(t)}};class It extends nt{static get proxySources(){return Ut}static get sources(){for(const[t,e]of Ut)for(const[t]of e);Array.from(Ut.entries()).map(((t,e)=>({proxy:t,target:Array.from(e.keys())[0]})))}static get targets(){return Array.from(Ut.values())}static getTargetFromSource(t){return Ut.getByValue(t)}static hasTarget(t){return Ut.hasValue(t)}static get type(){return"PROXY"}static get name(){return"Proxy target"}static get description(){return"Uses other target, and proxies requests, allowing things like iframes to communicate through their host"}static test(t){return"object"==typeof t&&t.proxy instanceof this.Epml}isFrom(t){}constructor(t){if(super(t),this.constructor.proxySources.push(t.id,this),!this.constructor.test(t))throw new Error("Source can not be used with target");this._source=t}get source(){return this._source}sendMessage(t){const e=ht();t=nt.prepareOutgoingData(t),t={EpmlMessageType:Nt,state:"TRANSIT",requestID:e,target:this._source.target,message:t,id:this._source.id},this._source.proxy.targets[0].sendMessage(t)}}const Dt=It.proxySources;let kt;var Ht={init:function(t){Object.defineProperty(It,"Epml",{get:()=>t}),kt=t,t.registerTargetType(It.type,It),t.registerProxyInstance=Lt,t.registerEpmlMessageType(Nt,qt)}};function qt(t,e){if("TRANSIT"===t.state){const e=Dt.getByKey(t.target);if(!e)return void console.warn(`Target ${t.target} not registered.`);t.state="DELIVERY",e.targets.forEach((e=>e.sendMessage(t)))}else if("DELIVERY"===t.state){if(!Dt.getByKey(t.target))return void console.warn(`Target ${t.target} not registered.`);const e=Dt.getByKey(t.target);kt.handleMessage(t.message,e)}}function Lt(t,e){Dt.hasKey(t)&&console.warn(`${t} is already defined. Overwriting...`),Dt.push(t,e)}const jt="STREAM_UPDATE",Bt={};class Vt{static get streams(){return Bt}constructor(t,e=(()=>{})){if(this._name=t,this.targets=[],this._subscriptionFn=e,t in Bt)return console.warn(`Stream with name ${t} already exists! Returning it instead`),Bt[t];Bt[t]=this}async subscribe(t){t in this.targets&&console.info("Target is already subscribed to this stream");const e=await this._subscriptionFn();this._sendMessage(e,t),this.targets.push(t)}_sendMessage(t,e){e.sendMessage({data:nt.prepareOutgoingData(t),EpmlMessageType:jt,streamName:this._name})}emit(t){this.targets.forEach((e=>this._sendMessage(t,e)))}}const zt="JOIN_STREAM",Kt={},Wt={init:(t,e)=>{if(t.prototype.subscribe)throw new Error("Epml.prototype.subscribe is already defined");if(t.prototype.createStream)throw new Error("Empl.prototype.createStream is already defined");t.prototype.subscribe=Yt,t.registerEpmlMessageType(zt,Ft),t.registerEpmlMessageType(jt,Jt)}},Ft=function(t,e){const s=t.data.name,r=Vt.streams[s];r?r.subscribe(e):console.warn(`No stream with name ${s}`,this)},Yt=function(t,e){this.targets.forEach((e=>{e.sendMessage({EpmlMessageType:zt,data:{name:t}})})),Kt[t]=Kt[t]||[],Kt[t].push(e)},Jt=function(t,e){Kt[t.streamName].forEach((e=>e(t.data)))};lt.registerPlugin(Ct),lt.registerPlugin(gt),lt.registerPlugin(At),lt.registerPlugin(Wt),lt.registerPlugin(Ht),lt.allowProxying=!0;var Qt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Xt(){throw new Error("setTimeout has not been defined")}function Zt(){throw new Error("clearTimeout has not been defined")}var Gt=Xt,te=Zt;function ee(t){if(Gt===setTimeout)return setTimeout(t,0);if((Gt===Xt||!Gt)&&setTimeout)return Gt=setTimeout,setTimeout(t,0);try{return Gt(t,0)}catch(e){try{return Gt.call(null,t,0)}catch(e){return Gt.call(this,t,0)}}}"function"==typeof Qt.setTimeout&&(Gt=setTimeout),"function"==typeof Qt.clearTimeout&&(te=clearTimeout);var se,re=[],ie=!1,ne=-1;function oe(){ie&&se&&(ie=!1,se.length?re=se.concat(re):ne=-1,re.length&&ae())}function ae(){if(!ie){var t=ee(oe);ie=!0;for(var e=re.length;e;){for(se=re,re=[];++ne<e;)se&&se[ne].run();ne=-1,e=re.length}se=null,ie=!1,function(t){if(te===clearTimeout)return clearTimeout(t);if((te===Zt||!te)&&clearTimeout)return te=clearTimeout,clearTimeout(t);try{return te(t)}catch(e){try{return te.call(null,t)}catch(e){return te.call(this,t)}}}(t)}}function le(t,e){this.fun=t,this.array=e}le.prototype.run=function(){this.fun.apply(null,this.array)};function he(){}var ce=he,ue=he,de=he,pe=he,ge=he,fe=he,ye=he;var me=Qt.performance||{},_e=me.now||me.mozNow||me.msNow||me.oNow||me.webkitNow||function(){return(new Date).getTime()};var ve=new Date;var $e={nextTick:function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)e[s-1]=arguments[s];re.push(new le(t,e)),1!==re.length||ie||ee(ae)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:ce,addListener:ue,once:de,off:pe,removeListener:ge,removeAllListeners:fe,emit:ye,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var e=.001*_e.call(me),s=Math.floor(e),r=Math.floor(e%1*1e9);return t&&(s-=t[0],(r-=t[1])<0&&(s--,r+=1e9)),[s,r]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-ve)/1e3}};function we(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ee=we((function(){return"undefined"!=typeof window&&"object"==typeof window.process&&"renderer"===window.process.type||(!(void 0===$e||"object"!=typeof $e.versions||!$e.versions.electron)||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)}));new lt({type:"WINDOW",source:window.parent});window.customElements.define("chain-messaging",class extends rt{static get properties(){return{loading:{type:Boolean},theme:{type:String,reflect:!0}}}static get styles(){return n`
            * {
                --mdc-theme-primary: rgb(3, 169, 244);
                --paper-input-container-focus-color: var(--mdc-theme-primary);
            }

            paper-spinner-lite{
                height: 24px;
                width: 24px;
                --paper-spinner-color: var(--mdc-theme-primary);
                --paper-spinner-stroke-width: 2px;
            }

            #chain-messaging-page {
                background: var(--white);
            }

        `}constructor(){super(),this.theme=localStorage.getItem("qortalTheme")?localStorage.getItem("qortalTheme"):"light"}render(){return k`
            <div id="chain-messaging-page">
                <h2 style="text-align: center; margin-top: 3rem; color: var(--black)">Coming Soon!</h2>
            </div>
        `}firstUpdated(){this.changeTheme(),window.addEventListener("storage",(()=>{const t=localStorage.getItem("qortalTheme");this.theme="dark"===t?"dark":"light",document.querySelector("html").setAttribute("theme",this.theme)})),Ee()&&window.addEventListener("contextmenu",(t=>{t.preventDefault(),window.parent.electronAPI.showMyMenu()}))}clearConsole(){Ee()&&(console.clear(),window.parent.electronAPI.clearCache())}changeTheme(){const t=localStorage.getItem("qortalTheme");this.theme="dark"===t?"dark":"light",document.querySelector("html").setAttribute("theme",this.theme)}isEmptyArray(t){return!t||0===t.length}})}));
