export function renderingAllMoviesList(response) {
  const arr = response.results;
  const movieList = document.querySelector('.all-movies-list');

  const movieListMarkup = arr
    .map(({ poster_path, name, first_air_date, vote_average }) => {
      const markup = `
    <li>
		<div class="movie-card">
			<a href="movie-details.html" target="_blank">
			<figure class="card-banner">
				<img
				src="https://image.tmdb.org/t/p/w300${poster_path}"
				alt="${name}"
				/>
			</figure>
			</a>

			<div class="title-wrapper">
			<a href="movie-details.html" target="_blank">
				<h3 class="card-title">${name}</h3>
			</a>

			<time datetime="${first_air_date}">${first_air_date}</time>
			</div>

			<div class="card-meta">
			<div class="badge badge-outline">HD</div>

			<div class="duration">
				<ion-icon name="time-outline"></ion-icon>

				<time datetime="PT137M">137 min</time>
			</div>

			<div class="rating">
				<ion-icon name="star"></ion-icon>

				<data>${vote_average.toFixed(1)}</data>
			</div>
			</div>
		</div>
	</li>`;

      return markup;
    })
    .join('');

  movieList.insertAdjacentHTML('beforeend', movieListMarkup);
}
