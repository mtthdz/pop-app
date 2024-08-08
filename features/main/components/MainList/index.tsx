import { FlatList, Text, View } from "react-native";
import { SML } from "./MainList.styles";
import MainCard from "../MainCard";
import { MainCardProps } from "../../types/mainCardProps";
import { ChatMeta } from "../../types/chatMeta";

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
    <View style={[listData ? SML.mainContainer : SML.mainContainerAlt ]}>
    {listData ? (
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      ):
      <Text style={SML.containerBody}>No chats for now...</Text>
    }
    </View>
  )
}