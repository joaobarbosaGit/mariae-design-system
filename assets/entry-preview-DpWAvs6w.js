const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-18-CqRie3Oa.js","assets/index-BZISi7jw.js","assets/_commonjsHelpers-CqkleIqs.js","assets/index-C0qn59OO.js"])))=>i.map(i=>d[i]);
import{_ as Oe}from"./iframe-CDXNqOJn.js";import{_ as je,a as T,d as Pe}from"./chunk-XP5HYGXS-D5tuasO7.js";import{a as Ce,r as k,R as Y}from"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";var le={exports:{}},oe={};/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function ye(){if(Ie)return oe;Ie=1;var E=Ce(),i=!1;return oe.act=function(r){return i===!1&&(i=!0,console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")),E.act(r)},oe}var Le;function De(){return Le||(Le=1,le.exports=ye()),le.exports}De();var ue={};const{global:qe}=__STORYBOOK_MODULE_GLOBAL__;var Z=T({"../../node_modules/semver/internal/constants.js"(E,i){var r="2.0.0",l=Number.MAX_SAFE_INTEGER||9007199254740991,n=16,s=250,c=["major","premajor","minor","preminor","patch","prepatch","prerelease"];i.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:s,MAX_SAFE_INTEGER:l,RELEASE_TYPES:c,SEMVER_SPEC_VERSION:r,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}}}),J=T({"../../node_modules/semver/internal/debug.js"(E,i){var r=typeof process=="object"&&ue&&ue.NODE_DEBUG&&/\bsemver\b/i.test(ue.NODE_DEBUG)?(...l)=>console.error("SEMVER",...l):()=>{};i.exports=r}}),z=T({"../../node_modules/semver/internal/re.js"(E,i){var{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:l,MAX_LENGTH:n}=Z(),s=J();E=i.exports={};var c=E.re=[],h=E.safeRe=[],e=E.src=[],v=E.safeSrc=[],a=E.t={},f=0,t="[a-zA-Z0-9-]",o=[["\\s",1],["\\d",n],[t,l]],p=I=>{for(let[S,A]of o)I=I.split(`${S}*`).join(`${S}{0,${A}}`).split(`${S}+`).join(`${S}{1,${A}}`);return I},u=(I,S,A)=>{let y=p(S),D=f++;s(I,D,S),a[I]=D,e[D]=S,v[D]=y,c[D]=new RegExp(S,A?"g":void 0),h[D]=new RegExp(y,A?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","\\d+"),u("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${t}*`),u("MAINVERSION",`(${e[a.NUMERICIDENTIFIER]})\\.(${e[a.NUMERICIDENTIFIER]})\\.(${e[a.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${e[a.NUMERICIDENTIFIERLOOSE]})\\.(${e[a.NUMERICIDENTIFIERLOOSE]})\\.(${e[a.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${e[a.NUMERICIDENTIFIER]}|${e[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${e[a.NUMERICIDENTIFIERLOOSE]}|${e[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${e[a.PRERELEASEIDENTIFIER]}(?:\\.${e[a.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${e[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[a.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER",`${t}+`),u("BUILD",`(?:\\+(${e[a.BUILDIDENTIFIER]}(?:\\.${e[a.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${e[a.MAINVERSION]}${e[a.PRERELEASE]}?${e[a.BUILD]}?`),u("FULL",`^${e[a.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${e[a.MAINVERSIONLOOSE]}${e[a.PRERELEASELOOSE]}?${e[a.BUILD]}?`),u("LOOSE",`^${e[a.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",`${e[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),u("XRANGEIDENTIFIER",`${e[a.NUMERICIDENTIFIER]}|x|X|\\*`),u("XRANGEPLAIN",`[v=\\s]*(${e[a.XRANGEIDENTIFIER]})(?:\\.(${e[a.XRANGEIDENTIFIER]})(?:\\.(${e[a.XRANGEIDENTIFIER]})(?:${e[a.PRERELEASE]})?${e[a.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${e[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[a.XRANGEIDENTIFIERLOOSE]})(?:${e[a.PRERELEASELOOSE]})?${e[a.BUILD]}?)?)?`),u("XRANGE",`^${e[a.GTLT]}\\s*${e[a.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${e[a.GTLT]}\\s*${e[a.XRANGEPLAINLOOSE]}$`),u("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),u("COERCE",`${e[a.COERCEPLAIN]}(?:$|[^\\d])`),u("COERCEFULL",e[a.COERCEPLAIN]+`(?:${e[a.PRERELEASE]})?(?:${e[a.BUILD]})?(?:$|[^\\d])`),u("COERCERTL",e[a.COERCE],!0),u("COERCERTLFULL",e[a.COERCEFULL],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${e[a.LONETILDE]}\\s+`,!0),E.tildeTrimReplace="$1~",u("TILDE",`^${e[a.LONETILDE]}${e[a.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${e[a.LONETILDE]}${e[a.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${e[a.LONECARET]}\\s+`,!0),E.caretTrimReplace="$1^",u("CARET",`^${e[a.LONECARET]}${e[a.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${e[a.LONECARET]}${e[a.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${e[a.GTLT]}\\s*(${e[a.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${e[a.GTLT]}\\s*(${e[a.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${e[a.GTLT]}\\s*(${e[a.LOOSEPLAIN]}|${e[a.XRANGEPLAIN]})`,!0),E.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${e[a.XRANGEPLAIN]})\\s+-\\s+(${e[a.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${e[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[a.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}}),he=T({"../../node_modules/semver/internal/parse-options.js"(E,i){var r=Object.freeze({loose:!0}),l=Object.freeze({}),n=s=>s?typeof s!="object"?r:s:l;i.exports=n}}),Se=T({"../../node_modules/semver/internal/identifiers.js"(E,i){var r=/^[0-9]+$/,l=(s,c)=>{let h=r.test(s),e=r.test(c);return h&&e&&(s=+s,c=+c),s===c?0:h&&!e?-1:e&&!h?1:s<c?-1:1},n=(s,c)=>l(c,s);i.exports={compareIdentifiers:l,rcompareIdentifiers:n}}}),G=T({"../../node_modules/semver/classes/semver.js"(E,i){var r=J(),{MAX_LENGTH:l,MAX_SAFE_INTEGER:n}=Z(),{safeRe:s,safeSrc:c,t:h}=z(),e=he(),{compareIdentifiers:v}=Se(),a=class X{constructor(t,o){if(o=e(o),t instanceof X){if(t.loose===!!o.loose&&t.includePrerelease===!!o.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>l)throw new TypeError(`version is longer than ${l} characters`);r("SemVer",t,o),this.options=o,this.loose=!!o.loose,this.includePrerelease=!!o.includePrerelease;let p=t.trim().match(o.loose?s[h.LOOSE]:s[h.FULL]);if(!p)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+p[1],this.minor=+p[2],this.patch=+p[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");p[4]?this.prerelease=p[4].split(".").map(u=>{if(/^[0-9]+$/.test(u)){let I=+u;if(I>=0&&I<n)return I}return u}):this.prerelease=[],this.build=p[5]?p[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(r("SemVer.compare",this.version,this.options,t),!(t instanceof X)){if(typeof t=="string"&&t===this.version)return 0;t=new X(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof X||(t=new X(t,this.options)),v(this.major,t.major)||v(this.minor,t.minor)||v(this.patch,t.patch)}comparePre(t){if(t instanceof X||(t=new X(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let o=0;do{let p=this.prerelease[o],u=t.prerelease[o];if(r("prerelease compare",o,p,u),p===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(p===void 0)return-1;if(p!==u)return v(p,u)}while(++o)}compareBuild(t){t instanceof X||(t=new X(t,this.options));let o=0;do{let p=this.build[o],u=t.build[o];if(r("build compare",o,p,u),p===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(p===void 0)return-1;if(p!==u)return v(p,u)}while(++o)}inc(t,o,p){if(t.startsWith("pre")){if(!o&&p===!1)throw new Error("invalid increment argument: identifier is empty");if(o){let u=new RegExp(`^${this.options.loose?c[h.PRERELEASELOOSE]:c[h.PRERELEASE]}$`),I=`-${o}`.match(u);if(!I||I[1]!==o)throw new Error(`invalid identifier: ${o}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",o,p);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",o,p);break;case"prepatch":this.prerelease.length=0,this.inc("patch",o,p),this.inc("pre",o,p);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",o,p),this.inc("pre",o,p);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let u=Number(p)?1:0;if(this.prerelease.length===0)this.prerelease=[u];else{let I=this.prerelease.length;for(;--I>=0;)typeof this.prerelease[I]=="number"&&(this.prerelease[I]++,I=-2);if(I===-1){if(o===this.prerelease.join(".")&&p===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(u)}}if(o){let I=[o,u];p===!1&&(I=[o]),v(this.prerelease[0],o)===0?isNaN(this.prerelease[1])&&(this.prerelease=I):this.prerelease=I}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};i.exports=a}}),H=T({"../../node_modules/semver/functions/parse.js"(E,i){var r=G(),l=(n,s,c=!1)=>{if(n instanceof r)return n;try{return new r(n,s)}catch(h){if(!c)return null;throw h}};i.exports=l}}),Ge=T({"../../node_modules/semver/functions/valid.js"(E,i){var r=H(),l=(n,s)=>{let c=r(n,s);return c?c.version:null};i.exports=l}}),Fe=T({"../../node_modules/semver/functions/clean.js"(E,i){var r=H(),l=(n,s)=>{let c=r(n.trim().replace(/^[=v]+/,""),s);return c?c.version:null};i.exports=l}}),Ue=T({"../../node_modules/semver/functions/inc.js"(E,i){var r=G(),l=(n,s,c,h,e)=>{typeof c=="string"&&(e=h,h=c,c=void 0);try{return new r(n instanceof r?n.version:n,c).inc(s,h,e).version}catch{return null}};i.exports=l}}),Ve=T({"../../node_modules/semver/functions/diff.js"(E,i){var r=H(),l=(n,s)=>{let c=r(n,null,!0),h=r(s,null,!0),e=c.compare(h);if(e===0)return null;let v=e>0,a=v?c:h,f=v?h:c,t=!!a.prerelease.length;if(f.prerelease.length&&!t){if(!f.patch&&!f.minor)return"major";if(f.compareMain(a)===0)return f.minor&&!f.patch?"minor":"patch"}let o=t?"pre":"";return c.major!==h.major?o+"major":c.minor!==h.minor?o+"minor":c.patch!==h.patch?o+"patch":"prerelease"};i.exports=l}}),Xe=T({"../../node_modules/semver/functions/major.js"(E,i){var r=G(),l=(n,s)=>new r(n,s).major;i.exports=l}}),be=T({"../../node_modules/semver/functions/minor.js"(E,i){var r=G(),l=(n,s)=>new r(n,s).minor;i.exports=l}}),ke=T({"../../node_modules/semver/functions/patch.js"(E,i){var r=G(),l=(n,s)=>new r(n,s).patch;i.exports=l}}),Me=T({"../../node_modules/semver/functions/prerelease.js"(E,i){var r=H(),l=(n,s)=>{let c=r(n,s);return c&&c.prerelease.length?c.prerelease:null};i.exports=l}}),U=T({"../../node_modules/semver/functions/compare.js"(E,i){var r=G(),l=(n,s,c)=>new r(n,c).compare(new r(s,c));i.exports=l}}),He=T({"../../node_modules/semver/functions/rcompare.js"(E,i){var r=U(),l=(n,s,c)=>r(s,n,c);i.exports=l}}),We=T({"../../node_modules/semver/functions/compare-loose.js"(E,i){var r=U(),l=(n,s)=>r(n,s,!0);i.exports=l}}),fe=T({"../../node_modules/semver/functions/compare-build.js"(E,i){var r=G(),l=(n,s,c)=>{let h=new r(n,c),e=new r(s,c);return h.compare(e)||h.compareBuild(e)};i.exports=l}}),Be=T({"../../node_modules/semver/functions/sort.js"(E,i){var r=fe(),l=(n,s)=>n.sort((c,h)=>r(c,h,s));i.exports=l}}),Ye=T({"../../node_modules/semver/functions/rsort.js"(E,i){var r=fe(),l=(n,s)=>n.sort((c,h)=>r(h,c,s));i.exports=l}}),ee=T({"../../node_modules/semver/functions/gt.js"(E,i){var r=U(),l=(n,s,c)=>r(n,s,c)>0;i.exports=l}}),ve=T({"../../node_modules/semver/functions/lt.js"(E,i){var r=U(),l=(n,s,c)=>r(n,s,c)<0;i.exports=l}}),Ae=T({"../../node_modules/semver/functions/eq.js"(E,i){var r=U(),l=(n,s,c)=>r(n,s,c)===0;i.exports=l}}),ge=T({"../../node_modules/semver/functions/neq.js"(E,i){var r=U(),l=(n,s,c)=>r(n,s,c)!==0;i.exports=l}}),de=T({"../../node_modules/semver/functions/gte.js"(E,i){var r=U(),l=(n,s,c)=>r(n,s,c)>=0;i.exports=l}}),Re=T({"../../node_modules/semver/functions/lte.js"(E,i){var r=U(),l=(n,s,c)=>r(n,s,c)<=0;i.exports=l}}),we=T({"../../node_modules/semver/functions/cmp.js"(E,i){var r=Ae(),l=ge(),n=ee(),s=de(),c=ve(),h=Re(),e=(v,a,f,t)=>{switch(a){case"===":return typeof v=="object"&&(v=v.version),typeof f=="object"&&(f=f.version),v===f;case"!==":return typeof v=="object"&&(v=v.version),typeof f=="object"&&(f=f.version),v!==f;case"":case"=":case"==":return r(v,f,t);case"!=":return l(v,f,t);case">":return n(v,f,t);case">=":return s(v,f,t);case"<":return c(v,f,t);case"<=":return h(v,f,t);default:throw new TypeError(`Invalid operator: ${a}`)}};i.exports=e}}),ze=T({"../../node_modules/semver/functions/coerce.js"(E,i){var r=G(),l=H(),{safeRe:n,t:s}=z(),c=(h,e)=>{if(h instanceof r)return h;if(typeof h=="number"&&(h=String(h)),typeof h!="string")return null;e=e||{};let v=null;if(!e.rtl)v=h.match(e.includePrerelease?n[s.COERCEFULL]:n[s.COERCE]);else{let u=e.includePrerelease?n[s.COERCERTLFULL]:n[s.COERCERTL],I;for(;(I=u.exec(h))&&(!v||v.index+v[0].length!==h.length);)(!v||I.index+I[0].length!==v.index+v[0].length)&&(v=I),u.lastIndex=I.index+I[1].length+I[2].length;u.lastIndex=-1}if(v===null)return null;let a=v[2],f=v[3]||"0",t=v[4]||"0",o=e.includePrerelease&&v[5]?`-${v[5]}`:"",p=e.includePrerelease&&v[6]?`+${v[6]}`:"";return l(`${a}.${f}.${t}${o}${p}`,e)};i.exports=c}}),Ke=T({"../../node_modules/semver/internal/lrucache.js"(E,i){var r=class{constructor(){this.max=1e3,this.map=new Map}get(l){let n=this.map.get(l);if(n!==void 0)return this.map.delete(l),this.map.set(l,n),n}delete(l){return this.map.delete(l)}set(l,n){if(!this.delete(l)&&n!==void 0){if(this.map.size>=this.max){let s=this.map.keys().next().value;this.delete(s)}this.map.set(l,n)}return this}};i.exports=r}}),V=T({"../../node_modules/semver/classes/range.js"(E,i){var r=/\s+/g,l=class K{constructor(m,L){if(L=c(L),m instanceof K)return m.loose===!!L.loose&&m.includePrerelease===!!L.includePrerelease?m:new K(m.raw,L);if(m instanceof h)return this.raw=m.value,this.set=[[m]],this.formatted=void 0,this;if(this.options=L,this.loose=!!L.loose,this.includePrerelease=!!L.includePrerelease,this.raw=m.trim().replace(r," "),this.set=this.raw.split("||").map(R=>this.parseRange(R.trim())).filter(R=>R.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let R=this.set[0];if(this.set=this.set.filter(_=>!S(_[0])),this.set.length===0)this.set=[R];else if(this.set.length>1){for(let _ of this.set)if(_.length===1&&A(_[0])){this.set=[_];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let m=0;m<this.set.length;m++){m>0&&(this.formatted+="||");let L=this.set[m];for(let R=0;R<L.length;R++)R>0&&(this.formatted+=" "),this.formatted+=L[R].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(m){let L=((this.options.includePrerelease&&u)|(this.options.loose&&I))+":"+m,R=s.get(L);if(R)return R;let _=this.options.loose,$=_?a[f.HYPHENRANGELOOSE]:a[f.HYPHENRANGE];m=m.replace($,ie(this.options.includePrerelease)),e("hyphen replace",m),m=m.replace(a[f.COMPARATORTRIM],t),e("comparator trim",m),m=m.replace(a[f.TILDETRIM],o),e("tilde trim",m),m=m.replace(a[f.CARETTRIM],p),e("caret trim",m);let N=m.split(" ").map(j=>D(j,this.options)).join(" ").split(/\s+/).map(j=>ae(j,this.options));_&&(N=N.filter(j=>(e("loose invalid filter",j,this.options),!!j.match(a[f.COMPARATORLOOSE])))),e("range list",N);let w=new Map,g=N.map(j=>new h(j,this.options));for(let j of g){if(S(j))return[j];w.set(j.value,j)}w.size>1&&w.has("")&&w.delete("");let x=[...w.values()];return s.set(L,x),x}intersects(m,L){if(!(m instanceof K))throw new TypeError("a Range is required");return this.set.some(R=>y(R,L)&&m.set.some(_=>y(_,L)&&R.every($=>_.every(N=>$.intersects(N,L)))))}test(m){if(!m)return!1;if(typeof m=="string")try{m=new v(m,this.options)}catch{return!1}for(let L=0;L<this.set.length;L++)if(ne(this.set[L],m,this.options))return!0;return!1}};i.exports=l;var n=Ke(),s=new n,c=he(),h=re(),e=J(),v=G(),{safeRe:a,t:f,comparatorTrimReplace:t,tildeTrimReplace:o,caretTrimReplace:p}=z(),{FLAG_INCLUDE_PRERELEASE:u,FLAG_LOOSE:I}=Z(),S=d=>d.value==="<0.0.0-0",A=d=>d.value==="",y=(d,m)=>{let L=!0,R=d.slice(),_=R.pop();for(;L&&R.length;)L=R.every($=>_.intersects($,m)),_=R.pop();return L},D=(d,m)=>(e("comp",d,m),d=C(d,m),e("caret",d),d=b(d,m),e("tildes",d),d=O(d,m),e("xrange",d),d=se(d,m),e("stars",d),d),P=d=>!d||d.toLowerCase()==="x"||d==="*",b=(d,m)=>d.trim().split(/\s+/).map(L=>F(L,m)).join(" "),F=(d,m)=>{let L=m.loose?a[f.TILDELOOSE]:a[f.TILDE];return d.replace(L,(R,_,$,N,w)=>{e("tilde",d,R,_,$,N,w);let g;return P(_)?g="":P($)?g=`>=${_}.0.0 <${+_+1}.0.0-0`:P(N)?g=`>=${_}.${$}.0 <${_}.${+$+1}.0-0`:w?(e("replaceTilde pr",w),g=`>=${_}.${$}.${N}-${w} <${_}.${+$+1}.0-0`):g=`>=${_}.${$}.${N} <${_}.${+$+1}.0-0`,e("tilde return",g),g})},C=(d,m)=>d.trim().split(/\s+/).map(L=>q(L,m)).join(" "),q=(d,m)=>{e("caret",d,m);let L=m.loose?a[f.CARETLOOSE]:a[f.CARET],R=m.includePrerelease?"-0":"";return d.replace(L,(_,$,N,w,g)=>{e("caret",d,_,$,N,w,g);let x;return P($)?x="":P(N)?x=`>=${$}.0.0${R} <${+$+1}.0.0-0`:P(w)?$==="0"?x=`>=${$}.${N}.0${R} <${$}.${+N+1}.0-0`:x=`>=${$}.${N}.0${R} <${+$+1}.0.0-0`:g?(e("replaceCaret pr",g),$==="0"?N==="0"?x=`>=${$}.${N}.${w}-${g} <${$}.${N}.${+w+1}-0`:x=`>=${$}.${N}.${w}-${g} <${$}.${+N+1}.0-0`:x=`>=${$}.${N}.${w}-${g} <${+$+1}.0.0-0`):(e("no pr"),$==="0"?N==="0"?x=`>=${$}.${N}.${w}${R} <${$}.${N}.${+w+1}-0`:x=`>=${$}.${N}.${w}${R} <${$}.${+N+1}.0-0`:x=`>=${$}.${N}.${w} <${+$+1}.0.0-0`),e("caret return",x),x})},O=(d,m)=>(e("replaceXRanges",d,m),d.split(/\s+/).map(L=>W(L,m)).join(" ")),W=(d,m)=>{d=d.trim();let L=m.loose?a[f.XRANGELOOSE]:a[f.XRANGE];return d.replace(L,(R,_,$,N,w,g)=>{e("xRange",d,R,_,$,N,w,g);let x=P($),j=x||P(N),M=j||P(w),B=M;return _==="="&&B&&(_=""),g=m.includePrerelease?"-0":"",x?_===">"||_==="<"?R="<0.0.0-0":R="*":_&&B?(j&&(N=0),w=0,_===">"?(_=">=",j?($=+$+1,N=0,w=0):(N=+N+1,w=0)):_==="<="&&(_="<",j?$=+$+1:N=+N+1),_==="<"&&(g="-0"),R=`${_+$}.${N}.${w}${g}`):j?R=`>=${$}.0.0${g} <${+$+1}.0.0-0`:M&&(R=`>=${$}.${N}.0${g} <${$}.${+N+1}.0-0`),e("xRange return",R),R})},se=(d,m)=>(e("replaceStars",d,m),d.trim().replace(a[f.STAR],"")),ae=(d,m)=>(e("replaceGTE0",d,m),d.trim().replace(a[m.includePrerelease?f.GTE0PRE:f.GTE0],"")),ie=d=>(m,L,R,_,$,N,w,g,x,j,M,B)=>(P(R)?L="":P(_)?L=`>=${R}.0.0${d?"-0":""}`:P($)?L=`>=${R}.${_}.0${d?"-0":""}`:N?L=`>=${L}`:L=`>=${L}${d?"-0":""}`,P(x)?g="":P(j)?g=`<${+x+1}.0.0-0`:P(M)?g=`<${x}.${+j+1}.0-0`:B?g=`<=${x}.${j}.${M}-${B}`:d?g=`<${x}.${j}.${+M+1}-0`:g=`<=${g}`,`${L} ${g}`.trim()),ne=(d,m,L)=>{for(let R=0;R<d.length;R++)if(!d[R].test(m))return!1;if(m.prerelease.length&&!L.includePrerelease){for(let R=0;R<d.length;R++)if(e(d[R].semver),d[R].semver!==h.ANY&&d[R].semver.prerelease.length>0){let _=d[R].semver;if(_.major===m.major&&_.minor===m.minor&&_.patch===m.patch)return!0}return!1}return!0}}}),re=T({"../../node_modules/semver/classes/comparator.js"(E,i){var r=Symbol("SemVer ANY"),l=class Ee{static get ANY(){return r}constructor(t,o){if(o=n(o),t instanceof Ee){if(t.loose===!!o.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),e("comparator",t,o),this.options=o,this.loose=!!o.loose,this.parse(t),this.semver===r?this.value="":this.value=this.operator+this.semver.version,e("comp",this)}parse(t){let o=this.options.loose?s[c.COMPARATORLOOSE]:s[c.COMPARATOR],p=t.match(o);if(!p)throw new TypeError(`Invalid comparator: ${t}`);this.operator=p[1]!==void 0?p[1]:"",this.operator==="="&&(this.operator=""),p[2]?this.semver=new v(p[2],this.options.loose):this.semver=r}toString(){return this.value}test(t){if(e("Comparator.test",t,this.options.loose),this.semver===r||t===r)return!0;if(typeof t=="string")try{t=new v(t,this.options)}catch{return!1}return h(t,this.operator,this.semver,this.options)}intersects(t,o){if(!(t instanceof Ee))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new a(t.value,o).test(this.value):t.operator===""?t.value===""?!0:new a(this.value,o).test(t.semver):(o=n(o),o.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!o.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||h(this.semver,"<",t.semver,o)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||h(this.semver,">",t.semver,o)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};i.exports=l;var n=he(),{safeRe:s,t:c}=z(),h=we(),e=J(),v=G(),a=V()}}),te=T({"../../node_modules/semver/functions/satisfies.js"(E,i){var r=V(),l=(n,s,c)=>{try{s=new r(s,c)}catch{return!1}return s.test(n)};i.exports=l}}),Qe=T({"../../node_modules/semver/ranges/to-comparators.js"(E,i){var r=V(),l=(n,s)=>new r(n,s).set.map(c=>c.map(h=>h.value).join(" ").trim().split(" "));i.exports=l}}),Ze=T({"../../node_modules/semver/ranges/max-satisfying.js"(E,i){var r=G(),l=V(),n=(s,c,h)=>{let e=null,v=null,a=null;try{a=new l(c,h)}catch{return null}return s.forEach(f=>{a.test(f)&&(!e||v.compare(f)===-1)&&(e=f,v=new r(e,h))}),e};i.exports=n}}),Je=T({"../../node_modules/semver/ranges/min-satisfying.js"(E,i){var r=G(),l=V(),n=(s,c,h)=>{let e=null,v=null,a=null;try{a=new l(c,h)}catch{return null}return s.forEach(f=>{a.test(f)&&(!e||v.compare(f)===1)&&(e=f,v=new r(e,h))}),e};i.exports=n}}),er=T({"../../node_modules/semver/ranges/min-version.js"(E,i){var r=G(),l=V(),n=ee(),s=(c,h)=>{c=new l(c,h);let e=new r("0.0.0");if(c.test(e)||(e=new r("0.0.0-0"),c.test(e)))return e;e=null;for(let v=0;v<c.set.length;++v){let a=c.set[v],f=null;a.forEach(t=>{let o=new r(t.semver.version);switch(t.operator){case">":o.prerelease.length===0?o.patch++:o.prerelease.push(0),o.raw=o.format();case"":case">=":(!f||n(o,f))&&(f=o);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${t.operator}`)}}),f&&(!e||n(e,f))&&(e=f)}return e&&c.test(e)?e:null};i.exports=s}}),rr=T({"../../node_modules/semver/ranges/valid.js"(E,i){var r=V(),l=(n,s)=>{try{return new r(n,s).range||"*"}catch{return null}};i.exports=l}}),$e=T({"../../node_modules/semver/ranges/outside.js"(E,i){var r=G(),l=re(),{ANY:n}=l,s=V(),c=te(),h=ee(),e=ve(),v=Re(),a=de(),f=(t,o,p,u)=>{t=new r(t,u),o=new s(o,u);let I,S,A,y,D;switch(p){case">":I=h,S=v,A=e,y=">",D=">=";break;case"<":I=e,S=a,A=h,y="<",D="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(c(t,o,u))return!1;for(let P=0;P<o.set.length;++P){let b=o.set[P],F=null,C=null;if(b.forEach(q=>{q.semver===n&&(q=new l(">=0.0.0")),F=F||q,C=C||q,I(q.semver,F.semver,u)?F=q:A(q.semver,C.semver,u)&&(C=q)}),F.operator===y||F.operator===D||(!C.operator||C.operator===y)&&S(t,C.semver)||C.operator===D&&A(t,C.semver))return!1}return!0};i.exports=f}}),tr=T({"../../node_modules/semver/ranges/gtr.js"(E,i){var r=$e(),l=(n,s,c)=>r(n,s,">",c);i.exports=l}}),sr=T({"../../node_modules/semver/ranges/ltr.js"(E,i){var r=$e(),l=(n,s,c)=>r(n,s,"<",c);i.exports=l}}),ar=T({"../../node_modules/semver/ranges/intersects.js"(E,i){var r=V(),l=(n,s,c)=>(n=new r(n,c),s=new r(s,c),n.intersects(s,c));i.exports=l}}),ir=T({"../../node_modules/semver/ranges/simplify.js"(E,i){var r=te(),l=U();i.exports=(n,s,c)=>{let h=[],e=null,v=null,a=n.sort((p,u)=>l(p,u,c));for(let p of a)r(p,s,c)?(v=p,e||(e=p)):(v&&h.push([e,v]),v=null,e=null);e&&h.push([e,null]);let f=[];for(let[p,u]of h)p===u?f.push(p):!u&&p===a[0]?f.push("*"):u?p===a[0]?f.push(`<=${u}`):f.push(`${p} - ${u}`):f.push(`>=${p}`);let t=f.join(" || "),o=typeof s.raw=="string"?s.raw:String(s);return t.length<o.length?t:s}}}),nr=T({"../../node_modules/semver/ranges/subset.js"(E,i){var r=V(),l=re(),{ANY:n}=l,s=te(),c=U(),h=(o,p,u={})=>{if(o===p)return!0;o=new r(o,u),p=new r(p,u);let I=!1;e:for(let S of o.set){for(let A of p.set){let y=a(S,A,u);if(I=I||y!==null,y)continue e}if(I)return!1}return!0},e=[new l(">=0.0.0-0")],v=[new l(">=0.0.0")],a=(o,p,u)=>{if(o===p)return!0;if(o.length===1&&o[0].semver===n){if(p.length===1&&p[0].semver===n)return!0;u.includePrerelease?o=e:o=v}if(p.length===1&&p[0].semver===n){if(u.includePrerelease)return!0;p=v}let I=new Set,S,A;for(let O of o)O.operator===">"||O.operator===">="?S=f(S,O,u):O.operator==="<"||O.operator==="<="?A=t(A,O,u):I.add(O.semver);if(I.size>1)return null;let y;if(S&&A&&(y=c(S.semver,A.semver,u),y>0||y===0&&(S.operator!==">="||A.operator!=="<=")))return null;for(let O of I){if(S&&!s(O,String(S),u)||A&&!s(O,String(A),u))return null;for(let W of p)if(!s(O,String(W),u))return!1;return!0}let D,P,b,F,C=A&&!u.includePrerelease&&A.semver.prerelease.length?A.semver:!1,q=S&&!u.includePrerelease&&S.semver.prerelease.length?S.semver:!1;C&&C.prerelease.length===1&&A.operator==="<"&&C.prerelease[0]===0&&(C=!1);for(let O of p){if(F=F||O.operator===">"||O.operator===">=",b=b||O.operator==="<"||O.operator==="<=",S){if(q&&O.semver.prerelease&&O.semver.prerelease.length&&O.semver.major===q.major&&O.semver.minor===q.minor&&O.semver.patch===q.patch&&(q=!1),O.operator===">"||O.operator===">="){if(D=f(S,O,u),D===O&&D!==S)return!1}else if(S.operator===">="&&!s(S.semver,String(O),u))return!1}if(A){if(C&&O.semver.prerelease&&O.semver.prerelease.length&&O.semver.major===C.major&&O.semver.minor===C.minor&&O.semver.patch===C.patch&&(C=!1),O.operator==="<"||O.operator==="<="){if(P=t(A,O,u),P===O&&P!==A)return!1}else if(A.operator==="<="&&!s(A.semver,String(O),u))return!1}if(!O.operator&&(A||S)&&y!==0)return!1}return!(S&&b&&!A&&y!==0||A&&F&&!S&&y!==0||q||C)},f=(o,p,u)=>{if(!o)return p;let I=c(o.semver,p.semver,u);return I>0?o:I<0||p.operator===">"&&o.operator===">="?p:o},t=(o,p,u)=>{if(!o)return p;let I=c(o.semver,p.semver,u);return I<0?o:I>0||p.operator==="<"&&o.operator==="<="?p:o};i.exports=h}}),lr=T({"../../node_modules/semver/index.js"(E,i){var r=z(),l=Z(),n=G(),s=Se(),c=H(),h=Ge(),e=Fe(),v=Ue(),a=Ve(),f=Xe(),t=be(),o=ke(),p=Me(),u=U(),I=He(),S=We(),A=fe(),y=Be(),D=Ye(),P=ee(),b=ve(),F=Ae(),C=ge(),q=de(),O=Re(),W=we(),se=ze(),ae=re(),ie=V(),ne=te(),d=Qe(),m=Ze(),L=Je(),R=er(),_=rr(),$=$e(),N=tr(),w=sr(),g=ar(),x=ir(),j=nr();i.exports={parse:c,valid:h,clean:e,inc:v,diff:a,major:f,minor:t,patch:o,prerelease:p,compare:u,rcompare:I,compareLoose:S,compareBuild:A,sort:y,rsort:D,gt:P,lt:b,eq:F,neq:C,gte:q,lte:O,cmp:W,coerce:se,Comparator:ae,Range:ie,satisfies:ne,toComparators:d,maxSatisfying:m,minSatisfying:L,minVersion:R,validRange:_,outside:$,gtr:N,ltr:w,intersects:g,simplifyRange:x,subset:j,SemVer:n,re:r.re,src:r.src,tokens:r.t,SEMVER_SPEC_VERSION:l.SEMVER_SPEC_VERSION,RELEASE_TYPES:l.RELEASE_TYPES,compareIdentifiers:s.compareIdentifiers,rcompareIdentifiers:s.rcompareIdentifiers}}}),or={};Pe(or,{beforeAll:()=>vr,decorators:()=>fr,mount:()=>mr,parameters:()=>hr,render:()=>cr,renderToCanvas:()=>Er});var _e=je(lr());function Ne(E){globalThis.IS_REACT_ACT_ENVIRONMENT=E}function ur(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var Q=E=>E(),cr=(E,i)=>{let{id:r,component:l}=i;if(!l)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return Y.createElement(l,{...E})},{FRAMEWORK_OPTIONS:ce}=qe,pr=class extends k.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:E}=this.state,{showMain:i}=this.props;E||i()}componentDidCatch(E){let{showException:i}=this.props;i(E)}render(){let{hasError:E}=this.state,{children:i}=this.props;return E?null:i}},Te=ce!=null&&ce.strictMode?k.StrictMode:k.Fragment,me=[],pe=!1,xe=async()=>{if(pe||me.length===0)return;pe=!0;let E=me.shift();E&&await E(),pe=!1,xe()};async function Er({storyContext:E,unboundStoryFn:i,showMain:r,showException:l,forceRemount:n},s){let{renderElement:c,unmountElement:h}=await Oe(async()=>{const{renderElement:f,unmountElement:t}=await import("./react-18-CqRie3Oa.js");return{renderElement:f,unmountElement:t}},__vite__mapDeps([0,1,2,3])),e=i,v=E.parameters.__isPortableStory?Y.createElement(e,{...E}):Y.createElement(pr,{showMain:r,showException:l},Y.createElement(e,{...E})),a=Te?Y.createElement(Te,null,v):v;return n&&h(s),await new Promise(async(f,t)=>{me.push(async()=>{try{await Q(async()=>{var o,p;await c(a,s,(p=(o=E==null?void 0:E.parameters)==null?void 0:o.react)==null?void 0:p.rootOptions)}),f()}catch(o){t(o)}}),xe()}),async()=>{await Q(()=>{h(s)})}}var mr=E=>async i=>(i!=null&&(E.originalStoryFn=()=>i),await E.renderToCanvas(),E.canvas),hr={renderer:"react"},fr=[(E,i)=>{var n,s;if(!((s=(n=i.parameters)==null?void 0:n.react)!=null&&s.rsc))return E();let r=_e.default.major(k.version),l=_e.default.minor(k.version);if(r<18||r===18&&l<3)throw new Error("React Server Components require React >= 18.3");return k.createElement(k.Suspense,null,E())}],vr=async()=>{try{let{configure:E}=await Oe(async()=>{const{configure:i}=await import("./index-BcrRsUj6.js").then(r=>r.a);return{configure:i}},[]);E({unstable_advanceTimersWrapper:i=>Q(i),asyncWrapper:async i=>{let r=ur();Ne(!1);try{let l=await i();return await new Promise(n=>{setTimeout(()=>{n()},0),dr()&&jest.advanceTimersByTime(0)}),l}finally{Ne(r)}},eventWrapper:i=>{let r;return Q(()=>(r=i(),r)),r}})}catch{}};function dr(){return typeof jest<"u"&&jest!==null?setTimeout._isMockFunction===!0||Object.prototype.hasOwnProperty.call(setTimeout,"clock"):!1}export{vr as beforeAll,fr as decorators,mr as mount,hr as parameters,cr as render,Er as renderToCanvas};
