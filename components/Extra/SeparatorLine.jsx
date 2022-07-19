import { View, StyleSheet } from "react-native";

export default function SeparatorLine({ color, height, marginV }) {
  const styles = StyleSheet.create({
    line: {
      height: height,
      backgroundColor: color,
      marginVertical: marginV,
    },
  });

  return <View style={styles.line} />;
}
