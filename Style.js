import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containerLight: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        fontFamily: 'serif',
        fontSize: 50,
        color: '#000',
        marginBottom: 20,
        textAlign: 'center'
    },
    textDark: {
        color: '#fff',
    },
    textLight: {
        color: '#000',
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        width: 260,
        marginBottom: 20,
        borderColor: '#000',
    },
    button: {
        fontSize: 25,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#4B53B4',
        width: 260,
    },
    themeButton: {
        position: 'absolute',
        top: 60,
        right: 20,
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#4B53B4',
    },
    textButton: {
        fontSize: 20,
        color: "#FFF"
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    top: {}
});
