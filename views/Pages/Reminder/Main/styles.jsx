import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: "5%",
    paddingHorizontal: "5%",
  },

  Tittle: {
    color: "#ff6638",
    fontSize: 30,
    fontWeight: "bold",
  },
  FlatList: {
    flex: 1,
    marginTop: "1%",
  },
  RowTittle: {
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
export { styles };
