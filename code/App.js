import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./MyComp/Home";
import AddTask from "./MyComp/AddTask";
import ViewTask from "./MyComp/ViewTask";
import Settings from "./MyComp/Settings";
import SetWallpaper from "./MyComp/SetWallpaper"
import MyProfile from "./MyComp/MyProfile";
import QuickTasker from "./MyComp/QuickTasker";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppHeader from './MyComp/Header'
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#E0DFE3']

const Tab = createMaterialTopTabNavigator();
// function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" >
//         <Stack.Screen
//           name="Home"
//           component={Home}
//         />
//         <Stack.Screen
//           name="AddTask"
//           component={AddTask}
//         />
//         <Stack.Screen
//           options={{title:"All Tasks", statusBarColor:colors[3]}}
//           name="ViewTask"
//           component={ViewTask}
//         />
//       <Stack.Screen
//           options={{title:"Settings", statusBarColor:colors[3]}}
//           name="Settings"
//           component={Settings}
//         />
//         <Stack.Screen
//           name="SetWallpaper"
//           component={SetWallpaper}
//           />
//             <Stack.Screen
//           options={{title:"All Tasks", statusBarColor:colors[3]}}
//           name="MyProfile"
//           component={MyProfile}
//         />
//         <Stack.Screen
//           options={{title:"All Tasks", statusBarColor:colors[3]}}
//           name="QuickTasker"
//           component={QuickTasker}
//         />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

function App () {
  return (
    <>
    <AppHeader />
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Tasks">
      <Tab.Screen name="New" component={AddTask} />
      <Tab.Screen name="Tasks" component={ViewTask} />
      <Tab.Screen name="Profile" component={MyProfile} />
    </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;