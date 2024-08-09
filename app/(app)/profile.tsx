import { supabaseSignOut } from "@/features/auth/api/supabaseSignOut";
import UserForm from "@/features/user/components/UserForm";
import { authSignOut } from "@/store/actions/authActions";
import { userMetaDelete } from "@/store/actions/userMetaActions";
import { reduxDispatch } from "@/types/reduxHooks";
import { KeyboardAvoidingView, Platform, View } from "react-native";

export default function Profile() {
  const dispatch = reduxDispatch();

  // const signOut = async () => {
  //   try {
  //     await supabaseSignOut();
  //     dispatch(authSignOut());
  //     dispatch(userMetaDelete());
  //   } catch (error) {
  //     console.log((error as Error).message);
  //   }
  // }

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
    </KeyboardAvoidingView>
  )
}
