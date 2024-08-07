import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>Chat room id {id}</Text>
    </SafeAreaView>
  )
}