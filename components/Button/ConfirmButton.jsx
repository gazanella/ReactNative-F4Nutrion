import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import COLORS from "../../services/const/colors";
export default function ButtonConfirm({ onPress }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.ORANGE,
      paddingHorizontal: "5%",
      paddingVertical: "2%",
      alignItems: "center",
    },
    label: {
      fontSize: 16,
      fontWeight: "600",
      color: "#FFF",
    },
  });
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>Confirm</Text>
      </View>
    </TouchableHighlight>
  );
}
