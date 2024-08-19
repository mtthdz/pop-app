import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SMC } from "./MainCard.styles";
import Wrapper from "@/components/Wrapper";
import { reduxDispatch, reduxSelect } from "@/types/reduxHooks";
import { ChatMeta, PublicUserMeta } from "../../types/chatMeta";
import { MainCardProps } from "../../types/mainCardProps";
import { alertBasic, alertError, alertSuccess } from "@/store/actions/alertActions";
import Avatar from "@/components/Avatar";

/**
 * Each card component opens up chat window, sending both users' metadata
 * 
 * TODO: fix different variable naming
 * TODO: determine alternative way to send metadata to chat. Even if
 * Payload is small, try not to send large payloads via params.
 * TODO: update body placeholder to latest message
 * TODO: update time placeholder to latest message timestamp
 * TODO: add read/unread state
 */
export default function MainCard({ item, index }: MainCardProps) {
  const chatMeta: ChatMeta = item;
  const userId = reduxSelect(state => state.auth.id);

  // Determine if the current user is user_a or user_b
  const isUserA: boolean = chatMeta.userA === userId;
  const otherUser: PublicUserMeta = isUserA ? chatMeta.usermetaB : chatMeta.usermetaA;

  return (
    <TouchableOpacity
      style={SMC.buttonContainer}
      onPress={(id) => {
        router.push({
          pathname: '/chat/[id]',
          params: {
            id: chatMeta.id || '',
            otherId: otherUser.id,
            otherName: otherUser.userName,
            otherPicture: otherUser.userPicture
          },
        });
      }}
    >
      <Wrapper>
        <View style={SMC.mainContainer}>
          <View style={SMC.avatarContainer}>
            <Avatar image={otherUser.userPicture} size="m" />
          </View>
          <View style={SMC.contentContainer}>
            <Text style={SMC.contentHeader}>{otherUser.userName}</Text>
            <Text style={SMC.contentBody}>{otherUser.userStatus ?? 'No status'}</Text>
          </View>
          <View style={SMC.metaContainer}>
            <Text style={SMC.contentMeta}>online</Text>
          </View>
        </View>
      </Wrapper>
    </TouchableOpacity>
  )
}