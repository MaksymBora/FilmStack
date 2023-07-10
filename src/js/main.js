import FilmList from './get-api';
import { renderingRelieaseFilms } from './renderingRelease';

const filmList = new FilmList();

filmList.getReleaseFilmList().then(renderingRelieaseFilms);
