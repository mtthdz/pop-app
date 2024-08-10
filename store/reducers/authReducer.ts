import { UserSession } from "@/types/userSession";

interface AuthReducer extends UserSession {}

const initialState: AuthReducer = {
  id: null,
  email: null,
  access_token: null,
  refresh_token: null,
  expires_at: null,
  expires_in: null,
  error: null,
};

// TODO: type the reducer action
// TODO: implement a retry function on `AUTH_ERROR`
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'AUTH_SIGN_UP':
    case 'AUTH_SIGN_IN':
      return {
        ...state,
        ...action.payload,
        error: null,
      };

    case 'AUTH_SIGN_OUT':
      return {
        ...state,
        ...initialState,
      };

    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default authReducer;
