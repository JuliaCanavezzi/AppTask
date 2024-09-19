import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Appearance } from 'react-native';
import * as screens from './screen/Screens';
import { style } from './Style';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <View style={isDarkMode ? style.containerDark : style.containerLight}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <screens.Login isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </View>
  );
}
