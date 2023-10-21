import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import RepositoriesItem from "./RepositoriesItem";
import useRepositories from "../hooks/useRepositories";

const RepositoriesList = () => {
  const { repositories } = useRepositories();
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => <RepositoriesItem {...repo} />}
    />
  );
};

export default RepositoriesList;
