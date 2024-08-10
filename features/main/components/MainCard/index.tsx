import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SMC } from "./MainCard.styles";
import Wrapper from "@/components/Wrapper";
import { reduxDispatch, reduxSelect } from "@/types/reduxHooks";
import { ChatMeta, PublicUserMeta } from "../../types/chatMeta";
import { MainCardProps } from "../../types/mainCardProps";
import { alertBasic, alertError, alertSuccess } from "@/store/actions/alertActions";

/**
 * Each card component opens up chat window, sending both users' metadata
 * 
 * TODO: determine alternative way to send metadata to chat. Even if
 * Payload is small, try not to send large payloads via params.
 * TODO: update body placeholder to latest message
 * TODO: update time placeholder to latest message timestamp
 * TODO: add read/unread state
 */
export default function MainCard({ item, index }: MainCardProps) {
  const chatMeta: ChatMeta = item;
  const userId = reduxSelect(state => state.auth.id);
  const dispatch = reduxDispatch();

  // Determine if the current user is user_a or user_b
  const isUserA: boolean = chatMeta.user_a === userId;
  const otherUser: PublicUserMeta = isUserA ? chatMeta.usermeta_b : chatMeta.usermeta_a;

  return (
    <TouchableOpacity
      style={SMC.buttonContainer}
      onPress={(id) => {
        dispatch(alertSuccess('hello'));
        // router.push({
        //   pathname: '/chat/[id]',
        //   params: {
        //     id: chatMeta.id,
        //     user_a_id: chatMeta.user_a,
        //     user_b_id: chatMeta.user_b,
        //     user_a_name: chatMeta.usermeta_a.user_name,
        //     user_a_picture: chatMeta.usermeta_a.user_picture,
        //     user_b_name: chatMeta.usermeta_b.user_name,
        //     user_b_picture: chatMeta.usermeta_b.user_picture,
        //   },
        // });
      }}
    >
      <Wrapper>
        <View style={SMC.mainContainer}>
          <View style={SMC.avatarContainer}>
            <View style={SMC.avatar}></View>
          </View>
          <View style={SMC.contentContainer}>
            <Text style={SMC.contentHeader}>{otherUser.user_name}</Text>
            <Text style={SMC.contentBody}>placeholder description...</Text>
          </View>
          <View style={SMC.metaContainer}>
            <Text style={SMC.contentMeta}>9:00</Text>
          </View>
        </View>
      </Wrapper>
    </TouchableOpacity>
  )
}