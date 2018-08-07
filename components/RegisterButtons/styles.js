import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#2fb2c0',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {},
    blueText: {
        paddingHorizontal: width * 0.1,
        paddingVertical: height * 0.02,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        color: '#2fb2c0',
    },
    whiteText: {
        paddingHorizontal: width * 0.1,
        paddingVertical: height * 0.02,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#2fb2c0',
        color: '#fff',
    }
});