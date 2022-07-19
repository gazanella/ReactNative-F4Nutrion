import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  date: {
    paddingRight: "5%",
    paddingTop: "5%",
    textAlign: "right",
    fontSize: 14,
  },
  tittle: {
    marginLeft: "5%",
    marginRight: "5%",
    padding: "1%",
    color: "#FF6638",
    fontWeight: "300",
    fontSize: 30,
  },
  content: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "justify",
    padding: "2%",
  },
  containerContent: {
    marginHorizontal: "4%",
    marginVertical: "2%",
    backgroundColor: "#F0EDED",
    borderRadius: 25,
    padding: "4%",
    borderBottomLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  iconBody: {
    backgroundColor: "#ff6638",
    padding: 8,
    borderRadius: 60,
  },
  iconPositionType1: {
    position: "absolute",
    right: 10,
    bottom: 65,
  },
  iconPositionType2: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
export { styles };
