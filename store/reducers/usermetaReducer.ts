import { UserMeta } from "@/types/userMeta";

interface UserMetaReducer extends UserMeta {}

const initialState: UserMetaReducer = {
  id: null,
  user_name: null,
  first_name: null,
  last_name: null,
  bio: null,
  user_picture: null,
  error: null,
};

// TODO: type the reducer action
const userMetaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'USERMETA_ADD':
    case 'USERMETA_UPDATE':
      return {
        ...state,
        ...action.payload,
        error: null,
      };

    case 'USERMETA_DELETE':
      return {
        ...state,
        ...initialState,
      };

    case 'USERMETA_ERROR':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default userMetaReducer;