import { StyleSheet } from "react-native";

export const SMC = StyleSheet.create({
  buttonContainer: {},
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10
  },

  // avatar
  avatarContainer: {
    marginRight: 10
  },
  avatar: {
    borderRadius: 33,
    width: 50,
    height: 50,
    backgroundColor: 'black'
  },

  // content
  contentContainer: {},
  contentHeader: {
    fontSize: 16,
    color: 'black',
  },
  contentBody: {
    fontSize: 14,
    color: 'darkgrey'
  },
  contentMeta: {
    fontSize: 14,
    color: 'darkgrey'
  },
  metaContainer: {
    marginLeft: 'auto'
  },
})