import { ReduxError } from '@/store/types/reduxActions';
import { UserMeta } from '@/types/userMeta';

interface UserMetaReducer extends UserMeta {}

export const userMetaAdd = (payload: UserMetaReducer) => {
  return { type: 'USERMETA_ADD', payload };
};

export const userMetaUpdate = (payload: UserMetaReducer) => {
  return { type: 'USERMETA_UPDATE', payload };
}

export const userMetaDelete = () => {
  return { type: 'USERMETA_DELETE' };
};

export const userMetaError = (error: ReduxError) => {
  return { type: 'USERMETA_ERROR', error: error.message };
};