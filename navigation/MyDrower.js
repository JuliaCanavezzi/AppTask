import { createDrawerNavigator } from "@react-navigation/drawer";
import * as screens from '../screen/Screens'

const Drawer = createDrawerNavigator()

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={screens.Login} options={{headerShown:false}} />
      <Drawer.Screen name="Home" component={screens.Home} />
      <Drawer.Screen name="NewTask" component={screens.NewTask} />
      <Drawer.Screen name="Edit" component={screens.Edit} />
    </Drawer.Navigator>
  )
}