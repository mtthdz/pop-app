import { Slot, Stack } from "expo-router";
import { store } from "@/store/configureStore";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
