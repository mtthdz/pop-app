import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SMH } from "./MainHeader.styles";
import Wrapper from "@/components/Wrapper";

export default function MainHeader() {
  return (
    <View
      style={SMH.mainContainer}
    >
      <Wrapper>
        <View style={SMH.flexContainer}>
          <Text style={SMH.headerTitle}>pop</Text>
          <Link href={'/profile'}>profile</Link>
        </View>
      </Wrapper>
    </View>
  )
}