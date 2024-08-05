import { AuthReducerType } from '@/store/types/authReducer';
import { ReduxError } from '@/store/types/reduxActions';

export const authSignIn = (payload: AuthReducerType) => {
  return { type: 'AUTH_SIGN_IN', payload };
};

export const authSignUp = (payload: AuthReducerType) => {
  return { type: 'AUTH_SIGN_UP', payload };
};

export const authSignOut = () => {
  return { type: 'AUTH_SIGN_OUT' };
};

export const authError = (error: ReduxError) => {
  return { type: 'AUTH_ERROR', error: error.message };
};
