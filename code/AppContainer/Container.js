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
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { color } from "react-native-elements/dist/helpers";
import { addTask } from "../brain/logic";
const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3']

const Tab = createMaterialTopTabNavigator();

function App() {
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName="Tasks"
                activeTintColor="blue" // set the color you want for active tabs
                inactiveTintColor="gray" // set the color you want for inactive tabs
            >
                <Tab.Screen name="Zap" component={QuickTasker} />
                <Tab.Screen name="Tasks" component={ViewTask} />
                <Tab.Screen name="New" component={AddTask} />
            </Tab.Navigator>


        </NavigationContainer>
    );
}

export default App;
