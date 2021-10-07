import React, { useEffect, useState, useLayoutEffect } from 'react'
import { View, Text, ActivityIndicator, Image, ScrollView, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment'

import { api } from '../../services'
import styles from './styles'

export function ArtistDetailsScreen({ route, navigation }) {
    const { artistName, artistId } = route.params
    const [isLoading, setIsLoading] = useState(false)
    const [artistDetail, setArtistDetail] = useState({})

    useLayoutEffect(() => {
        navigation.setOptions({ title: artistName })
    }, [artistName, navigation])

    useEffect(() => {
        async function getScreenData() {
            setIsLoading(true)
            const response = await api.get(`/artists_details/${artistId}`)
            setArtistDetail(response.data)
            setIsLoading(false)
        }
        getScreenData()
    }, [artistId])

    function renderContent() {
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <ScrollView>
                <View>
                    <ImageBackground source={{ uri: artistDetail.profile_path }} resizeMode="cover" style={styles.image}>
                        <LinearGradient colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.8)']} style={styles.linearGradient}>
                        </LinearGradient>
                    </ImageBackground>
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{artistDetail.name}</Text>
                        <Text style={styles.extraInfo}>{`${artistDetail.known_for_department} | ${moment(artistDetail.birthday).format('LL')}`}</Text>
                    </View>
                </View>
                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryTitle}>Summary</Text>
                    <View style={styles.subContainer}>
                        <Text style={[styles.subContainerText, styles.subContainerTitle]}>{artistDetail.place_of_birth}</Text>
                        <Text style={styles.subContainerText}>{artistDetail.biography}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

    return renderContent()
}