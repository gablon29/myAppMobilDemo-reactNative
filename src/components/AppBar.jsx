import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
import { Style_AppBar } from "../styles/Style_AppBar";
import About from "./About";

const AppBar = () => {
  return (
    <View style={Style_AppBar.conteiner}>
      <Text style={Style_AppBar.text}>Repositorios</Text>
      <Link to="/about">About Us</Link>
    </View>
  );
};
export default AppBar;
