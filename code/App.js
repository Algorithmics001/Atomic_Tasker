import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./MyComp/Home";
import AddTask from "./MyComp/AddTask";
import ViewTask from "./MyComp/ViewTask";
import { getStyle } from "react-native-svg/lib/typescript/xml";
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#E0DFE3']


function App() {
  const Stack = createNativeStackNavigator();
  return ( 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={Home}
          />
          <Stack.Screen
          name="AddTask"
          component={AddTask}
          />
          <Stack.Screen
          name="ViewTask"
          component={ViewTask}
          options={{
            title: 'All Tasks',
          }}

          />
        </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App;