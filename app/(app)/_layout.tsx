import { reduxSelect } from "@/store/types/reduxHooks";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const currentUser = reduxSelect(state => state.auth.uid);

  if (!currentUser) {
    return <Redirect href="/SignIn" />;
  }

  return <Stack />
}