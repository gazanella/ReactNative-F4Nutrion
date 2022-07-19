import { View, SafeAreaView, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Client() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Text style={styles.tittle}>Client</Text>
      </View>
    </SafeAreaView>
  );
}
