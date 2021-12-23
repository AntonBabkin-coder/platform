import { SHOW_MODAL, HIDE_MODAL } from '../Actions/action.Indicator';

const initialState = {
  showModal: false,
};

export const reducerIndicator = (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};
