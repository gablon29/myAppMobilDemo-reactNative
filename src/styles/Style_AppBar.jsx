import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const Style_AppBar = StyleSheet.create({
  conteiner: {
    backgroundColor: "#81D8EB",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: "#00060C",
  },
});
