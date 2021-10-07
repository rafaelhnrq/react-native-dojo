import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'

import styles from './styles'
import { api } from '../../services'
import { ArtistCard } from '../../components'


export function ArtistsScreen(props) {
    const { navigation } = props
    const [isLoading, setIsLoading] = useState(false)
    const [artists, setArtists] = useState([])

    useEffect(() => {
        async function getScreenData() {
            setIsLoading(true)
            const response = await api.get('/artists')
            setArtists(response.data)
            setIsLoading(false)
        }
        getScreenData()
    }, [])

    function onButtonPress(name, id) {
        navigation.navigate('ArtistDetailsScreen', {
            artistName: name,
            artistId: id
        })
    }

    function formatData(data, numColumns) {
        const emptyQty = numColumns - (data.length % numColumns)
        for (let id = 0; id < emptyQty; id++) {
            data.push({ id: `blank-${id}`, empty: true })
        }
        return data
    }

    function renderContent() {
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <FlatList
                numColumns={3}
                data={formatData(artists, 3)}
                keyExtractor={(it) => `artist-item-${it.id}`}
                renderItem={({ item, index }) => {
                    return <ArtistCard
                        name={item.name}
                        image={item.profile_path}
                        empty={item.empty}
                        index={index}
                        onPress={() => onButtonPress(item.name, item.id)}
                    />
                }}
            />
        )
    }

    return renderContent()
}