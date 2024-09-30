import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
import userMetaReducer from './usermetaReducer';
import alertReducer from './alertReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'userMeta'],
};

/**
 * auth     = user session data
 * userMeta = user meta data (profile)
 * alert    = in-app alert/notification state
 */
const rootReducer = combineReducers({
  auth: authReducer,
  userMeta: userMetaReducer,
  alert: alertReducer
});

export default persistReducer(rootPersistConfig, rootReducer);