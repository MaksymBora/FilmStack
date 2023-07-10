const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
  },
};

function getApi() {
  return fetch('https://api.themoviedb.org/3/trending/movie/day', options)
    .then(response => response.json())
    .then(renderingFilmList)
    .catch(err => console.error(err));
}

getApi();

function renderingFilmList(response) {
  const arr = response.results;
  const cardWrapper = document.querySelector('.card-wrapper');

  const renderingCard = arr;
  console.log(renderingCard);

  const filmListCard = arr
    .map(data => {
      const { poster_path, title } = data;
      const markUp = `
  	<div>
      <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" width="400" heigth="350">
      <p>${title}</p>
	  </div>`;

      return markUp;
    })
    .join('');
  cardWrapper.insertAdjacentHTML('beforeend', filmListCard);
}
