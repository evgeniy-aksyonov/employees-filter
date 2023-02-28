import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import apiReducer from 'modules/api/reducer';

const reducers = combineReducers({
  api: apiReducer,
});

const store = createStore(reducers);

export default store;
