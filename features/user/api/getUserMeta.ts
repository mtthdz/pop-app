import { supabase } from "@/lib/supabase";
import { UserMeta } from "@/types/userMeta";

/**
 * fetches userMeta from supabase with session's user id
 *
 * TODO: remove or refactor id type union and conditional block
 */
export const getUserMeta = async (id: string | null): Promise<UserMeta> => {
  try {
    if (id) {
      let { data, error } = await supabase
        .from('user_meta')
        .select('*')
        .eq('id', id)
        .single();
  
      if (error) throw new Error(error.message);

      return {
        id: data.id,
        user_first: data.user_first,
        user_last: data.user_last,
        user_name: data.user_name,
        user_bio: data.user_bio,
        user_picture: data.user_picture,
        error: null
      }
    } else {
      return {
        id: null,
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