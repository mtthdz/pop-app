import { getChatList } from "@/features/main/api/getChatList";
import MainList from "@/features/main/components/MainList";
import { ChatMeta } from "@/features/main/types/chatMeta";
import { reduxSelect } from "@/types/reduxHooks";
import { useEffect, useState } from "react";
import { View } from "react-native";

/**
 * Homescreen, handles API for child components
 * Part of feature `main`
 * Component structure:
 * |-- Main
 * |   |-- MainHeader
 * |   |-- MainList 
 * |   |   |-- MainCard
 * 
 * TODO: refactor prop drilling to context/redux
 * TODO: reconsider the use of `flex: 1` for height setting
 */
export default function Main() {
  const [error, setError]       = useState<null | string>(null);
  const [loading, setLoading]   = useState<boolean>(false);
  const [listData, setListData] = useState<null | ChatMeta[]>(null);
  const userId                  = reduxSelect(state => state.auth.id);

  // fetch screen data  
  useEffect(() => {
    const chatList = async (refId: string) => {
      try {
        setLoading(true);
        let list = await getChatList(refId);
        setListData(list);
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        setError((error as Error).message);
      }
    }

    chatList(userId);
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <MainList props={listData} />
    </View>
  )
}