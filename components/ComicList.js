import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ComicPost from './ComicPost';

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
                alert('Sorry, we have a problem ... :(');
            }
        }
    }



    return (
        <View style={styles.container}>
            {
                comics.map((comic, idx) => {
                    return (
                        <ComicPost key={idx} title={comic.title} transcript={comic.transcript} img={comic.img} />
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});
