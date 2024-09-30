import { UserSession } from "@/types/userSession";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState extends UserSession {}

const initialState: AuthState = {
  id: null,
  email: null,
  access_token: null,
  refresh_token: null,
  expires_at: null,
  expires_in: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<UserSession>) {
      return {
        ...state,
        ...action.payload,
        error: null,
      };
    },
    signUp(state, action: PayloadAction<UserSession>) {
      return {
        ...state,
        ...action.payload,
        error: null,
      };
    },
    signOut(state) {
      return {
        ...state,
        ...initialState,
      };
    },
    authError(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    }
  }
});

export const { signIn, signUp, signOut, authError } = authSlice.actions;
export default authSlice.reducer;