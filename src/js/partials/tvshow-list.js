import '../partials/header';
import NewApiService from '../get-api';
import { renderingAllTvShowList } from '../partials/renderingalltvshow';
import { handlerGenreFilter } from '../genrefilter';
import { getId } from '../get-movie-details';

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

const selectGenere = document.querySelectorAll('[data-filter]');

// Listening filters btn
selectGenere.forEach(function (btn) {
  btn.addEventListener('click', handlerGenreFilter);
});

// Save movie data to local storage
const currentMovie = document.querySelector('.main');
currentMovie.addEventListener('click', getId);