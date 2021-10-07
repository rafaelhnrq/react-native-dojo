import React, { useLayoutEffect, useEffect, useState, useRef, useMemo } from 'react'
import { View, Text, ScrollView, ActivityIndicator, ImageBackground, FlatList, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { api } from '../../services'
import moment from 'moment'

import styles from './styles'
import { ArtistCard } from '../../components';

export function MovieDetailsScreen({ route, navigation }) {
    const { movieTitle, movieId } = route.params
    const [isLoading, setIsLoading] = useState(false)
    const [movieDetail, setMovieDetail] = useState({})
    const animatedVal = useRef(new Animated.Value(0)).current

    const animation = useMemo(() => Animated.spring(animatedVal, {
        toValue: 1,
        friction: 12,
        useNativeDriver: true
    }), [animatedVal])

    useLayoutEffect(() => {
        navigation.setOptions({ title: movieTitle })
    }, [movieTitle, navigation])

    useEffect(() => {
        async function getScreenData() {
            setIsLoading(true)
            const response = await api.get(`/movies/${movieId}`)
            setMovieDetail(response.data)
            setIsLoading(false)
            animation.start()
        }
        getScreenData()
    }, [movieId, animation])

    function renderGenres(genres) {
        if (genres) {
            return genres.map(({ name }) => name).reduce((acc, genre) => `${acc} | ${genre}`)
        }
        return ''
    }

    function parseRuntime(runtime) {
        const hours = (runtime / 60);
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours) * 60;
        const rminutes = Math.round(minutes);
        return `${rhours}h ${rminutes}m`
    }

    function renderArtistCard({ item, index }) {
        return (
            <ArtistCard
                name={item.name}
                image={item.profile_path}
                index={index}
                imageStyle={{ width: 110 }}
            />
        )
    }

    const initialTranslation = 1000
    const translateY = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [initialTranslation, 2]
    })
    const customStyle = { transform: [{ translateY }], opacity: animatedVal }

    function renderContent() {
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <Animated.View style={customStyle}>
                <ScrollView>
                    <View>
                        <ImageBackground source={{ uri: movieDetail.backdrop_path }} resizeMode="cover" style={styles.image}>
                            <LinearGradient colors={['rgba(255,255,255,0.00)', 'rgba(255,255,255,0.00)', 'rgba(255,255,255,0.8)']} style={styles.linearGradient}>
                            </LinearGradient>
                        </ImageBackground>
                        <View style={styles.genreContainer}>
                            <Text style={styles.genre}>{renderGenres(movieDetail.genres)}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.movieInfoContainer}>
                            <Text style={styles.movieInfoText}>Language: </Text>
                            <Text style={[styles.movieInfoText, styles.movieInfoTextLanguage]}>{movieDetail.original_language}</Text>
                        </View>
                        <View style={styles.movieInfoContainer}>
                            <Text style={styles.movieInfoText}>{moment(movieDetail.release_date).format('LL')}</Text>
                            <Text style={[styles.movieInfoText, styles.movieInfoTextRuntime]}>{parseRuntime(movieDetail.runtime)}</Text>
                        </View>
                    </View>
                    <View style={styles.synopsisContainer}>
                        <Text style={styles.synopsisTitle}>Synopsis</Text>
                        <Text style={styles.synopsisText}>{movieDetail.overview}</Text>
                    </View>
                    <View>
                        <Text style={styles.castTitle}>Cast</Text>
                        <FlatList
                            data={movieDetail.cast}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(it) => `artist-item-${it.cast_id}`}
                            renderItem={renderArtistCard}
                        />
                    </View>
                </ScrollView>
            </Animated.View>
        )
    }

    return renderContent()
}
