import React, { useState, useEffect } from "react";
import { style } from "../Style";
import Modal from "react-native-modal"; 
import { ScrollView } from "react-native"; 
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, Text, View, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkbox from 'expo-checkbox'; 
import { getFirestore, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

export function Home({ navigation }) {
  const [tasks, setTasks] = useState([]); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [taskToDelete, setTaskToDelete] = useState(null); 
  const db = getFirestore(); 

  useEffect(() => {
    fetchTasks(); 
  }, []);

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks")); 
    const tasksArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(tasksArray);
  };

  const goToNewTask = () => {
    navigation.navigate('NewTask', {
      onGoBack: fetchTasks, 
    });
  };

  const confirmDeleteTask = (id) => {
    setTaskToDelete(id); 
    setModalVisible(true);
  };

  const deleteTask = async () => {
    if (taskToDelete) {
      try {
        await deleteDoc(doc(db, "tasks", taskToDelete));
        fetchTasks();
      } catch (error) {
        Alert.alert("Erro", "Erro ao excluir tarefa: " + error.message);
      }
      setTaskToDelete(null);
    }
    setModalVisible(false); 
  };

  const toggleTaskStatus = async (id, currentStatus) => {
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, { completed: !currentStatus });
      fetchTasks();
    } catch (error) {
      Alert.alert("Erro", "Erro ao atualizar status: " + error.message);
    }
  };

  const Item = ({ task }) => {
    const [checked, setChecked] = useState(task.completed || false);

    const toggleCheckbox = () => {
      setChecked(!checked);
      toggleTaskStatus(task.id, checked);
    };

    return (
      <View style={style.cardContainer}>
        <Text style={style.title}>{task.title}</Text>
        <Text style={style.dueDate}>Prazo: {task.dueDate}</Text>

        <View style={style.buttonContainer}>
          <Pressable
            style={[style.btnSm, { backgroundColor: "#4B53B4" }]}
            onPress={() => navigation.navigate('Edit', { task, onGoBack: fetchTasks })} 
          >
            <Icon name="pencil" size={20} color="#fff" />
          </Pressable>
          <Pressable
            style={[style.btnSm, { backgroundColor: "red", marginLeft: 8 }]}
            onPress={() => confirmDeleteTask(task.id)} 
          >
            <Icon name="trash" size={20} color="#fff" />
          </Pressable>
        </View>

        <View style={style.checkboxContainer}>
          <Checkbox
            style={style.checkbox}
            value={checked}
            onValueChange={toggleCheckbox}
          />
          <Text style={style.checkboxLabel}>Finalizado</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.newCont}>
      <ScrollView style={{ paddingBottom: 60, paddingHorizontal: 16 }}> 
        {tasks.map(task => (
          <Item key={task.id} task={task} />
        ))}
      </ScrollView>
      <Pressable onPress={goToNewTask} style={style.addButton}>
        <Text style={style.txtAdd}>+</Text>
      </Pressable>

      
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)} 
      >
        <View style={style.modalContent}>
          <Text style={style.modalText}>Certeza que deseja excluir essa tarefa?</Text>
          <View style={style.modalButtons}>
            <Pressable onPress={deleteTask} style={[style.modalButton, style.confirmButton]}>
              <Text style={style.buttonText}>Sim</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)} style={[style.modalButton, style.cancelButton]}>
              <Text style={style.buttonText}>Não</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}