import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SCF } from "./ChatForm.styles";

export default function ChatForm() {
  return (
    <View style={SCF.mainContainer}>
      <TextInput
        // style={SCF.textInput}
        multiline
        placeholder="Message"
        value={'chat form'}
        returnKeyType="done"
      />
      <TouchableOpacity
        onPress={() => console.log('lol')}
        // style={SCF.buttonInput}
      >
        <Text>submit</Text>
      </TouchableOpacity>
    </View>
  )
}