import { useState } from "react";
import { NativeSyntheticEvent, Text, TextInput, TextInputContentSizeChangeEventData, TouchableOpacity, View } from "react-native";
import { SCF } from "./ChatForm.styles";
import Wrapper from "@/components/Wrapper";

/**
 * Steps for handling message PUTs
 * 1. setup react hook forms to handle validation 
 * 2. if textInput !== '', allow PUT submission
 * 3. create load state for PUT submission
 *    a. disabled submission button + textInput
 * 4. clear state values on successful PUT
 * 5. maintain form population on failed PUT
 * 6. display alertError on failed PUT
 * 
 */
export default function ChatForm() {
  const [text, setText] = useState<string>('');
  const [inputHeight, setInputHeight] = useState<number>(0);

  const handleContentSizeChange = (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
    setInputHeight(event.nativeEvent.contentSize.height);
  };

  return (
    <View style={SCF.mainContainer}>
      <Wrapper>
        <View style={SCF.flexContainer}>
          <View style={SCF.inputContainer}>
            <TextInput
              style={SCF.inputBody}
              multiline
              placeholder="Message"
              value={text}
              onChangeText={(inputText) => setText(inputText)}
              onContentSizeChange={handleContentSizeChange}
            />
          </View>
          <TouchableOpacity
            style={SCF.buttonContainer}
            onPress={() => console.log('lol')}
          >
            <Text style={SCF.buttonBody}>{'▲'}</Text>
          </TouchableOpacity>
        </View>
      </Wrapper>
    </View>
  )
}