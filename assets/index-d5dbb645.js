import{l as c,j as t,e as f,r as d,i as h,c as m}from"./vendor-ce2ede43.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const x=c.default?c.default:c,g=({onChange:l,isValid:r})=>t.jsx(x,{localization:f,defaultMask:"... ... ....",alwaysDefaultMask:!0,country:"ve",preferredCountries:["ve","co","us"],countryCodeEditable:!1,enableSearch:!0,disableSearchIcon:!0,onChange:l,isValid:r,inputClass:"peer",buttonClass:"peer-focus:outline-none peer-focus:border-emerald-300 peer-focus-visible:outline-none"}),y=()=>{const[l,r]=d.useState("");return[l,a=>{const e=`https://wa.me/${a}`;r(e)}]},b=(l,r)=>h(l,r.toUpperCase()),j=()=>{const[l,r]=y(),[n,a]=d.useState(!1),[e,s]=d.useState(!1),o=(i,p)=>{i.startsWith("+")||(i=`+${i}`);const u=b(i,p.countryCode);a(u),r(u?i:"")};return t.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-gray-100",children:[t.jsx("div",{className:"absolute top-0 left-0 aspect-1 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 blur-lg"}),t.jsx("div",{className:"absolute right-0 bottom-0 aspect-1 w-80 translate-x-2/3 translate-y-2/3 rounded-full bg-emerald-300 blur-lg"}),t.jsxs("div",{className:"relative mx-auto h-full max-w-xs",children:[t.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-4",children:[t.jsxs("h1",{className:"text-3xl font-bold",children:["Send Your ",t.jsx("span",{className:"text-emerald-500",children:"WhatsApp"})]}),t.jsx(g,{onChange:o,isValid:n}),t.jsxs("a",{"aria-disabled":!n,href:l,rel:"noopener noreferrer",className:`flex w-full items-center justify-center rounded-3xl bg-emerald-500 py-2 font-medium text-white ${(!n||e)&&"pointer-events-none opacity-60"}`,onClick:()=>s(!0),children:[e&&t.jsxs("svg",{className:"-ml-1 mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),t.jsx("span",{children:e?"Loading...":"Send"})]})]}),t.jsx("div",{className:"absolute bottom-10 w-full",children:t.jsxs("p",{className:"w-full text-center text-xs font-semibold text-gray-500",children:["Made with ",t.jsx("span",{className:"text-red-500",children:"❤"})," by"," ",t.jsx("a",{href:"https://github.com/meiyerDev",target:"_blank",rel:"noopener noreferrer",className:"text-emerald-500 hover:underline",children:"@meiyerDev"})]})})]})]})};m.createRoot(document.getElementById("root")).render(t.jsx(j,{}));
