import { supabaseSignOut } from "@/features/auth/api/supabaseSignOut";
import { authSignOut } from "@/store/actions/authActions";
import { userMetaDelete } from "@/store/actions/userMetaActions";
import { reduxDispatch } from "@/types/reduxHooks";
import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const dispatch = reduxDispatch();

  const signOut = async () => {
    await supabaseSignOut();
    dispatch(authSignOut());
    dispatch(userMetaDelete());
  }

  return (
    <SafeAreaView>
      <Text>hello</Text>
      <Link href="/about">about</Link>
      <TouchableOpacity
        onPress={() => signOut()}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}