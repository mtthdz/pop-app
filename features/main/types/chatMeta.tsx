export interface ChatMeta {
  id: null | string;
  user_a: null | string;
  user_b: null | string;
  usermeta_a: {
    id: null | string;
    user_name: null | string;
    user_picture: null | string;
  }[];
  usermeta_b: {
    id: null | string;
    user_name: null | string;
    user_picture: null | string;
  }[];
}