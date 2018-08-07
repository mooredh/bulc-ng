import {
    StyleSheet,
    Dimensions
} from 'react-native'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    welcome: {
        marginTop: height * 0.02,
        textAlign: 'center',
        color: '#fff',
        fontSize: height * 0.05,
        fontWeight: '100',
    },
    valMsg: {
        color: 'red',
        paddingBottom: height * 0.01,
    },
    formContainer: {
        padding: height * 0.03,
    },
    input: {
        height: height * 0.06,
        backgroundColor: 'rgba(255,255,255,0.5)',
        color: '#fff',
        paddingHorizontal: width * 0.02,
        marginBottom: height * 0.02,
        borderRadius: height * 0.01,
    },
    buttonContainer: {
        backgroundColor: '#0072bc',
        paddingVertical: height * 0.02,
        borderRadius: height * 0.01,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
    },
});