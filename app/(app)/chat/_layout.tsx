import { Slot } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        // paddingTop: insets.top,
        // paddingLeft: insets.left,
        // paddingRight: insets.right,
        // paddingBottom: insets.bottom
      }}
    >
      <Slot />
    </View>
  );
}