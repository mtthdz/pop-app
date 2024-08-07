import Wrapper from "@/components/Wrapper";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MainHeader() {
  return (
    <View
      style={styles.headerMain}
    >
      <Wrapper>
        <View style={styles.headerFlex}>
          <Text style={styles.headerTitle}>pop</Text>
          <Link href={'/profile'}>profile</Link>
        </View>
      </Wrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  headerMain: {
    paddingBottom: 10
  },
  headerFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  // content
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  headerBody: {}
})