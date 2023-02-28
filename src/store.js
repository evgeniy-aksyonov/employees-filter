import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import apiReducer from 'modules/api/reducer';
import createSagaMiddleware from '@redux-saga/core';
import apiRootSaga from 'modules/api/saga';

const reducers = combineReducers({
  api: apiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(apiRootSaga);

export default store;
