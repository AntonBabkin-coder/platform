export const appSelectors = (state) => ({
	articleSelectors: state.reducerArticle,
	pagesSelectors: state.reducerPages,
	userSelectors: state.reducerUser,
});

export const articleSelectors = (state) => ({
	articleSelectors: state.reducerArticle,
	userSelectors: state.reducerUser,
});

export const articlePageSelectors = (state) => ({
	articleSelectors: state.reducerArticle,
	indicatorSelectors: state.reducerIndicator,
	userSelectors: state.reducerUser,
});

export const EditProfileSelectors = (state) => ({
	userSelectors: state.reducerUser,
});

export const formArticleSelectors = (state) => ({
	articleSelectors: state.reducerArticle,
	pagesSelectors: state.reducerPages,
	userSelectors: state.reducerUser,
});

export const headerSelectors = (state) => ({
	userSelectors: state.reducerUser,
});

export const signInSelectors = (state) => ({
	userSelectors: state.reducerUser,
});

export const signUpSelectors = (state) => ({
	userSelectors: state.reducerUser,
});
