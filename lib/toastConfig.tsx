import { BaseToast, ErrorToast } from 'react-native-toast-message';

/**
 * TODO: adjust styling for modal toast
 */
export const toastConfig = {
  success: (props: Record<string, any>) => (
    <BaseToast
      {...props}
      style={{
        position: 'absolute',
        top: -35,
        borderWidth: 0,
        borderRadius: 5,
        borderLeftWidth: 0,
        backgroundColor: '#c1f9dc',
        zIndex: 20000,
      }}
      text1Style={{
        fontSize: 16,
        color: 'black'
      }}
      text2Style={{
        fontSize: 14,
        color: 'black'
      }}
    />
  ),
  error: (props: Record<string, any>) => (
    <ErrorToast
      {...props}
      style={{
        position: 'absolute',
        top: -35,
        borderWidth: 0,
        borderRadius: 5,
        borderLeftWidth: 0,
        borderLeftColor: 'red',
        backgroundColor: '#ffc7c5',
        zIndex: 20000,
      }}
      text1Style={{
        fontSize: 16,
        color: 'black'
      }}
      text2Style={{
        fontSize: 14,
        color: 'black'
      }}
    />
  ),
  basic: (props: Record<string, any>) => (
    <BaseToast
      {...props}
      style={{
        position: 'absolute',
        top: -35,
        borderWidth: 0,
        borderRadius: 5,
        borderLeftWidth: 0,
        backgroundColor: 'white',
        zIndex: 20000,
      }}
      text1Style={{
        fontSize: 16,
        color: 'black'
      }}
      text2Style={{
        fontSize: 14,
        color: 'black'
      }}
    />
  ),
};