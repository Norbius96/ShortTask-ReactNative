import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import ComicPost from './ComicPost';
import Loader from './Loader';

export default function ComicList({ navigation }) {
    // number of posts on Page
    const postPerPage = 8;

    const [comics, setComics] = useState([]);
    const [postsNumber, setPostsNumber] = useState(8);
    const [isLoading, setIsLoading] = useState(true);

    //fetch always when we call to postsNumber state
    useEffect(() => {
        fetchComicData();
    }, [postsNumber]);

    //fetch Data
    const fetchComicData = async () => {
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const page = postsNumber - (postPerPage - 1);
        for (let i = page; i <= postsNumber; i++) {
            const URL = `${proxy}https://xkcd.com/${i}/info.0.json`;
            try {
                const response = await fetch(URL);
                const comicStory = await response.json();
                setComics(comics => [...comics, comicStory]);
                setIsLoading(false);
            } catch (err) {
                alert('Sorry, we have a problem ... :(');
            }
        }
    }

    //Load more posts
    const LoadMore = () => {
        setPostsNumber(postsNumber + postPerPage);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={comics}
                renderItem={({ item }) => <ComicPost img={item.img} navigation={navigation} title={item.title} />}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => LoadMore()}
                onEndReachedThreshold={0}
                ListFooterComponent={isLoading ? Loader : null}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 30
    }
});
