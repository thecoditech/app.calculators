if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,t,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_yw4TWrA0wkuz1aIFstFk/_buildManifest.js",revision:"4a0c96d50d756d3a3f07d29209512aae"},{url:"/_next/static/_yw4TWrA0wkuz1aIFstFk/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/14.d9d32975ee6be4e41db1.js",revision:"708a271a5736808d71bc7d7551919d84"},{url:"/_next/static/chunks/15.81bfbee876830a121eef.js",revision:"e575021c5f9423b8db7a1c5860e72e93"},{url:"/_next/static/chunks/16.fef63d621abb1b86001d.js",revision:"8b72232f3fa18e3b65b49407ac216ee0"},{url:"/_next/static/chunks/commons.83b99cbe1005d86342ca.js",revision:"f72c74da50b49370a2619d3cbae82df7"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.b7bc309f6301ee327886.js",revision:"f825118708b794d5544a38628760b622"},{url:"/_next/static/chunks/framework.346745947b137d923aa8.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/intl-datetimeformat.1f26304fdb7c621ca12f.js",revision:"5f96980335836c0a3cc5c0ca820a2958"},{url:"/_next/static/chunks/intl-getcanonicallocales.75410602b0dd5b19d918.js",revision:"cd4f8a097ecb7b73d62b764256c53289"},{url:"/_next/static/chunks/intl-numberformat.040a3f3a95fff934b6d2.js",revision:"10184a4f0f18883e2334cee5ef9dd7e9"},{url:"/_next/static/chunks/intl-pluralrules.09f3580d5badd6950063.js",revision:"8a5484f18087be14d18ebfb45bab2898"},{url:"/_next/static/chunks/intl-relativetimeformat.eeb27ac2cdb6d267dd1e.js",revision:"2bf89d42de7eac7419481ab4fd5388d1"},{url:"/_next/static/chunks/main-ec8166511946db2f73b1.js",revision:"654afeb6cb3657c42287397cf054d800"},{url:"/_next/static/chunks/pages/_app-9885d1c4ef9882cba4fe.js",revision:"a08d7e44e6269ec3b8289f47b151fcfb"},{url:"/_next/static/chunks/pages/_error-2cf921cabf599a70e950.js",revision:"a6129717b4bde5b4e3b6243210247b95"},{url:"/_next/static/chunks/pages/index-4daf0f8136479407f8cd.js",revision:"bc962e61f4e4ad9ce06339b896260a7c"},{url:"/_next/static/chunks/polyfills-4fd530662c07751b0ca0.js",revision:"d1303d34e2ce3e43324484d7ac464ed3"},{url:"/_next/static/chunks/webpack-f858daf21ccbf667607c.js",revision:"b8b1dcb964ee40813acb0f7eaefacce9"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"343b417f223f43da7faddf995e6e9d13"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
