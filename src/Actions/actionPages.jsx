export const mainPage = () => ({ type: 'MAIN_PAGE' });
export const signIn = () => ({ type: 'SIGN_IN' });
export const signUp = () => ({ type: 'SIGN_UP' });
export const createArticle = () => ({ type: 'CREATE_ARTICLE' });
export const editPage = () => ({ type: 'EDIT_PAGE' });
export const setCurrentPage = (pageNumber) => ({ type: 'CURRENT_PAGE', pageNumber });

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const MAIN_PAGE = 'MAIN_PAGE';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const EDIT_PAGE = 'EDIT_PAGE';
export const CURRENT_PAGE = 'CURRENT_PAGE';
