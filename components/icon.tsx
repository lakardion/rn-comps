import React, { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, ViewProps } from "react-native";

export type IconName = keyof typeof Ionicons.glyphMap;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  onPress?: () => void;
  containerViewProps: ViewProps;
};

const ICON_SIZE = 26;

export const IconComponent = Ionicons;
export const Icon: React.FC<IconProps> = ({
  name,
  size = ICON_SIZE,
  color = "black",
  onPress,
  containerViewProps,
}: IconProps) => {
  const icon = useMemo(
    () => (
      <View {...containerViewProps}>
        <IconComponent name={name} size={size} color={color} />
      </View>
    ),
    [containerViewProps, name, size, color]
  );

  return icon;
};
