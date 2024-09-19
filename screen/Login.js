import React from "react";
import { style } from "../Style";
import { Pressable, Text, TextInput, View, Image } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';

export function Login({ isDarkMode, toggleTheme }) {
    const containerStyle = isDarkMode ? style.containerDark : style.containerLight;
    const textStyle = isDarkMode ? style.textDark : style.textLight;

    return (
        <View style={containerStyle}>
             <Pressable onPress={toggleTheme} style={style.themeButton}>
                {isDarkMode ? (
                    <MaterialIcons name="sunny" size={24} color="#FFF" />
                ) : (
                    <Ionicons name="moon-outline" size={25} color="#000" />
                )}
            </Pressable>
            
            <View style={style.top}>
                <Image source={require('../assets/task.png')} style={style.image} />
                <Text style={[style.title, textStyle]}>App Task</Text>
            </View>
            
            <TextInput style={style.input} placeholder="Digite seu Usuário" placeholderTextColor={isDarkMode ? '#ccc' : '#000'} />
            <TextInput style={style.input} placeholder="Digite sua Senha" placeholderTextColor={isDarkMode ? '#ccc' : '#000'} />
            <Pressable style={style.button}>
                <Text style={style.textButton}>Log-in</Text>
            </Pressable>
        </View>
    );
}
