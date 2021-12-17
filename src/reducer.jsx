import {
  ARTICLES,
  ERROR,
  LOADING,
  ARTICLE_PAGE,
  SIGN_UP,
  MAIN_PAGE,
  NEW_USER,
  SHOW_ERROR,
  USER,
  SIGN_IN,
  LOG_OUT,
  CURRENT_PAGE,
} from './actions';

const initialState = {
  articles: [],
  count: 1,
  error: false,
  loading: false,
  slug: '',
  articlePage: {},
  mainPage: true,
  signUp: false,
  newUser: {},
  user: {},
  userExist: false,
  currentPage: 1,
};

export const reducer = (state = initialState, action) => {
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

    case NEW_USER:
      return {
        ...state,
        newUser: action.res,
      };
    case USER:
      return {
        ...state,
        user: action.res,
      };

    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };

    case SIGN_UP:
      return {
        ...state,
        signUp: true,
        mainPage: false,
        articlePage: {},
        user: {},
        // userExist: false,
      };

    case SIGN_IN:
      return {
        ...state,
        signIn: true,
        mainPage: false,
        articlePage: {},
        newUser: {},
        // userExist: false,
      };

    case LOG_OUT:
      return {
        ...state,

        user: {},
        // userExist: false,
      };

    case MAIN_PAGE:
      return {
        ...state,
        signUp: false,
        mainPage: true,
        articlePage: {},
        currentPage: 1,
        // user: {},
        // userExist: false,
      };

    case SHOW_ERROR:
      return {
        ...state,
        userExist: true,
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
