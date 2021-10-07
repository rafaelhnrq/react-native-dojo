import React, { useState, useEffect, useRef, useMemo } from 'react'
import { View, Text, FlatList, ActivityIndicator, Animated } from 'react-native'

import { api } from '../../services'
import { DiscoverCard } from '../../components'

import styles from './styles'

export function DiscoverScreen(props) {
    const { navigation } = props
    const [isLoading, setIsLoading] = useState(false)
    const [discoverList, setDiscoverList] = useState([])

    const animatedVal = useRef(new Animated.Value(0)).current

    const animation = useMemo(() => Animated.spring(animatedVal, {
        toValue: 1,
        tension: 20,
        useNativeDriver: true
    }), [animatedVal])

    useEffect(() => {
        async function getScreenData() {
            setIsLoading(true)
            const response = await api.get('/discover')

            setDiscoverList(response.data)
            setIsLoading(false)
            animation.start()
        }
        getScreenData()
    }, [animation])

    function onButtonPress(title, id) {
        navigation.navigate('MovieDetailsScreen', {
            movieTitle: title,
            movieId: id
        })
    }

    function renderMovieList({ item: { title, movies } }) {
        return (
            <View style={styles.containerItem}>
                <Text style={styles.containerItemTitle}>
                    {title}
                </Text>
                <FlatList
                    data={movies}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderMovieCard}
                    keyExtractor={(it) => `discover-item-${it.id}`}
                />
            </View>
        )
    }

    function renderMovieCard({ item, index }) {
        const initialTranslation = (index + 1) * 250
        const translateX = animatedVal.interpolate({
            inputRange: [0, 1],
            outputRange: [initialTranslation, 2]
        })
        const customStyle = { transform: [{ translateX }], opacity: animatedVal }

        return (
            <Animated.View style={customStyle}>
                <DiscoverCard
                    name={item.title}
                    image={item.poster_path}
                    language={item.original_language}
                    onPress={() => onButtonPress(item.title, item.id)} />
            </Animated.View>
        )
    }

    function renderContent() {
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        } else {
            return (
                <View style={styles.containerList}>
                    <FlatList
                        data={discoverList}
                        renderItem={renderMovieList}
                        keyExtractor={(it) => `movie-group-${it.title}`}
                    />
                </View>
            )
        }
    }

    return renderContent()
}