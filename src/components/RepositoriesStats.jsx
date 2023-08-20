import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/stylesRepositories";
const RepositoriesStats = (props) => {
  return (
    <View style={styles.conteiner_Stats}>
      <View>
        <Text style={styles.text_style}>Forks:</Text>
        <Text style={styles.text_style}>{props.forksCount}</Text>
      </View>
      <View>
        <Text style={styles.text_style}>Start Count:</Text>
        <Text style={styles.text_style}>{props.stargazersCount}</Text>
      </View>
      <View>
        <Text style={styles.text_style}>Review Count:</Text>
        <Text style={styles.text_style}>{props.reviewCount}</Text>
      </View>
    </View>
  );
};

export default RepositoriesStats;
