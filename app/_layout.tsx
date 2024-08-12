import { store } from '@/store/configureStore';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/lib/toastConfig';
import RootConfig from '../lib/RootConfig';

/**
 * Routing Map
 * 
 * /app
 * |-- _layout            auth & redux store 
 * |-- SignIn             auth screen (placeholder)
 * |-- RootConfig         notification wrapper
 * |-- (app)              actual app
 * |   |-- _layout        stack nav
 * |   |-- index          main screen
 * |   |-- Profile        profile screen, modal
 * |   |-- (Chat)         dynamic, own `_layout`
 * 
 * TODO: reconsider how to further wrap components
 * underneath store provider. Provider (below) is
 * expecting a slot or children tags.
 */
export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootConfig />
      <Toast config={toastConfig} />
    </Provider>
  );
}