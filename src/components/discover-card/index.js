import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export function DiscoverCard(props) {
    const { image, name, language, onPress } = props

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image resizeMode="cover" style={styles.image} source={{ uri: image }}/>
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText} numberOfLines={2}>
                    {name}
                </Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>
                    {language}
                </Text>
            </View>
        </TouchableOpacity>
    )
}