import React from 'react';
import { Card, Divider, Icon, Text, Button, ButtonGroup } from '@ui-kitten/components';
import { ToastAndroid, TouchableOpacity, NativeModules, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { useState, useEffect, useMemo } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { Appearance } from 'react-native';
import { removeTaskByID, returnTaskList } from '../brain/testing';
const { width, height } = Dimensions.get("window");
const { scale } = Dimensions.get("window");
import { useFocusEffect } from '@react-navigation/native';

let x = 3.5 / scale
let Scale = scale * x

let y = 411.42857142857144 / width
let Width = width * y

let z = 804.5714285714286 / height

let Height = height * z

const iconSize = Scale * 5;
var colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff', '#6D726E', '#fff'];


const timeConvertion = (time) => {
  hrs = parseInt(time) / 60
  min = parseInt(time) % 60
  return (parseInt(hrs) + ':' + min)
}




const Header = (props) => (

  <View {...props} style={styles.header}>
    <Text category='h6'>
      {props.todo.title}
    </Text>
    <Text category='s1'>
      Priority : {props.todo.priority}
    </Text>
    <Text category='s1'>
      Date : {props.todo?.deadline?.substring(0, 10)}
    </Text>
  </View>
);



const PencilIcon = (props) => (
  <Icon
    {...props}
    name='edit'
  />
);

const DoneIcon = (props) => (
  <Icon
    {...props}
    name='checkmark'
  />
);

const DurationIcon = (props) => (
  <Icon
    {...props}
    name='clock'

  />
);

const AddIcon = (props) => (
  <Icon
    {...props}
    name='plus'

  />
);


function Carder(props) {
  // hook for storing the data after getting from file stored locally
  const [todos, setTodos] = useState([]);

  // returnTaskList().then(tasklist => { setTodos(tasklist) })
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const tasklist = await returnTaskList();
        setTodos(tasklist);
      };
      fetchData();
    }, [])
  );

  const deleteTask = (taskId) => {
    console.log('Deleting task with ID:', taskId);
    try {
      removeTaskByID(taskId, 1) //delete with backup
      console.log("THIS ID IS BEING REMOVED WITH BACKUP!!!", taskId)
      returnTaskList().then(tasklist => { setTodos(tasklist) })

      ToastAndroid.show('Task removed!', ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>

      <View style={styles.addBtnPos}>
        <Button
          accessoryLeft={AddIcon}
          size='large'
          status='danger'
          onPress={() => { props.navigation.navigate('Add Task', {ReturnedTaskData: {todo: {id:'' ,title:'', desc:'', curDate:'', deadline:'', duration:'', priority:'', weight:''}}}) }}
        />
      </View>
      {todos?.length === 0 ? (
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
      ) : (
        <ScrollView style={{ backgroundColor: colors[7] }}>
          {todos.map((todo) => (
            <Card
              key={todo.id}
              style={styles.Card}
              status={
                todo.priority.toLowerCase() === 'high'
                  ? 'danger'
                  : todo.priority.toLowerCase() === 'low'
                    ? 'warning'
                    : 'warning'
              } header={() => <Header todo={todo} />}
              footer={<>
                <ButtonGroup style={styles.buttonGroup}>
                  <View>
                    <Button
                      accessoryLeft={DurationIcon}
                      accessoryRight={
                        <>
                          <Text status='control' style={styles.durationText}>
                            {timeConvertion(todo.duration)}
                          </Text>
                        </>
                      }
                    />
                  </View>
                  <View style={styles.operationButton}>
                    <Button accessoryLeft={PencilIcon} appearance='outline'
                      onPress={

                        () => {
                          console.log(todo)
                          props.navigation.navigate('Add Task', { ReturnedTaskData: { todo } })

                        }}
                    />
                    <Button accessoryRight={DoneIcon} onPress={() => {
                      console.log('Done button pressed for task ID:', todo.id);
                      deleteTask(todo.id);
                    }} />
                  </View>
                </ButtonGroup>
              </>}
            >
              <Text style={styles.descText}>{todo.desc}</Text>
            </Card>


          ))}
        </ScrollView>
      )}
    </>
  );

}


const styles = StyleSheet.create({
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-between',
  },
  operationButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  Card: {
    marginHorizontal: '4%',
    marginTop: '4%',
    flex: 1,
    flexWrap: 'wrap',
  },
  viewStyle: {
    marginTop: Height * 0.004 * 3,
    marginHorizontal: Width * 0.009 * 5,
    marginBottom: Scale * 3,
    backgroundColor: colors[2],
    borderTopRightRadius: Scale * 5,
    paddingBottom: Height * 0
  },
  header:
  {
    backgroundColor: "transparent",
    paddingHorizontal: 24,
    paddingVertical: 16
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
    // color: colors[5]
  },
  descText: {
    fontSize: Scale * 5,
    // fontWeight: 'bold',
    // paddingTop: Height * 0.004 * 2,
    // paddingLeft: Width * 0.009 * 4,
    // color: colors[6]
  },
  priorText: {
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingLeft: Width * 0.009 * 4,
    color: colors[6]
  },
  durationText: {
    fontSize: Scale * 4,
    fontWeight: 'bold',
    paddingRight: '4%',
  },
  addBtnPos: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999,
  },
  addBtn: {
    
  },
  noTasksContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center'
  }
})
export default Carder