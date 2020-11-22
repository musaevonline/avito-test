import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import newsReducer from './reducers/newsReducer'


const store = createStore(combineReducers({
    news: newsReducer
}), compose(applyMiddleware(thunk)));

export default store;