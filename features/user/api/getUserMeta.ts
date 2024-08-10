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
        user_first: data.user_first,
        user_last: data.user_last,
        user_name: data.user_name,
        user_bio: data.user_bio,
        user_picture: data.user_picture,
        error: null
      }
    } else {
      return {
        user_first: null,
        user_last: null,
        user_name: null,
        user_bio: null,
        user_picture: null,
        error: null
      }
    }
  } catch(error) {
    throw new Error((error as Error).message);
  }
}