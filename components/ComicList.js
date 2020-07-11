import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ComicList() {

    const [comics, setComics] = useState([]);

    useEffect(() => {
        fetchComicData();
    }, []);

    const fetchComicData = async () => {
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const numOfPosts = 8;
        for (let i = 1; i <= numOfPosts; i++) {
            const URL = `${proxy}https://xkcd.com/${i}/info.0.json`;
            try {
                const response = await fetch(URL);
                const comicStory = await response.json();
                setComics(comics => [...comics, comicStory]);

            } catch (err) {
                console.log('Sorry, we have a problem ... :(');
            }
        }
    }



    return (
        <View>
            {
                comics.map((comic, idx) => {
                    return (
                        <Text style={styles.text}>{comic.title}</Text>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff'
    },
    image: {
        width: '80%',
        height: 160
    }
});
