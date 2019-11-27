
import { createStore, combineReducers } from 'redux';
import { dogsReducer, amountOfImagesReducer } from './reducers';

const reducers = combineReducers({
  dogsReducer, 
  amountOfImagesReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
