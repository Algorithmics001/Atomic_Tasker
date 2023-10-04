/* eslint-disable */
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

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

// following line includes database functions
import { addNewTask, removeTaskByID } from '../brain/testing';
import ViewTask from './ViewTask';

//responsiveness
const { scale } = Dimensions.get('window');
const { width, height } = Dimensions.get('screen');

let x = 3.5 / scale;
let Scale = scale * x;

let y = 411.42857142857144 / width;
let Width = width * y;

let z = 804.5714285714286 / height;

let Height = height * z;
const iconSize = Scale * 7;

//colors and modes
const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff'];

const input = {
  Bg: colors[4],
  marginTop: Height * 0.02,
  marginHorizontal: Width * 0.02,
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
    backgroundColor: colors[4],
    padding: Scale * 4,
    marginTop: Height * 0.02,
    marginHorizontal: Width * 0.02,
    borderRadius: Scale * 6,
    fontSize: Scale * 6,
  },
  desc: {
    backgroundColor: colors[4],
    padding: Scale * 4,
    marginTop: Height * 0.02 - 5,
    marginHorizontal: Width * 0.02,
    borderRadius: Scale * 6,
    fontSize: Scale * 6,
  },
  inputBtnsOuterView: {
    flexDirection: 'row',
    marginHorizontal: Width * 0.02,
    marginVertical: Height * 0.02 - 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  inputBtns: {
    backgroundColor: colors[3],
    borderRadius: Scale * 6,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: Height * 0.014,
  },
  saveBtn: {
    backgroundColor: colors[3],
    borderRadius: Scale * 6,
    marginVertical: Height * 0.001,
    marginHorizontal: Width * 0.02,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: Height * 0.01

  },
  saveText: {
    color: colors[5],
    fontSize: Scale * 6,
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

  let titleVal = ''
  let descVal = ''
  const dateVal = new Date()

  //hooks for storing input values
  const [ReturnedData, setReturnedData] = useState({
    todo: {
      id: '',
      title: '',
      desc: '',
      curDate: '',
      deadline: '',
      duration: '',
      priority: '',
      weight: ''
    }
  })


  useEffect(() => {
    if (props.route.params && props.route.params.ReturnedTaskData) {
      let temp = props.route.params.ReturnedTaskData
      setReturnedData(prevState => ({
        ...prevState, todo:
        {
          ...prevState.todo,
          id: temp.todo.id,
          title: temp.todo.title,
          desc: temp.todo.desc,
          curDate: temp.todo.curDate,
          duration: temp.todo.duration,
          deadline: temp.todo.deadline,
          priority: temp.todo.priority,
          weight: temp.todo.weight
        }
      }))
      console.log("passed")
    }
    else {
      console.log("failed")
    }
  }, [props.route.params?.ReturnedTaskData]);
  removeTaskByID(ReturnedData.todo.id)
  titleVal = ReturnedData.todo.title
  descVal = ReturnedData.todo.desc
  
  const [ModalCtrl, setModalCtrl] = useState({
    dateVisible: false,
    priorVisible: false,
    durationVisible: false
  })

  const [priorBtnColor, setPriorBtnColor] = useState(colors[3])

  return (
    <>
      <View>
        <TextInput
          style={styles.title}
          maxLength={15}
          placeholder='Enter Title for your task'
          // value={titleVal}
          onChangeText={(e) => { setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, title: e } })) }}
        >{titleVal}</TextInput>
        
        <TextInput
          style={styles.desc}
          placeholder="Enter Description for your task"
          multiline={true}
          // value={descVal}
          onChangeText={(e) => { setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, desc: e } })) }}

        >{descVal}</TextInput>


        <View style={styles.inputBtnsOuterView}>
          {/* datebtn  */}
          <TouchableOpacity
            style={styles.inputBtns}

            onPress={() => setModalCtrl(prevState => ({ ...prevState, dateVisible: true }))}
          >

            <View style={styles.inputBtnsView}>

              <FontAwesome5 name={'calendar'} size={iconSize} color={colors[5]} />

            </View>
          </TouchableOpacity>
          <DatePicker
            modal

            open={ModalCtrl.dateVisible}

            date={dateVal}
            onConfirm={(e) => {
              // setDateVisible(false)
              setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, deadline: e } })),
                setModalCtrl(prevState => ({ ...prevState, dateVisible: false }))
            }}
            onCancel={(e) => {
              setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, deadline: e } })),
                setModalCtrl(prevState => ({ ...prevState, dateVisible: false }))

            }}
          />
          {/* priorityBtn */}
          <TouchableOpacity
            style={[styles.inputBtns, { marginHorizontal: Width * 0.03, backgroundColor: priorBtnColor }]}

            onPress={() => { setModalCtrl(prevState => ({ ...prevState, priorVisible: true })) }}
          >

            <View style={styles.inputBtnsView}>

              <FontAwesome5 name={'star'} size={iconSize} color={colors[5]} />
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
                      setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, priority: 'HIGH' } }))
                      setModalCtrl(prevState => ({ ...prevState, priorVisible: false }))
                      setPriorBtnColor('purple')
                    }}
                  ><Text style={styles.optionText}>High</Text></TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalOption2}
                    title="Option 2"
                    onPress={() => {
                      setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, priority: 'MEDIUM' } }))
                      setModalCtrl(prevState => ({ ...prevState, priorVisible: false }))
                      setPriorBtnColor('green')
                    }}
                  ><Text style={styles.optionText}>Moderate</Text></TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalOption3}
                    onPress={() => {
                      setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, priority: 'LOW' } }))
                      setModalCtrl(prevState => ({ ...prevState, priorVisible: false }))
                      setPriorBtnColor('#7B5800')
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
            <View style={styles.inputBtnsView}>
              <FontAwesome5
                name={'hourglass'}
                size={iconSize}
                color={colors[5]}
              />
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
                    <Text style={{ marginTop: Height * 0.06 }}>
                      Select Minutes
                    </Text>
                    <TextInput
                      keyboardType="numeric"
                      onChangeText={e => {
                        minutes = e;
                        console.log(minutes);
                      }}
                      style={{ borderBottomWidth: 1 }}
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
                            setReturnedData(prevState => ({ ...prevState, todo: { ...prevState.todo, duration: parseInt(hour * 60 + parseInt(minutes, 10), 10) } }))
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
        </View>




        {/* save task btn */}
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => {
            // ReturnedData.todo.title != '' || ReturnedData.todo.desc != ''
            // titleVal != '' || descVal != ''
            if (titleVal == '' || descVal == '') {
              // console.log(ReturnedData.todo.title)
              console.log(titleVal)
              console.log(descVal)
              ToastAndroid.show('Title and Description can not be empty', ToastAndroid.SHORT)
            }
            else {
              addNewTask(ReturnedData.todo.title, ReturnedData.todo.desc, ReturnedData.todo.deadline, ReturnedData.todo.priority, ReturnedData.todo.duration)
              ToastAndroid.show('Task saved successfully', ToastAndroid.SHORT);
              titleVal = ''
              descVal = ''
            }
          }}
        >
          {/* <FontAwesome5 name={'check'} size={iconSize} color={colors[5]} /> */}
          <View style={styles.saveBtnView}>

            <Text
              style={styles.saveText}
            >Save</Text>
          </View>



        </TouchableOpacity>
      </View>
    </>
  );
}

export default AddTask;