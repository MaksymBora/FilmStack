import NewApiService from './get-api';

const newApiService = new NewApiService();

const LOCALSTORAGE_KEY = 'current-movie-info';
const LOCALSTORAGE_KEY2 = 'current-tv-info';

export function getId(e) {
  const target = e.target.dataset.id;

  newApiService.searchById(target).then(response => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(response));
  });
}

export function getTvId(e) {
  const target = e.target.dataset.id;
  console.log(target);
  newApiService.searchTvById(target).then(response => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(response));
  });
}
