import { View, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import { OrangeInput } from "../../../../../components/Input/OrangeInput";
import { styles } from "./styles";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { noteUpdate } from "../../../../../services/sqlite/notes";
import { NOTE } from "../../../../../services/const/toast";
import { keyboardDismiss } from "../../../../../services/functions";
import { useNavigation } from "@react-navigation/native";
import ButtonConfirm from "../../../../../components/Button/ConfirmButton";
import HeaderEmpty from "../../../../../components/Header/EmptyHeader";

export default function NoteEdit(data) {
  const navigation = useNavigation();
  const NOTE_ROUTE = data.route.params;
  const [tittle, setTittle] = useState(NOTE_ROUTE.tittle);
  const [content, setContent] = useState(NOTE_ROUTE.content);

  function validateNote() {
    const NOTE = verifyNote(tittle, content);

    if (NOTE_ROUTE.tittle == tittle && NOTE_ROUTE.content == content) {
      sameNote();
    } else {
      if (NOTE.VALIDATION) {
        successfullyEdit();
      } else {
        failedEdit(NOTE);
      }
    }
  }
  function verifyNote(tittle, content) {
    configInputs();
    let message;
    const ERROR = {
      TITTLE: tittle.length > 4 && tittle != tittle.length * " ",
      CONTENT: content.length > 4 && content != content.length * " ",
    };

    if (!ERROR.TITTLE) {
      message = NOTE.ERROR.TITTLE;
    }

    if (!ERROR.CONTENT) {
      message = NOTE.ERROR.CONTENT;
    }

    return {
      VALIDATION: ERROR.TITTLE == true && ERROR.CONTENT == true,
      MESSAGE: message,
      TOAST: {
        type: "error",
        text1: "Error",
        text2: message,
      },
    };
  }

  function failedEdit(note) {
    Toast.show(note.TOAST);
  }

  function successfullyEdit() {
    editNote();
    closeWindow();
  }
  function sameNote() {
    Toast.show(NOTE.INFO.SAME_NOTE);
  }

  function editNote() {
    Toast.show(NOTE.SUCCESS.EDIT_NOTE);
    noteUpdate(NOTE_ROUTE.id, tittle, content);
  }

  function closeWindow() {
    keyboardDismiss();
    goBackPage();
  }

  function configInputs() {
    setTittle(tittle.trim());
    setContent(content.trim());
  }

  function goBackPage() {
    setTimeout(() => {
      navigation.goBack();
    }, 1500);
  }

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <HeaderEmpty />
      <Toast />
      <View style={styles.container}>
        <View style={{ paddingVertical: "10%" }}>
          <Text style={styles.tittle}>Edit Note</Text>
          <OrangeInput
            maxLength={40}
            value={tittle}
            label={"Tittle"}
            onChangeText={setTittle}
            multiline={false}
          />
          <OrangeInput
            maxLength={200}
            value={content}
            label={"Content"}
            onChangeText={setContent}
            multiline={true}
          />
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <ButtonConfirm onPress={validateNote} />
        </View>
      </View>
    </SafeAreaView>
  );
}
