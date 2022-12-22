import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

const colors = {
  pillBlue: "blue",
  lightBlue: "lightblue",
};

const styles = StyleSheet.create({
  pillMargin: {
    marginBottom: 5,
  },
  pillPadding: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  row: {
    flexDirection: "row",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  defaultPillStyle: {
    borderRadius: 100,
    backgroundColor: colors.pillBlue,
  },
  defaultPillTextStyle: {
    color: colors.lightBlue,
    textAlign: "center",
  },
  marginL10: {
    marginLeft: 10,
  },
});

export const PillList: FC<{
  pills: { label: string }[];
  pillTextStyle?: StyleProp<TextStyle>;
  pillContainerStyle?: StyleProp<ViewStyle>;
}> = ({ pills, pillContainerStyle, pillTextStyle }) => {
  return (
    <View style={[styles.flexWrap, styles.row]}>
      {pills.map((p, idx) => (
        <View
          style={[
            pillContainerStyle ? pillContainerStyle : styles.defaultPillStyle,
            idx !== 0 ? styles.marginL10 : {},
            styles.pillPadding,
            styles.pillMargin,
          ]}
          key={idx}
        >
          <Text
            style={pillTextStyle ? pillTextStyle : styles.defaultPillTextStyle}
          >
            {p.label}
          </Text>
        </View>
      ))}
    </View>
  );
};
