import { useLocalSearchParams } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import ChatForm from "@/features/chat/components/ChatForm";
import ChatHeader from "@/features/chat/components/ChatHeader";
import ChatWindow from "@/features/chat/components/ChatWindow";

// TODO: fix TS errors
export default function Chat() {
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  console.log(params);
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['left', 'right', 'bottom']}
    >
      <ChatHeader otherName={params.otherName} otherPicture={params.otherPicture}  />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={insets.top}
        style={{ flex: 1 }}
      >
        <ChatWindow />
        <ChatForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}