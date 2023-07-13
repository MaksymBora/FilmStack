import '../partials/header';
import NewApiService from '../get-api';
import { renderingAllTvShowList } from '../partials/renderingalltvshow';

const newApiService = new NewApiService();

// Rendering movies list
newApiService.getAllTvShow().then(renderingAllTvShowList);

// Show More Button
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

// Rendering more movies on click Show More Btn
loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
  newApiService.getAllTvShow().then(renderingAllTvShowList);
}
