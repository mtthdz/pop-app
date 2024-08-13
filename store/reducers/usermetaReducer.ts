import { UserMeta } from "@/types/userMeta";

interface UserMetaReducer extends UserMeta {}

const initialState: UserMetaReducer = {
  userFirst: null,
  userLast: null,
  userName: null,
  userStatus: null,
  userPicture: null,
  error: null,
};

// TODO: type the reducer action
// TODO: implement a retry function on `USERMETA_ERROR`
const userMetaReducer = (state = initialState, action: any): UserMetaReducer => {
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