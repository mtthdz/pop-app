export interface ChatMeta {
  id: null | string;
  userA: null | string;
  userB: null | string;
  usermetaA: PublicUserMeta;
  usermetaB: PublicUserMeta;
}

export interface PublicUserMeta {
  id: null | string;
  userName: null | string;
  userPicture: null | string;
  userStatus: null | string;
}