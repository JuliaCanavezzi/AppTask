import { createStackNavigator } from '@react-navigation/stack';
import * as screens  from "../screen/Screens";


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={screens.Login} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={screens.Home}/>
      <Stack.Screen name="NewTask" component={screens.NewTask} />
      <Stack.Screen name="Edit" component={screens.Edit} />
    </Stack.Navigator>
  )
}