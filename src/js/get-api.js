import axios from 'axios';

export default class NewApiService {
  constructor() {
    this.BASE_URL = 'https://api.themoviedb.org/3';
    this.ENDPOINT = '/trending/movie/day';
    this.ENDPOINT_TVSHOW = '/movie/top_rated';
    this.ENDPOINT_SERIES = '/tv/airing_today';
    this.ENDPOINT_TRANDING = '/movie/popular';
    this.discover = '/discover/movie';
    this.key = '?api_key=b580e55a4551b421271bf131dd03ab39';

    this.sortby = '';
    this.sortGenre = '';
    this.language = 'en-US';
    this.page = 1;
    this.searchQuery = '';

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
        `${this.BASE_URL}${this.ENDPOINT}?language=${this.language}`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  // TOP RATED
  async getTopRatedFilms(lang) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}${this.ENDPOINT_TRANDING}?language=${lang}&page=${this.page}`,
        this.options
      );

      if (response.status === 200) {
        this.incrementPage();
        return response.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async getBestTvSeries() {
    try {
      const response = await axios.get(
        `${this.BASE_URL}${this.ENDPOINT_SERIES}?language=${this.language}&page=${this.page}`,
        this.options
      );

      if (response.status === 200) {
        this.incrementPage();
        return response.data;
      }
    } catch (error) {
      this.incrementPage();
      console.log(error);
    }
  }

  // ---- MOVIES ---- //
  async getAllMoviesList(lang) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}${this.ENDPOINT}?language=${lang}&page=${this.page}`,
        this.options
      );

      if (response.status === 200) {
        this.incrementPage();
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // ---- TV SHOW ---- //
  async getAllTvShow(lang) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}${this.ENDPOINT_TVSHOW}?language=${lang}&page=${this.page}`,
        this.options
      );

      if (response.status === 200) {
        this.incrementPage();
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Filter

  async getMovieOnSearch() {
    const url = `${this.BASE_URL}${this.discover}${this.key}&with_genres=${this.sortGenre}&page=${this.page}`;

    try {
      const movies = await axios.get(url);

      if (movies.status === 200) {
        this.incrementPage();
        return movies.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Search Movie Movie by ID

  async searchById(id) {
    const url = `${this.BASE_URL}/movie/${id}`;

    try {
      const movies = await axios.get(url, this.options);

      if (movies.status === 200) {
        return movies.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Search TV Movie by ID

  async searchTvById(id) {
    const url = `${this.BASE_URL}/tv/${id}`;

    try {
      const movies = await axios.get(url, this.options);

      if (movies.status === 200) {
        return movies.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  // use when submit form
  resetPage() {
    this.page = 1;
  }

  get filmById() {
    return this.searchQuery;
  }

  set filmById(newQuery) {
    this.searchQuery = newQuery;
  }
}
