import { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { OrangeInput } from "../../../../components/Input/OrangeInput";
import { styles } from "./styles";
import { noteInsert } from "../../../../services/sqlite/notes";
import {
  getCurrentDate,
  keyboardDismiss,
  countCharacters,
} from "../../../../services/functions";
import { NOTE } from "../../../../services/const/toast/index";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useNavigation } from "@react-navigation/native";

import ButtonConfirm from "../../../../components/Button/ConfirmButton";
import HeaderEmpty from "../../../../components/Header/EmptyHeader";

export default function Noteadd() {
  const navigation = useNavigation();
  const [tittle, setTittle] = useState("");
  const [content, setContent] = useState("");
  const date = getCurrentDate();

  function validateNote() {
    const NOTE = verifyNote(tittle, content);
    if (NOTE.VALIDATION) {
      successfullyAdd();
    } else {
      failedAdd(NOTE);
    }
  }

  function verifyNote(tittle, content) {
    const MIN_LENGTH = 4;
    const configTittle = tittle.trim();
    const configContent = content.trim();
    let message;
  
    const ERROR = {
      TITTLE: configTittle.length > MIN_LENGTH,
      CONTENT: configContent.length > MIN_LENGTH,
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
        text1: "An unexpected error has occurred",
        text2: message,
      },
    };
  }
  function failedAdd(note) {
    Toast.show(note.TOAST);
  }
  function successfullyAdd() {
    addNote();
    closeWindow();
  }
  function addNote() {
    Toast.show(NOTE.SUCCESS.ADD_NOTE);
    noteInsert(tittle.trim(), content.trim(), date);
  }

  function goBackPage() {
    setTimeout(() => {
      navigation.goBack();
    }, 1500);
  }
  function closeWindow() {
    keyboardDismiss();
    goBackPage();
  }

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <HeaderEmpty />
      <Toast />
      <View style={styles.container}>
        <View style={{ paddingVertical: "10%" }}>
          <Text style={styles.tittle}>New Note</Text>
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
