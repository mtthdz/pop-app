import { StyleSheet } from "react-native";

export const SCH = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  buttonContainer: {
    marginRight: 10
  },
  contentContainer: {
    marginLeft: 10
  },
  buttonBody: {
    fontSize: 24
  },
  contentHeader: {
    fontSize: 16,
    color: 'black',
  },
  contentBody: {
    fontSize: 14,
    color: 'darkgrey'
  }
})