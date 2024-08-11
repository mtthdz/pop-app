import { Slot } from 'expo-router';
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { alertClear } from '@/store/actions/alertActions';
import { AlertReducer } from '@/types/alertReducer';
import { reduxDispatch, reduxSelect } from "@/types/reduxHooks";

interface ToastType extends AlertReducer {}

/**
 * RootConfig handles any context providers that requires
 * the use of redux methods.
 * Currently using toast notifications
 */
export default function RootConfig() {
  const alert = reduxSelect(state => state.alert);
  const dispatch = reduxDispatch();
  
  // error notification
  const showToast = ({ message, type }: ToastType) => {
    let toastType    = type ?? 'basic';
    let toastHeader  = '';
    let toastMessage = message ?? '';

    Toast.show({
      type: toastType,
      text1: toastHeader,
      text2: toastMessage,
      topOffset: 100,
      visibilityTime: 1500,
    });
  }

  useEffect(() => {
    if (alert.type) {
      showToast(alert);
      dispatch(alertClear());
    }
  }, [alert, dispatch]);

  return (
    <Slot />
  );
}