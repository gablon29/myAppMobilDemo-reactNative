import React from "react";
import { FlatList, View, Text } from "react-native";
import { repositories } from "../data/repositories";

const RepositoriesList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <View key={repo.id}>
                    <Text>Fullname: {repo.fullname}</Text>
                    <Text>Lenguaje: {repo.language}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Start Count: {repo.stargazersCount}</Text>
                    <Text>Rating Average: {repo.ratingAverage}</Text>
                    <Text>Review Count: {repo.reviewCount}</Text>
                    <Text>Avatar {repo.ownerAvatarUrl}</Text>
                </View>
            )}
        />
    )
}

export default RepositoriesList