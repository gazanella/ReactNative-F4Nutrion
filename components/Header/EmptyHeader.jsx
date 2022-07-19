import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../services/const/colors";
import { useNavigation } from "@react-navigation/native";

export default function HeaderEmpty() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: "#FFF",
      justifyContent: "center",
    },
    arrow: {
      marginLeft: "2%",
      width: "5%",
    },
  });

  function goBackPage() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={goBackPage}>
        <AntDesign
          style={styles.arrow}
          name="arrowleft"
          size={20}
          color={COLORS.ORANGE}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
