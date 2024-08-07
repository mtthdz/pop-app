import { getChatList } from "@/features/main/api/getChatList";
import MainCard from "@/features/main/components/MainCard";
import MainList from "@/features/main/components/MainList";
import { ChatMeta } from "@/features/main/types/chatMeta";
import { reduxSelect } from "@/types/reduxHooks";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Main() {
  const [error, setError]     = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData]       = useState<null | ChatMeta[]>(null);
  const user_id               = reduxSelect(state => state.auth.id);

  const test: string = 'hello'

  const chatList = async (id: string) => {
    try {
      setLoading(true);
      let list = await getChatList(id);
      setData(list);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setError((error as Error).message);
    }
  }

  useEffect(() => {
    chatList(user_id);
  }, [])

  return (
    <View style={{
      flex: 1
    }}>
      <MainList data={data} />
      {/* <Link
        href={{
          pathname: '/chat/[id]',
          params: { id: test },
        }}>
        chat
      </Link> */}
    </View>
  )
}