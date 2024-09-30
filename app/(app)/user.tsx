import { supabaseSignOut } from "@/features/auth/api/supabaseSignOut";
import UserForm from "@/features/user/components/UserForm";
import { toastConfig } from "@/lib/toastConfig";
import { alertError } from "@/store/actions/alertActions";
import { authSignOut } from "@/store/actions/authActions";
import { userMetaDelete } from "@/store/actions/usermetaActions";
import { reduxDispatch } from "@/types/reduxHooks";
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

// TODO: setup UI error message tuple
export default function User() {
  const dispatch = reduxDispatch();

  const signOut = async () => {
    try {
      await supabaseSignOut();
    } catch (error) {
      dispatch(alertError((error as Error).message));
    } finally {
      dispatch(authSignOut());
      dispatch(userMetaDelete());
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