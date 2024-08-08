export interface ChatMeta {
  id: null | string;
  user_a: null | string;
  user_b: null | string;
  usermeta_a: PublicUserMeta;
  usermeta_b: PublicUserMeta;
}

export interface PublicUserMeta {
  id: null | string;
  user_name: null | string;
  user_picture: null | string;
}