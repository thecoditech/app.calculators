if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,t)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=t(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/03f284d607b596fcb0c8c8fc2696dafad38e91ab.e952cb6cc92101878e64.js",revision:"e64ce094f7f3e6a37d4ca27bf6da963f"},{url:"/_next/static/chunks/16.ac466b06420f43a97aee.js",revision:"8bf49c5577bad680c7957a87152cb157"},{url:"/_next/static/chunks/17.3008c21b7b704591af22.js",revision:"1eaf146e0a6015ef6bb7c9fb6f589232"},{url:"/_next/static/chunks/18.1fa384e61d9a1690e3e7.js",revision:"a2cb2a90444ef71b66124b18bbc4d5f4"},{url:"/_next/static/chunks/6f6f0a43deeb03f6058f57e830a4049b0f5ca465.c9ef4133ec9cbf3ce55e.js",revision:"73bca707c41d280b7da30ce88596d0a1"},{url:"/_next/static/chunks/commons.99c17ec246d5ae204018.js",revision:"2445710f48655aea6ad078c638169735"},{url:"/_next/static/chunks/framework.346745947b137d923aa8.js",revision:"493773db7ca4f531e862834fccf9d157"},{url:"/_next/static/chunks/intl-datetimeformat.bc69374dbb33dbaf3f6c.js",revision:"8a9988e1532ddb9d65218c2c4e25eeeb"},{url:"/_next/static/chunks/intl-getcanonicallocales.af97d538896abc307bfa.js",revision:"88df38b1731febf6bfe11f5158283f07"},{url:"/_next/static/chunks/intl-numberformat.e00a566dc1d11b186522.js",revision:"21e0ee422eb33075c68c2fa390c0b940"},{url:"/_next/static/chunks/intl-pluralrules.307f0ed68e06a4e481aa.js",revision:"f16a7f284feb201b3d7feed71d50f805"},{url:"/_next/static/chunks/intl-relativetimeformat.da90e4f101d0807c091f.js",revision:"91fbd42509fed5dfee6515efde96ab14"},{url:"/_next/static/chunks/main-4cb803eb8ca887aed543.js",revision:"67c9974bf19d490a8b74bf773a9ff0aa"},{url:"/_next/static/chunks/pages/_app-f6d7fa9830f53c136784.js",revision:"6bb7bacb4218a259759642194382c202"},{url:"/_next/static/chunks/pages/_error-86d04a838afd48dd6fcc.js",revision:"d718796e66e780fb90e5bcfb83c10675"},{url:"/_next/static/chunks/pages/health/bmi-f292c809d607c7647592.js",revision:"e1fc4209d4782d71f923f688766e6faf"},{url:"/_next/static/chunks/pages/index-81f19af2ac5187d1f359.js",revision:"0e6c0a93cbfd4ae9fb12d27d7ebcefb9"},{url:"/_next/static/chunks/polyfills-f4300a138d2538f65677.js",revision:"1875d691b2a7a270612947cc88831a16"},{url:"/_next/static/chunks/webpack-c17b34faa6bcb91eb7cb.js",revision:"dfe077c537cb0521b3c5201df7dfcf59"},{url:"/_next/static/ezqI99lDC5XZjHwRWgjxs/_buildManifest.js",revision:"29e8dbd51a4f424811a3a35247461370"},{url:"/_next/static/ezqI99lDC5XZjHwRWgjxs/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"343b417f223f43da7faddf995e6e9d13"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));