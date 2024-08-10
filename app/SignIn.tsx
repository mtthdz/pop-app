import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthMain from "@/features/auth/components/AuthMain";

export default function SignIn() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom
      }}
    >
      <AuthMain />
    </View>
  )
}