export const saveArticles = (articles, count) => ({ type: 'ARTICLES', articles, count });
export const errorIndicator = (payload) => ({ type: 'ERROR', payload });
export const loadingIndicator = () => ({ type: 'LOADING' });
export const saveArticlePage = (res) => ({ type: 'ARTICLE_PAGE', res });
export const mainPage = () => ({ type: 'MAIN_PAGE' });
export const getNewUser = (res) => ({ type: 'NEW_USER', res });
export const getUser = (res) => ({ type: 'USER', res });
export const showError = () => ({ type: 'SHOW_ERROR' });
export const signIn = () => ({ type: 'SIGN_IN' });
export const signUp = () => ({ type: 'SIGN_UP' });
export const logOut = () => ({ type: 'LOG_OUT' });

export const setCurrentPage = (pageNumber) => ({ type: 'CURRENT_PAGE', pageNumber });

export const CURRENT_PAGE = 'CURRENT_PAGE';
export const LOG_OUT = 'LOG_OUT';
export const USER = 'USER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const NEW_USER = 'NEW_USER';
export const MAIN_PAGE = 'MAIN_PAGE';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
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

export const sendNewUser = (user) => (dispatch) => {
  console.log(user);
  fetch(`http://cirosantilli-realworld-next.herokuapp.com/api/users/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(getNewUser(res)))
    .catch(() => dispatch(errorIndicator()));
};

export const sendUser = (user) => (dispatch) => {
  console.log(user);
  fetch(`http://cirosantilli-realworld-next.herokuapp.com/api/users/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      user: {
        email: user.email,
        password: user.password,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(getUser(res)))
    .catch(() => dispatch(errorIndicator()));
};
