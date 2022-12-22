import { FC } from "react";
import { Pressable, PressableProps, View } from "react-native";

/**
 * Since pressable is preferred over TouchableOpacity this is a nice utility to have
 */
export const PressableOpacity: FC<PressableProps> = (props) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? { opacity: 0.5 } : undefined)}
      {...props}
    />
  );
};
