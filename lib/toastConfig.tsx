import { ViewStyle } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

/**
 * TODO: adjust styling for modal toast
 */
const baseStyle: ViewStyle = {
  position: 'absolute',
  top: -35,
  borderWidth: 0,
  borderRadius: 5,
  borderLeftWidth: 0,
  zIndex: 20000,
};

const baseTextStyle = {
  fontSize: 16,
  color: '#000000',
};

const subTextStyle = {
  fontSize: 14,
  color: '#000000',
};

export const toastConfig = {
  success: (props: Record<string, any>) => (
    <BaseToast
      {...props}
      style={{
        ...baseStyle,
        backgroundColor: '#c1f9dc',
      }}
      text1Style={baseTextStyle}
      text2Style={subTextStyle}
    />
  ),
  error: (props: Record<string, any>) => (
    <ErrorToast
      {...props}
      style={{
        ...baseStyle,
        backgroundColor: '#ffc7c5',
      }}
      text1Style={baseTextStyle}
      text2Style={subTextStyle}
    />
  ),
  basic: (props: Record<string, any>) => (
    <BaseToast
      {...props}
      style={{
        ...baseStyle,
        backgroundColor: '#ffffff',
      }}
      text1Style={baseTextStyle}
      text2Style={subTextStyle}
    />
  ),
};