import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


export default function ComicPost({ title, img, navigation }) {

    return (
        <TouchableHighlight onPress={() => navigation.navigate('Details', { img: img, title: title })}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Image source={{ uri: img }} style={styles.img} />
            </View>
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 26,
        padding: 8
    },
    img: {
        width: '30%',
        height: 150
    }
});
