if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const a=e=>n(e,s),d={module:{uri:s},exports:o,require:a};i[s]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"807b7773644d148f5a90f9b0c9c725cd"},{url:"android-chrome-512x512.png",revision:"80695d823a1995629ace9766e340d819"},{url:"apple-touch-icon.png",revision:"77cbecb89e9fd8d3059c7c56b3c58a39"},{url:"assets/index-2b9574e5.js",revision:null},{url:"assets/index-a85cd6d5.css",revision:null},{url:"assets/vendor-51368b50.js",revision:null},{url:"favicon-16x16.png",revision:"1c4d4efc545deac80c925d10aef01477"},{url:"favicon-32x32.png",revision:"3c3d0d4dd9a478eec7a50783dbd5b9fc"},{url:"favicon.ico",revision:"24871befaa568437fa312833292ed8c9"},{url:"index.html",revision:"34afc35b517efd7c99010a0534396882"},{url:"mstile-144x144.png",revision:"fb2b17a30b5c996c95b244caf70734f9"},{url:"mstile-150x150.png",revision:"388146b786f5a4189970cdb5fb78247a"},{url:"mstile-310x150.png",revision:"0e12d8159645f039a6a4194fe63f5e01"},{url:"mstile-310x310.png",revision:"235aa0bba6142f9eac99b984fd56824e"},{url:"mstile-70x70.png",revision:"9f2e22af0354fa18a9b3adeb5d5ee03e"},{url:"registerSW.js",revision:"7c566e9163177fa00855c6b8166fc6e6"},{url:"safari-pinned-tab.svg",revision:"2de91232eceee3138c94a621c8b29af6"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"favicon.ico",revision:"24871befaa568437fa312833292ed8c9"},{url:"apple-touch-icon.png",revision:"77cbecb89e9fd8d3059c7c56b3c58a39"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"android-chrome-192x192.png",revision:"807b7773644d148f5a90f9b0c9c725cd"},{url:"android-chrome-512x512.png",revision:"80695d823a1995629ace9766e340d819"},{url:"manifest.webmanifest",revision:"12dd54ef1e6438096de3e16733002521"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
