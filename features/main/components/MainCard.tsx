import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MainCardProps } from "../types/mainCardProps";
import { reduxSelect } from "@/types/reduxHooks";
import { ChatMeta, PublicUserMeta } from "../types/chatMeta";

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
  const uid = reduxSelect(state => state.auth.id);

  // Determine if the current user is user_a or user_b
  const isUserA: boolean = chatMeta.user_a === uid;
  const otherUser: PublicUserMeta = isUserA ? chatMeta.usermeta_b : chatMeta.usermeta_a;

  return (
    <TouchableOpacity
      style={styles.cardButton}
      onPress={(id) => {
        router.push({
          pathname: '/chat/[id]',
          params: {
            id: chatMeta.id,
            user_a_id: chatMeta.user_a,
            user_b_id: chatMeta.user_b,
            user_a_name: chatMeta.usermeta_a.user_name,
            user_a_picture: chatMeta.usermeta_a.user_picture,
            user_b_name: chatMeta.usermeta_b.user_name,
            user_b_picture: chatMeta.usermeta_b.user_picture,
          },
        });
      }}
    >
      <Wrapper>
        <View style={styles.cardMain}>
          <View style={styles.cardAvatar}>
            <View style={styles.avatar}></View>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.contentHeader}>{otherUser.user_name}</Text>
            <Text style={styles.contentBody}>placeholder description...</Text>
          </View>
          <View style={styles.cardMeta}>
            <Text style={styles.contentMeta}>9:00</Text>
          </View>
        </View>
      </Wrapper>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardButton: {},
  cardMain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10
  },

  // avatar
  cardAvatar: {
    marginRight: 10
  },
  avatar: {
    borderRadius: 33,
    width: 50,
    height: 50,
    backgroundColor: 'black'
  },

  // content
  cardContent: {},
  contentHeader: {
    fontSize: 16,
    color: 'black',
  },
  contentBody: {
    fontSize: 14,
    color: 'darkgrey'
  },
  contentMeta: {
    fontSize: 14,
    color: 'darkgrey'
  },
  cardMeta: {
    marginLeft: 'auto'
  },
})