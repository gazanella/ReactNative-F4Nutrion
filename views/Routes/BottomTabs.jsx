import React from "react";
import {
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Client from "../Pages/Client";
import Reminder from "../Pages/Reminder/Main";
import COLORS from "../../services/const/colors";
import FONTS from "../../services/const/fonts";

export default function BottomTabs() {
  /*Criação da variável da barra de navegação.*/
  const Tab = createBottomTabNavigator();
  /*Definição padrão da barra.*/
  const main_tab = {
    tabBarInactiveBackgroundColor: COLORS.ORANGE_MID,
    tabBarActiveTintColor: COLORS.ORANGE_STRONG,
    tabBarInactiveTintColor: COLORS.WHITE,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      position: "absolute",
      height: 50,
    },
  };

  return (
    /*Definição de cada botão da barra.(cada página)*/
    <Tab.Navigator backBehavior="history" screenOptions={main_tab}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {
            fontSize: FONTS.BOTTOMBAR_LABEL,
            bottom: "11%",
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarLabelStyle: {
            fontSize: FONTS.BOTTOMBAR_LABEL,
            bottom: "11%",
          },
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Client"
        component={Client}
        options={{
          tabBarLabelStyle: {
            fontSize: FONTS.BOTTOMBAR_LABEL,
            bottom: "11%",
          },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people-sharp" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Reminder"
        component={Reminder}
        options={{
          tabBarLabelStyle: {
            fontSize: FONTS.BOTTOMBAR_LABEL,
            bottom: "11%",
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="note-text"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabelStyle: {
            fontSize: FONTS.BOTTOMBAR_LABEL,
            bottom: "11%",
          },
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="question" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
