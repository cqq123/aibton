import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { reducer as publishReducer } from './scenes/Publish/data/reducer';
import { reducer as loginReducer } from './scenes/Login/data/reducer';

const reducer = combineReducers({
  publish: publishReducer,
  login: loginReducer,
});

export default function configStore(initialState = {}) {
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware,
    thunkMiddleware,
  ];
  const enhancers = [];
  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    const loggerMiddleware = createLogger({
      level: 'info',
      collapsed: true,
    });
    middlewares.push(loggerMiddleware);
    const devToolsExtension = { window };
    if (devToolsExtension) {
      enhancers.push(window.devToolsExtension());
    }
  }
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    ),
  );
  return store;
}
