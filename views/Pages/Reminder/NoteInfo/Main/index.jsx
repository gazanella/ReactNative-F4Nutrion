import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import ModalDeleteNote from "../../../../../components/Modal/ModalDeleteNote";
import HeaderTittle from "../../../../../components/Header/TittleHeader";
import db from "../../../../../services/sqlite/database";
import EndPage from "../../../../../components/Extra/EndPage";

export default function NoteInfo(note) {
  const NOTE = note.route.params.note;
  const [data, setData] = useState({});
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  function handleFetchData(id) {
    try {
      let note;
      db.transaction((tx) => {
        tx.executeSql(
          "select * from notes where id = ?",
          [id],
          (tx, results) => {
            note = results.rows.item(0);
            setData(note);
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  function showRemove() {
    setShowAlert(true);
  }

  function redirectEdit() {
    navigation.navigate("NoteEdit", data);
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData(NOTE.id);
    }, [])
  );

  return (
    <ScrollView>
      <SafeAreaView style={styles.SafeAreaView}>
        <HeaderTittle tittle={"Details"} />

        <Text style={styles.date} allowFontScaling={false}>
          Created At {data.date}
        </Text>
        <Text style={styles.tittle} allowFontScaling={false}>
          {data.tittle}
        </Text>
        <View style={styles.containerContent}>
          <Text style={styles.content} allowFontScaling={false}>
            {data.content}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconPositionType1}
          onPress={() => redirectEdit()}
        >
          <AntDesign
            style={styles.iconBody}
            name="edit"
            size={30}
            color={"#FFF"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconPositionType2}
          onPress={() => showRemove()}
        >
          <MaterialCommunityIcons
            style={styles.iconBody}
            name="delete"
            size={30}
            color={"#FFF"}
          />
        </TouchableOpacity>
        <ModalDeleteNote
          id={NOTE.id}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
        <EndPage Height={150}/>
      </SafeAreaView>
    </ScrollView>
  );
}
