import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/stylesRepositories';
const RepositoriesStats = (props) => {
    return (
        <View style={styles.conteiner_Stats}>
            <View>
                <Text>Forks:</Text>
                <Text>{props.forksCount}</Text>
            </View>
            <View>
                <Text>Start Count:</Text>
                <Text>{props.stargazersCount}</Text>
            </View>
            <View>
                <Text>Review Count:</Text>
                <Text>{props.reviewCount}</Text>
            </View>
        </View>
    )
};

export default RepositoriesStats
