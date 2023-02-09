import { Dimensions, StyleSheet, TextInput, View, Button, } from "react-native";
import DatePicker from 'react-native-date-picker';
import React, { useState } from 'react'
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
  }
})

function AddTask() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return ( 
    <>
      <TextInput
      style={styles.title}
      ></TextInput>

      <TextInput
      multiline={true}
      style={styles.desc}
      ></TextInput>

<Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
   );
}

export default AddTask;