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
    forgotContainer: {
        flex: 1,
        width: width * 0.4,
        paddingTop: height * 0.01,
    },
    forgotText: {
        color: 'rgba(47,129,182,0.85)',
    },
    snContainer: {
        marginTop: height * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: height * 0.03,
    },
    snFacebook: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        paddingVertical: height * 0.02,
        borderTopLeftRadius: height * 0.01,
        borderBottomLeftRadius: height * 0.01,

    },
    snGoogle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#db4437',
        paddingVertical: height * 0.02,
        borderTopRightRadius: height * 0.01,
        borderBottomRightRadius: height * 0.01
    },
    snIcon: {
        paddingLeft: width * 0.02,
    },
    snText: {
        color: '#fff',
        width: width * 0.3,
        paddingLeft: width * 0.02,
    }
});