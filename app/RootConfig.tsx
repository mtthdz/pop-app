import { Slot } from 'expo-router';
import { errorClear } from "@/store/actions/alertActions";
import { reduxDispatch, reduxSelect } from "@/types/reduxHooks";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function RootConfig() {
  const error = reduxSelect(state => state.error.message);
  const dispatch = reduxDispatch();
  
  // error notification
  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'error',
      text2: error,
      topOffset: 100,
      visibilityTime: 1500,
    });
  }

  useEffect(() => {
    if (error) {
      showToast();
      dispatch(errorClear());
    }
  }, [error, dispatch]);

  return (
    <Slot />
  );
}