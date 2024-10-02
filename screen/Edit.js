import { style } from "../Style";
import { Pressable, Text, TextInput, View, Alert } from "react-native";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export function Edit({ navigation, route }) {
    const { task, onGoBack } = route.params || {}; // Aqui está a linha 7
    const db = getFirestore();

    if (!task) {
        return (
            <View>
                <Text>Task não encontrada. Verifique a navegação.</Text>
            </View>
        );
    }

    const [title, setTitle] = useState(task.title);
    const [dueDate, setDueDate] = useState(task.dueDate);

    const handleSave = async () => {
        try {
            await updateDoc(doc(db, "tasks", task.id), {
                title,
                dueDate,
            });
            onGoBack(); 
            navigation.navigate('Home'); 
        } catch (error) {
            Alert.alert("Erro", "Erro ao atualizar a tarefa: " + error.message);
        }
    };

    return (
        <View style={style.containerNew}>
            <Text style={{ fontSize: 16, padding: 5 }}>Task:</Text>
            <TextInput
                style={style.input}
                value={title}
                onChangeText={setTitle}
                maxLength={16}
                placeholder='Task Name'
            />

            <Text style={{ fontSize: 16, padding: 5 }}>Data:</Text>
            <TextInput
                style={style.input}
                value={dueDate}
                onChangeText={setDueDate}
                placeholder='Task Close Data'
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <Pressable onPress={() => navigation.navigate('Home')} style={style.cancelBtn}>
                    <Text style={style.textButton}>Cancel</Text>
                </Pressable>
                <Pressable onPress={handleSave} style={style.editBtn}>
                    <Text style={style.textButton}>Enviar</Text>
                </Pressable>
            </View>
        </View>
    );
}
