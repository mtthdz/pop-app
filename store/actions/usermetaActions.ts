import { ReduxError } from '@/store/types/reduxActions';
import { UsermetaReducerType } from '@/store/types/usermetaReducer';

export const usermetaAdd = (payload: UsermetaReducerType) => {
  return { type: 'USERMETA_ADD', payload };
};

export const usermetaUpdate = (payload: UsermetaReducerType) => {
  return { type: 'USERMETA_UPDATE', payload };
}

export const usermetaDelete = () => {
  return { type: 'USERMETA_DELETE' };
};

export const usermetaError = (error: ReduxError) => {
  return { type: 'USERMETA_ERROR', error: error.message };
};