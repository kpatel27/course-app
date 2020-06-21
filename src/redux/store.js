import { createStore } from 'redux';
import rootReducer from './reducers/indexReducer';

function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}

export default configureStore;
