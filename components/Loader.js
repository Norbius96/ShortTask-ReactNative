import React from 'react';
import { StyleSheet, Text } from 'react-native';



export default function Loader() {
    return (
        <Text style={styles.Loader}> Loading ... </Text>
    )
}

const styles = StyleSheet.create({
    Loader: {
        marginTop: 10
    }
})