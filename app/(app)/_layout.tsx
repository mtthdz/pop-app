import { reduxSelect } from "@/types/reduxHooks";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const currentUser = reduxSelect(state => state.auth.id);

  if (!currentUser) return <Redirect href="/SignIn" />;
  return <Stack />
}