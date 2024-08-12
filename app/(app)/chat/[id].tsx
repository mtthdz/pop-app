import { useRef } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import ChatForm from "@/features/chat/components/ChatForm";
import ChatHeader from "@/features/chat/components/ChatHeader";
import ChatWindow from "@/features/chat/components/ChatWindow";

/**
 * TODO: scrollview ref unresponsive on render
 * TODO: scrollview ref unresponsive on textInput multiline
 * TODO: TS errors
 */
export default function Chat() {
  const params        = useLocalSearchParams();
  const insets        = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);

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
        <ChatWindow scrollViewRef={scrollViewRef} />
        <ChatForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}