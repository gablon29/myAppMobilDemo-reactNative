import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/stylesRepositories";
import { Style_AppBar } from "../styles/Style_AppBar";

const AppBar = () => {
  return (
    <View style={Style_AppBar.conteiner}>
      <Text style={Style_AppBar.text}>Repositorios</Text>
    </View>
  );
};
export default AppBar;
