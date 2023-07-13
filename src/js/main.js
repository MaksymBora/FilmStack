import NewApiService from './get-api';
import { renderingRelieaseFilms } from './renderingRelease';
import { renderingTopRatedFils } from './rendering-top-rated';
import { renderingTvSeriesList } from './rendering-series';

const NewApiService = new NewApiService();

// ---- Released Movies ----//
newApiService.getReleaseFilmList().then(renderingRelieaseFilms);

//---- Top Rated Movies ----//
newApiService.getTopRatedFilms().then(renderingTopRatedFils);

//---- World Best TV ----//
newApiService.getBestTvSeries().then(renderingTvSeriesList);
