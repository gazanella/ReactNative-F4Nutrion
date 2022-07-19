import { React, useState, useRef, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Text,
} from "react-native";
import { useScrollToTop, useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import EndPage from "../../../../components/Extra/EndPage";
import COLORS from "../../../../services/const/colors";
import db from "../../../../services/sqlite/database";
import NothingToShow from "../../../../components/Extra/NothingToShow";
import NoteList from "../../../../components/ListBox/Note";

export default function Reminder() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const flatlistRef = useRef();
  useScrollToTop(flatlistRef);

  function handleFetchData() {
    db.transaction((tx) => {
      tx.executeSql("select * from notes", [], (tx, results) => {
        let lista_notas = [];
        for (let i = 0; i < results.rows.length; ++i) {
          let nota = results.rows.item(i);
          lista_notas.push({
            id: nota.id,
            tittle: nota.tittle,
            content: nota.content,
            date: nota.date,
          });
        }
        setData(lista_notas);
      });
    });
  }

  function redirectAdd() {
    navigation.navigate("NoteAdd");
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <View style={styles.RowTittle}>
          <TouchableOpacity style={styles.Button} onPress={() => redirectAdd()}>
            <Ionicons name="add-circle-sharp" size={40} color={COLORS.ORANGE} />
          </TouchableOpacity>
          <Text style={styles.Tittle}>Notes</Text>
        </View>
        {data.length > 0 ? (
          <FlatList
            data={data}
            style={styles.FlatList}
            ref={flatlistRef}
            keyExtractor={(note) => note.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: note }) => <NoteList note={note} />}
          />
        ) : (
          <NothingToShow label={"Notes"} />
        )}
        <EndPage Height={50} />
      </View>
    </SafeAreaView>
  );
}
