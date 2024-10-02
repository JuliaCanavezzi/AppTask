import { style } from "../Style";
import { Pressable, Text, TextInput, View, Alert } from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { useEffect, useState } from "react";

export function NewTask({ navigation, route }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const db = getFirestore(); 

    const handleAddTask = async () => {
        if (taskTitle.trim() === '' || dueDate.trim() === '') {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return;
        }

        try {
            await addDoc(collection(db, "tasks"), { title: taskTitle, dueDate });
            Alert.alert("Sucesso", "Tarefa adicionada com sucesso!");
            navigation.navigate('Home'); 
            route.params?.onGoBack();
        } catch (error) {
            Alert.alert("Erro", "Erro ao adicionar tarefa: " + error.message);
        }
    };

    return (
        <View style={style.containerNew}>
            <View style={{ marginBottom: 40 }}>
                <Text style={{ fontSize: 16, padding: 5 }}>Task:</Text>
                <TextInput 
                    style={style.input}
                    maxLength={16}
                    placeholder='Task Name'
                    value={taskTitle}
                    onChangeText={setTaskTitle}
                />
                <Text style={{ fontSize: 16, padding: 5 }}>Data:</Text>
                <TextInput  
                    style={style.input}
                    placeholder='Task Close Data'
                    value={dueDate}
                    onChangeText={setDueDate}
                />
            </View>

            
                <View  style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <Pressable onPress={() => navigation.navigate('Home')} style={style.cancelBtn}>
                    <Text style={style.textButton}>Cancel</Text>
                </Pressable>
                    <Pressable onPress={handleAddTask} style={style.editBtn}>
                        <Text style={style.textButton}>
                            Enviar
                        </Text>
                    </Pressable>
                </View>
        </View>
    );
}
