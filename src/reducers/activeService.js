import {
    FETCH_ACTIVE_SERVICE_FAILURE,
    FETCH_ACTIVE_SERVICE_REQUEST,
    FETCH_ACTIVE_SERVICE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    activeItem: { id: '', name: '', price: '', content: ''},
    loading: false,
    error: null,
};

export default function activeServiceReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVE_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_ACTIVE_SERVICE_FAILURE:
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case FETCH_ACTIVE_SERVICE_SUCCESS:
            const {item} = action.payload;
            console.log(item);
            return {
                ...state,
                activeItem: item,
                loading: false,
                error: null,
            };
      default:
        return state;
    }
}