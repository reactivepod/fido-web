import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage/engines/localStorage';

const reducer = storage.reducer(rootReducer);
const engine = createEngine('fido');
const storageMiddleware = storage.createMiddleware(engine);

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  storageMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
