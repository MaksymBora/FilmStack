import '../partials/header';
import FilmList from '../get-api';
import { renderingAllMoviesList } from '../partials/renderingallmovies';

const filmList = new FilmList();

filmList.getAllMoviesList().then(renderingAllMoviesList);
