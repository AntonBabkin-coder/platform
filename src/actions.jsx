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
export const createArticle = () => ({ type: 'CREATE_ARTICLE' });
export const logOut = () => ({ type: 'LOG_OUT' });
export const editPage = () => ({ type: 'EDIT_PAGE' });
export const showModalPage = () => ({ type: 'SHOW_MODAL' });
export const hideModalPage = () => ({ type: 'HIDE_MODAL' });
export const getLikes = (like) => ({ type: 'LIKES', like });
export const saveLikeMainPage = (article) => ({ type: 'MAIN_LIKES', article });
export const setCurrentPage = (pageNumber) => ({ type: 'CURRENT_PAGE', pageNumber });

export const MAIN_LIKES = 'MAIN_LIKES';
export const LIKES = 'LIKES';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const MESSAGE = 'MESSAGE';
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const EDIT_PAGE = 'EDIT_PAGE';
export const LOG_OUT = 'LOG_OUT';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
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

export const getArticles = (pageNumber, token) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}articles?limit=5&offset=${pageNumber}`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((res) => res.json())
    .then((res) => dispatch(saveArticles(res.articles, res.articlesCount)))
    .catch(() => dispatch(errorIndicator()));
};

export const getArticlesPage = (slug) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}articles/${slug}`, {
    method: 'GET',
    headers: {
      Authorization: process.env.REACT_APP_TOKEN,
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((res) => res.json())
    .then((res) => dispatch(saveArticlePage(res.article)))
    .catch(() => dispatch(errorIndicator()));
};

export const sendNewUser = (user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}users/`, {
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
  fetch(`${process.env.REACT_APP_API}users/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      user,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(getUser(res.user)))
    .catch(() => dispatch(errorIndicator()));
};

export const sendEditUser = (user, currentUser) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}user/`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${currentUser.token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(getUser(res.user)));
};

export const sendNewArticle = (data, user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8', Authorization: `Token ${user.token}` },
    body: JSON.stringify({
      article: data,
    }),
  })
    .then((res) => res.json())
    .catch(() => dispatch(errorIndicator()));
};

export const sendEditArticle = (articlePage, user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}articles/${articlePage.slug}`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${user.token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      article: articlePage,
    }),
  }).catch(() => dispatch(errorIndicator()));
};

export const deleteArticle = (articlePage, user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}articles/${articlePage.slug}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.user.token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).catch(() => dispatch(errorIndicator()));
};

export const sendLike = (item, user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}articles/${item.slug}/favorite`, {
    method: !item.favorited ? 'POST' : 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=utf-8', Authorization: `Token ${user.token}` },
    body: JSON.stringify({
      article: item,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(saveArticlePage(res.article)))
    .catch(() => dispatch(errorIndicator()));
};

export const sendLikeMainPage = (item, user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}articles/${item.slug}/favorite`, {
    method: !item.favorited ? 'POST' : 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=utf-8', Authorization: `Token ${user.token}` },
    body: JSON.stringify({
      article: item,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(saveLikeMainPage(res.article)))
    .catch(() => dispatch(errorIndicator()));
};
