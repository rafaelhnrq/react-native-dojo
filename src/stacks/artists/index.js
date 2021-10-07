import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { ArtistsScreen, ArtistDetailsScreen } from '../../screens';


export function ArtistsStack() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#4A4A4A',
                headerStyle: { elevation: 0, shadowOpacity: 0 }
            }}>
            <Stack.Screen
                component={ArtistsScreen}
                name='ArtistsScreen'
                options={{ title: 'Artist' }}
            />
            <Stack.Screen
                component={ArtistDetailsScreen}
                name='ArtistDetailsScreen'
            />
        </Stack.Navigator>
    )
}