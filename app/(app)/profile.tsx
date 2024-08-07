import { supabaseSignOut } from "@/features/auth/api/supabaseSignOut";
import { authSignOut } from "@/store/actions/authActions";
import { userMetaDelete } from "@/store/actions/userMetaActions";
import { reduxDispatch } from "@/types/reduxHooks";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={() => signOut()}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
