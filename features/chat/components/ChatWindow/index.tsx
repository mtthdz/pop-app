import Wrapper from "@/components/Wrapper";
import { useEffect } from "react";
import { Keyboard, ScrollView, Text } from "react-native";
import { ChatWindowProps } from "../../types/chatWindowProps";

// TODO: TS error on `ScrollView` ref
export default function ChatWindow({ scrollViewRef }: ChatWindowProps) {
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
  }, [scrollViewRef]);

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() => {
        scrollViewRef?.current?.scrollToEnd({ animated: true });
      }}
    >
      <Wrapper>
        <Text>beginning</Text>
        <Text>----------</Text>
        {/* Mock messages */}
        {[...Array(100)].map((_, i) => (
          <Text key={i}>Hello</Text>
        ))}
        <Text>----------</Text>
        <Text>End</Text>
      </Wrapper>
    </ScrollView>
  )
}