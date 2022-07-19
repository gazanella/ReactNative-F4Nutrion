import { View, StyleSheet } from "react-native";
import Colors from "../../assets/config/GeneralConfigs/Colors";

export default function SeparatorItem() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: Colors.LIGHT_GRAY2,
    height: 1,
  },
});
