import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import SeparatorLine from "../../../components/Extra/SeparatorLine";
import ProfileList from "../../../components/ListBox/Profile";
import COLORS from "../../../services/const/colors";
import EndPage from "../../../components/Extra/EndPage";
import SloganText from "../../../components/Extra/Slogan";

export default function About() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.body}>
          <Text style={styles.tittle}>F4Nutrion</Text>
          <Text style={styles.paragraph}>
            Who we are? Where we came from? And what are we doing? We have the
            answer! We are four developers that came from the Federal Intitute
            Catarinense, with an idea. Direcly for you nutritionist, that lives
            with the messy notes and prescription of your own. We bring the
            solution for you! The F4Nutrion, the ideal app for nutritionists
            that look for, besides an easy way to make your notes, a more simple
            method of creating a diet. The F4Nutrion allow you to make notes
            about each patient in a organized way, besides os creating and
            calculing a diet in a simple way, in one place.
          </Text>
          <View style={{ marginTop: "10%" }}>
            <SeparatorLine marginV="2%" color={COLORS.ORANGE} height={1} />
            <Text style={styles.subtittle}>Developers</Text>
            <ProfileList />
            <SloganText />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
