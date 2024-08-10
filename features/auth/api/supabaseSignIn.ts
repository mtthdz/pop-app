import { supabase } from "@/lib/supabaseConfig";
import { supabaseUser } from "../types/supabaseUser";
import { UserSession } from "@/types/userSession";

/**
 * Supabase SignUp | SignIn functionality
 * returns UserSession object
 */
export const supabaseSignIn = async ({
  userEmail,
  userPassword,
  actionType,
}: supabaseUser): Promise<UserSession> => {
  try {
    let data = null;
    let error = null;

    if (actionType === 'signup') {
      ({ data, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
      }));

    } else if (actionType === 'signin') {
      ({ data, error } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password: userPassword,
      }));

    } else {
      throw new Error('Invalid action type');
    }

    if (error) throw new Error(error.message);

    // force undefined values to null (as per interface)
    return {
      id: data.user?.id ?? null,
      email: data.user?.email ?? null,
      access_token: data.session?.access_token ?? null,
      refresh_token: data.session?.refresh_token ?? null,
      expires_at: data.session?.expires_at ?? null,
      expires_in: data.session?.expires_in ?? null,
      error: null
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};