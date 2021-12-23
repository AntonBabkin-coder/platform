import { NEW_USER, USER, LOG_OUT } from '../Actions/actionUser';

const initialState = {
  newUser: {},
  user: {},
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
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

    case LOG_OUT:
      return {
        ...state,
        user: {},
      };
    default: {
      return state;
    }
  }
};
