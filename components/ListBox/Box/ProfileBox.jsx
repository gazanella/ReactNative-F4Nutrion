import { Ionicons } from "react-native-vector-icons";
import COLORS from "../../../services/const/colors";
import { View, Text, StyleSheet, Dimensions } from "react-native";
export default function ProfileBox({ dev }) {
  const { width } = Dimensions.get("window");
  const styles = StyleSheet.create({
    main: {
      marginHorizontal: 30,
      width: width * 0.8 - 20,
      height: width / 2.4,
      borderRadius: 12,
      justifyContent: "flex-end",
    },
    container: {
      backgroundColor: COLORS.ORANGE,
      height: "30%",
      width: "100%",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingHorizontal: "5%",
      paddingTop: "5%",
    },
    iconContainer: {
      alignItems: "center",
      marginHorizontal: "20%",
      marginBottom: "5%",
    },

    name: {
      fontSize: 16,
      fontWeight: "500",
    },
    function: {
      fontSize: 16,
      fontWeight: "500",
      color: "#FFF",
    },
  });
  return (
    <View style={styles.main}>
      <View style={styles.iconContainer}>
        <Ionicons name="person" size={60} color={dev.color} />

        <Text style={styles.name}>{dev.name}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.function}>{dev.function}</Text>
      </View>
    </View>
  );
}
