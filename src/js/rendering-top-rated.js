export function renderingTopRatedFils(response) {
  const arr = response.results;
  const topRatedFilmList = document.querySelector('.movies-list[data-list]');

  for (let i = 10; i < 18; i += 1) {
    const randomTime = Math.floor(Math.random() * (111 - 92 + 1)) + 92;
    const filmListCard = `
	<li>
        <div class="movie-card">
          <a href="movie-details.html" target="_blank">
            <figure class="card-banner" data-id="${arr[i].id}">
              <img
                src="https://image.tmdb.org/t/p/w300${arr[i].poster_path}"
                alt="${arr[i].title}"
              />
            </figure>
          </a>

          <div class="title-wrapper">
            <a href="/src/movie-details.html">
              <h3 class="card-title">${arr[i].title}</h3>
            </a>

            <time datetime="${arr[i].release_date}">${
      arr[i].release_date
    }</time>
          </div>

          <div class="card-meta">
            <div class="badge badge-outline">2K</div>

            <div class="duration">
              <ion-icon name="time-outline"></ion-icon>

              <time datetime="PT122M">${randomTime} min</time>
            </div>

            <div class="rating">
              <ion-icon name="star"></ion-icon>

              <data>${arr[i].vote_average.toFixed(1)}</data>
            </div>
          </div>
        </div>
      </li>`;

    topRatedFilmList.insertAdjacentHTML('beforeend', filmListCard);
  }
}
