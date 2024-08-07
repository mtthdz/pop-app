import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const id: string = 'hello'

  return (
    <SafeAreaView>
      <Text>hello</Text>
      <Link
        href={{
          pathname: '/chat/[id]',
          params: { id: id },
        }}>
        chat
      </Link>

      <Link href="/profile">profile</Link>
    </SafeAreaView>
  )
}