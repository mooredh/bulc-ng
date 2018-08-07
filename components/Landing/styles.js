import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(58, 0, 93, 0.46)',
        flex: 1
    },
    backgroundImage: {
        width,
        height,
        flex: 1
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        position: 'relative',
        width: '40%',
        height: '40%'
    },
    logoText: {
        width: '70%',
        color: '#fff',
        fontSize: 21,
    },
    buttonContainer: {
        paddingVertical: height * 0.04,
        backgroundColor: '#2fb2c0',
    },
});