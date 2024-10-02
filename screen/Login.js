import { style } from "../Style";
import { Pressable, Text, TextInput, View, Image, Alert } from "react-native";
import { initializeApp } from 'firebase/app';
import React, { useState } from 'react';
import { firebaseConfig } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuário Logado!');
                const user = userCredential.user;
                console.log(user);
                Alert.alert('Login efetuado com sucesso!');
                navigation.navigate('Home');
            })
            .catch(error => {
                console.log(error);
                Alert.alert(error.message);
            });
    };

    return (
        <View style={style.container}>
            <View style={style.top}>
                <Image source={require('../assets/task.png')} style={style.image} />
                <Text style={style.title}>App Task</Text>
            </View>

            <TextInput
                style={style.input}
                placeholder="Digite seu E-mail"
                onChangeText={(text) => setEmail(text)}
                value={email} 
            />
           <TextInput
                style={style.input}
                placeholder="Digite sua Senha"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                value={password} 
            />
            <Pressable onPress={handleSignIn} style={style.button}> 
                <Text style={style.textButton}>Log-in</Text>
            </Pressable>
        </View>
    );
}
