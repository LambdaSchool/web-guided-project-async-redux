import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";

const initialState = {
    quote: '',
    loading: false
};

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            }
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
                editing: false
            }
        default:
            return state;
    }
}