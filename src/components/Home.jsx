import { View, Text } from "react-native";
import React from "react";
import RepositoriesList from "./RepositoriesList";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <RepositoriesList />
    </View>
  );
};

export default Home;
