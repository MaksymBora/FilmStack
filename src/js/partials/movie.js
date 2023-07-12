import '../partials/header';
import FilmList from '../get-api';

const filmList = new FilmList();

filmList.getAllMoviesList().then(r => console.log(r));
