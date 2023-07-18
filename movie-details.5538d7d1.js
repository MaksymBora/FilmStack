const n=JSON.parse(localStorage.getItem("current-movie-info"));console.log(n),function(n){const i=document.querySelector("#details-wrapper"),{poster_path:t,original_title:e,overview:a,title:o,name:s,genres:l,runtime:c,release_date:d,status:r,popularity:p,production_countries:m}=n,u=l.map((n=>`<a href="#">${n.name}</a>`)).join(""),v=m.map((n=>`<p class="countries">${n.name}</p>`)).join(""),b=`\n\t<figure class="movie-detail-banner">\n      <img src="https://image.tmdb.org/t/p/w300${t}" alt="${o}" width="300"/>\n\n      <button class="play-btn">\n        <ion-icon name="play-circle-outline"></ion-icon>\n      </button>\n    </figure>\n\n    <div class="movie-detail-content">\n      <p class="detail-subtitle">${r}</p>\n\n      <h1 class="h1 detail-title">${o||e||s}</h1>\n\n      <div class="meta-wrapper">\n        <div class="badge-wrapper">\n          \n\n          <div class="badge badge-outline">HD</div>\n        </div>\n\n        <div class="ganre-wrapper">\n          ${u}\n        </div>\n\n        <div class="date-time">\n          <div>\n            <ion-icon name="calendar-outline"></ion-icon>\n\n            <time datetime="${d}">${d}</time>\n          </div>\n\n          <div>\n            <ion-icon name="time-outline"></ion-icon>\n\n            <time datetime="PT115M">${c} min</time>\n          </div>\n\t\t  <div class="badge">Popularity: ${p.toFixed(1)}</div>;\n        </div>\n      </div>\n\n      <p class="storyline">\n        ${a}\n      </p>\n\t  <div class="production-countries">\n\t \t <p >Production Countries: ${v}</p>\n\t  </div>\n\t  \n\t  \n\n      <div class="details-actions">\n        <button class="share">\n          <ion-icon name="share-social"></ion-icon>\n\n          <span>Share</span>\n        </button>\n\n        <div class="title-wrapper">\n          <p class="title">Prime Video</p>\n\n          <p class="text">Streaming Channels</p>\n        </div>\n\n        <button class="btn btn-primary">\n          <ion-icon name="play"></ion-icon>\n\n          <span>Watch Now</span>\n        </button>\n      </div>\n\n      <a href="https://image.tmdb.org/t/p/w300${t}" download class="download-btn">\n        <span>Download</span>\n\n        <ion-icon name="download-outline"></ion-icon>\n      </a>\n    </div>`;i.innerHTML=b}(n);
//# sourceMappingURL=movie-details.5538d7d1.js.map