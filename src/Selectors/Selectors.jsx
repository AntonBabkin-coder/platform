// import { reducerArticle } from '../reduxResources/reducers/reducerArticle';
// import { reducerIndicator } from '../reduxResources/reducers/reducerIndicator';
// import { reducerPages } from '../reduxResources/reducers/reducerPages';
// import { reducerUser } from '../reduxResources/reducers/reducerUser';

export const selectors = (state) => ({
	articleSelectors: state.reducerArticle,
	indicatorSelectors: state.reducerIndicator,
	pagesSelectors: state.reducerPages,
	userSelectors: state.reducerUser,
});
// export const articleSelectors = (state) => state.reducerArticle;
// export const indicatorSelectors = (state) => state.reducerIndicator;
// export const pagesSelectors = (state) => state.reducerPages;
// export const userSelectors = (state) => state.reducerUser;
