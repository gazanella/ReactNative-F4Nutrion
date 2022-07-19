import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function EndPage({ Height }) {
  const styles = StyleSheet.create({
    end: {
      height: Height,
    },
  });

  return <View style={styles.end} />;
}
