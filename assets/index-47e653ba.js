import{i as u,r as c,j as r,l as f,e as h,c as p,R as m}from"./vendor-b1b8f935.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const x=(a,n)=>u(a,n.toUpperCase()),g=({onValidate:a})=>{const[n,o]=c.useState(""),l=s=>s,e=(s,i)=>{s.length!==l(i).dialCode.length&&o(s)},t=(s,i)=>{if(n.length===0)return!0;s.startsWith("+")||(s=`+${s}`);const d=x(s,l(i).iso2);return a(d,s),d};return r.jsx(f,{localization:h,defaultMask:"... ... ....",alwaysDefaultMask:!0,country:"ve",preferredCountries:["ve","co","us"],countryCodeEditable:!1,enableSearch:!0,disableSearchIcon:!0,value:n,onChange:e,isValid:t,inputClass:"peer",buttonClass:"peer-focus:outline-none peer-focus:border-emerald-300 peer-focus-visible:outline-none"})},y=()=>{const[a,n]=c.useState("");return[a,l=>{const e=`https://wa.me/${l}`;n(e)}]},b=()=>{const[a,n]=y(),[o,l]=c.useState(!1),e=(t,s)=>{l(t),n(t?s:"")};return r.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-gray-100",children:[r.jsx("div",{className:"absolute top-0 left-0 aspect-1 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 blur-lg"}),r.jsx("div",{className:"absolute right-0 bottom-0 aspect-1 w-80 translate-x-2/3 translate-y-2/3 rounded-full bg-emerald-300 blur-lg"}),r.jsxs("div",{className:"relative mx-auto h-full max-w-xs",children:[r.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-4",children:[r.jsxs("h1",{className:"text-3xl font-bold",children:["Send Your ",r.jsx("span",{className:"text-emerald-500",children:"WhatsApp"})]}),r.jsx(g,{onValidate:e}),r.jsx("a",{"aria-disabled":!o,href:a,rel:"noopener noreferrer",className:`w-full rounded-3xl bg-emerald-500 py-2 text-center font-medium text-white ${!o&&"pointer-events-none opacity-60"}`,children:"Send"})]}),r.jsx("div",{className:"absolute bottom-10 w-full",children:r.jsxs("p",{className:"w-full text-center text-xs font-semibold text-gray-500",children:["Made with ",r.jsx("span",{className:"text-red-500",children:"❤"})," by"," ",r.jsx("a",{href:"https://github.com/meiyerDev",target:"_blank",rel:"noopener noreferrer",className:"text-emerald-500 hover:underline",children:"@meiyerDev"})]})})]})]})};p.createRoot(document.getElementById("root")).render(r.jsx(m.StrictMode,{children:r.jsx(b,{})}));