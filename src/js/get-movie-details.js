import NewApiService from './get-api';

const newApiService = new NewApiService();

const currentMovie = document.querySelector('main');
const LOCALSTORAGE_KEY = 'current-movie-info';

currentMovie.addEventListener('click', getId);

export function getId(e) {
  const target = e.target.dataset.id;

  newApiService.searchById(target).then(response => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(response));
  });
}
