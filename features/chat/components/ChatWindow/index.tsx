import Wrapper from "@/components/Wrapper";
import { Text, View } from "react-native";
import ChatCard from "../ChatCard";
import { SCW } from "./ChatWindow.styles";

export default function ChatWindow() {
  const userMessage = {
    id: '412512c1ssa1231241',
    userId: '78b3b0f1-cdef-4b18-af4f-ce81ce37ad3b',
    message: 'hello hello hi hi hey hey howdy howdy',
    timestamp: '202412011241511'
  }
  const otherMessage = {
    id: '412512c1ssa1231241',
    userId: '4crfc23t4y423hfef2f2',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    timestamp: '202412011241511'
  }

  

  return (
    <View style={SCW.mainContainer}>
      <Wrapper>
        <ChatCard {...userMessage} />
        <ChatCard {...otherMessage} />
        <ChatCard {...otherMessage} />
        <ChatCard {...userMessage} />
        <ChatCard {...userMessage} />
      </Wrapper>
    </View>
  )
}