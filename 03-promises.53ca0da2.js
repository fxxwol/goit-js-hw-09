var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const i={form:document.querySelector(".form")};i.form.addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(i.form);for(const[e,n]of o)s[e]=+n;for(let e=1;e<=s.amount;e++)l(e,s.delay).then(u).catch(a),s.delay+=s.step}));const f=new FormData(i.form),s={};for(const[e,o]of f)s[`${e}`]=o;function l(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${o}ms`):t(`❌ Rejected promise ${e} in ${o}ms`)}),o)}))}function u(e){r.Notify.success(`${e}`)}function a(e){r.Notify.failure(`${e}`)}r.Notify.init({useIcon:!1,fontSize:"18px"});
//# sourceMappingURL=03-promises.53ca0da2.js.map
