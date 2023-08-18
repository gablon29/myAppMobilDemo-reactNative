import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    title: {
        color: "#09f",
        fontWeight: "bold",
        marginBottom: 5
    }
})

const RepositoriesItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <Text style={styles.title}>Fullname: {props.fullname}</Text>
            <Text>Lenguaje: {props.language}</Text>
            <Text>Forks: {props.forksCount}</Text>
            <Text>Start Count: {props.stargazersCount}</Text>
            <Text>Rating Average: {props.ratingAverage}</Text>
            <Text>Review Count: {props.reviewCount}</Text>
            <Text>Avatar {props.ownerAvatarUrl}</Text>
        </View>
    )
}

export default RepositoriesItem
