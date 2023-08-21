import { View, Text } from "react-native";
import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Home from "./Home";
import AppBar from "./AppBar";

const Routes = () => {
  return (
    <View>
      <AppBar />
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </View>
  );
};

export default Routes;
