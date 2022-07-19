import { View, SafeAreaView, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
export default function Home() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Text style={styles.tittle}>Home Page</Text>
      </View>
    </SafeAreaView>
  );
}