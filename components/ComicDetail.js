import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function ComicDetail({ route }) {
    // We need img's URL from route
    const { img } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.img} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200
    }
});
