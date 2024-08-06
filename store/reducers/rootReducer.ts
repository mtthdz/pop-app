import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userMetaReducer from './userMetaReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'usermeta'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  userMeta: userMetaReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);