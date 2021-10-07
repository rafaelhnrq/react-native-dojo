import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { DiscoverScreen, MovieDetailsScreen, ArtistDetailsScreen } from '../../screens';


export function DiscoverStack() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
        screenOptions={{ 
            headerTitleAlign: 'center',
            headerTintColor: '#4A4A4A',
            headerStyle: { elevation: 0, shadowOpacity: 0 } 
        }}>
            <Stack.Screen
                component={DiscoverScreen}
                name='DiscoverScreen'
                options={{ title: 'Discover' }}
            />
            <Stack.Screen
                component={MovieDetailsScreen}
                name='MovieDetailsScreen'
            />
            <Stack.Screen
                component={ArtistDetailsScreen}
                name='ArtistDetailsScreen'
            />
        </Stack.Navigator>
    )
}