import '../partials/header';
import NewApiService from '../get-api';
import { renderingAllTopRated } from '../partials/rendering-all-toprated';

const newApiService = new NewApiService();

// Rendering movies list
newApiService.getTopRatedFilms().then(renderingAllTopRated);

// Show More Button
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

// Rendering more movies on click Show More Btn
loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
  newApiService.getTopRatedFilms().then(renderingAllTopRated);
}
