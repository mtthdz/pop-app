import { FlatList, Text, View } from "react-native";
import { ChatMeta } from "../types/chatMeta";
import MainCard from "./MainCard";
import { useEffect } from "react";
import { MainCardProps } from "../types/mainCardProps";

interface MainListProps {
  props: null | ChatMeta[]
}

/**
 * (parent) container component for MainCard
 * 
 * TODO: refactor listData to useState for sorting read/unread status
 */
export default function MainList ({ props }: MainListProps) {
  let listData = props ?? null;

  const renderItem = ({ item, index, separators }: MainCardProps) => {
    return <MainCard item={item} index={index} separators={separators} />
  }

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
        data={listData}
        renderItem={renderItem}
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