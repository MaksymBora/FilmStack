var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);const o=new(0,r("hPmNI").default),i=document.querySelector("main");i.addEventListener("click",(function(e){const n=e.target.dataset.id;o.searchById(n).then((e=>{localStorage.setItem("current-movie-info",JSON.stringify(e))}))}));
//# sourceMappingURL=movie.f9d64c1f.js.map