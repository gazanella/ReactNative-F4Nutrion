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
            Quem somos nós e de onde viemos? E onde surgiu a ideia? Somos a
            equipe por trás do aplicativo F4NUTRION, ideal para você que
            trabalha com nutrição e quer controle de seus pacientes. Somos
            quatro criadores vindos direto do Instituto Federal Catarinense, com
            um objetivo, auxiliar nutricionistas que querem o bem de seus
            pacientes! Podendo calcular as dietas ao mesmo tempo que realiza
            suas anotações!
          </Text>
          <View style={{marginTop:'20%'}}>
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
