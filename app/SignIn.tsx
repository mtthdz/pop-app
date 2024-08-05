import { authSignIn } from "@/store/actions/authActions";
import { reduxDispatch } from "@/store/types/reduxHooks";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const dispatch = reduxDispatch();
  const testData = {
    uid: '123r1c12xe12e1x',
    email: 'matt@mtthdz.com',
    access_token: '2c1x1152310o12wh',
    refresh_token: '0951j24c102941xd23123',
    expires_at: 214151231,
    expires_in: 12341231,
    error: null,
  }

  return (
    <SafeAreaView>
      <Text>pop</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('hello', testData)
          dispatch(authSignIn(testData));
          router.replace('/');
        }}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}