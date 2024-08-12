import { StyleSheet } from "react-native";

export const SCH = StyleSheet.create({
  mainContainer: {
    paddingTop: 6,
    paddingBottom: 12,
    backgroundColor: 'white',
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  buttonContainer: {
    marginRight: 18
  },
  contentContainer: {
    marginLeft: 12
  },
  buttonBody: {
    fontSize: 20
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