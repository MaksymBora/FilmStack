import FilmList from './js/get-api';

const films = new FilmList();

films.getFilmList().then(renderingFilmList);

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
