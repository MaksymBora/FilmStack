import NewApiService from './get-api';
import { renderingRelieaseFilms } from './renderingRelease';
import { renderingTopRatedFils } from './rendering-top-rated';
import { renderingTvSeriesList } from './rendering-series';
import { getTvId, getId } from './get-movie-details';

const newApiService = new NewApiService();

// ---- Released Movies ----//
newApiService.getReleaseFilmList().then(renderingRelieaseFilms);

//---- Top Rated Movies ----//
newApiService.getTopRatedFilms().then(renderingTopRatedFils);

//---- World Best TV ----//
newApiService.getBestTvSeries().then(renderingTvSeriesList);

// Save movie data to local storage
const currentMovie = document.querySelector('.main');
currentMovie.addEventListener('click', getId);

const currentTvSeries = document.querySelector('[data-tvlist]');
currentTvSeries.addEventListener('click', getTvId);
