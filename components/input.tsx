import React, { FC, useRef, useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { IconComponent, IconName } from "./icon";
// import { colors } from '../utils/designSystem'
// import { IconComponent, IconName } from './icon'

const activeColor = "blue";
const idleColor = "gray";
const dangerColor = "red";
const white = "white";
const trueGray = "gray";

const styles = StyleSheet.create({
  inputPadding: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  inputMargin: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
  },
  border: {
    borderWidth: 1,
    borderRadius: 10,
  },
  borderActive: {
    borderColor: activeColor,
  },
  borderIdle: {
    borderColor: idleColor,
  },
  borderInvalid: {
    borderColor: dangerColor,
  },
  relative: {
    position: "relative",
  },
  absolute: {
    position: "absolute",
    backgroundColor: white,
    top: -9,
    left: 10,
  },
  justifyCenter: {
    justifyContent: "center",
  },
  itemsCenter: {
    alignItems: "center",
  },
  iconPadding: {
    paddingRight: 5,
  },
  fullWidth: {
    width: "100%",
  },
  font: {
    textAlign: "left",
  },
  defaultTextSize: {
    fontSize: 16,
  },
  placeholder: {
    color: trueGray,
  },
});

interface InputProps extends TextInputProps {
  label: string;
  iconName?: IconName;
  isInvalid?: boolean;
  textStyle?: StyleProp<TextStyle>;
}

export const Input: FC<InputProps> = ({
  label,
  iconName,
  isInvalid = false,
  textStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const containerBorderStyle = isInvalid
    ? styles.borderInvalid
    : isFocused
    ? styles.borderActive
    : styles.borderIdle;
  const iconColor = isInvalid
    ? dangerColor
    : isFocused
    ? activeColor
    : trueGray;

  return (
    <Pressable
      onPress={() => {
        inputRef.current?.focus();
      }}
    >
      <View
        style={[
          styles.relative,
          styles.itemsCenter,
          styles.border,
          styles.inputPadding,
          styles.inputMargin,
          styles.row,
          containerBorderStyle,
        ]}
      >
        {isFocused || Boolean(rest.value) ? (
          <View style={[styles.absolute]}>
            <Text>{label}</Text>
          </View>
        ) : null}
        {iconName ? (
          <View style={[styles.justifyCenter, styles.iconPadding]}>
            <IconComponent name={iconName} color={iconColor} size={20} />
          </View>
        ) : null}
        <View style={styles.fullWidth}>
          <TextInput
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            style={[
              styles.fullWidth,
              styles.font,
              textStyle ? textStyle : styles.defaultTextSize,
            ]}
            {...rest}
            placeholderTextColor={trueGray}
            ref={inputRef}
          />
        </View>
      </View>
    </Pressable>
  );
};

export const ReadonlyInput: FC<
  Pick<InputProps, "label" | "isInvalid" | "iconName" | "textStyle"> & {
    readonlyValue: string;
    placeholder?: string;
  }
> = ({
  label,
  iconName,
  isInvalid = false,
  readonlyValue,
  placeholder,
  textStyle,
}) => {
  const containerBorderStyle = isInvalid
    ? styles.borderInvalid
    : styles.borderIdle;
  const iconColor = isInvalid ? dangerColor : trueGray;
  const isPlaceholder = !readonlyValue;

  return (
    <View
      style={[
        styles.relative,
        styles.itemsCenter,
        styles.border,
        styles.row,
        styles.inputPadding,
        styles.inputMargin,
        containerBorderStyle,
      ]}
    >
      {readonlyValue ? (
        <View style={[styles.absolute]}>
          <Text>{label}</Text>
        </View>
      ) : null}
      {iconName ? (
        <View style={[styles.justifyCenter, styles.iconPadding]}>
          <IconComponent name={iconName} color={iconColor} size={20} />
        </View>
      ) : null}
      <View style={styles.fullWidth}>
        <Text
          style={[
            styles.fullWidth,
            styles.font,
            isPlaceholder ? styles.placeholder : {},
            textStyle ? textStyle : styles.defaultTextSize,
          ]}
        >
          {isPlaceholder ? placeholder : readonlyValue}
        </Text>
      </View>
    </View>
  );
};
