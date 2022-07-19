import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function NoteList({ note }) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    ReminderData: {
      color: "#333",
      fontSize: 14,
      paddingTop: 10,
      textAlign: "right",
    },

    ReminderTitle: {
      color: "#21140a",
      fontSize: 18,
      fontWeight: "bold",
      paddingTop: "1%",
      paddingHorizontal: "3%",
    },

    ReminderContainerView: {
      borderLeftColor: "#ff6638",
      marginBottom: "3%",
      paddingHorizontal: "3%",
      paddingVertical: "3.4%",
      borderRadius: 6,
      borderLeftWidth: 3,
      backgroundColor: "white",
    },
  });

  function noteNavigation() {
    navigation.navigate("NoteInfo", { note });
  }

  return (
    <TouchableOpacity onPress={() => noteNavigation()}>
      <View style={styles.ReminderContainerView}>
        <Text style={styles.ReminderTitle}>{note.tittle}</Text>
        <Text style={styles.ReminderData}>{note.date}</Text>
      </View>
    </TouchableOpacity>
  );
}
