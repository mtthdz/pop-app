import Wrapper from "@/components/Wrapper";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MainCard() {
  return (
    <TouchableOpacity
      style={styles.cardButton}
      onPress={() => console.log('lol')}
    >
      <Wrapper>
        <View style={styles.cardMain}>
          <View style={styles.cardAvatar}>
            <View style={styles.avatar}></View>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.contentHeader}>name</Text>
            <Text style={styles.contentBody}>description</Text>
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