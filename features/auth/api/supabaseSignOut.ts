import { supabase } from "@/lib/supabase";

export const supabaseSignOut = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
    return;

  } catch (error) {
    throw new Error((error as Error).message);
  }
};