import { FC, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const colors = {
  superLightGray: "lightgray",
  primary: "teal",
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  defaultInactive: {
    backgroundColor: colors.superLightGray,
  },
  defaultActive: {
    backgroundColor: colors.primary,
  },
  marginL10: {
    marginLeft: 10,
  },
});

export const StepDots: FC<{
  numOfPages: number;
  currentPage: number;
  dotSize: number;
  activeStyle?: StyleProp<ViewStyle>;
  inactiveStyle?: StyleProp<ViewStyle>;
  containerStyle: StyleProp<ViewStyle>;
}> = ({
  currentPage,
  numOfPages,
  containerStyle,
  dotSize,
  activeStyle = styles.defaultActive,
  inactiveStyle = styles.defaultInactive,
}) => {
  const pageArray = useMemo(
    () => Array.from({ length: numOfPages }),
    [numOfPages]
  );

  const dotStyle = {
    height: dotSize,
    width: dotSize,
    borderRadius: dotSize / 2,
  };

  return (
    <View style={[containerStyle, styles.row]}>
      {pageArray.map((_, idx) => (
        <View
          style={[
            idx <= currentPage ? activeStyle : inactiveStyle,
            dotStyle,
            idx !== 0 ? styles.marginL10 : {},
          ]}
          key={idx}
        />
      ))}
    </View>
  );
};
