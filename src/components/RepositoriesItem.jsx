import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/stylesRepositories";
import RepositoriesStats from "./RepositoriesStats";

const RepositoriesItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <Text style={styles.title}>Fullname: {props.fullname}</Text>
      <Text>Lenguaje: {props.language}</Text>
      <RepositoriesStats {...props} />
    </View>
  );
};

export default RepositoriesItem;
