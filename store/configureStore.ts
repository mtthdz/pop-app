import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';
import loggerMiddleware from './middleware/loggerMiddleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(loggerMiddleware),
});

const persistor = persistStore(store);

export { store, persistor };