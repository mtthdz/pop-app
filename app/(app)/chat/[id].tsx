import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Chat() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Chat room: {id}</Text>
    </View>
  )
}