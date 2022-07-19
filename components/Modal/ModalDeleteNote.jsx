import { Modal, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import SeparatorLine from "../Extra/SeparatorLine";
import { AntDesign } from "react-native-vector-icons";
import { noteDelete } from "../../services/sqlite/notes";
import { useNavigation } from "@react-navigation/native";
export default function ModalDeleteNote({ showAlert, setShowAlert, id }) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    outerview: {
      flex: 1,
      justifyContent: "center",
    },
    modalBox: {
      borderRadius: 15,
      backgroundColor: "#FFF",
      marginHorizontal: "5%",
      elevation: 10,
    },
    header: {
      padding: 15,
    },
    headerCloseRow: {
      justifyContent: "space-between",
      flexDirection: "row-reverse",
      alignItems: "center",
      marginLeft: "5%",
    },

    tittleHeader: {
      fontWeight: "500",
      fontSize: 18,
    },
    messageBox: {
      marginVertical: "5%",
      padding: 15,
    },
    buttonContainer: {
      alignItems: "flex-end",
      paddingVertical: "8%",
      paddingHorizontal: "3%",
      flexDirection: "row-reverse",
    },
    button: {
      marginRight: "2%",
      backgroundColor: "#ff6638",
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonCancel: {
      marginRight: "2%",
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
      alignItems: "center",
    },
  });
  /*Fechamento do alerta.*/
  function onClose() {
    setShowAlert(false);
  }
  /*Redireciona à página principal do aplicativo.*/
  function redirectToHome() {
    setTimeout(() => {
      navigation.navigate("BottomTabs");
    }, 500);
  }
  /*Deleta a nota pelo id.*/
  function onDelete() {
    noteDelete(id);
    onClose();
    redirectToHome();
  }
  return (
    <Modal visible={showAlert} transparent={true} animationType={"fade"}>
      <View style={styles.outerview}>
        <View style={styles.modalBox}>
          <View style={styles.headerCloseRow}>
            <TouchableOpacity onPress={() => onClose()}>
              <AntDesign name="close" size={25} color={"#ff6638"} />
            </TouchableOpacity>
            <View style={styles.header}>
              <Text style={styles.tittleHeader}>Confirmation</Text>
            </View>
          </View>
          <SeparatorLine height={1} color={"#ff6638"} />
          <View style={styles.messageBox}>
            <Text>
              Deleted data cannot be recovered.This will permanently remove this
              note.
            </Text>
          </View>
          <SeparatorLine height={1} color={"#ff6638"} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => onDelete()}>
              <View style={styles.button}>
                <Text style={{ color: "#FFF" }}>Delete</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onClose()}>
              <View style={styles.buttonCancel}>
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
