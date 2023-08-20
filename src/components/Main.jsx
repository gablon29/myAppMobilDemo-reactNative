import React from "react";
import { View, Text } from "react-native";
import RepositoriesList from "./RepositoriesList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <RepositoriesList />
    </View>
  );
};

export default Main;
