import { MAIN_PAGE, SIGN_IN, SIGN_UP, CREATE_ARTICLE, EDIT_PAGE, CURRENT_PAGE } from '../actionTypes';

export const mainPage = () => ({ type: MAIN_PAGE });
export const signIn = () => ({ type: SIGN_IN });
export const signUp = () => ({ type: SIGN_UP });
export const createArticle = () => ({ type: CREATE_ARTICLE });
export const editPage = () => ({ type: EDIT_PAGE });
export const setCurrentPage = (pageNumber) => ({ type: CURRENT_PAGE, pageNumber });
