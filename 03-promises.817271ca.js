var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");const r=document.querySelector(".form");function l(e,o){return new Promise(((n,t)=>{const i=Math.random()>.3;setTimeout((()=>{i&&n({position:e,delay:o}),t({position:e,delay:o})}),o)}))}function a({position:e,delay:o}){i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function d({position:e,delay:o}){i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}r.addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(r),n={};o.forEach(((e,o)=>{n[o]=Number(e)}));for(let e=1;e<=n.amount;e+=1)l(e,n.delay).then(a).catch(d),n.delay=n.delay+n.step;r.reset()}));
//# sourceMappingURL=03-promises.817271ca.js.map
