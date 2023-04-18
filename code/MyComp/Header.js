import React, { useState } from 'react';
import { Header, Icon } from 'react-native-elements';
import { Dimensions, View, Text, Touchable, TouchableOpacity,StyleSheet } from 'react-native';

var colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff', '#6D726E', '#fff'];

const { width, height } = Dimensions.get("window");
const { scale } = Dimensions.get("window");

let x = 3.5 / scale
const Scale = scale * x

let y = 411.42857142857144 / width
const Width = width * y

let z = 804.5714285714286 / height

const Height = height * z

const iconSize = Scale * 5;

const AppHeader = () => {


  const fontSize = Scale * 6;

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Header
      backgroundColor="#2d414e"
      leftComponent={{
        text: 'Atomic Tasker',
        style: styles.leftComp
      }}
      rightComponent={
        <View
            style={styles.rightComp}
        >
          <Icon
            name="menu"
            color="#fff"
            type="material"
            size={Scale * 9}
            onPress={()=>{setMenuVisible(true)}}
          />
          {menuVisible && (
            <View
                style={{
                    position: 'absolute',
                    backgroundColor:colors[5],

                }}
            >
                <TouchableOpacity
                style={styles.menuItems}
                ><Text
                    
                >dsah</Text></TouchableOpacity>
                <TouchableOpacity
                style={styles.menuItems}
                ><Text
                    
                >dsah</Text></TouchableOpacity>
                <TouchableOpacity
                style={styles.menuItems}
                ><Text
                    
                >dsah</Text></TouchableOpacity>

              {/* Your menu items here */}
            </View>
          )}
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  leftComp: {
    color: '#fff',
    marginLeft: Width * 0.03,
    marginVertical: Height * 0.01,
    fontWeight: 'bold',
    fontSize: fontSize,
    width: Width * 0.5,
  },

  rightComp: {
    marginTop: Height * 0.01
  },

  menuItems: {
    paddingHorizontal: Width * 0.01
  }
})

export default AppHeader;
