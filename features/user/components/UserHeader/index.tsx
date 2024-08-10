import Wrapper from "@/components/Wrapper";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SUH } from "./UserHeader.styles";
import { reduxDispatch } from "@/types/reduxHooks";
import { alertBasic, alertError, alertSuccess } from "@/store/actions/alertActions";

export default function UserHeader() {
  const dispatch = reduxDispatch()

  return (
    <View style={SUH.mainContainer}>
      <Wrapper>
        <View style={SUH.flexContainer}>
          <TouchableOpacity
            style={SUH.buttonContainer}
            onPress={() => {
              dispatch(alertSuccess('saved!'));
            }}
          >
            <Text style={SUH.buttonBodyAlt}>close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={SUH.buttonContainer}
            onPress={() => router.back()}
          >
            <Text style={SUH.buttonBody}>done</Text>
          </TouchableOpacity>
        </View>
      </Wrapper>
    </View>
  )
}