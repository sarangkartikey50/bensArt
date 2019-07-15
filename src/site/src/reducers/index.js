import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    'applicationManager': dataReducer
});

export default rootReducer;