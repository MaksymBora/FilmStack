import NewApiService from './get-api';
const newApiService = new NewApiService();

import { renderingAllMoviesList } from './partials/renderingallmovies';

export function handlerGenreFilter(e) {
  const genreName = e.target.attributes.name.value;

  const mainSection = document.querySelector('main');
  const movieList = document.querySelector('.all-movies-list');
  const loadMoreBtn = document.querySelector('[data-action="load-more"]');

  newApiService.resetPage();

  if (genreName.length !== 0) {
    newApiService.sortGenre = genreName;

    mainSection.removeAttribute('id');
    mainSection.setAttribute('id', genreName);

    movieList.innerHTML = '';
    newApiService.getMovieOnSearch().then(renderingAllMoviesList);

    loadMoreBtn.addEventListener('click', onClickMore);

    function onClickMore() {
      newApiService.getMovieOnSearch().then(renderingAllMoviesList);
    }
  } else {
    movieList.innerHTML = '';
    newApiService.getAllMoviesList().then(renderingAllMoviesList);
  }
}
