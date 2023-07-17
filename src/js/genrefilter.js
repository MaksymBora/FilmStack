import NewApiService from './get-api';
import NewPagination from './paginationbtn';
import { renderingAllMoviesList } from './partials/renderingallmovies';

const newApiService = new NewApiService();
const newPaginationBtn = new NewPagination(
  '[data-action="load-more"]',
  '#paginationBtn'
);

const paginationBtn = document.querySelector('#paginationBtn');

// On Click Pagination Btn
paginationBtn.addEventListener('click', () => {
  const apiData = () => newApiService.getMovieOnSearch();
  const renderMoviesList = renderingAllMoviesList;
  newPaginationBtn.onPaginate(apiData, renderMoviesList);
});

// GenreFilter
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

    // rendering movie-list
    newApiService.getMovieOnSearch().then(movies => {
      renderingAllMoviesList(movies);
      newPaginationBtn.updatePagination(movies.total_pages, movies.page);
    });
  } else {
    movieList.innerHTML = '';
    newApiService.getAllMoviesList().then(renderingAllMoviesList);
  }
}
