!function(){var n,t,i,a,e,o,c,s,l,r,d,p,m,u,v,b,g=JSON.parse(localStorage.getItem("current-movie-info"));console.log(g),n=g,t=document.querySelector("#details-wrapper"),i=n.poster_path,a=n.original_title,e=n.overview,o=n.title,c=n.name,s=n.genres,l=n.runtime,r=n.release_date,d=n.status,p=n.popularity,m=n.production_countries,u=s.map((function(n){return'<a href="#">'.concat(n.name,"</a>")})).join(""),v=m.map((function(n){return'<p class="countries">'.concat(n.name,"</p>")})).join(""),b='\n\t<figure class="movie-detail-banner">\n      <img src="https://image.tmdb.org/t/p/w300'.concat(i,'" alt="').concat(o,'" width="300"/>\n\n      <button class="play-btn">\n        <ion-icon name="play-circle-outline"></ion-icon>\n      </button>\n    </figure>\n\n    <div class="movie-detail-content">\n      <p class="detail-subtitle">').concat(d,'</p>\n\n      <h1 class="h1 detail-title">').concat(o||a||c,'</h1>\n\n      <div class="meta-wrapper">\n        <div class="badge-wrapper">\n          \n\n          <div class="badge badge-outline">HD</div>\n        </div>\n\n        <div class="ganre-wrapper">\n          ').concat(u,'\n        </div>\n\n        <div class="date-time">\n          <div>\n            <ion-icon name="calendar-outline"></ion-icon>\n\n            <time datetime="').concat(r,'">').concat(r,'</time>\n          </div>\n\n          <div>\n            <ion-icon name="time-outline"></ion-icon>\n\n            <time datetime="PT115M">').concat(l,' min</time>\n          </div>\n\t\t  <div class="badge">Popularity: ').concat(p.toFixed(1),'</div>;\n        </div>\n      </div>\n\n      <p class="storyline">\n        ').concat(e,'\n      </p>\n\t  <div class="production-countries">\n\t \t <p >Production Countries: ').concat(v,'</p>\n\t  </div>\n\t  \n\t  \n\n      <div class="details-actions">\n        <button class="share">\n          <ion-icon name="share-social"></ion-icon>\n\n          <span>Share</span>\n        </button>\n\n        <div class="title-wrapper">\n          <p class="title">Prime Video</p>\n\n          <p class="text">Streaming Channels</p>\n        </div>\n\n        <button class="btn btn-primary">\n          <ion-icon name="play"></ion-icon>\n\n          <span>Watch Now</span>\n        </button>\n      </div>\n\n      <a href="https://image.tmdb.org/t/p/w300').concat(i,'" download class="download-btn">\n        <span>Download</span>\n\n        <ion-icon name="download-outline"></ion-icon>\n      </a>\n    </div>'),t.innerHTML=b}();
//# sourceMappingURL=movie-details.3f2c4fc5.js.map