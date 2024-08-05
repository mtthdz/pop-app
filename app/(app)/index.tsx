import { authSignOut } from "@/store/actions/authActions";
import { reduxDispatch } from "@/store/types/reduxHooks";
import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const dispatch = reduxDispatch();
  return (
    <SafeAreaView>
      <Text>pop</Text>
      <Link href="/about">about</Link>
      <TouchableOpacity
        onPress={() => dispatch(authSignOut())}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}