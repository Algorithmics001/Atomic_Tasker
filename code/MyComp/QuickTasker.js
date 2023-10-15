import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { addQTask, getList } from '../brain/QuickTasker'

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
      <View style={styles.btn}>
        <Button style={styles.button} buttonStyle={{ backgroundColor: 'z#e4def2' }} title="Add Task" onPress={checkValidation} />
        <Button style={styles.undoButton} title="Undo" onPress={undo} />
      </View>
      {taskList.map((task, index) => (
        <View style={styles.taskContainer} key={index}>
          <Text style={styles.task}>{index + 1}. {task}</Text>
          <Button
            style={styles.deleteButton}
            title="Delete"
            onPress={() => deleteTask(index)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    color: 'black',
    borderRadius : Scale * 5,
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors[4]
  },
  btn: {

    display: 'flex',
    flexDirection: 'row',
    gap: 80
    , width: '75%',
  },
  button: {
    backgroundColor: 'white',
    color: 'white',
    // display:'flex',
    marginBottom: 20,
    padding: 10,
  },
  undoButton: {
    backgroundColor: 'black',
    background: 'yellow',
    // display:'flex',
    marginBottom: 20,
    padding: 107,
    width: '100%'

  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
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