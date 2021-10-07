import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: 140,
        backgroundColor: '#FFF'
    },
    imageContainer: {
        height: 180
    },
    image: {
        flex: 1
    },
    bottomTextContainer:{
        paddingVertical: 5,
        paddingHorizontal: 15,
        height: 45,
        justifyContent: 'center'
    },
    bottomText: {
        textAlign: 'center',
        fontSize: 14
    },
    subtitleContainer: {
        paddingBottom: 5,
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    subtitleText: {
        fontSize: 13,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#9B9B9B'
    }
})