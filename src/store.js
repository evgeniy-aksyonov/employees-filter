import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import apiReducer from 'modules/api/reducer';

const reducers = combineReducers({
  api: apiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(reducers, composeEnhancers());

export default store;
