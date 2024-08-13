import { supabase } from "@/lib/supabaseConfig";
import { UserMeta } from "@/types/userMeta";

/**
 * fetches userMeta from supabase with session's user id
 * returns UserMeta object type
 *
 * TODO: remove or refactor id type union and conditional block
 */
export const getUserMeta = async (userId: string | null): Promise<UserMeta> => {
  try {
    if (userId) {
      let { data, error } = await supabase
        .from('user_meta')
        .select('*')
        .eq('id', userId)
        .single();
  
      if (error) throw new Error(error.message);

      return {
        userFirst: data.user_first,
        userLast: data.user_last,
        userName: data.user_name,
        userStatus: data.user_status,
        userPicture: data.user_picture,
        error: null
      }
    } else {
      return {
        userFirst: null,
        userLast: null,
        userName: null,
        userStatus: null,
        userPicture: null,
        error: null
      }
    }
  } catch(error) {
    throw new Error((error as Error).message);
  }
}