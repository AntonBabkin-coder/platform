export const getNewUser = (res) => ({ type: 'NEW_USER', res });
export const getUser = (res) => ({ type: 'USER', res });
export const errorIndicator = (payload) => ({ type: 'ERROR', payload });
export const logOut = () => ({ type: 'LOG_OUT' });

export const getResourceUser = (url, options) =>
	fetch(`${process.env.REACT_APP_API}${url}`, options).then((res) => res.json());

export const sendNewUser = (user) => (dispatch) => {
	getResourceUser(`users/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			user,
		}),
	})
		.then((res) => dispatch(getNewUser(res.user)))
		.catch(() => dispatch(errorIndicator()));
};

export const sendUser = (user) => (dispatch) => {
	getResourceUser(`users/login/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			user,
		}),
	})
		.then((res) => dispatch(getUser(res.user)))
		.catch(() => dispatch(errorIndicator()));
};

export const sendEditUser = (user, currentUser) => (dispatch) => {
	getResourceUser(`user/`, {
		method: 'PUT',
		headers: {
			Authorization: `Token ${currentUser.token}`,
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			user,
		}),
	}).then((res) => dispatch(getUser(res.user)));
};
