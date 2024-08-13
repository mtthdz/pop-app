import Wrapper from "@/components/Wrapper";
import { View } from "react-native";
import ChatCard from "../ChatCard";
import { SCW } from "./ChatWindow.styles";

/**
 * Steps for websocket
 * 1. Setup base websocket subscription via chatId parameter
 * 2. Sort `data` via timestamp against network performance latency / connection conflict
 * 3. Watch for connection drops with websocket subscription:
 *    a. create connection attempt loop when disconnected or via refresh control
 *    a. display alertError + constant state styling when disconnected
 *    b. display alertSuccess + revert state styling when reconnected
 *    c. prevent messages from sending in `ChatForm` when disconnected (context?)
 */
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
        <ChatCard {...otherMessage} />
      </Wrapper>
    </View>
  )
}