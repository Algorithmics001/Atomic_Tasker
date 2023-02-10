
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput,Button, Alert, Modal } from 'react-native';

import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'

// this is for brain
import {addTask, removeTask, editTask, getPath} from '../brain/logic'

const {scale} = Dimensions.get("window")
const {width, height} = Dimensions.get("window")

const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#E0DFE3']

const input={
    Bg:colors[4],
    padding:scale*5,
    margin:scale*2,
    marginTop:scale*4,
    borderRadius: scale*5,
    fontSize: scale*6,
  
    modal:{
      Btpurple: 'purple',
      Btgreen: 'green',
      Btyellow: '#7B5800',
      optionMargin:scale*3,
      optionPad: scale*4,
      fontSize: scale*50,
    }
  }

  const styles = StyleSheet.create({
  title:{
    backgroundColor: input.Bg,
    padding: input.padding,
    margin: input.margin,
    marginTop:input.marginTop,
    borderRadius: input.borderRadius,
    fontSize: input.fontSize,
    
  },
  desc:{
    backgroundColor: input.Bg,
    padding: input.padding,
    margin: input.margin,
    marginTop:input.marginTop-4,
    borderRadius: input.borderRadius,
    fontSize: input.fontSize,
  },
  dateBtn:{
    width: width*0.1,
    backgroundColor:colors[3],
    width: width*0.3,
    height:height*0.07,
    borderRadius: scale*6,
    margin:scale*2
  },
  priorityBtn:{
    width: width*0.1,
    backgroundColor:colors[3],
    width: width*0.3,
    height:height*0.07,
    borderRadius: scale*6,
    margin:scale*2
  },

  ModalOuter:{
    flex:1,
    backgroundColor:'#000000aa'
  },

  ModalIner:{
    flex:1,
    backgroundColor: '#fff',
    margin:scale*40,
    marginHorizontal: width*0.1,
    marginVertical: height*0.3,
    borderRadius: scale*6,
    padding: scale*8
  },
  modalOption1:{
    backgroundColor: input.modal.Btpurple,
    borderRadius: scale*5,
    margin:input.modal.optionMargin,
    padding:input.modal.optionPad,
    alignItems:'center'
  },
  modalOption2:{
    backgroundColor: input.modal.Btgreen,
    borderRadius: scale*5,
    margin:input.modal.optionMargin,
    padding:input.modal.optionPad,
    alignItems:'center'
  },
  modalOption3:{
    backgroundColor: input.modal.Btyellow,
    borderRadius: scale*5,
    margin:input.modal.optionMargin,
    padding:input.modal.optionPad,
    alignItems:'center'
  },
  optionText:{
    fontSize:scale*8,
    fontWeight:'bold',
    color: 'white'
  }

});



function DurationBtn() {
    const [durationVisible, setDurationVisible] = useState(false);
    const [duration, setDuration] = useState(0);
    return ( 
        <View>
            {/* duration btn  */}
        <TouchableOpacity
          style={styles.dateBtn}
          onPress={setDurationVisible(true)}
        ><Modal 
        animationType='fade'
        transparent={true}
        visible={durationVisible}
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
                setDuration(1);
                setDurationVisible(false);
              }}
            ><Text style={styles.optionText}>High</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption2}
              title="Option 2"
              onPress={() => {
                setDuration(2);
                setDurationVisible(false);
              }}
            ><Text style={styles.optionText}>Moderate</Text></TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption3}
              onPress={() => {
                setDuration(3);
                setDurationVisible(false);
              }}
            ><Text style={styles.optionText}>Low</Text></TouchableOpacity>
            </View>
          </View>
        </Modal></TouchableOpacity>
        </View>
     );
}

export default DurationBtn;