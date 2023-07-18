const savedMovieInfo = JSON.parse(localStorage.getItem('current-movie-info'));
console.log(savedMovieInfo);
function renderingMovieDetails(data) {
  const detailsWrapper = document.querySelector('#details-wrapper');
  const {
    poster_path,
    original_title,
    overview,
    title,
    name,
    genres,
    runtime,
    release_date,
    status,
    popularity,
    production_countries,
    first_air_date,
    origin_country,
  } = data;
  const genreLinks = genres
    .map(genre => `<a href="#">${genre.name}</a>`)
    .join('');

  const prodcutionCountries = production_countries
    .map(country => `<p class="countries">${country.name}</p>`)
    .join('');

  const randomTime = Math.floor(Math.random() * (111 - 92 + 1)) + 92;
  const movieInfoMarkup = `
	<figure class="movie-detail-banner">
      <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" width="300"/>

      <button class="play-btn">
        <ion-icon name="play-circle-outline"></ion-icon>
      </button>
    </figure>

    <div class="movie-detail-content">
      <p class="detail-subtitle">${status}</p>

      <h1 class="h1 detail-title">${title || original_title || name}</h1>

      <div class="meta-wrapper">
        <div class="badge-wrapper">
          

          <div class="badge badge-outline">HD</div>
        </div>

        <div class="ganre-wrapper">
          ${genreLinks}
        </div>

        <div class="date-time">
          <div>
            <ion-icon name="calendar-outline"></ion-icon>

            <time datetime="${release_date || first_air_date}">${
    release_date || first_air_date
  }</time>
          </div>

          <div>
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="PT115M">${
              runtime || randomTime
            } <span class="lng-dtime">min</span></time>
          </div>
		  <div class="badge">
		  <ion-icon name="star"></ion-icon>
		  <span class="lng-popular">Popularity:</span> ${popularity.toFixed(1)}
		  </div>;
        </div>
      </div>

      <p class="storyline">
        ${overview}
      </p>
	  <div class="production-countries">
	 	 <p><span class="production-ctrs lng-dproduction">Production Countries:</span> ${
       prodcutionCountries || origin_country
     }</p>
	  </div>
	  
      <div class="details-actions">
        <button class="share">
          <ion-icon name="share-social"></ion-icon>
          <span class="lng-dtshare">Share</span>
        </button>

        <div class="title-wrapper">
          <p class="title lng-dprime">Prime Video</p>
          <p class="text lng-dstreaming">Streaming Channels</p>
        </div>

        <button class="btn btn-primary">
          <ion-icon name="play"></ion-icon>

          <span class="lng-dwatchnow">Watch Now</span>
        </button>
      </div>

      <a href="https://image.tmdb.org/t/p/w300${poster_path}" download class="download-btn">
        <span class="lng-ddownload">Download</span>
        <ion-icon name="download-outline"></ion-icon>
      </a>
    </div>`;

  detailsWrapper.innerHTML = movieInfoMarkup;
}

renderingMovieDetails(savedMovieInfo);
