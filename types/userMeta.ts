// Used both in Supabase API Auth and UserMeta Reducer
export interface UserMeta {
  userFirst: null | string;
  userLast: null | string;
  userName: null | string;
  userStatus: null | string;
  userPicture: null | string;
  error: null | string;
}