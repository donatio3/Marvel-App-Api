"use strict";(self.webpackChunkMarvel_App_Api=self.webpackChunkMarvel_App_Api||[]).push([[305],{166:(e,c,s)=>{s.d(c,{A:()=>n});const t=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var a=s(507);const n=()=>(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"error"})},822:(e,c,s)=>{s.r(c),s.d(c,{default:()=>u});s(312);var t=s(643),a=s(928),n=(s(966),s(166)),i=s(522),r=s(192),l=s(931),o=s(507);const m=e=>{let{comic:c}=e;const{thumbnail:s,title:t,description:a,pageCount:n,price:i,language:r}=c;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"single-comic",children:[(0,o.jsx)("img",{src:s,alt:t,className:"single-comic__img"}),(0,o.jsxs)("div",{className:"single-comic__info",children:[(0,o.jsx)("h2",{className:"single-comic__name",children:t}),(0,o.jsx)("p",{className:"single-comic__descr",children:a}),(0,o.jsx)("p",{className:"single-comic__descr",children:n}),(0,o.jsx)("p",{className:"single-comic__descr",children:r}),(0,o.jsx)("div",{className:"single-comic__price",children:i})]}),(0,o.jsx)(l.N_,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})})},u=()=>{const{comicId:e}=(0,r.g)(),[c,s]=(0,t.useState)(null),{loading:l,error:u,getComic:d,clearError:p}=(0,i.A)();(0,t.useEffect)((()=>{h()}),[e]);const h=()=>{p(),d(e).then(g)},g=e=>{s(e)},_=l?(0,o.jsx)(a.A,{}):null,b=u?(0,o.jsx)(n.A,{}):null,x=l||u||!c?null:(0,o.jsx)(m,{comic:c});return(0,o.jsxs)(o.Fragment,{children:[_,b,x]})}},966:(e,c,s)=>{s.d(c,{A:()=>a});var t=s(507);const a=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,t.jsxs)("div",{className:"skeleton",children:[(0,t.jsxs)("div",{className:"pulse skeleton__header",children:[(0,t.jsx)("div",{className:"pulse skeleton__circle"}),(0,t.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"})]})]})},522:(e,c,s)=>{s.d(c,{A:()=>a});var t=s(643);const a=()=>{const{loading:e,error:c,request:s,clearError:a}=(()=>{const[e,c]=(0,t.useState)(!1),[s,a]=(0,t.useState)(null);return{loading:e,request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};c(!0);try{const a=await fetch(e,{method:s,headers:n,body:t});if(!a.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));const i=await a.json();return c(!1),i}catch(i){throw c(!1),a(i.message),i}}),[]),error:s,clearError:(0,t.useCallback)((()=>a(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",i="apikey=155cbf6df8687e9fab7f432f4bf06609    ",r=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var c;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(c=e.textObjects[0])||void 0===c?void 0:c.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{error:c,loading:e,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await s("".concat(n,"characters?limit=9&offset=").concat(e,"&").concat(i))).data.results.map((e=>r(e)))},getCharacter:async e=>{const c=await s("".concat(n,"characters/").concat(e,"?").concat(i));return r(c.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await s("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(i))).data.results.map(l)},getComic:async e=>{const c=await s("".concat(n,"comics/").concat(e,"?").concat(i));return l(c.data.results[0])},clearError:a}}},312:(e,c,s)=>{e.exports=s.p+"static/media/x-men.41b39e1944f148b7a123.png"}}]);
//# sourceMappingURL=305.1d5f7bde.chunk.js.map