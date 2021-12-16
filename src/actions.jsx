export const saveArticles = (articles, count) => ({ type: 'ARTICLES', articles, count });
export const errorIndicator = (payload) => ({ type: 'ERROR', payload });
export const loadingIndicator = () => ({ type: 'LOADING' });
export const saveArticlePage = (res) => ({ type: 'ARTICLE_PAGE', res });
export const ARTICLE_PAGE = 'ARTICLE_PAGE';
export const ARTICLES = 'ARTICLES';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

export const getArticles = (pageNumber) => (dispatch) => {
  console.log(pageNumber);
  fetch(`http://cirosantilli-realworld-next.herokuapp.com/api/articles?limit=5&offset=${pageNumber}`)
    .then((res) => res.json())
    .then((res) => dispatch(saveArticles(res.articles, res.articlesCount)))
    .catch(() => dispatch(errorIndicator()));
};

export const getArticlesPage = (slug) => (dispatch) => {
  console.log(slug);
  fetch(`http://cirosantilli-realworld-next.herokuapp.com/api/articles/${slug}`)
    .then((res) => res.json())
    .then((res) => dispatch(saveArticlePage(res.article)))
    .catch(() => dispatch(errorIndicator()));
};
