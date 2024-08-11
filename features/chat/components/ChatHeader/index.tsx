import { Text, TouchableOpacity, View } from "react-native";
import { SCH } from "./ChatHeader.styles";
import { ChatParams } from "../../types/chatParams";
import Avatar from "@/components/Avatar";
import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";

interface ChatHeaderProps extends Omit<ChatParams, 'id'> {}

export default function ChatHeader({
  otherName,
  otherPicture
}: ChatHeaderProps) {
  return (
    <View style={SCH.mainContainer}>
      <Wrapper>
        <View style={SCH.flexContainer}>
          <TouchableOpacity
            style={SCH.buttonContainer}
            onPress={() => router.back()}
          >
            <Text style={SCH.buttonBody}>❮</Text>
          </TouchableOpacity>
          <Avatar image={null} size="m" />
          <View style={SCH.contentContainer}>
            <Text style={SCH.contentHeader}>{otherName || 'user'}</Text>
            <Text style={SCH.contentBody}>Placeholder status description...</Text>
          </View>
        </View>
      </Wrapper>
    </View>
  )
}