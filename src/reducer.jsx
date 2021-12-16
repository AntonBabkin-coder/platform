import { ARTICLES, ERROR, LOADING, ARTICLE_PAGE } from './actions';

const initialState = {
  articles: [],
  count: 1,
  error: false,
  loading: false,
  slug: '',
  articlePage: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES:
      return {
        ...state,
        articles: [...action.articles],
        count: (action.count * 10) / 5 - 10,
        loading: false,
      };
    case ARTICLE_PAGE:
      return {
        ...state,
        articlePage: action.res,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
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
