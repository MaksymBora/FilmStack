import FilmList from './get-api';
import { renderingRelieaseFilms } from './renderingRelease';
import { renderingTopRatedFils } from './rendering-top-rated';

const filmList = new FilmList();

// ---- Released Movies ----//
filmList.getReleaseFilmList().then(renderingRelieaseFilms);

//---- Top Rated Movies ----//
filmList.getTopRatedFilms().then(renderingTopRatedFils);
