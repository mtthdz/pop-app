import { Slot } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}