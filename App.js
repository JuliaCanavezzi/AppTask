import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as screens from './sreen/Screens'
import { style } from './Style';

export default function App() {
  return (
    <View style={style.container}>
      <screens.Login></screens.Login>
    </View>
  );
}

