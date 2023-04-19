import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./MyComp/Home";
import AddTask from "./MyComp/AddTask";
import ViewTask from "./MyComp/ViewTask";
import Settings from "./MyComp/Settings";
import SetWallpaper from "./MyComp/SetWallpaper"
import MyProfile from "./MyComp/MyProfile";
import QuickTasker from "./MyComp/QuickTasker";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppHeader from './MyComp/Header'
import Menu from "./MyComp/Menu";
import { Screen } from "react-native-screens";

const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3']
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuView: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        backgroundColor: 'green',
    },
    tabBar: {
        backgroundColor: '#fff',
    },
});

function App(props) {

    const [menuVisible, setMenuVisible] = useState(false);

    const handlePressOutsideMenu = () => {
        setMenuVisible(false)
    }

    return (
        <TouchableWithoutFeedback onPress={() => handlePressOutsideMenu()}
        >
            <View style={styles.container}>
                <AppHeader setMenuVisible={setMenuVisible} />
                {menuVisible && (
                    <View style={[styles.menuView]} >
                        <Menu />
                    </View>
                )}
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Tasks"
                        screenOptions={{
                            style: styles.tabBar,
                        }}>
                        <Tab.Screen name="Zap" component={QuickTasker} />
                        <Tab.Screen name="Tasks" component={ViewTask} />
                        <Tab.Screen name="Profile" component={MyProfile} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default App;
