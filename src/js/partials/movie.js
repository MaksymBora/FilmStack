import '../partials/header';
import NewApiService from '../get-api';
import { renderingAllMoviesList } from '../partials/renderingallmovies';

const newApiService = new NewApiService();

// Rendering movies list
newApiService.getAllMoviesList().then(r => {
  console.log(r);
  renderingAllMoviesList(r);
});

// Show More Button
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

// Rendering more movies on click Show More Btn
loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
  newApiService.getAllMoviesList().then(renderingAllMoviesList);
}
