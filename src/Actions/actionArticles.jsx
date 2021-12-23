export const getLikes = (like) => ({ type: 'LIKES', like });
export const saveLikeMainPage = (article) => ({ type: 'MAIN_LIKES', article });
export const saveArticles = (articles, count) => ({ type: 'ARTICLES', articles, count });
export const errorIndicator = (payload) => ({ type: 'ERROR', payload });
export const loadingIndicator = () => ({ type: 'LOADING' });
export const saveArticlePage = (res) => ({ type: 'ARTICLE_PAGE', res });

export const ARTICLE_PAGE = 'ARTICLE_PAGE';
export const ARTICLES = 'ARTICLES';
export const MAIN_LIKES = 'MAIN_LIKES';
export const LIKES = 'LIKES';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

export const getResource = (url, options) =>
	fetch(`${process.env.REACT_APP_API}${url}`, options).then((res) => res.json());

export const getArticles = (pageNumber, token) => (dispatch) => {
	getResource(`articles?limit=5&offset=${pageNumber}`, {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json;charset=utf-8',
		},
	})
		.then((res) => dispatch(saveArticles(res.articles, res.articlesCount)))
		.catch(() => dispatch(errorIndicator()));
};

export const getArticlesPage = (slug, token) => (dispatch) => {
	getResource(`articles/${slug}`, {
		method: 'GET',
		headers: {
			Authorization: `Token ${token}`,
			'Content-Type': 'application/json;charset=utf-8',
		},
	})
		.then((res) => dispatch(saveArticlePage(res.article)))
		.catch(() => dispatch(errorIndicator()));
};

export const sendNewArticle = (data, user) => (dispatch) => {
	getResource(`articles`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8', Authorization: `Token ${user.token}` },
		body: JSON.stringify({
			article: data,
		}),
	}).catch(() => dispatch(errorIndicator()));
};

export const sendEditArticle = (articlePage, user) => (dispatch) => {
	getResource(`articles/${articlePage.slug}`, {
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
	getResource(`articles/${articlePage.slug}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Token ${user.user.token}`,
			'Content-Type': 'application/json;charset=utf-8',
		},
	}).catch(() => dispatch(errorIndicator()));
};

export const sendLike = (item, user, articlePage) => (dispatch) => {
	getResource(`articles/${item.slug}/favorite`, {
		method: !item.favorited ? 'POST' : 'DELETE',
		headers: { 'Content-Type': 'application/json;charset=utf-8', Authorization: `Token ${user.token}` },
		body: JSON.stringify({
			article: item,
		}),
	})
		.then((res) => (articlePage ? dispatch(saveArticlePage(res.article)) : dispatch(saveLikeMainPage(res.article))))
		.catch(() => dispatch(errorIndicator()));
};
