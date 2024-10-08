import { Text, View } from "react-native";
import { ChatCardProps } from "../../types/chatCardProps";
import { SCC } from "./ChatCard.styles";
import { reduxSelect } from "@/types/reduxHooks";

/**
 * Displays chat message in `ChatWindow` component
 * 
 * TODO: add toggled timestamp
 * TODO: determine chat message groups based on timestamp
 */
export default function ChatCard(item: ChatCardProps) {
  const {
    id,
    userId,
    message,
    timestamp
  } = item;
  const currentUserId = reduxSelect(state => state.auth.id);

  return (
    <View style={SCC.mainContainer}>
      <View style={[currentUserId !== userId ? SCC.messageContainer : SCC.altContainer]}>
        <Text style={SCC.messageBody}>{message}</Text>
      </View>
    </View>
  )
}