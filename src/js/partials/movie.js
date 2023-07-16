import '../partials/header';
import NewApiService from '../get-api';
import { renderingAllMoviesList } from '../partials/renderingallmovies';

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

// newApiService.getMovieOnSearch().then(n => console.log(n));

const selectGenere = document.querySelectorAll('[data-filter]');
const mainSection = document.querySelector('main');

selectGenere.forEach(function (btn) {
  btn.addEventListener('click', selectGenreHandler);
});

function selectGenreHandler(e) {
  const movieList = document.querySelector('.all-movies-list');
  //
  const genreName = e.target.attributes.name.value;
  newApiService.resetPage();
  loadMoreBtn.removeEventListener('click', onLoadMore);
  if (genreName.length !== 0) {
    newApiService.sortGenre = genreName;

    mainSection.removeAttribute('id');
    mainSection.setAttribute('id', genreName);

    movieList.innerHTML = '';
    newApiService.getMovieOnSearch().then(data => {
      renderingAllMoviesList(data);
    });

    loadMoreBtn.addEventListener('click', onClickMore);

    function onClickMore() {
      newApiService.getMovieOnSearch().then(renderingAllMoviesList);
    }
  } else {
    movieList.innerHTML = '';
    newApiService.getAllMoviesList().then(renderingAllMoviesList);
  }
}
