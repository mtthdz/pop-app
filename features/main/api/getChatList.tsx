import { supabase } from "@/lib/supabase"
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
        user_a,
        user_b,
        usermeta_a:user_meta!user_a(
          id,
          user_name,
          user_picture
        ),
        usermeta_b:user_meta!user_b(
          id,
          user_name,
          user_picture
        )
      `)
      .or(`user_a.eq.${userId},user_b.eq.${userId}`)

    if (error) throw new Error((error).message);
    return data;
  } catch (error) {
    throw new Error((error as Error).message)
  }
}