import { reduxSelect } from "@/types/reduxHooks";
import { Redirect, Stack } from "expo-router";
import MainHeader from "@/features/main/components/MainHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import UserHeader from "@/features/user/components/UserHeader";

/**
 * TODO: determine redundancy of safeAreaInsets with safeAreaProvider
 */
export default function MainLayout() {
  const insets      = useSafeAreaInsets();
  const currentUser = reduxSelect(state => state.auth.id);

  if (!currentUser) return <Redirect href="/SignIn" />;
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      <Stack>
        <Stack.Screen
          name='index'
          options={{ header: () => <MainHeader /> }}
        />
        <Stack.Screen
          name='chat'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='user'
          options={{
            presentation: 'modal',
            header: () => <UserHeader />
          }}
        />
      </Stack>
    </View>
  )
}