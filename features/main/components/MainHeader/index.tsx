import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SMH } from "./MainHeader.styles";
import Wrapper from "@/components/Wrapper";
import Avatar from "@/components/Avatar";

export default function MainHeader() {
  return (
    <View
      style={SMH.mainContainer}
    >
      <Wrapper>
        <View style={SMH.flexContainer}>
          <Text style={SMH.headerTitle}>pop</Text>
          <Link href={'/user'}><Avatar size={'s'}/></Link>
        </View>
      </Wrapper>
    </View>
  )
}