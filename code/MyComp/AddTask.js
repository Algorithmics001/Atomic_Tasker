
import { ToastAndroid, View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button, Alert, Modal } from 'react-native';

import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

// following line includes database functions 
import { addNewTask, resetAIjson, resetHIjson, removeTaskByID, editTaskByID, TaskArray, organiseTask } from '../brain/testing';
import ViewTask from './ViewTask';

//responsiveness
const { scale } = Dimensions.get("window")
const { width, height } = Dimensions.get("screen")

let x = 3.5 / scale
Scale = scale * x

let y = 411.42857142857144 / width
Width = width * y

let z = 804.5714285714286 / height

Height = height * z
const iconSize = Scale * 8


//colors and modes
const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff']


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
  }
}

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
    margin: Scale * 2
  },

  ModalOuter: {
    flex: 1,
    backgroundColor: '#000000aa'
  },

  ModalIner: {
    flex: 1,
    backgroundColor: '#fff',
    margin: Scale * 40,
    marginHorizontal: Width * 0.1,
    marginVertical: Height * 0.3,
    borderRadius: Scale * 6,
    padding: Scale * 5
  },
  modalOption1: {
    backgroundColor: input.modal.Btpurple,
    borderRadius: Scale * 5,
    margin: input.modal.optionMargin,
    padding: input.modal.optionPad,
    alignItems: 'center'
  },
  modalOption2: {
    backgroundColor: input.modal.Btgreen,
    borderRadius: Scale * 5,
    margin: input.modal.optionMargin,
    padding: input.modal.optionPad,
    alignItems: 'center'
  },
  modalOption3: {
    backgroundColor: input.modal.Btyellow,
    borderRadius: Scale * 5,
    margin: input.modal.optionMargin,
    padding: input.modal.optionPad,
    alignItems: 'center'
  },
  optionText: {
    fontSize: Scale * 8,
    fontWeight: 'bold',
    color: 'white'
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

function AddTask(props) {
  //hooks for storing input values
  
  const [[date, dateVisible], setDate] = useState([new Date(), false])
  
  const [[title, desc], setTaskData] = useState(['', ''])
  
  const [[priorVisible, priority], setPrityData] = useState(['', false]);
  
  const [[duration, durationVisible], setDuration] = useState(['', false])


  return (
    <>

      <View>
        <TextInput
          style={styles.title}
          maxLength={15}
          placeholder='Enter Title for your task'
          onChangeText={(e) => { setTaskData([e, desc]) }}
        >{title}</TextInput>

        <TextInput
          style={styles.desc}
          placeholder='Enter Description for your task'
          multiline={true}
          onChangeText={(e) => { setTaskData([title, e]) }}

        >{desc}</TextInput>


        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>

          {/* datebtn  */}
          <TouchableOpacity
            style={styles.inputBtns}
            onPress={() => setDate([date, true])}
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
                  paddingHorizontal: Width * 0.04
                }}
              >Choose Date and Time</Text>
            </View>
          </TouchableOpacity>
          <DatePicker
            modal
            open={dateVisible}
            date={date}
            onConfirm={(date) => {
              // setDateVisible(false)
              setDate([date, false])
              console.log(date)
            }}
            onCancel={() => {
              setDate([date, false])
            }}
          />
          {/* priorityBtn */}
          <TouchableOpacity
            style={styles.inputBtns}
            onPress={() => { setPrityData([priority, true]) }}
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
                  paddingHorizontal: Width * 0.12
                }}
              >Choose Priority</Text>
            </View>
            {/* priority modal  */}
            <Modal
              animationType='fade'
              transparent={true}
              visible={priorVisible}
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
                      setPrityData(["High", false]);
                    }}
                  ><Text style={styles.optionText}>High</Text></TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalOption2}
                    title="Option 2"
                    onPress={() => {
                      setPrityData(["Moderate", false]);
                    }}
                  ><Text style={styles.optionText}>Moderate</Text></TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalOption3}
                    onPress={() => {
                      setPrityData(["Low", false]);

                    }}
                  ><Text style={styles.optionText}>Low</Text></TouchableOpacity>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>

          {/* Duration button */}
          <TouchableOpacity

            style={styles.inputBtns}
            onPress={() => {

              // if (title.length === 0 || desc.length === 0) {
              //   ToastAndroid.show('Title and Description can not be empty', ToastAndroid.SHORT)
              // }
              // else {
              //   addNewTask(title, desc, date, priority, '0')
              //   ToastAndroid.show('Task saved successfully', ToastAndroid.SHORT);
              //   setTaskData(['', ''])
              // }
            }}
          ><View
            style={{ flexDirection: 'row', padding: scale * 3 }}
          >
              <View style={{ paddingHorizontal: Width * 0.03 }}>
                <FontAwesome5 name={'hourglass'} size={iconSize} color={colors[5]} />
              </View>

              <Text
                style={{
                  color: colors[5],
                  fontWeight: 'bold',
                  fontSize: Scale * 7,
                  paddingHorizontal: Width * 0.25
                }}
              >Duration</Text>
            </View>
          </TouchableOpacity>
          
          {/* save task btn */}
          <TouchableOpacity

            style={styles.inputBtns}
            onPress={() => {

              if (title.length === 0 || desc.length === 0) {
                ToastAndroid.show('Title and Description can not be empty', ToastAndroid.SHORT)
              }
              else {
                addNewTask(title, desc, date, priority, '0')
                ToastAndroid.show('Task saved successfully', ToastAndroid.SHORT);
                setTaskData(['', ''])
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
                  paddingHorizontal: Width * 0.25
                }}
              >Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addBtnPos}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => { props.navigation.navigate(ViewTask) }}
        >
          <View
            style={{
              alignItems: 'center',
              marginVertical: height * 0.028
            }}
          >
            <FontAwesome5 name={'list'} size={iconSize * 0.65} color={colors[4]} />
          </View>
        </TouchableOpacity>
      </View>
    </>


  );
}

export default AddTask;