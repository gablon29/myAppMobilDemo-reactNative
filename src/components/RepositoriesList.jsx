import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import RepositoriesItem from "./RepositoriesItem";

const RepositoriesList = () => {
  const [repositories, setRepositories] = useState(null);
  const repositoriesResp = () => {
    return fetch("http://192.168.100.4:5000/api/repositories")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    repositoriesResp();
  }, []);

  const repositoriesNode = repositories
    ? repositories.edges.map((edges) => edges.node)
    : [];

  return (
    <FlatList
      data={repositoriesNode}
      renderItem={({ item: repo }) => <RepositoriesItem {...repo} />}
    />
  );
};

export default RepositoriesList;
