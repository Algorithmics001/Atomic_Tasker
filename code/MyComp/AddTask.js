
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Button, Alert, Modal } from 'react-native';

import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

// following line includes database functions 
import { addNewTask, resetAIjson, resetHIjson, removeTaskByID, editTaskByID, TaskArray, organiseTask } from '../brain/testing';

import DurationBtn from './DurationBtn';

const { scale } = Dimensions.get("window")
const { width, height } = Dimensions.get("window")

let x = 3.5 / scale
Scale = scale * x

let y = 411.42857142857144 / width
Width = width * y

let z = 804.5714285714286 / height

Height = height * z

const colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3']


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
  dateBtn: {
    backgroundColor: colors[3],
    width: Width * 0.285,
    height: Height * 0.07,
    borderRadius: Scale * 6,
    margin: Scale * 2
  },
  priorityBtn: {
    backgroundColor: colors[3],
    width: Width * 0.285,
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
  }

});

function AddTask() {
  const [date, setDate] = useState(new Date())
  const [dateVisible, setDateVisible] = useState(false)
  const [title, setTitle] = useState('Title')
  const [desc, setDesc] = useState('Desc')
  const [priorVisible, setPriorVisible] = useState(false);
  const [priority, setPrior] = useState("");
  const [durationVisible, setDurationVisible] = useState(false);
  const [duration, setDuration] = useState(0);



  const RNFS = require('react-native-fs')
  // const filePath = `${RNFS.DocumentDirectoryPath}/Avalible_ID.json`;
  let [data, setData] = useState([
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
  ])

  return (

    <View>
      <TextInput
        style={styles.title}

      >{title}</TextInput>

      <TextInput
        style={styles.desc}
      >{desc}</TextInput>


      <View style={{ flex: 1, flexDirection: 'row', width: Width }}>
        <TouchableOpacity
          style={styles.dateBtn}
          onPress={() => setDateVisible(true)}
        ></TouchableOpacity>
        <DatePicker
          modal
          open={dateVisible}
          date={date}
          onConfirm={(date) => {
            setDateVisible(false)
            setDate(date)
            console.log(date)
          }}
          onCancel={() => {
            setDateVisible(false)
          }}
        />

        <TouchableOpacity
          style={styles.priorityBtn}
          onPress={() => { setPriorVisible(true) }}
        >
          {/* priorityBtn */}
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
                    setPrior("High");
                    setPriorVisible(false);
                  }}
                ><Text style={styles.optionText}>High</Text></TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalOption2}
                  title="Option 2"
                  onPress={() => {
                    setPrior("Moderate");
                    setPriorVisible(false);
                  }}
                ><Text style={styles.optionText}>Moderate</Text></TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalOption3}
                  onPress={() => {
                    setPrior("Low");
                    setPriorVisible(false);
                  }}
                ><Text style={styles.optionText}>Low</Text></TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateBtn}
          onPress={() => { organiseTask() }}
        >
        </TouchableOpacity>
      </View>
    </View>


  );
}

export default AddTask;