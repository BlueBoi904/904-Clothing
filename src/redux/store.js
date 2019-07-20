import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];


export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// Persistor is just the persisStorefunction that we pass store into
// How we will create new provider that will wrap our application
export const persistor = persistStore(store);
export default {store, persistor};