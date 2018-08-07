import {
    StyleSheet,
    Dimensions
} from 'react-native'

const {
    height,
    width
} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2fb2c0',
        flex: 1,
        paddingTop: height * 0.03,
    },
    logo: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        position: 'relative',
        width: width * 0.15,
        height: height * 0.10
    }
});