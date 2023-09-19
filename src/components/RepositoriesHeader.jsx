import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/stylesRepositories";

const RepositoriesHeader = (props) => {
  return (
    <View style={styles.conteiner_header}>
      <Image style={styles.imagen} source={{ uri: props.ownerAvatarUrl }} />
      <View style={styles.conteiner_subHeader}>
        <Text style={styles.title}>{props.fullname}</Text>
        <Text style={styles.lenguages}>{props.language}</Text>
      </View>
      // Incluyendo el nuevo servidor
    </View>
  );
};

export default RepositoriesHeader;
