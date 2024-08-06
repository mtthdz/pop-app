import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
import userMetaReducer from './userMetaReducer';
import errorReducer from './errorReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'userMeta'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  userMeta: userMetaReducer,
  error: errorReducer
});

export default persistReducer(rootPersistConfig, rootReducer);