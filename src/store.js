import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import apiRootSaga from 'modules/api/saga';
import apiReducer from 'modules/api/reducer';
import appReducer from 'modules/app/reducer';

const reducers = combineReducers({
  api: apiReducer,
  app: appReducer,
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
