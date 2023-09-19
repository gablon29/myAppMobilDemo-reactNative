import React from "react";
import { FlatList, Text } from "react-native";
import { repositories } from "../data/repositories";
import RepositoriesItem from "./RepositoriesItem";

const RepositoriesList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => <RepositoriesItem {...repo} />}
    />
  );
};

export default RepositoriesList;
