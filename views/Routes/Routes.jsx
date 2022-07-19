import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Noteadd from "../Pages/Reminder/NoteAdd";
import NoteInfo from "../Pages/Reminder/NoteInfo/Main";
import NoteEdit from "../Pages/Reminder/NoteInfo/NoteEdit";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();
const EMPTY_HEADER = {
  headerShown: false,
};
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={EMPTY_HEADER}
      />

      <Stack.Screen
        name="NoteInfo"
        component={NoteInfo}
        options={EMPTY_HEADER}
      />

      <Stack.Screen name="NoteAdd" component={Noteadd} options={EMPTY_HEADER} />

      <Stack.Screen
        name="NoteEdit"
        component={NoteEdit}
        options={EMPTY_HEADER}
      />
    </Stack.Navigator>
  );
}
