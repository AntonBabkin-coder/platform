// import { ARTICLES, ARTICLE_PAGE, MAIN_LIKES, LOADING, ERROR } from '../actions/actionArticles';
import { ARTICLES, ARTICLE_PAGE, MAIN_LIKES, LOADING, ERROR } from '../actionTypes';

const initialState = {
	articles: [],
	count: 1,
	loading: false,
	articlePage: {},
	mainPage: true,
	error: false,
};

export const reducerArticle = (state = initialState, action) => {
	switch (action.type) {
		case ARTICLES:
			return {
				...state,
				articles: [...action.articles],
				count: (action.count * 10) / 5 - 10,
				loading: false,
				articlePage: {},
			};

		case ARTICLE_PAGE:
			return {
				...state,
				articlePage: action.res,
				mainPage: false,
				loading: false,
			};

		case ERROR:
			return {
				...state,
				error: true,
			};

		case MAIN_LIKES:
			return {
				...state,
				articles: [...state.articles.map((item) => (item.slug === action.article.slug ? action.article : item))],
				articlePage: action.article,
			};

		case LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		default: {
			return state;
		}
	}
};
