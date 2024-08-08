import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Chat() {
  const params = useLocalSearchParams();
  console.log(params);

  return (
    <View>
      <Text>Chat room: {params.id}</Text>
    </View>
  )
}