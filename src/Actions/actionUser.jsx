export const getNewUser = (res) => ({ type: 'NEW_USER', res });
export const getUser = (res) => ({ type: 'USER', res });
export const errorIndicator = (payload) => ({ type: 'ERROR', payload });
export const logOut = () => ({ type: 'LOG_OUT' });

export const ERROR = 'ERROR';
export const USER = 'USER';
export const LOG_OUT = 'LOG_OUT';
export const NEW_USER = 'NEW_USER';

export const sendNewUser = (user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}users/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      user,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(getNewUser(res)))
    .catch(() => dispatch(errorIndicator()));
};

export const sendUser = (user) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}users/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      user,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(getUser(res.user)))
    .catch(() => dispatch(errorIndicator()));
};

export const sendEditUser = (user, currentUser) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API}user/`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${currentUser.token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(getUser(res.user)));
};
