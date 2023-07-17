import NewApiService from './get-api';
const newApiService = new NewApiService();

import { renderingAllMoviesList } from './partials/renderingallmovies';

const loadMoreBtn = document.querySelector('[data-action="load-more"]');

function onPaginate() {
  newApiService.getMovieOnSearch().then(movies => {
    renderingAllMoviesList(movies);
    checkPagination(movies.total_pages);
  });
}
const paginationBtn = document.querySelector('#paginationBtn');
paginationBtn.addEventListener('click', onPaginate);

export function handlerGenreFilter(e) {
  const genreName = e.target.attributes.name.value;

  const mainSection = document.querySelector('main');
  const movieList = document.querySelector('.all-movies-list');

  newApiService.resetPage();
  if (genreName.length !== 0) {
    newApiService.sortGenre = genreName;

    mainSection.removeAttribute('id');
    mainSection.setAttribute('id', genreName);

    movieList.innerHTML = '';
    newApiService.getMovieOnSearch().then(movies => {
      renderingAllMoviesList(movies);
      checkPagination(movies.total_pages);
    });
  } else {
    movieList.innerHTML = '';
    newApiService.getAllMoviesList().then(renderingAllMoviesList);
  }
}
function checkPagination(totalPages) {
  if (newApiService.page < totalPages) {
    loadMoreBtn.style.display = 'none';
    paginationBtn.style.display = 'block';
  } else {
    paginationBtn.style.display = 'none';
  }
}
