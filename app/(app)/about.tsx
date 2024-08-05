import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaView>
      <Text>About</Text>
      <Link href="/">home</Link>
    </SafeAreaView>
  )
}
