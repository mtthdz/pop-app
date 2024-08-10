import { supabaseSignOut } from "@/features/auth/api/supabaseSignOut";
import UserForm from "@/features/user/components/UserForm";
import { toastConfig } from "@/lib/toastConfig";
import { authSignOut } from "@/store/actions/authActions";
import { userMetaDelete } from "@/store/actions/userMetaActions";
import { reduxDispatch } from "@/types/reduxHooks";
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Profile() {
  const dispatch = reduxDispatch();

  const signOut = async () => {
    try {
      await supabaseSignOut();
      dispatch(authSignOut());
      dispatch(userMetaDelete());
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <UserForm />
      <View>
        <TouchableOpacity
          onPress={() => signOut()}
        >
          <Text>sign out</Text>
        </TouchableOpacity>
      </View>
      <Toast config={toastConfig} />
    </KeyboardAvoidingView>
  )
}