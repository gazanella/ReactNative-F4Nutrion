import { Text, View, StyleSheet } from "react-native";

export default function SloganText() {
  const styles = StyleSheet.create({
    container: {
      height: "10%",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop:'15%'
    },
    tittle: {
      fontSize: 20,
      fontWeight: "600",
    },
    subtittle: {
      fontWeight: "400",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>F4Nutrion</Text>
      <Text style={styles.subtittle}>For You, For Life , For Health , Four Developers</Text>
    </View>
  );
}
