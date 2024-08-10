import { store } from '@/store/configureStore';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/lib/toastConfig';
import RootConfig from './RootConfig';

/**
 * Routing Map
 * 
 * /app
 * |-- _layout            auth & redux store 
 * |-- SignIn             auth screen
 * |-- RootLayoutContent  toast notif listener
 * |-- (app)              actual app
 * |   |-- _layout        stack nav
 * |   |-- index          main screen
 * |   |-- Profile        profile screen, modal
 * |   |-- (Chat)         dynamic, own `_layout`
 */
export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootConfig />
      <Toast config={toastConfig} />
    </Provider>
  );
}