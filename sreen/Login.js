import { style } from "../Style";
import { Pressable, Text, TextInput, View } from "react-native";

export function Login({navigation}){
    return(
        <View>
            <Text style={style.title}>App Task</Text>
            <Text style={style.label}>User</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.label}>Passowrd</Text>
            <TextInput style={style.input}></TextInput>
            <Pressable style={style.button}>
                <Text style = {style.textButton}>Log-in</Text>
            </Pressable>
        </View>
    );
}