import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import usermetaReducer from './usermetaReducer';
import { AuthReducerType } from '@/store/types/authReducer';
import { UsermetaReducerType } from '@/store/types/usermetaReducer';

type RootStateType = {
  auth: AuthReducerType;
  usermeta: UsermetaReducerType;
}

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'usermeta'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  usermeta: usermetaReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
