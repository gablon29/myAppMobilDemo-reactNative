import React from "react";
import { View } from "react-native";
import { styles } from "../styles/stylesRepositories";
import RepositoriesStats from "./RepositoriesStats";
import RepositoriesHeader from "./RepositoriesHeader";

const RepositoriesItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoriesHeader {...props} />
      <RepositoriesStats {...props} />
    </View>
  );
};

export default RepositoriesItem;
