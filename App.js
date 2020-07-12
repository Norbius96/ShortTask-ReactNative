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
        paddingTop: 100,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 30
    },
    text: {
        color: '#fff'
    }
});
