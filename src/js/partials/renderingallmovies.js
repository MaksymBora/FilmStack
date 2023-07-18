export function renderingAllMoviesList(response) {
  const arr = response.results;
  const movieList = document.querySelector('.all-movies-list');

  const movieListMarkup = arr
    .map(({ poster_path, title, release_date, vote_average, id }) => {
      const randomTime = Math.floor(Math.random() * (111 - 92 + 1)) + 92;
      const markup = `
    <li >
		<div class="movie-card">
			<a href="movie-details.html" target="_blank">
			<figure class="card-banner" data-id="${id}">
				<img
				src="https://image.tmdb.org/t/p/w300${poster_path}"
				alt="${title}"
				/>
			</figure>
			</a>

			<div class="title-wrapper">
			<a href="movie-details.html" target="_blank">
				<h3 class="card-title">${title}</h3>
			</a>

			<time datetime="${release_date}">${release_date}</time>
			</div>

			<div class="card-meta">
			<div class="badge badge-outline">HD</div>

			<div class="duration">
				<ion-icon name="time-outline"></ion-icon>

				<time datetime="PT137M">${randomTime} min</time>
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
