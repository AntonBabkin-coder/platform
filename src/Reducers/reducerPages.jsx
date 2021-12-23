import { SIGN_UP, MAIN_PAGE, SIGN_IN, CURRENT_PAGE, CREATE_ARTICLE, EDIT_PAGE } from '../Actions/actionPages';

const initialState = {
  articlePage: {},
  mainPage: true,
  signUp: false,
  createArticle: false,
  newUser: {},
  user: {},
  currentPage: 1,
  editPage: false,
};

export const reducerPages = (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};
