import React, { useState } from 'react';
import { Header, Icon } from 'react-native-elements';
import { Dimensions, View, Text, Touchable, TouchableOpacity } from 'react-native';

const { width, height, scale } = Dimensions.get('window');
var colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff', '#6D726E', '#fff'];

const AppHeader = () => {
  const xScale = 3.5 / scale;
  const yScale = 411.42857142857144 / width;
  const zScale = 804.5714285714286 / height;
  

  const Scale = scale * xScale;
  const Width = width * yScale;
  const Height = height * zScale;

  const fontSize = Scale * 6;

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Header
      backgroundColor="#2d414e"
      leftComponent={{
        text: 'Atomic Tasker',
        style: {
          color: '#fff',
          marginLeft: Width * 0.03,
          marginVertical: Height * 0.01,
          fontWeight: 'bold',
          fontSize: fontSize,
          width: Width * 0.5,
        },
      }}
      rightComponent={
        <View
            style={{marginTop: Height * 0.01}}
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
                style={{paddingHorizontal: Width * 0.01}}
                ><Text
                    
                >dsah</Text></TouchableOpacity>
                <TouchableOpacity
                style={{paddingHorizontal: Width * 0.01}}
                ><Text
                    
                >dsah</Text></TouchableOpacity>
                <TouchableOpacity
                style={{paddingHorizontal: Width * 0.01}}
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

export default AppHeader;
