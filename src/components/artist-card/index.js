import React, { useRef, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View, Animated } from 'react-native'

import styles from './styles'

export function ArtistCard(props) {
    const { image, name, empty = false, onPress, index, imageStyle = {} } = props

    if (empty) return <View style={[styles.container, styles.empty]} />

    const animatedVal = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animatedVal, {
            toValue: 1,
            duration: 1000,
            delay: index * 100,
            useNativeDriver: true
        }).start()
    }, [index, animatedVal])

    console.log(image)

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, { ...imageStyle }]}>
            <Animated.View style={[styles.animatedViewStyle, { opacity: animatedVal }]}>
                <View style={styles.imageContainer}>
                    <Image resizeMode="cover" style={styles.image} source={{
                        uri: image, headers: {
                            Accept: '*/*',
                        },
                    }} />
                </View>
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>
                        {name}
                    </Text>
                </View>
            </Animated.View>
        </TouchableOpacity>
    )
}