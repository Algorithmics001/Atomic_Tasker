import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeNotInUse";
import AddTask from "./AddTask";
import ViewTask from "./ViewTask";
import AppHeader from "./Header";
import MyProfile from "./MyProfile";
import QuickTasker from "./QuickTasker";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from "./Menu";
import { Screen } from "react-native-screens";

const { width, height } = Dimensions.get("window");
const { scale } = Dimensions.get("window");

let x = 3.5 / scale
let Scale = scale * x

let y = 411.42857142857144 / width
let Width = width * y

let z = 804.5714285714286 / height

let Height = height * z

const iconSize = Scale * 5;
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
        marginTop: Height * 0.055
    },
    tabBar: {
        backgroundColor: '#fff',
    },
});

function AppContainer(props) {

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
                <Tab.Navigator initialRouteName="Tasks"
                    screenOptions={{
                        style: styles.tabBar,
                    }}>
                    <Tab.Screen name="Zap" component={QuickTasker} />
                    <Tab.Screen name="Tasks" component={ViewTask} />
                    <Tab.Screen name="Profile" component={MyProfile} />
                </Tab.Navigator>

            </View>
        </TouchableWithoutFeedback>
    );
}

export default AppContainer;
