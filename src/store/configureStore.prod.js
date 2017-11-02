import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const history = createBrowserHistory();

function configureStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    thunk,
    reactRouterMiddleware
  ];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

export { configureStore, history };
