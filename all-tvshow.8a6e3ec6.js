var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,i.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i),i("3uZfz");var a=i("hPmNI");function d(t){const e=t.results,n=document.querySelector(".all-movies-list"),i=e.map((({poster_path:t,title:e,release_date:n,vote_average:i,id:a})=>`\n    <li>\n\t\t<div class="movie-card">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t<figure class="card-banner" data-id="${a}">\n\t\t\t\t<img\n\t\t\t\tsrc="https://image.tmdb.org/t/p/w300${t}"\n\t\t\t\talt="${e}"\n\t\t\t\t/>\n\t\t\t</figure>\n\t\t\t</a>\n\n\t\t\t<div class="title-wrapper">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t\t<h3 class="card-title">${e}</h3>\n\t\t\t</a>\n\n\t\t\t<time datetime="${n}">${n}</time>\n\t\t\t</div>\n\n\t\t\t<div class="card-meta">\n\t\t\t<div class="badge badge-outline">HD</div>\n\n\t\t\t<div class="duration">\n\t\t\t\t<ion-icon name="time-outline"></ion-icon>\n\n\t\t\t\t<time datetime="PT137M">${Math.floor(20*Math.random())+92} min</time>\n\t\t\t</div>\n\n\t\t\t<div class="rating">\n\t\t\t\t<ion-icon name="star"></ion-icon>\n\n\t\t\t\t<data>${i.toFixed(1)}</data>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>`)).join("");n.insertAdjacentHTML("beforeend",i)}var r=i("d4i8h"),o=i("99THW");const l=new(0,a.default);l.getAllTvShow().then(d);document.querySelector('[data-action="load-more"]').addEventListener("click",(function(){l.getAllTvShow().then(d)}));document.querySelectorAll("[data-filter]").forEach((function(t){t.addEventListener("click",r.handlerGenreFilter)}));document.querySelector(".main").addEventListener("click",o.getId);
//# sourceMappingURL=all-tvshow.8a6e3ec6.js.map
