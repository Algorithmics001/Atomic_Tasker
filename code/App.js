import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./MyComp/Home";
import AddTask from "./MyComp/AddTask";
import ViewTask from "./MyComp/ViewTask";

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
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;