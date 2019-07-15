import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(
    logger,
    thunk
));

export default store;