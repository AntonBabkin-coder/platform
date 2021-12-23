// import { reducerArticle } from '../Reducers/reducerArticle';
// import { reducerIndicator } from '../Reducers/reducerIndicator';
// import { reducerPages } from '../Reducers/reducerPages';
// import { reducerUser } from '../Reducers/reducerUser';

// export const selectors = {
// 	Article: reducerArticle,
// 	Indicator: reducerIndicator,
// 	Pages: reducerPages,
// 	User: reducerUser,
// };
export const articles = (state) => state.reducerArticle;
export const indicator = (state) => state.reducerIndicator;
export const pages = (state) => state.reducerPages;
export const user = (state) => state.reducerUser;
