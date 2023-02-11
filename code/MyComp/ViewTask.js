import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { Appearance } from 'react-native';


const{width, height} = Dimensions.get("window");
const { scale } = Dimensions.get("window");


let x = 3.5/scale
Scale = scale*x

let y  = 411.42857142857144/width
Width = width*y

let z = 804.5714285714286/height

Height = height*z

var colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#E0DFE3', '#fff','#6D726E', '#fff'];

const colorscheme = Appearance.getColorScheme()
if(colorscheme === 'dark'){
  colors[3] = colors[2]
  colors[5] = '#273436'
  colors[6] = 'white'
  colors[2] = '#200E36'
  colors[1] = '#3DEBB2'
  colors[7] = '#A38EBE'
}

const ViewTask = (navigation) => {
  const [todos, setTodos] = useState([])

  const RNFS = require('react-native-fs')

const path = `${RNFS.ExternalStorageDirectoryPath}/Documents/hi.json`;
  

useEffect(() => {
  async function readTasks() {
    const path = `${RNFS.ExternalStorageDirectoryPath}/Documents/hi.json`;
    try {
      const value = await RNFS.readFile(path);
      const jsonData = JSON.parse(value);
      const result = jsonData.Task_List.slice(1);
      setTodos(result);
    } catch (error) {
      console.error(error);
    }
  }
  readTasks();
}, []);
console.log(todos)
// console.log(todos)
  const iconSize = Scale * 7;
  return (
    <>
      <ScrollView style={{backgroundColor:colors[7]}}>
        {todos.map(todo => (
          <View style={styles.viewStyle}>
            <View style={{backgroundColor: colors[3], borderTopEndRadius: Scale * 5, flex: 1, flexDirection: 'row'}}>
              <View style={{backgroundColor: colors[1], Width: Scale * 12, Height: Scale * 12, alignItems: 'center', padding: Scale * 2}}>
                <FontAwesome5 name={'check'} size={iconSize} color={colors[3]} />
              </View>

              <Text style={styles.titleText}>{todo.title}</Text>
              <View style={{flex:1, alignItems:'flex-end'}}>
              <Text style={styles.dateText}>{todo.deadline.substring(0, 10)}</Text>
              </View>
            </View>

            <Text style={styles.priorText}>Priority: {todo.desp}</Text>
            <Text style={styles.descText}>Description: {todo.priority}</Text>
            <Text style={styles.durationText}>Duration: {todo.duration}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: Height*0.004 * 3,
    marginHorizontal: Width*0.009 * 5,
    marginBottom: Scale * 3,
    backgroundColor: colors[2],
    borderTopRightRadius: Scale*5,
    paddingBottom : Height*0.02
  },
  titleText: {
    fontSize: Scale * 6,
    fontWeight: 'bold',
    paddingTop: Height*0.004 * 2,
    paddingLeft: Width*0.009 * 4,
    color: colors[5]
  },
  dateText: {
    color:colors[5],
    fontSize: Scale * 6,
    fontWeight: 'bold',
    paddingTop: Height*0.004 * 2,
    paddingHorizontal: Width * 0.03,
    color: colors[5]
  },
  descText:{
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height*0.004 * 2,
    paddingLeft: Width*0.009 * 4,
    color:colors[6]
  },
  priorText:{
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height*0.004 * 2,
    paddingLeft: Width*0.009 * 4,
    color:colors[6]
  },
  durationText:{
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height*0.004 * 2,
    paddingLeft: Width*0.009 * 4,
    color:colors[6]
  }
})

export default ViewTask