import { FlatList } from "react-native";
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
