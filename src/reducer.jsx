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
  CREATE_ARTICLE,
  EDIT_PAGE,
  SHOW_MODAL,
  HIDE_MODAL,
  LIKES,
  MAIN_LIKES,
} from './actions';

const initialState = {
  articles: [],
  count: 1,
  error: false,
  loading: false,
  articlePage: {},
  mainPage: true,
  signUp: false,
  createArticle: false,
  newUser: {},
  user: {},
  currentPage: 1,
  editPage: false,
  showModal: false,
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
      };

    case SIGN_IN:
      return {
        ...state,
        signIn: true,
        mainPage: false,
        articlePage: {},
        newUser: {},
      };

    case CREATE_ARTICLE:
      return {
        ...state,
        createArticle: true,
        editPage: false,
        mainPage: false,
        articlePage: {},
      };

    case LOG_OUT:
      return {
        ...state,
        user: {},
      };

    case MAIN_PAGE:
      return {
        ...state,
        signUp: false,
        mainPage: true,
        articlePage: {},
        currentPage: 1,
        createArticle: false,
      };

    case EDIT_PAGE:
      return {
        ...state,
        editPage: true,
        signUp: false,
        mainPage: false,
      };

    case SHOW_ERROR:
      return {
        ...state,
        userExist: true,
      };

    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };

    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };

    case ERROR:
      return {
        ...state,
        error: true,
      };

    case LIKES:
      return {
        ...state,
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
