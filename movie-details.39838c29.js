!function(){var n,t,a,i,o,e,c,s,l,r,d,p,m,u,v,g,b,h,w,f=JSON.parse(localStorage.getItem("current-movie-info"));n=f,t=document.querySelector("#details-wrapper"),a=n.poster_path,i=n.original_title,o=n.overview,e=n.title,c=n.name,s=n.genres,l=n.runtime,r=n.release_date,d=n.status,p=n.popularity,m=n.production_countries,u=n.first_air_date,v=n.origin_country,g=s.map((function(n){return'<a href="#">'.concat(n.name,"</a>")})).join(""),b=m.map((function(n){return'<p class="countries">'.concat(n.name,"</p>")})).join(""),h=Math.floor(20*Math.random())+92,w='\n\t<figure class="movie-detail-banner">\n      <img src="https://image.tmdb.org/t/p/w300'.concat(a,'" alt="').concat(e,'" width="300"/>\n\n      <button class="play-btn">\n        <ion-icon name="play-circle-outline"></ion-icon>\n      </button>\n    </figure>\n\n    <div class="movie-detail-content">\n      <p class="detail-subtitle">').concat(d,'</p>\n\n      <h1 class="h1 detail-title">').concat(e||i||c,'</h1>\n\n      <div class="meta-wrapper">\n        <div class="badge-wrapper">\n          \n\n          <div class="badge badge-outline">HD</div>\n        </div>\n\n        <div class="ganre-wrapper">\n          ').concat(g,'\n        </div>\n\n        <div class="date-time">\n          <div>\n            <ion-icon name="calendar-outline"></ion-icon>\n\n            <time datetime="').concat(r||u,'">').concat(r||u,'</time>\n          </div>\n\n          <div>\n            <ion-icon name="time-outline"></ion-icon>\n\n            <time datetime="PT115M">').concat(l||h,' <span class="lng-dtime">min</span></time>\n          </div>\n\t\t  <div class="badge">\n\t\t  <ion-icon name="star"></ion-icon>\n\t\t  <span class="lng-popular">Popularity:</span> ').concat(p.toFixed(1),'\n\t\t  </div>;\n        </div>\n      </div>\n\n      <p class="storyline">\n        ').concat(o,'\n      </p>\n\t  <div class="production-countries">\n\t \t <p><span class="production-ctrs lng-dproduction">Production Countries:</span> ').concat(b||v,'</p>\n\t  </div>\n\t  \n      <div class="details-actions">\n        <button class="share">\n          <ion-icon name="share-social"></ion-icon>\n          <span class="lng-dtshare">Share</span>\n        </button>\n\n        <div class="title-wrapper">\n          <p class="title lng-dprime">Prime Video</p>\n          <p class="text lng-dstreaming">Streaming Channels</p>\n        </div>\n\n        <button class="btn btn-primary">\n          <ion-icon name="play"></ion-icon>\n\n          <span class="lng-dwatchnow">Watch Now</span>\n        </button>\n      </div>\n\n      <a href="https://image.tmdb.org/t/p/w300').concat(a,'" download class="download-btn">\n        <span class="lng-ddownload">Download</span>\n        <ion-icon name="download-outline"></ion-icon>\n      </a>\n    </div>'),t.innerHTML=w}();
//# sourceMappingURL=movie-details.39838c29.js.map
