import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Dimensions, NativeModules, PermissionsAndroid,  } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Home from "./HomeNotInUse";
import AddTask from "./AddTask";
import ViewTask from "./ViewTask";
import AppHeader from "./Header";
import MyProfile from "./MyProfile";
import QuickTasker from "./QuickTasker";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from "./Menu";
import { Screen } from "react-native-screens";
import {resetAIjson, resetHIjson, resetHistory} from '../brain/testing'
import {resetJson} from '../brain/QuickTasker'
import Tab from "./Tab";
 
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
// const Tab = createMaterialTopTabNavigator();

const packageName = NativeModules?.AppInfo?.packageName ?? '';
const filePath1 = `${RNFS.DocumentDirectoryPath}/${packageName}/hi.json`;
const filePath2 = `${RNFS.DocumentDirectoryPath}/${packageName}/Avalible_ID.json`;
const filePath3 = `${RNFS.DocumentDirectoryPath}/${packageName}/QuickTasks.json`;
const cmpPath = `${RNFS.DocumentDirectoryPath}/${packageName}/Complete.json`;

const RNFS = require('react-native-fs')

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
    const navigation = useNavigation()

    const [menuVisible, setMenuVisible] = useState(false);

    const handlePressOutsideMenu = () => {
        setMenuVisible(false)
        
    }
    
    const requestStoragePermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Atomic-Tasker App needs storage permission ',
              message:
                'Atomic-Tasker App needs access to your storage ' +
                'to save the data',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the storage')
    
            RNFS.exists(filePath1)
              .then((exists) => {
                if (exists) {
                  console.log('File exists');
                  // resetHIjson()
                  // resetAIjson()
                  // resetHistory()
                } else {
                  resetHIjson()
                  resetAIjson()
                  resetHistory()
                }
              })
              .catch((error) => {
                console.log(error);
            });
    
            RNFS.exists(filePath2)
              .then((exists) => {
                if (exists) {
                  console.log('File exists');
                } else {
                  resetAIjson()
                  resetHIjson()
                  resetHistory()
                }
              })
              .catch((error) => {
                console.log(error);
            });
    
            RNFS.exists(filePath3)
              .then((exists) => {
                if (exists) {
                  console.log('File exists');
                } else {
                  resetJson()
                }
              })
              .catch((error) => {
                console.log(error);
            });
    
          } else {
            console.log('Storage permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      };
    
    useEffect(() => {
    requestStoragePermission()    
    }, [])

    return (
        <TouchableWithoutFeedback onPress={() => handlePressOutsideMenu()}
        >
            <View style={styles.container}>
            {/* <AppHeader setMenuVisible={setMenuVisible}  />
                {menuVisible && (
                    <View style={[styles.menuView]} >
                        <Menu setMenuVisible={setMenuVisible} navigation={navigation} />
                    </View>
                )} */}
                {/* <Button onPress={()=>navigation.navigate('Add Task')} title="new"></Button> */}

                <Tab navigation={navigation}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default AppContainer;
