import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import AddTask from './AddTask';

const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3']
const { width, height, scale } = Dimensions.get("window");


let x = 3.5 / scale
const Scale = scale * x

let y = 411.42857142857144 / width
const Width = width * y

let z = 804.5714285714286 / height

const Height = height * z

const iconSize = Scale * 5;

const fontSize = Scale * 5;

const styles = StyleSheet.create({
    menuView: {
        backgroundColor: 'white',
        width: Width * 0.45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: Scale * 5 },
        shadowOpacity: 0.5,
        shadowRadius: Scale * 5,
        elevation: 5
    },
    menuItems: {
    },
    menuText: {
        marginHorizontal: Width * 0.03,
        marginVertical: Height * 0.015,
        fontSize: fontSize
    }
})




const Menu = (props) => {

    const {navigation, setMenuVisible} = props;

    return (
        <View
            style={styles.menuView}

        >

            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Completed Tasks') 
                setMenuVisible(false)
                }}
                style={styles.menuItems}
            ><Text
                style={styles.menuText}
            >Completed Tasks</Text></TouchableOpacity>


            <TouchableOpacity
                style={styles.menuItems}
            ><Text
                onPress={()=>{
                navigation.navigate('How To Use') 
                setMenuVisible(false)
                }}
                style={styles.menuText}
            >How To Use</Text></TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItems}
                disabled={true}
            ><Text
                style={styles.menuText}
            >Sign In</Text></TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Settings') 
                setMenuVisible(false)       
            }}
                style={styles.menuItems}
            ><Text
                style={styles.menuText}
            >Settings</Text></TouchableOpacity>


            <TouchableOpacity
                style={styles.menuItems}
            ><Text
                style={styles.menuText}
            >Set Wallpaper</Text></TouchableOpacity>



        </View>
    )
}

export default Menu;