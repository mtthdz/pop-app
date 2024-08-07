import { FlatList, Text, View } from "react-native";
import { ChatMeta } from "../types/chatMeta";
import MainCard from "./MainCard";

interface MainListProps {
  data: null | ChatMeta[]
}

export default function MainList ({ data }: MainListProps) {
  let listData = data ?? null

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
    {listData ? (
      <FlatList
        data={data}
        renderItem={MainCard}
        keyExtractor={(item, index) => index.toString()}
      />
      ):
      <Text
        style={{
          marginTop: 10,
          color: 'darkgrey'
        }}
      >
        No chats for now...
      </Text>
    }
    </View>
  )
}