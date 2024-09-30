import { UserMeta } from "@/types/userMeta";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserMetaReducer extends UserMeta {}

const initialState: UserMetaReducer = {
  userFirst: null,
  userLast: null,
  userName: null,
  userStatus: null,
  userPicture: null,
  error: null,
};

// Create the slice
const userMetaSlice = createSlice({
  name: 'userMeta',
  initialState,
  reducers: {
    userMetaAdd(state, action: PayloadAction<UserMeta>) {
      return {
        ...state,
        ...action.payload,
        error: null,
      };
    },
    userMetaUpdate(state, action: PayloadAction<UserMeta>) {
      return {
        ...state,
        ...action.payload,
        error: null,
      };
    },
    userMetaDelete(state) {
      return {
        ...state,
        ...initialState,
      };
    },
    userMetaError(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    }
  }
});

export const { userMetaAdd, userMetaUpdate, userMetaDelete, userMetaError } = userMetaSlice.actions;
export default userMetaSlice.reducer;