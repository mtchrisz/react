import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const initalState = {};

const middleWare = [thunk];

const store = createStore(
    combineReducers({
        users: userReducer
    }),
    initalState,
    compose(
        applyMiddleware(...middleWare),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;