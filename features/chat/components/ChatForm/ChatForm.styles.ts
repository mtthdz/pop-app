import { StyleSheet } from "react-native";

export const SCF = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    paddingVertical: 12
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 15,
    padding: 6,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    width: '90%',
  },
  buttonContainer: {
    padding: 0,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'black',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBody: {
    textAlignVertical: 'top',
  },
  buttonBody: {
    color: 'white',
    textAlign: 'center'
  },
})