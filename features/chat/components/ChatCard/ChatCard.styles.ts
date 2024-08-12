import { StyleSheet } from "react-native";

export const SCC = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginVertical: 4
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 14,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
  },
  altContainer: {
    maxWidth: '70%',
    padding: 14,
    borderRadius: 20,
    backgroundColor: 'darkgrey',
    marginLeft: 'auto'
  },
  messageBody: {
    fontSize: 14,
    color: 'black'
  },
  altBody: {
    fontSize: 14,
    color: 'white'
  },
  metaBody: {}
});