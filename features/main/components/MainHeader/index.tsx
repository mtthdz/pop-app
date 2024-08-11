import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SMH } from "./MainHeader.styles";
import Wrapper from "@/components/Wrapper";
import { reduxSelect } from "@/types/reduxHooks";

export default function MainHeader() {
  const userName = reduxSelect((state) => state.userMeta.user_name);

  return (
    <View
      style={SMH.mainContainer}
    >
      <Wrapper>
        <View style={SMH.flexContainer}>
          <Text style={SMH.headerTitle}>pop</Text>
          <Link href={'/user'}>{userName}</Link>
        </View>
      </Wrapper>
    </View>
  )
}