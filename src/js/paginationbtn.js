export default class NewPagination {
  constructor(loadMoreBtnSelector, paginationBtnSelector) {
    this.loadMoreBtn = document.querySelector(loadMoreBtnSelector);
    this.paginationBtn = document.querySelector(paginationBtnSelector);
    this.paginationBtn.addEventListener(
      'click',
      this.onPaginationClick.bind(this)
    );
  }

  onPaginate(apiData, renderMoviesList) {
    apiData().then(renderMoviesList);
  }

  updatePagination(totalPages, page) {
    this.loadMoreBtn.style.display = page < totalPages ? 'none' : 'block';
    this.paginationBtn.style.display = page < totalPages ? 'block' : 'none';
  }

  onPaginationClick() {
    const apiData = this.apiData;
    const renderMoviesList = this.renderMoviesList;

    if (typeof apiData === 'function') {
      apiData().then(movies => {
        renderMoviesList(movies);
        this.updatePagination(movies.total_pages, movies.page);
      });
    }
  }
}
