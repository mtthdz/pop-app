// Used both in Supabase API Auth and UserMeta Reducer
export interface UserMeta {
  user_first: null | string;
  user_last: null | string;
  user_name: null | string;
  user_bio: null | string;
  user_picture: null | string;
  error: null | string;
}