import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    title:{
        fontSize: 50,
        color: '#000',
        marginBottom: 120,
        textAlign: 'center'
    },
    label:{
        fontSize: 20,
        color:'#000'
        
    },
    input:{
        height: 40,
        borderWidth: 2,
        borderRadius: '15px',
        padding: 10,
        width: 260,
        marginBottom: '20px'
    },
    button:{
        fontSize: '25px',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: 'green'

    },
    textButton:{
        fontSize: '20px'
    }
});