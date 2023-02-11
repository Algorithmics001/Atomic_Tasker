
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput,Button, Alert, Modal } from 'react-native';

import React, {useState} from 'react'
import DatePicker from 'react-native-date-picker'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';


const {scale} = Dimensions.get("window")
const {width, height} = Dimensions.get("window")

let x = 3.5/scale
Scale = scale*x

let y  = 411.42857142857144/width
Width = width*y

let z = 804.5714285714286/height

Height = height*z

const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#E0DFE3', '#fff']
const iconSize = Scale * 9


const input={
  Bg:colors[4],
  padding:Scale*5,
  margin:Scale*2,
  marginTop:Scale*4,
  borderRadius: Scale*5,
  fontSize: Scale*6,

  modal:{
    Btpurple: 'purple',
    Btgreen: 'green',
    Btyellow: '#7B5800',
    optionMargin:Scale*3,
    optionPad: Scale*4,
    fontSize: Scale*50,
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
  inputBtns:{
    backgroundColor:colors[3],
    width: Width*0.97,
    height:Height*0.07,
    borderRadius: Scale*6,
    margin:Scale*2
  },

  ModalOuter:{
    flex:1,
    backgroundColor:'#000000aa'
  },

  ModalIner:{
    flex:1,
    backgroundColor: '#fff',
    margin:Scale*40,
    marginHorizontal: Width*0.1,
    marginVertical: Height*0.3,
    borderRadius: Scale*6,
    padding: Scale*5
  },
  modalOption1:{
    backgroundColor: input.modal.Btpurple,
    borderRadius: Scale*5,
    margin:input.modal.optionMargin,
    padding:input.modal.optionPad,
    alignItems:'center'
  },
  modalOption2:{
    backgroundColor: input.modal.Btgreen,
    borderRadius: Scale*5,
    margin:input.modal.optionMargin,
    padding:input.modal.optionPad,
    alignItems:'center'
  },
  modalOption3:{
    backgroundColor: input.modal.Btyellow,
    borderRadius: Scale*5,
    margin:input.modal.optionMargin,
    padding:input.modal.optionPad,
    alignItems:'center'
  },
  optionText:{
    fontSize:Scale*8,
    fontWeight:'bold',
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





function push(){

}

  return ( 
    
    <View>
      <TextInput
        style={styles.title}
        onChangeText={(e)=>{setTitle(e)}}

      >{title}</TextInput>

      <TextInput
        style={styles.desc}
        onChangeText={(e)=>{setDesc(e)}}

      >{desc}</TextInput>


<View style={{flex:1,flexWrap:'wrap' ,flexDirection:'row'}}>

  {/* datebtn  */}
      <TouchableOpacity 
      style={styles.inputBtns}
      onPress={() => setDateVisible(true)}
      >
        <View
        style={{flexDirection:'row', padding:scale*3}}
        >
        <View style={{paddingHorizontal: Width*0.03}}>
          
        <FontAwesome5 name={'calendar'} size={iconSize} color={colors[5]}/>
        </View>
        <Text
          style={{
            color: colors[5],
            fontWeight:'bold',
            fontSize: Scale*7,
            paddingHorizontal: Width*0.04
          }}
        >Choose Date and Time</Text>
        </View>
      </TouchableOpacity>
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
{/* priorityBtn */}
        <TouchableOpacity
        style={styles.inputBtns}
        onPress={()=>{setPriorVisible(true)}}
        >
           <View
        style={{flexDirection:'row', padding:scale*3}}
        >
        <View style={{paddingHorizontal: Width*0.03}}>
        <FontAwesome5 name={'star'} size={iconSize} color={colors[5]}/>
        </View>
        <Text
          style={{
            color: colors[5],
            fontWeight:'bold',
            fontSize: Scale*7,
            paddingHorizontal: Width*0.12
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


{/* save task btn */}
        <TouchableOpacity
          style={styles.inputBtns}
          onPress={()=>{push()}}
        ><View
        style={{flexDirection:'row' ,padding:scale*3}}
        >
        <View style={{paddingHorizontal: Width*0.03}}>
        <FontAwesome5 name={'check'} size={iconSize} color={colors[5]}/>
        </View>
        <Text
          style={{
            color: colors[5],
            fontWeight:'bold',
            fontSize: Scale*7,
            paddingHorizontal: Width*0.25
          }}
        >Save</Text>
        </View>
        </TouchableOpacity>      
        </View>
    </View>


   );
}

export default AddTask;