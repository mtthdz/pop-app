import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type WrapperProps = {
  children?: ReactNode;
}

/**
 * 
 * TODO: made `children` optional, otherwise consumption will
 * provide TS error of missing prop. Investigate further.
 */
export default function Wrapper ({ children }: WrapperProps) {
  return <View style={styles.view}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    width: '96%',
    alignSelf: 'center'
  }
})