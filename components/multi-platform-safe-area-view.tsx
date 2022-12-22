import React, { FC, ReactNode } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from "react-native";

const styles = {
  androidPadding: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : undefined,
  },
};

/**
 * SafeAreaView works fine in iOS without any config at all, but android needs special care so we have to get the status bar height to add the corresponding padding
 */
export const MultiPlatformSafeAreaView: FC<{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => {
  return (
    <SafeAreaView
      style={
        style
          ? [styles.androidPadding, ...(Array.isArray(style) ? style : [style])]
          : styles.androidPadding
      }
    >
      {children}
    </SafeAreaView>
  );
};
