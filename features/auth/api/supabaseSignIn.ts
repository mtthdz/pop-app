import { supabase } from "@/lib/supabase";
import { supabaseUser } from "../types/supabaseUser";
import { UserSession } from "@/types/userSession";

/**
 * Supabase SignUp | SignIn functionality
 * returns UserSession object
 */
const pickSessionData = (data: any): UserSession => {
  return {
    id: data.user?.id,
    email: data.user?.email,
    access_token: data.session?.access_token,
    refresh_token: data.session?.refresh_token,
    expires_at: data.session?.expires_at,
    expires_in: data.session?.expires_in,
    error: null
  };
};

export const supabaseSignIn = async ({
  userEmail,
  userPassword,
  actionType,
}: supabaseUser) => {
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

    // return {
    //   id: data.user?.id ?? null,
    //   email: data.user?.email ?? null,
    //   access_token: data.session?.access_token ?? null,
    //   refresh_token: data.session?.refresh_token ?? null,
    //   expires_at: data.session?.expires_at ?? null,
    //   expires_in: data.session?.expires_in ?? null,
    //   error: null
    // }
    return pickSessionData(data);

  } catch (error) {
    throw new Error((error as Error).message);
  }
};