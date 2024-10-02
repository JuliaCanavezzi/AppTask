import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as screens from './screen/Screens'

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Login" component={screens.Login} />
                <Drawer.Screen name="Home" component={screens.Home} />
                <Drawer.Screen name="NewTask" component={screens.NewTask} />
                <Drawer.Screen name="Edit" component={screens.Edit} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
