import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useState } from 'react';
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
  console.log(scale, width, height)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Todo 1',
      date: '2022-01-01',
      description: 'This is the first todo item',
      prior: 'High',
      duration: '2 hours'
    },
    {
      id: 2,
      title: 'Todo 2',
      date: '2022-02-01',
      description: 'This is the second todo item',
      prior: 'Low',
      duration: '1 hour'
    },
    {
      id: 3,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
      prior: 'Medium',
      duration: '3 hours'
    },
    {
      id: 4,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
      prior: 'Medium',
      duration: '3 hours'
    },
    {
      id: 5,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
      prior: 'Medium',
      duration: '3 hours'
    },
    {
      id: 6,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
      prior: 'Medium',
      duration: '3 hours'
    },
    {
      id: 7,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
      prior: 'Medium',
      duration: '3 hours'
    },
  ]);

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
              <Text style={styles.dateText}>{todo.date}</Text>
              </View>
            </View>

            <Text style={styles.priorText}>Priority: {todo.prior}</Text>
            <Text style={styles.descText}>Description: {todo.description}</Text>
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
    marginBottom: Scale * 1,
    backgroundColor: colors[2],
    borderTopRightRadius: Scale*5
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