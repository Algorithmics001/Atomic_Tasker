import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { addQTask, getList } from '../brain/QuickTasker'

const { width, height } = Dimensions.get("window");
const { scale } = Dimensions.get("window");

let x = 3.5 / scale
let Scale = scale * x

let y = 411.42857142857144 / width
let Width = width * y

let z = 804.5714285714286 / height

let Height = height * z

const iconSize = Scale * 5;

var colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff', '#6D726E', '#fff'];


export default function QuickTasker() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [prevTaskList, setPrevTaskList] = useState([]);

  const checkValidation = () => {
    if (task === '') {
      Alert.alert('Error', 'Please Enter a valid Task');
    } else {
      addTask();
    }
  };

  useEffect(() => {
    getList().then(data => {
      setTaskList(data);
      console.log(data)
    })
  }, []);

  const addTask = () => {
    setPrevTaskList(taskList);
    setTaskList([...taskList, task]);
    setTask('');
    addQTask([...taskList, task])
  };

  const deleteTask = (index) => {
    setPrevTaskList(taskList);
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
    addQTask(newTaskList)
  };

  const undo = () => {
    setTaskList(prevTaskList);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add task"
        onChangeText={text => setTask(text)}
        value={task}
      />
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.Btn} buttonStyle={{ backgroundColor: colors[3] }} onPress={checkValidation}><Text  style={styles.btnText}>Add</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={undo} >
          <Text
          style={styles.btnText}
          >Undo</Text>
        </TouchableOpacity>
      </View>
      
      { taskList && Array.isArray(taskList)? taskList.map((task, index) => (
        <View style={styles.taskContainer} key={index}>
          <Text style={styles.task}>{index + 1}. {task}</Text>
          <TouchableOpacity
            style={styles.Btn}
            onPress={()=>{
              deleteTask(index)
            }}
          >
            <Text
              style={styles.btnText}
            >Delete</Text>
          </TouchableOpacity>
        </View>
      )):null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding : Scale * 4
  },
  input: {
    height: Height * 0.07,
    width: Width * 0.93,
    color: 'black',
    borderRadius : Scale * 5,
    backgroundColor: colors[4],
    fontSize : Scale * 5,
    padding: Scale * 4
  },
  btnView: {
    marginVertical: Height * 0.01,
    display: 'flex',
    flexDirection: 'row',
    gap : Width * 0.2
  },
  Btn: {
    backgroundColor: colors[3],
    paddingHorizontal: Width * 0.05,
    paddingVertical: Height * 0.009,
    borderRadius: Scale * 6,
  },
  btnText: {
    color: colors[5],
    fontSize: Scale * 4.5
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  task: {
    color: 'black',
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 10,
  },
});