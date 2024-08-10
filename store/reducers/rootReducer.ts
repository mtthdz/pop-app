import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
import userMetaReducer from './userMetaReducer';
import alertReducer from './alertReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'userMeta'],
};

/**
 * auth     = user session data
 * userMeta = user meta data (profile)
 * error    = global error state
 */
const rootReducer = combineReducers({
  auth: authReducer,
  userMeta: userMetaReducer,
  alert: alertReducer
});

export default persistReducer(rootPersistConfig, rootReducer);