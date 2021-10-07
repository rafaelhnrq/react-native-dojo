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
        height: 355,
        width: '100%'
    },
    infoContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 15
    },
    name: {
        fontSize: 30,
        color: '#FFF'
    },
    extraInfo: {
        fontSize: 14,
        color: '#FFF'
    },
    summaryContainer: {
        flex: 1
    },
    summaryTitle: {
        fontSize: 16,
        color: '#0294A5',
        padding: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#0294A5'
    },
    subContainer: {
        backgroundColor: '#EEEEEE'
    },
    subContainerTitle: {
        paddingTop: 25,
    },
    subContainerText: {
        color: '#4A4A4A',
        paddingHorizontal: 15,
        paddingBottom: 15,
        fontSize: 14
    }
})