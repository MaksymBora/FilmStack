var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i),i("3uZfz");const a=new(0,i("hPmNI").default);a.getReleaseFilmList().then((function(t){const e=t.results,n=document.querySelector(".movies-list");for(let t=5;t<9;t+=1){const i=Math.floor(20*Math.random())+92,a=`\n          <li>\n  <div class="movie-card">\n    <a href="movie-details.html" target="_blank">\n      <figure class="card-banner">\n        <img\n          src="https://image.tmdb.org/t/p/w300${e[t].poster_path}"\n          alt="${e[t].title}"\n        />\n      </figure>\n    </a>\n\n    <div class="title-wrapper">\n      <a href="movie-details.html" target="_blank">\n        <h3 class="card-title">${e[t].title}</h3>\n      </a>\n\n      <time datetime="${e[t].release_date}">${e[t].release_date}</time>\n    </div>\n\n    <div class="card-meta">\n      <div class="badge badge-outline">HD</div>\n\n      <div class="duration">\n        <ion-icon name="time-outline"></ion-icon>\n\n        <time datetime="PT137M">${i} min</time>\n      </div>\n\n      <div class="rating">\n        <ion-icon name="star"></ion-icon>\n\n        <data>${e[t].vote_average.toFixed(1)}</data>\n      </div>\n    </div>\n  </div>\n</li>`;n.insertAdjacentHTML("beforeend",a)}})),a.getTopRatedFilms().then((function(t){const e=t.results,n=document.querySelector(".movies-list[data-list]");for(let t=10;t<18;t+=1){const i=Math.floor(20*Math.random())+92,a=`\n\t<li>\n        <div class="movie-card">\n          <a href="movie-details.html" target="_blank">\n            <figure class="card-banner">\n              <img\n                src="https://image.tmdb.org/t/p/w300${e[t].poster_path}"\n                alt="${e[t].title}"\n              />\n            </figure>\n          </a>\n\n          <div class="title-wrapper">\n            <a href="/src/movie-details.html">\n              <h3 class="card-title">${e[t].title}</h3>\n            </a>\n\n            <time datetime="${e[t].release_date}">${e[t].release_date}</time>\n          </div>\n\n          <div class="card-meta">\n            <div class="badge badge-outline">2K</div>\n\n            <div class="duration">\n              <ion-icon name="time-outline"></ion-icon>\n\n              <time datetime="PT122M">${i} min</time>\n            </div>\n\n            <div class="rating">\n              <ion-icon name="star"></ion-icon>\n\n              <data>${e[t].vote_average.toFixed(1)}</data>\n            </div>\n          </div>\n        </div>\n      </li>`;n.insertAdjacentHTML("beforeend",a)}})),a.getBestTvSeries().then((function(t){const e=t.results,n=document.querySelector(".movies-list[data-tvlist]");for(let t=8;t<12;t+=1){const i=Math.floor(20*Math.random())+92,a=`\n\t<li>\n\t\t<div class="movie-card">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t<figure class="card-banner">\n\t\t\t\t<img\n\t\t\t\tsrc="https://image.tmdb.org/t/p/w300${e[t].poster_path}"\n\t\t\t\talt="${e[t].name}"\n\t\t\t\t/>\n\t\t\t</figure>\n\t\t\t</a>\n\n\t\t\t<div class="title-wrapper">\n\t\t\t<a href="movie-details.html" target="_blank">\n\t\t\t\t<h3 class="card-title">${e[t].name}</h3>\n\t\t\t</a>\n\n\t\t\t<time datetime="${e[t].first_air_date}">${e[t].first_air_date}</time>\n\t\t\t</div>\n\n\t\t\t<div class="card-meta">\n\t\t\t<div class="badge badge-outline">HD</div>\n\n\t\t\t<div class="duration">\n\t\t\t\t<ion-icon name="time-outline"></ion-icon>\n\n\t\t\t\t<time datetime="PT137M">${i} min</time>\n\t\t\t</div>\n\n\t\t\t<div class="rating">\n\t\t\t\t<ion-icon name="star"></ion-icon>\n\n\t\t\t\t<data>${e[t].vote_average.toFixed(1)}</data>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</li>`;n.insertAdjacentHTML("beforeend",a)}}));const o={home:{en:"Home",uk:"Головна"},movie:{en:"Movie",uk:"Фільми"},tvshow:{en:"TV Show",uk:"ТВ Шоу"},toprated:{en:"Top Rated",uk:"Топ Рейтинг"}},d=document.querySelector('select[name="language"]'),r=["en","uk"];d.addEventListener("change",(function(){let t=d.value;location.href=window.location.pathname+"#"+t,location.reload()})),function(){let t=window.location.hash;t=t.substr(1),r.includes(t)||(location.href=window.location.pathname+"#en",location.reload()),d.value=t,document.querySelector(".navbar-link").innerHTML=o.home[t];for(let e in o){let n=document.querySelector(".lng-"+e);n&&(n.innerHTML=o[e][t])}}();
//# sourceMappingURL=index.55499143.js.map
