import { useState } from "react";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabaseSignIn } from "@/features/auth/api/supabaseSignIn";
import { getUserMeta } from "@/features/user/api/getUserMeta";
import { authSignIn } from "@/store/actions/authActions";
import { reduxDispatch } from "@/types/reduxHooks";
import { userMetaAdd } from "@/store/actions/userMetaActions";

export default function SignIn() {
  const [error, setError]               = useState<null | string>(null);
  const [loading, setLoading]           = useState<boolean>(false);
  const [userEmail, setUserEmail]       = useState('matt@mtthdz.com');
  const [userPassword, setUserPassword] = useState('pop');
  const dispatch                        = reduxDispatch();

  /**
   * 1. authorizes user 
   * 2. grabs metadata
   * 3. redirects
   */
  const signIn = async (
    userEmail: string,
    userPassword: string,
    actionType: 'signin' | 'signup'
  ) => {
    try {
      setLoading(true);
      let sessionData = await supabaseSignIn({ userEmail, userPassword, actionType });
      let userMeta    = await getUserMeta(sessionData.id);

      dispatch(authSignIn(sessionData))
      dispatch(userMetaAdd(userMeta))
      router.replace('/');
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setError((error as Error).message);
    }
  }

  return (
    <SafeAreaView>
      <Text>pop</Text>
      <TouchableOpacity
        onPress={() => signIn(userEmail, userPassword, 'signin')}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
      { error ? (
        <Text>{error}</Text>
      ) : null }
    </SafeAreaView>
  )
}