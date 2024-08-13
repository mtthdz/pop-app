import { supabase } from "@/lib/supabaseConfig"
import { ChatMeta } from "../types/chatMeta";

/**
 * Takes userId and searches all chat rooms with that user
 * 
 * TODO: refactor user_a/user_b search
 * TODO: investigate why usermeta_a/usermeta_b is being returned
 * as an obj[] according to TS, when console shows only obj
 */
export const getChatList = async (userId: string): Promise<ChatMeta[]> => {
  try {
    const { data, error } = await supabase
      .from('chat_room')
      .select(`
        id,
        userA: user_a,
        userB: user_b,
        usermetaA:user_meta!user_a(
          id,
          userName: user_name,
          userPicture: user_picture,
          userStatus: user_status
        ),
        usermetaB:user_meta!user_b(
          id,
          userName: user_name,
          userPicture: user_picture,
          userStatus: user_status
        )
      `)
      .or(`user_a.eq.${userId},user_b.eq.${userId}`)

    if (error) throw new Error((error).message);
    return data;
  } catch (error) {
    throw new Error((error as Error).message)
  }
}