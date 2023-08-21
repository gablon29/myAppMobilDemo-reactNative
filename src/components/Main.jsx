import React from "react";
import { View } from "react-native";
import AppBar from "./AppBar";
import { Route, Routes, NativeRouter } from "react-router-native";
import Home from "./Home";

const Main = () => {
  return (
    <NativeRouter>
      <AppBar />
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </NativeRouter>
  );
};

export default Main;
