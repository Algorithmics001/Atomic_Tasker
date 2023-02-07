import { DatePickerIOSBase, Dimensions, TouchableOpacity, StyleSheet, Text, TextInput, View, modal, Button } from "react-native"

import DatePicker from 'react-native-date-picker'
import React from "react"
import { useState } from "react"

import SharedPreferences from '../node_modules/react-native-shared-preferences';

const {scale} = Dimensions.get("window")
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e']

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    return(
        <View>
            <TextInput 
            placeholder="Title"
            allowFontScaling={false}
            style={{ margin:scale*5, backgroundColor:'#E0DFE3', fontSize: scale*6, padding:scale*5, paddingLeft:scale*7, borderRadius:scale*5, borderColor:colors[3]}}
            onChangeText={(e)=>setTitle(e)}
            ></TextInput>

            <TextInput
            placeholder="Description"
            multiline={true}
            allowFontScaling={false}
            style={{ margin:scale*5, backgroundColor:'#E0DFE3', fontSize: scale*6, padding:scale*5, paddingLeft:scale*7, borderRadius:scale*5, borderColor:colors[3]}}
            onChangeText={(e)=>setDesc(e)}
            ></TextInput>

            <TouchableOpacity onPress={ UpdateDataBase } style={styles.DoneButton}>
                <Text 
                    style={styles.DoneButtonText }>
                    Done
                    </Text>
            </TouchableOpacity>
            
        </View>
    )
    function UpdateDataBase(){
        SharedPreferences.setItem(title, desc)
    }
}
const styles = StyleSheet.create({
    DoneButton:{
        backgroundColor:'#e4def2',
        width:scale*30,
        height:scale*13,
        margin:scale*5,
        marginVertical:scale*9,
        borderRadius:scale*8,
        marginBottom:scale*1,
      },
      DoneButtonText:{
        fontSize:scale*6,
        paddingLeft:scale*7,
        paddingTop:scale*2
      }
})

export default AddTask


