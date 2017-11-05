import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shotsReducer from './shotsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  shots: shotsReducer
});

export default rootReducer;
