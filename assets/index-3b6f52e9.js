import{r as o,i as S,j as e,l as g,e as L,k as p,C as P,a as k,u as w,K as x,g as b,X as I,b as E,c as W,B as A,d as M,f as U}from"./vendor-51368b50.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();const F=()=>{const[a,n]=o.useState("");return[a,i=>{const l=`https://api.whatsapp.com/send/?${new URLSearchParams([["phone",i],["type","phone_number"],["app_absent","0"]]).toString()}`;n(l)}]},O=(a,n)=>S(a,n.toUpperCase()),C=o.createContext({}),V=({children:a})=>{const[n,s]=o.useState(localStorage.getItem("preferredCountry")||"co"),i=t=>{s(t),localStorage.setItem("preferredCountry",t)};return e.jsx(C.Provider,{value:{preferredCountry:n,handleChangePreferredCountry:i},children:a})},N=()=>{const a=o.useContext(C);if(!a)throw new Error("useSettings must be used within a SettingsProvider");return a},$=g.default?g.default:g,z=({onChange:a,isValid:n,preferredCountry:s})=>e.jsx($,{localization:L,defaultMask:"... ... ....",alwaysDefaultMask:!0,country:s??"ve",preferredCountries:["ve","co","us"],countryCodeEditable:!1,enableSearch:!0,disableSearchIcon:!0,onChange:a,isValid:n,inputClass:"peer",buttonClass:"peer-focus:outline-none peer-focus:border-emerald-300 peer-focus-visible:outline-none"});function y(...a){return a.filter(Boolean).join(" ")}const j=({label:a,options:n,value:s,onChange:i})=>{const[t,l]=o.useState(""),[c,f]=o.useState(n.find(r=>r.value===s)),d=t===""?n:n.filter(r=>r.label.toLowerCase().includes(t.toLowerCase())||r.value.toLowerCase().includes(t.toLowerCase())),m=r=>{f(r),i(r.value)};return e.jsxs(p,{as:"div",value:c,onChange:m,children:[e.jsx(p.Label,{className:"block text-left text-sm font-medium text-gray-700",children:a}),e.jsxs("div",{className:"relative mt-1",children:[e.jsx(p.Input,{className:"w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm",onChange:r=>l(r.target.value),displayValue:r=>(r==null?void 0:r.label)||""}),e.jsx(p.Button,{className:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:e.jsx(P,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),d.length>0&&e.jsx(p.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:d.map(r=>e.jsx(p.Option,{value:r,className:({active:u})=>y("relative cursor-default select-none py-2 pl-8 pr-4",u?"bg-emerald-600 text-white":"text-gray-900"),children:({active:u,selected:h})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:y("block truncate",h&&"font-semibold"),children:r.label}),h&&e.jsx("span",{className:y("absolute inset-y-0 left-0 flex items-center pl-1.5",u?"text-white":"text-emerald-600"),children:e.jsx(k,{className:"h-5 w-5","aria-hidden":"true"})})]})},`${r.label}__${r.value}`))})]})]})},T=({open:a,close:n})=>{const{t:s,i18n:i}=w(),{preferredCountry:t,handleChangePreferredCountry:l}=N(),[c,f]=o.useState(i.language),[d,m]=o.useState(t),r=()=>{l(d),i.changeLanguage(c),document.title=s("document.title"),n()};return e.jsx(x.Root,{show:a,as:o.Fragment,children:e.jsxs(b,{as:"div",className:"relative z-10",onClose:n,children:[e.jsx(x.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsx(x.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(b.Panel,{className:"relative transform overflow-visible rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6",children:[e.jsx("div",{className:"absolute top-0 right-0 hidden pt-4 pr-4 sm:block",children:e.jsxs("button",{type:"button",className:"rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",onClick:n,children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(I,{className:"h-6 w-6","aria-hidden":"true"})]})}),e.jsx("div",{className:"sm:flex sm:items-start",children:e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx(b.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:s("app.settings.title")}),e.jsxs("div",{className:"mt-5 mb-3 flex flex-col gap-3 md:flex-row md:gap-2",children:[e.jsx(j,{label:s("app.settings.labels.preferredCountry"),options:[{label:s("app.countries.ar"),value:"ar"},{label:s("app.countries.cl"),value:"cl"},{label:s("app.countries.co"),value:"co"},{label:s("app.countries.ec"),value:"ec"},{label:s("app.countries.pe"),value:"pe"},{label:s("app.countries.us"),value:"us"},{label:s("app.countries.ve"),value:"ve"}],value:d,onChange:m}),e.jsx(j,{label:s("app.settings.labels.language"),options:[{label:s("app.languages.en"),value:"en"},{label:s("app.languages.es"),value:"es"}],value:c,onChange:f})]})]})}),e.jsxs("div",{className:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",children:[e.jsx("button",{type:"button",className:"inline-flex w-full justify-center rounded-md border border-transparent bg-emerald-600/80 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:r,children:s("app.buttons.save")}),e.jsx("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",onClick:n,children:s("app.buttons.cancel")})]})]})})})})]})})},_=()=>{const{t:a}=w(),{preferredCountry:n}=N(),[s,i]=F(),[t,l]=o.useState(!1),[c,f]=o.useState(!1),[d,m]=o.useState(!1),r=(u,h)=>{u.startsWith("+")||(u=`+${u}`);const v=O(u,h.countryCode);l(v),i(v?u:"")};return e.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-gray-100",children:[e.jsx(T,{open:d,close:()=>m(!1)}),e.jsx("button",{className:"fixed top-5 right-5 cursor-pointer rounded-xl p-4 focus-visible:outline focus-visible:outline-emerald-600",onClick:()=>m(!0),children:e.jsx(E,{className:"h-5 w-5 text-emerald-500"})}),e.jsx("div",{className:"absolute top-0 left-0 aspect-1 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 blur-lg"}),e.jsx("div",{className:"absolute right-0 bottom-0 aspect-1 w-80 translate-x-2/3 translate-y-2/3 rounded-full bg-emerald-300 blur-lg"}),e.jsxs("div",{className:"relative mx-auto h-full max-w-xs",children:[e.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-4",children:[e.jsx("h1",{className:"text-3xl font-bold",dangerouslySetInnerHTML:{__html:a("app.title")}}),e.jsx(z,{preferredCountry:n,onChange:r,isValid:t}),e.jsxs("a",{"aria-disabled":!t,href:s,rel:"noopener noreferrer",className:`flex w-full items-center justify-center rounded-3xl bg-emerald-500 py-2 font-medium text-white focus-visible:outline focus-visible:outline-emerald-600 ${(!t||c)&&"pointer-events-none opacity-60"}`,onClick:()=>f(!0),children:[c&&e.jsxs("svg",{className:"-ml-1 mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e.jsx("span",{children:c?a("app.buttons.loading")+"...":a("app.buttons.send")})]})]}),e.jsx("div",{className:"absolute bottom-10 w-full",children:e.jsxs("p",{className:"w-full text-center text-xs font-semibold text-gray-500",children:[a("app.footer.madeWidth")," ",e.jsx("span",{className:"text-red-500",children:"❤"})," ",a("app.footer.by")," ",e.jsx("a",{href:"https://github.com/meiyerDev",target:"_blank",rel:"noopener noreferrer",className:"text-emerald-500 hover:underline",children:"@meiyerDev"})]})})]})]})},B={title:"Send WhatsApp | MeiyerDev"},D={title:"Send Your <span class='text-emerald-500'>WhatsApp</span>",buttons:{send:"Send",save:"Save",cancel:"Cancel",loading:"Loading"},settings:{title:"App Settings",labels:{language:"Language",preferredCountry:"Preferred Country"}},footer:{madeWidth:"Made with",by:"by"},countries:{ar:"Argentina",cl:"Chile",co:"Colombia",ec:"Ecuador",pe:"Peru",us:"United States",ve:"Venezuela"},languages:{es:"Spanish",en:"English"}},R={document:B,app:D},q={title:"Envía WhatsApp | MeiyerDev"},H={title:"Envia tu <span class='text-emerald-500'>WhatsApp</span>",buttons:{send:"Enviar",save:"Guardar",cancel:"Cancelar",loading:"Cargando"},settings:{title:"Configuración de aplicación",labels:{language:"Idioma",preferredCountry:"País preferido"}},footer:{madeWidth:"Hecho con",by:"por"},countries:{ar:"Argentina",cl:"Chile",co:"Colombia",ec:"Ecuador",pe:"Perú",us:"Estados Unidos",ve:"Venezuela"},languages:{es:"Español",en:"Inglés"}},K={document:q,app:H},G={en:{translation:R},es:{translation:K}};W.use(A).use(M).init({resources:G,load:"languageOnly",fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});U.createRoot(document.getElementById("root")).render(e.jsx(V,{children:e.jsx(_,{})}));
