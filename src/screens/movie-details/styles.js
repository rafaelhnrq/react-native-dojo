import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        flex: 1
    },
    image: {
        height: 275,
        width: '100%'
    },
    genreContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 15
    },
    genre: {
        fontSize: 18,
        color: '#4A4A4A'
    },
    infoContainer: {
        padding: 15
    },
    movieInfoTextLanguage: {
      textTransform: 'capitalize',
      marginLeft: 5
    },
    movieInfoContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },
    movieInfoTextRuntime: {
        marginLeft: 15
    },  
    movieInfoText: {
        fontSize: 13,
        color: '#4A4A4A'
    },
    synopsisContainer: {
        padding: 15,
    },
    synopsisTitle: {
        color: '#4A4A4A',
        fontSize: 18,
        fontWeight: "600"
    },
    synopsisText: {
        color: '#4A4A4A',
        fontSize: 14,
        marginTop: 10,
        letterSpacing: 0.215385
    },
    castTitle: {
        fontSize: 16,
        color: '#0294A5',
        padding: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#0294A5'
    }
})