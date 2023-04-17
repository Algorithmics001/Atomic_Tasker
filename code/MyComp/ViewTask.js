import React from 'react';
import { ToastAndroid, TouchableOpacity, NativeModules, View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';

import { useState, useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { Appearance } from 'react-native';
import AddTask from './AddTask.js';
import { removeTaskByID, returnTaskList } from '../brain/testing';


const packageName = NativeModules?.AppInfo?.packageName ?? '';

//for handling responsiveness
const { width, height } = Dimensions.get("window");
const { scale } = Dimensions.get("window");

let x = 3.5 / scale
Scale = scale * x

let y = 411.42857142857144 / width
Width = width * y

let z = 804.5714285714286 / height

Height = height * z

const iconSize = Scale * 5;

//for handling all the colors and dark mde
var colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff', '#6D726E', '#fff'];

const colorscheme = Appearance.getColorScheme()
if (colorscheme === 'dark') {
  colors[3] = colors[2]
  colors[5] = '#273436'
  colors[6] = 'white'
  colors[2] = '#200E36'
  colors[1] = '#3DEBB2'
  colors[7] = '#A38EBE'
}

//main function starts
// imports and other code here...

const ViewTask = (props) => {

  // hook for storing the data after getting from file stored locally
  const [todos, setTodos] = useState([]);
  returnTaskList().then(tasklist => {setTodos(tasklist)})

  // function to delete a task by its ID
  const deleteTask = (taskId) => {
    try {
      removeTaskByID(taskId)
      returnTaskList().then(tasklist => {setTodos(tasklist)})

      ToastAndroid.show('Task removed!', ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };

  const timeConvertion = (time) => {
    hrs = parseInt(time)/60 
    min = parseInt(time)%60
    return (parseInt(hrs) + 'hrs ' + min + 'min')
  }

  // renders all the tasks that are stored in todos hook
  return (
    <>
      <View style={styles.addBtnPos}>
        <TouchableOpacity
          style={styles.addBtn}

          onPress={() => { props.navigation.navigate('New', {ReturnedTaskData: {todo: {id:'' ,title:'', desc:'', curDate:new Date(), deadline:'', duration:'', priority:'', weight:''}}}) }}
        >
          <View
            style={{
              alignItems: 'center',
              marginVertical: height * 0.023
            }}
          >
            <FontAwesome5 name={'plus'} size={iconSize * 1.7} color={colors[4]} />
          </View>
        </TouchableOpacity>
      </View>
      {todos.length === 0 ? (
        <View style={styles.noTasksContainer}>
          <View>
            <Image
              source={require('../Assets/images/no_tasks_clock.png')}
              style={{
                height: '90%'
              }}
            />
          </View>
        </View>
      ) : (<>
        <ScrollView style={{ backgroundColor: colors[7] }}>
          {todos.map((todo) => (
            <View key={todo.id} style={styles.viewStyle}>
              <View style={{ backgroundColor: colors[3], borderTopEndRadius: Scale * 5, flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors[1], Width: Scale * 12, Height: Scale * 12, alignItems: 'center', padding: Scale * 2
                  }}
                  onPress={() => props.navigation.navigate('New', {ReturnedTaskData: {todo}})}
                >
                  <FontAwesome5 name={'pencil'} size={iconSize} color={colors[3]} />
                </TouchableOpacity>

                <Text style={styles.titleText}>{todo.title}</Text>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text style={styles.dateText}>{todo.deadline.substring(0, 10)}</Text>
                </View>
              </View>
              
              <Text style={styles.descText}>Description: {todo.desc}</Text>
              <Text style={styles.priorText}>Priority: {todo.priority}</Text>
              <Text style={styles.durationText}>Duration: {timeConvertion(todo.duration)}</Text>

              <TouchableOpacity
                style={{
                  flex: 1,
                  marginTop: height * 0.02
                }}
                onPress={() => deleteTask(todo.id)}
              >
                <View
                  style={{
                    backgroundColor: colors[3],
                  }}
                >
                  <View style={{ backgroundColor: colors[3], borderTopEndRadius: Scale * 5, flex: 1, flexDirection: 'row' }}>
                    <View
                      style={{

                        backgroundColor: colors[1],
                        Width: Scale * 12,
                        Height: Scale * 12,
                        alignItems: 'center',
                        padding: Scale * 2
                      }}
                    >
                      <FontAwesome5 name={'check'} size={iconSize} color={colors[3]} />
                    </View>

                    <Text style={styles.doneText}>Mark as done</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

      </>
      )
      }
    </>
  );
};


//styling for every element
const styles = StyleSheet.create({
  viewStyle: {
    marginTop: Height * 0.004 * 3,
    marginHorizontal: Width * 0.009 * 5,
    marginBottom: Scale * 3,
    backgroundColor: colors[2],
    borderTopRightRadius: Scale * 5,
    paddingBottom: Height * 0
  },
  titleText: {
    fontSize: Scale * 6,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingLeft: Width * 0.009 * 4,
    color: colors[5]
  },
  doneText: {
    fontSize: Scale * 6,
    paddingVertical: Height * 0.004 * 2,
    paddingHorizontal: Width * 0.22,
    color: colors[5]
  },
  dateText: {
    color: colors[5],
    fontSize: Scale * 6,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingHorizontal: Width * 0.03,
    color: colors[5]
  },
  descText: {
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingLeft: Width * 0.009 * 4,
    color: colors[6]
  },
  priorText: {
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingLeft: Width * 0.009 * 4,
    color: colors[6]
  },
  durationText: {
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingLeft: Width * 0.009 * 4,
    color: colors[6]
  },
  addBtnPos: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999,
  },
  addBtn: {
    width: Width * 0.16,
    height: Width * 0.16,
    borderRadius: width * 2,
    backgroundColor: colors[3],
  },
  noTasksContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center'
  }
})

export default ViewTask