import { FETCH_USERS } from '../actions/userActions';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}