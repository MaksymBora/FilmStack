import '../partials/header';
import NewApiService from '../get-api';
import { renderingAllMoviesList } from '../partials/renderingallmovies';
import { handlerGenreFilter } from '../genrefilter';

const newApiService = new NewApiService();

// Rendering movies list
newApiService.getAllMoviesList().then(renderingAllMoviesList);

// Show More Button
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

// Rendering more movies on click Show More Btn
loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
  newApiService.getAllMoviesList().then(renderingAllMoviesList);
}

const selectGenere = document.querySelectorAll('[data-filter]');

// Listening filters btn
selectGenere.forEach(function (btn) {
  btn.addEventListener('click', applyFilterMovies);
});

// Call filter funtion and remove pagination from btn "show more" //
function applyFilterMovies(e) {
  loadMoreBtn.removeEventListener('click', onLoadMore);

  handlerGenreFilter(e);
}
