!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a),a("9Z1ug");var i=a("jgKYz");function o(t){var e=t.results,n=document.querySelector(".all-movies-list"),a=e.map((function(t){var e=t.poster_path,n=t.title,a=t.release_date,i=t.vote_average,o=Math.floor(20*Math.random())+92;return'\n    <li>\n\t\t<div class="movie-card">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t<figure class="card-banner">\n\t\t\t\t<img\n\t\t\t\tsrc="https://image.tmdb.org/t/p/w300'.concat(e,'"\n\t\t\t\talt="').concat(n,'"\n\t\t\t\t/>\n\t\t\t</figure>\n\t\t\t</a>\n\n\t\t\t<div class="title-wrapper">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t\t<h3 class="card-title">').concat(n,'</h3>\n\t\t\t</a>\n\n\t\t\t<time datetime="').concat(a,'">').concat(a,'</time>\n\t\t\t</div>\n\n\t\t\t<div class="card-meta">\n\t\t\t<div class="badge badge-outline">HD</div>\n\n\t\t\t<div class="duration">\n\t\t\t\t<ion-icon name="time-outline"></ion-icon>\n\n\t\t\t\t<time datetime="PT137M">').concat(o,' min</time>\n\t\t\t</div>\n\n\t\t\t<div class="rating">\n\t\t\t\t<ion-icon name="star"></ion-icon>\n\n\t\t\t\t<data>').concat(i.toFixed(1),"</data>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>")})).join("");n.insertAdjacentHTML("beforeend",a)}var r=a("g2tDn"),l=new(0,i.default);l.getAllTvShow().then(o),document.querySelector('[data-action="load-more"]').addEventListener("click",(function(){l.getAllTvShow().then(o)})),document.querySelectorAll("[data-filter]").forEach((function(t){t.addEventListener("click",r.handlerGenreFilter)}))}();
//# sourceMappingURL=all-tvshow.2b526094.js.map
