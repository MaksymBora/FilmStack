!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("9Z1ug");var i=r("jgKYz"),l=r("fwly9"),o=r("g2tDn"),d=r("1yhub"),a=new(0,i.default),c=localStorage.getItem("selectedLanguage");a.getAllMoviesList(c).then(l.renderingAllMoviesList),document.querySelector('[data-action="load-more"]').addEventListener("click",(function(){a.getAllMoviesList(c).then(l.renderingAllMoviesList)})),document.querySelectorAll("[data-filter]").forEach((function(e){e.addEventListener("click",o.handlerGenreFilter)})),document.querySelector(".main-movie").addEventListener("click",d.getId)}();
//# sourceMappingURL=movie.0aff67ba.js.map
