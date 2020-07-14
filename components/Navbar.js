import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ComicList from './ComicList';
import ComicDetail from './ComicDetail';



const Stack = createStackNavigator();

export default function Navbar() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={ComicList}
                    options={{ title: 'XKCD' }}
                />
                <Stack.Screen
                    name="Details"
                    component={ComicDetail}
                    options={({ route }) => ({
                        headerTitleStyle: {
                            alignSelf: 'center'
                        },
                        title: route.params.title
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}



