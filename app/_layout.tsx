import { Slot } from "expo-router";
import { store } from "@/store/configureStore";
import { Provider } from "react-redux";

/**
 * Routing Map
 * 
 * /app
 * |-- _layout        auth & redux store 
 * |-- SignIn         auth screen
 * |-- (app)          actual app
 * |   |-- _layout    stack nav
 * |   |-- index      main/home screen
 * |   |-- Profile    profile screen, drawer
 * |   |-- Chat       dynamic, own `_layout`
 */
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}