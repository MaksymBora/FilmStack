!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in e){var a=e[t];delete e[t];var i={id:t,exports:{}};return n[t]=i,a.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,n){e[t]=n},t.parcelRequired7c6=a),a("9Z1ug");var i=a("jgKYz");var d=a("1yhub"),o=new(0,i.default);o.getReleaseFilmList().then((function(t){for(var n=t.results,e=document.querySelector(".movies-list"),a=5;a<9;a+=1){var i=Math.floor(20*Math.random())+92,d='\n          <li>\n  <div class="movie-card">\n    <a href="movie-details.html" target="_blank">\n      <figure class="card-banner" data-id="'.concat(n[a].id,'">\n        <img\n          src="https://image.tmdb.org/t/p/w300').concat(n[a].poster_path,'"\n          alt="').concat(n[a].title,'"\n        />\n      </figure>\n    </a>\n\n    <div class="title-wrapper">\n      <a href="movie-details.html" target="_blank">\n        <h3 class="card-title">').concat(n[a].title,'</h3>\n      </a>\n\n      <time datetime="').concat(n[a].release_date,'">').concat(n[a].release_date,'</time>\n    </div>\n\n    <div class="card-meta">\n      <div class="badge badge-outline">HD</div>\n\n      <div class="duration">\n        <ion-icon name="time-outline"></ion-icon>\n\n        <time datetime="PT137M" >').concat(i,' min</time>\n      </div>\n\n      <div class="rating">\n        <ion-icon name="star"></ion-icon>\n\n        <data>').concat(n[a].vote_average.toFixed(1),"</data>\n      </div>\n    </div>\n  </div>\n</li>");e.insertAdjacentHTML("beforeend",d)}})),o.getTopRatedFilms().then((function(t){for(var n=t.results,e=document.querySelector(".movies-list[data-list]"),a=10;a<18;a+=1){var i=Math.floor(20*Math.random())+92,d='\n\t<li>\n        <div class="movie-card">\n          <a href="movie-details.html" target="_blank">\n            <figure class="card-banner" data-id="'.concat(n[a].id,'">\n              <img\n                src="https://image.tmdb.org/t/p/w300').concat(n[a].poster_path,'"\n                alt="').concat(n[a].title,'"\n              />\n            </figure>\n          </a>\n\n          <div class="title-wrapper">\n            <a href="/src/movie-details.html">\n              <h3 class="card-title">').concat(n[a].title,'</h3>\n            </a>\n\n            <time datetime="').concat(n[a].release_date,'">').concat(n[a].release_date,'</time>\n          </div>\n\n          <div class="card-meta">\n            <div class="badge badge-outline">2K</div>\n\n            <div class="duration">\n              <ion-icon name="time-outline"></ion-icon>\n\n              <time datetime="PT122M">').concat(i,' min</time>\n            </div>\n\n            <div class="rating">\n              <ion-icon name="star"></ion-icon>\n\n              <data>').concat(n[a].vote_average.toFixed(1),"</data>\n            </div>\n          </div>\n        </div>\n      </li>");e.insertAdjacentHTML("beforeend",d)}})),o.getBestTvSeries().then((function(t){for(var n=t.results,e=document.querySelector(".movies-list[data-tvlist]"),a=7;a<11;a+=1){var i=Math.floor(20*Math.random())+92,d='\n\t<li>\n\t\t<div class="movie-card">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t<figure class="card-banner" data-id="'.concat(n[a].id,'">\n\t\t\t\t<img\n\t\t\t\tsrc="https://image.tmdb.org/t/p/w300').concat(n[a].poster_path,'"\n\t\t\t\talt="').concat(n[a].name,'"\n\t\t\t\t/>\n\t\t\t</figure>\n\t\t\t</a>\n\n\t\t\t<div class="title-wrapper">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t\t<h3 class="card-title">').concat(n[a].name,'</h3>\n\t\t\t</a>\n\n\t\t\t<time datetime="').concat(n[a].first_air_date,'">').concat(n[a].first_air_date,'</time>\n\t\t\t</div>\n\n\t\t\t<div class="card-meta">\n\t\t\t<div class="badge badge-outline">HD</div>\n\n\t\t\t<div class="duration">\n\t\t\t\t<ion-icon name="time-outline"></ion-icon>\n\n\t\t\t\t<time datetime="PT137M">').concat(i,' min</time>\n\t\t\t</div>\n\n\t\t\t<div class="rating">\n\t\t\t\t<ion-icon name="star"></ion-icon>\n\n\t\t\t\t<data>').concat(n[a].vote_average.toFixed(1),"</data>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>");e.insertAdjacentHTML("beforeend",d)}})),document.querySelector(".main").addEventListener("click",d.getId),document.querySelector("[data-tvlist]").addEventListener("click",d.getTvId)}();
//# sourceMappingURL=index.7aeddb41.js.map
