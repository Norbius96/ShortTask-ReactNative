import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function Navbar({ ComicList }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="XKCD" component={ComicList} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

const styles = StyleSheet.create({

});
