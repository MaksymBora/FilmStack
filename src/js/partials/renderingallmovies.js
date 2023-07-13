export function renderingAllMoviesList(response) {
  const arr = response.results;
  const movieList = document.querySelector('.all-movies-list');

  for (let i = 0; i < arr.length; i += 1) {
    const filmListCard = `
          <li>
  <div class="movie-card">
    <a href="movie-details.html" target="_blank">
      <figure class="card-banner">
        <img
          src="https://image.tmdb.org/t/p/w300${arr[i].poster_path}"
          alt="${arr[i].name}"
        />
      </figure>
    </a>

    <div class="title-wrapper">
      <a href="movie-details.html" target="_blank">
        <h3 class="card-title">${arr[i].name}</h3>
      </a>

      <time datetime="${arr[i].first_air_date}">${arr[i].first_air_date}</time>
    </div>

    <div class="card-meta">
      <div class="badge badge-outline">HD</div>

      <div class="duration">
        <ion-icon name="time-outline"></ion-icon>

        <time datetime="PT137M">137 min</time>
      </div>

      <div class="rating">
        <ion-icon name="star"></ion-icon>

        <data>${arr[i].vote_average.toFixed(1)}</data>
      </div>
    </div>
  </div>
</li>`;

    movieList.insertAdjacentHTML('beforeend', filmListCard);
  }
}
