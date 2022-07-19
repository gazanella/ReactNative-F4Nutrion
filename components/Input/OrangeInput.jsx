import { React, useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import COLORS from "../../services/const/colors";
import FONTS from "../../services/const/fonts";

export function OrangeInput({
  value,
  label,
  placeholder,
  onChangeText,
  maxLength,
  multiline,
}) {
  const [focus, setFocus] = useState(false);
  const customBorder = focus ? COLORS.ORANGE : COLORS.LIGHT_GRAY2;
  const styles = StyleSheet.create({
    Input: {
      fontSize: FONTS.INPUT,
      height: height,
      textAlign: "justify",
      borderRadius: 5,
      borderColor: customBorder,
      padding: "3%",
      borderWidth: 1,
    },
    ContainerInput: {
      marginVertical: "2%",
      marginHorizontal: "1%",
      maxHeight: 140,
      width: "90%",
      marginLeft: "5%",
    },
    label: {
      fontSize: 14,
      color: COLORS.GRAY_MID2,
    },
  });

  const [height, setHight] = useState(40);
  return (
    <View style={styles.ContainerInput}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        allowFontScaling={false}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        maxLength={maxLength}
        value={value}
        style={styles.Input}
        onChangeText={(text) => onChangeText(text)}
        multiline={multiline}
        textAlignVertical={"center"}
        placeholder={placeholder}
      />
    </View>
  );
}
