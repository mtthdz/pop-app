import { useEffect, useRef } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import ChatForm from "@/features/chat/components/ChatForm";
import ChatHeader from "@/features/chat/components/ChatHeader";
import ChatWindow from "@/features/chat/components/ChatWindow";

/**
 * Chat screen, handles overarching structure for child components
 * Part of feature `chat`
 * Component structure:
 * |-- chat/[id]
 * |   |-- ChatHeader
 * |   |-- ChatWindow
 * |   |   |-- ChatCard
 * |   |-- ChatForm
 * 
 * API fetching has been divvyed up to two child components rather 
 * than providing context/prop drilling from `Chat/[id]`.
 * - ChatWindow handles GET messages via websocket
 * - ChatForm handles PUT messages
 * 
 * 
 * TODO: scrollview bottom out on render not perfect. Margin/padding issue with 
 * ChatForm underneath
 * TODO: scrollview ref unresponsive on textInput multiline. Consider Context to
 * re-trigger autoscroll on multiline breaks
 * TODO: TS errors
 */
export default function Chat() {
  const params        = useLocalSearchParams();
  const insets        = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current?.scrollToEnd();
          }}
        >
          <ChatWindow/>
        </ScrollView>
        <ChatForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}