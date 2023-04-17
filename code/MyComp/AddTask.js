/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  ToastAndroid,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
} from 'react-native';

import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

// following line includes database functions
import {addNewTask, removeTaskByID } from '../brain/testing';
import ViewTask from './ViewTask';

//responsiveness
const {scale} = Dimensions.get('window');
const {width, height} = Dimensions.get('screen');

let x = 3.5 / scale;
let Scale = scale * x;

let y = 411.42857142857144 / width;
let Width = width * y;

let z = 804.5714285714286 / height;

let Height = height * z;
const iconSize = Scale * 8;

//colors and modes
const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff'];

const input = {
  Bg: colors[4],
  padding: Scale * 5,
  margin: Scale * 2,
  marginTop: Scale * 4,
  borderRadius: Scale * 5,
  fontSize: Scale * 6,

  modal: {
    Btpurple: 'purple',
    Btgreen: 'green',
    Btyellow: '#7B5800',
    optionMargin: Scale * 3,
    optionPad: Scale * 4,
    fontSize: Scale * 50,
  },
};
const styles = StyleSheet.create({
  title: {
    backgroundColor: input.Bg,
    padding: input.padding,
    margin: input.margin,
    marginTop: input.marginTop,
    borderRadius: input.borderRadius,
    fontSize: input.fontSize,
  },
  desc: {
    backgroundColor: input.Bg,
    padding: input.padding,
    margin: input.margin,
    marginTop: input.marginTop - 4,
    borderRadius: input.borderRadius,
    fontSize: input.fontSize,
  },
  inputBtns: {
    backgroundColor: colors[3],
    width: Width * 0.97,
    height: Height * 0.07,
    borderRadius: Scale * 6,
    margin: Scale * 2,
  },
  ModalOuter: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalIner: {
    backgroundColor: '#fff',
    borderRadius: Scale * 6,
    padding: Scale * 5,
    margin: Height * 0.15,
    width: Width * 0.8,
    height: Height * 0.4,
    alignContent: 'center',
    alignItems: 'center',
  },
  modalOption1: {
    backgroundColor: input.modal.Btpurple,
    borderRadius: Scale * 5,
    margin: input.modal.optionMargin,
    padding: input.modal.optionPad,
    alignItems: 'center',
  },
  modalOption2: {
    backgroundColor: input.modal.Btgreen,
    borderRadius: Scale * 5,
    margin: input.modal.optionMargin,
    padding: input.modal.optionPad,
    alignItems: 'center',
  },
  modalOption3: {
    backgroundColor: input.modal.Btyellow,
    borderRadius: Scale * 5,
    margin: input.modal.optionMargin,
    padding: input.modal.optionPad,
    alignItems: 'center',
  },
  optionText: {
    fontSize: Scale * 8,
    fontWeight: 'bold',
    color: 'white',
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
    borderRadius: scale * 22,
    backgroundColor: colors[3],
  },
});

//main function starts here

let hour = 0;
let minutes = 0;

function AddTask(props) {
  //hooks for storing input values
  const ReturnedTaskData = props.route.params.ReturnedTaskData;
  console.log(ReturnedTaskData)
  
  const [TaskData, setTaskData] = useState({
    TITLE: ReturnedTaskData.todo.title,
    DESC: ReturnedTaskData.todo.desc,
    DURATION: ReturnedTaskData.todo.duration,
    PRIORITY: ReturnedTaskData.todo.priority,
    DATE: new Date()
  })

  const [ModalCtrl, setModalCtrl] = useState({
    dateVisible: false,
    priorVisible: false,
    durationVisible: false
  })

  if(ReturnedTaskData.todo.id != ''){
    removeTaskByID(ReturnedTaskData.todo.id)
  }

  return (
    <>
      <View>
        <TextInput
          style={styles.title}
          maxLength={15}
          placeholder='Enter Title for your task'
          onChangeText={(e) => { setTaskData(prevState => ({ ...prevState, TITLE: e })) }}
        >{TaskData.TITLE}</TextInput>

        <TextInput
          style={styles.desc}
          placeholder="Enter Description for your task"
          multiline={true}
          onChangeText={(e) => { setTaskData(prevState => ({ ...prevState, DESC: e })) }}

        >{TaskData.DESC}</TextInput>


        {/* <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}> */}

        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
          {/* datebtn  */}
          <TouchableOpacity
            style={styles.inputBtns}

            onPress={() => setModalCtrl(prevState => ({ ...prevState, dateVisible: true })) } //I DONT KNWO WHAT IS HAPPENING HERE
          >
            <View
              style={{ flexDirection: 'row', padding: scale * 3 }}
            >
              <View style={{ paddingHorizontal: Width * 0.03 }}>

                <FontAwesome5 name={'calendar'} size={iconSize} color={colors[5]} />

              </View>
              <Text
                style={{
                  color: colors[5],
                  fontWeight: 'bold',
                  fontSize: Scale * 7,
                  paddingHorizontal: Width * 0.04,
                }}>
                Choose Date and Time
              </Text>
            </View>
          </TouchableOpacity>
          <DatePicker
            modal

            open={ModalCtrl.dateVisible}
            date={TaskData.DATE}
            onConfirm={(date) => {
              // setDateVisible(false)
              setTaskData(prevState => ({ ...prevState, DATE: date })),
              setModalCtrl(prevState => ({ ...prevState, dateVisible: false }))
            }}
            onCancel={() => {
              // setTaskData(prevState => ({ ...prevState, DATE: date })),
              setModalCtrl(prevState => ({ ...prevState, dateVisible: false }))

            }}
          />
          {/* priorityBtn */}
          <TouchableOpacity
            style={styles.inputBtns}

            onPress={() => { setModalCtrl(prevState => ({ ...prevState, priorVisible: true })) }}
          >
            <View
              style={{ flexDirection: 'row', padding: scale * 3 }}
            >
              <View style={{ paddingHorizontal: Width * 0.03 }}>

                <FontAwesome5 name={'star'} size={iconSize} color={colors[5]} />
              </View>
              <Text
                style={{
                  color: colors[5],
                  fontWeight: 'bold',
                  fontSize: Scale * 7,
                  paddingHorizontal: Width * 0.12,
                }}>
                Choose Priority
              </Text>
            </View>
            {/* priority modal  */}
            <Modal
              animationType="fade"
              transparent={true}

              visible={ModalCtrl.priorVisible}
            >
              <View
                style={styles.ModalOuter}
              >
                <View
                  style={styles.ModalIner}
                >

                  <TouchableOpacity
                    style={styles.modalOption1}
                    title="Option 1"
                    onPress={() => {

                      setTaskData(prevState => ({ ...prevState, PRIORITY: 'HIGH' })) 
                      setModalCtrl(prevState => ({ ...prevState, priorVisible: false })) 
                    }}
                  ><Text style={styles.optionText}>High</Text></TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalOption2}
                    title="Option 2"
                    onPress={() => {

                      setTaskData(prevState => ({ ...prevState, PRIORITY: 'MEDIUM' })) 
                      setModalCtrl(prevState => ({ ...prevState, priorVisible: false })) 
                    }}
                  ><Text style={styles.optionText}>Moderate</Text></TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalOption3}
                    onPress={() => {
                      setTaskData(prevState => ({ ...prevState, PRIORITY: 'LOW' })) 
                      setModalCtrl(prevState => ({ ...prevState, priorVisible: false })) 

                    }}
                  ><Text style={styles.optionText}>Low</Text></TouchableOpacity>

                </View>
              </View>
            </Modal>
          </TouchableOpacity>

          {/* Duration button */}
          <TouchableOpacity
            style={styles.inputBtns}
            onPress={() => setModalCtrl(prevState => ({ ...prevState, durationVisible: true }))}>
            <View style={{flexDirection: 'row', padding: scale * 3}}>
              <View style={{paddingHorizontal: Width * 0.03}}>
                <FontAwesome5
                  name={'hourglass'}
                  size={iconSize}
                  color={colors[5]}
                />
              </View>
              <Text
                style={{
                  color: colors[5],
                  fontWeight: 'bold',
                  fontSize: Scale * 7,
                  paddingHorizontal: Width * 0.04,
                }}>
                Choose Duration
              </Text>
            </View>
            {/* duration modal  */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={ModalCtrl.durationVisible}>
              <View style={styles.ModalOuter}>
                <View style={styles.ModalIner}>
                  <View
                    style={{
                      alignItems: 'center',
                      alignContent: 'center',
                      marginTop: Height * 0.03,
                    }}>
                    <Text>Select Hour</Text>
                    <TextInput
                      keyboardType="numeric"
                      onChangeText={e => {
                        hour = e;
                        console.log(hour);
                      }}
                      style={{
                        borderBottomWidth: 1,
                      }}
                    />
                    <Text style={{marginTop: Height * 0.06}}>
                      Select Minutes
                    </Text>
                    <TextInput
                      keyboardType="numeric"
                      onChangeText={e => {
                        minutes = e;
                        console.log(minutes);
                      }}
                      style={{borderBottomWidth: 1}}
                    />
                    <View
                      style={{
                        marginTop: Height * 0.05,
                        flexDirection: 'row',
                        alignSelf: 'center',
                      }}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            marginHorizontal: Width * 0.05,
                            fontSize: Scale * 6,
                          }}
                          onPress={() => {
                            setTaskData(prevState => ({ ...prevState, DURATION: parseInt(hour * 60 + parseInt(minutes, 10), 10) }))
                            setModalCtrl(prevState => ({ ...prevState, durationVisible: false }))
                            // setDuration([
                            //   parseInt(hour * 60 + parseInt(minutes, 10), 10),
                            //   false,
                            // ]);
                          }}>
                          Ok
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setModalCtrl(prevState => ({ ...prevState, durationVisible: false }))}>
                        <Text
                          style={{
                            marginHorizontal: Width * 0.05,
                            fontSize: Scale * 6,
                          }}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          {/* save task btn */}
          <TouchableOpacity
            style={styles.inputBtns}
            onPress={() => {

              if (TaskData.TITLE.length === 0 || TaskData.DESC.length === 0) {
                ToastAndroid.show('Title and Description can not be empty', ToastAndroid.SHORT)
              }
              else {
                addNewTask(TaskData.TITLE, TaskData.DESC, TaskData.DATE, TaskData.PRIORITY, TaskData.DURATION)
                ToastAndroid.show('Task saved successfully', ToastAndroid.SHORT);
                setTaskData(prevState => ({ ...prevState, TITLE: '' })) 
                setTaskData(prevState => ({ ...prevState, DESC: '' })) 
              }
            }}
          ><View
            style={{ flexDirection: 'row', padding: scale * 3 }}
          >
              <View style={{ paddingHorizontal: Width * 0.03 }}>
                <FontAwesome5 name={'check'} size={iconSize} color={colors[5]} />

              </View>
              <Text
                style={{
                  color: colors[5],
                  fontWeight: 'bold',
                  fontSize: Scale * 7,
                  paddingHorizontal: Width * 0.25,
                }}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addBtnPos}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            props.navigation.navigate(ViewTask);
          }}>
          <View
            style={{
              alignItems: 'center',
              marginVertical: height * 0.028,
            }}>
            <FontAwesome5
              name={'list'}
              size={iconSize * 0.65}
              color={colors[4]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default AddTask;