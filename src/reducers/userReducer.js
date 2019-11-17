import { FETCH_USERS, ADD_USER, DELETE_USER, MODIFY_USER } from '../actions/userActions';

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
        case DELETE_USER:
            {
                const items = state.items.filter((data) => {
                    return data.id !== action.payload.id
                });
                return {
                    ...state,
                    items
                };
            }
        case MODIFY_USER:
            {
                const items = state.items.map((data) => {
                    if (data.id !== action.payload.id) {
                        return data;
                    }
                    return action.payload;
                });
                return {
                    ...state,
                    items
                };
            }
        case ADD_USER:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state;
    }
}