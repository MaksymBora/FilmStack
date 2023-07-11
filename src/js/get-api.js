import axios from 'axios';

export default class FilmList {
  constructor() {
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.ENDPOINT = '/trending/movie/day';
    this.ENDPOINT_TOPRATED = '/movie/top_rated';
    this.language = 'en-US';
    this.page = 1;
    // https://api.themoviedb.org/3/movie/popular
    //   /trending/movie/day
    this.options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
      },
    };
  }

  async getReleaseFilmList() {
    try {
      const response = await axios.get(
        `${this.BASE_URL}${this.ENDPOINT}`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getTopRatedFilms() {
    try {
      const response = await axios.get(
        `${this.BASE_URL}${this.ENDPOINT_TOPRATED}?language=${this.language}&page=${this.page}`,
        this.options
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
