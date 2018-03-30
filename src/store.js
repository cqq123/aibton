import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { reducer as bicycleReducer } from './scenes/Bicycle/data/reducer';
import { reducer as busReducer } from './scenes/Bus/data/reducer';

const reducer = combineReducers({
  Bicycle: bicycleReducer,
  Bus: busReducer,
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
