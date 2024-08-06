import { ReduxError } from '@/types/reduxActions';
import { UserSession } from '@/types/userSession';

interface AuthReducer extends UserSession {}

export const authSignIn = (payload: AuthReducer) => {
  return { type: 'AUTH_SIGN_IN', payload };
};

export const authSignUp = (payload: AuthReducer) => {
  return { type: 'AUTH_SIGN_UP', payload };
};

export const authSignOut = () => {
  return { type: 'AUTH_SIGN_OUT' };
};

export const authError = (error: ReduxError) => {
  return { type: 'AUTH_ERROR', error: error.message };
};
