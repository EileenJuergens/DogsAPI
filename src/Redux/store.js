
import { createStore, combineReducers } from 'redux';
import { dogsReducer } from './reducers'

const reducers = combineReducers({
  dogsReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
