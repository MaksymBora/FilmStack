!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},a=t.parcelRequired7c6;function i(t){var n=t.results,e=document.querySelector(".all-movies-list"),a=n.map((function(t){var n=t.poster_path,e=t.title,a=t.release_date,i=t.vote_average,o=Math.floor(20*Math.random())+92;return'\n    <li>\n\t\t<div class="movie-card">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t<figure class="card-banner">\n\t\t\t\t<img\n\t\t\t\tsrc="https://image.tmdb.org/t/p/w300'.concat(n,'"\n\t\t\t\talt="').concat(e,'"\n\t\t\t\t/>\n\t\t\t</figure>\n\t\t\t</a>\n\n\t\t\t<div class="title-wrapper">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t\t<h3 class="card-title">').concat(e,'</h3>\n\t\t\t</a>\n\n\t\t\t<time datetime="').concat(a,'">').concat(a,'</time>\n\t\t\t</div>\n\n\t\t\t<div class="card-meta">\n\t\t\t<div class="badge badge-outline">HD</div>\n\n\t\t\t<div class="duration">\n\t\t\t\t<ion-icon name="time-outline"></ion-icon>\n\n\t\t\t\t<time datetime="PT137M">').concat(o,' min</time>\n\t\t\t</div>\n\n\t\t\t<div class="rating">\n\t\t\t\t<ion-icon name="star"></ion-icon>\n\n\t\t\t\t<data>').concat(i.toFixed(1),"</data>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>")})).join("");e.insertAdjacentHTML("beforeend",a)}null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in e){var a=e[t];delete e[t];var i={id:t,exports:{}};return n[t]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){e[t]=n},t.parcelRequired7c6=a),a("9Z1ug");var o=new(0,a("jgKYz").default);o.getAllTvShow().then(i),document.querySelector('[data-action="load-more"]').addEventListener("click",(function(){o.getAllTvShow().then(i)}))}();
//# sourceMappingURL=all-tvshow.5e433d78.js.map