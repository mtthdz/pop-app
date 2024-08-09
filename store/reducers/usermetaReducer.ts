import { UserMeta } from "@/types/userMeta";

interface UserMetaReducer extends UserMeta {}

const initialState: UserMetaReducer = {
  user_first: null,
  user_last: null,
  user_name: null,
  user_bio: null,
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