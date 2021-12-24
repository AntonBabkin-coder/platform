// import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionIndicator';
import { SHOW_MODAL, HIDE_MODAL } from '../actionTypes';

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
