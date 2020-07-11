import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import logo from './assets/favicon.png';
import ComicList from './components/ComicList';

export default function App() {
    return (
        <View style={styles.container}>
            <ComicList />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 100,
        paddingLeft: 30,
        paddingRight: 30
    },
    text: {
        color: '#fff'
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#0EBFE9',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 3

    },
    buttonText: {
        textAlign: 'center',
        color: '#f0f0f0',
        fontSize: 20
    }
});
