import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../services/const/colors";
import { useNavigation } from "@react-navigation/native";

export default function HeaderTittle({tittle}) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: "#FFF",
      alignItems: "center",
      flexDirection: "row",
    
    },
    arrow: {
      marginLeft: "2%",
      width: "5%",
    },
    tittle:{
        fontSize:16
    },
    tittleContainer:{
        flex:1,
        right:10,
        alignItems:'center'
    }
  });


  function goBackPage() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback on onPress={goBackPage}>
        <AntDesign
          style={styles.arrow}
          name="arrowleft"
          size={20}
          color={COLORS.ORANGE}
        />
      </TouchableWithoutFeedback>
      <View  style={styles.tittleContainer}>
      <Text style={styles.tittle}>{tittle}</Text>
      </View>
    </View>
  );
}
