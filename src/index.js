import React from 'react'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { DiscoverStack, ArtistsStack } from './stacks'

export default function App() {

    const BottomTab = createBottomTabNavigator();

    function getBottomTabIcon(iconName, { focused, size, color }) {
        return <Icon name={iconName} size={size} color={color} />
    }

    return (
        <NavigationContainer>
            <BottomTab.Navigator screenOptions={{
                "tabBarActiveTintColor": "#0294A5",
                "headerShown": false
            }}>
                <BottomTab.Screen
                    component={DiscoverStack}
                    name='DiscoverStack'
                    options={{ tabBarLabel: "Discover", tabBarIcon: ({ focused, size, color }) => getBottomTabIcon("view-module", { focused, size, color }) }} />
                <BottomTab.Screen
                    component={ArtistsStack}
                    name='ArtistsStack'
                    options={{ tabBarLabel: "Artists", tabBarIcon: ({ focused, size, color }) => getBottomTabIcon("account-circle", { focused, size, color }) }} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}