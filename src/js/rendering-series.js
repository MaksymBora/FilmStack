export function renderingTvSeriesList(response) {
  const arr = response.results;
  const tvSeriesList = document.querySelector('.movies-list[data-tvlist]');

  for (let i = 7; i < 11; i += 1) {
    const randomTime = Math.floor(Math.random() * (111 - 92 + 1)) + 92;
    const filmListCard = `
	<li>
		<div class="movie-card">
			<a href="movie-details.html" target="_blank">
			<figure class="card-banner" data-id="${arr[i].id}">
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

				<time datetime="PT137M">${randomTime} min</time>
			</div>

			<div class="rating">
				<ion-icon name="star"></ion-icon>

				<data>${arr[i].vote_average.toFixed(1)}</data>
			</div>
			</div>
		</div>
	</li>`;
    tvSeriesList.insertAdjacentHTML('beforeend', filmListCard);
  }
}
