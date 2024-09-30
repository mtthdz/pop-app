import { Text, TouchableOpacity, View } from "react-native";
import { SAM } from "./AuthMain.styles";
import { useState } from "react";
import { reduxDispatch } from "@/types/reduxHooks";
import { supabaseSignIn } from "../../api/supabaseSignIn";
import { getUserMeta } from "@/features/user/api/getUserMeta";
import { authSignIn } from "@/store/actions/authActions";
import { userMetaAdd } from "@/store/actions/usermetaActions";
import { router } from "expo-router";
import { alertError } from "@/store/actions/alertActions";

export default function AuthMain() {
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
      let sessionData = await supabaseSignIn({ userEmail, userPassword, actionType });
      let userMeta    = await getUserMeta(sessionData.id);

      dispatch(authSignIn(sessionData))
      dispatch(userMetaAdd(userMeta))
      router.replace('/');

    } catch (error) {
      dispatch(alertError((error as Error).message));
    }
  }

  return (
    <View style={SAM.mainContainer}>
      <View style={SAM.flexContainer}>
        <Text style={SAM.mainHeader}>pop</Text>
        <TouchableOpacity
          style={SAM.buttonContainer}
          onPress={() => signIn(userEmail, userPassword, 'signin')}
        >
          <Text style={SAM.buttonBody}>sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}