var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},e.parcelRequired7c6=t),t("3uZfz");(new(0,t("hPmNI").default)).getAllMoviesList().then((function(e){const n=e.results,i=document.querySelector(".all-movies-list");for(let e=0;e<n.length;e+=1){const t=`\n          <li>\n  <div class="movie-card">\n    <a href="movie-details.html" target="_blank">\n      <figure class="card-banner">\n        <img\n          src="https://image.tmdb.org/t/p/w300${n[e].poster_path}"\n          alt="${n[e].name}"\n        />\n      </figure>\n    </a>\n\n    <div class="title-wrapper">\n      <a href="movie-details.html" target="_blank">\n        <h3 class="card-title">${n[e].name}</h3>\n      </a>\n\n      <time datetime="${n[e].first_air_date}">${n[e].first_air_date}</time>\n    </div>\n\n    <div class="card-meta">\n      <div class="badge badge-outline">HD</div>\n\n      <div class="duration">\n        <ion-icon name="time-outline"></ion-icon>\n\n        <time datetime="PT137M">137 min</time>\n      </div>\n\n      <div class="rating">\n        <ion-icon name="star"></ion-icon>\n\n        <data>${n[e].vote_average.toFixed(1)}</data>\n      </div>\n    </div>\n  </div>\n</li>`;i.insertAdjacentHTML("beforeend",t)}}));
//# sourceMappingURL=movie.1c3ed473.js.map
