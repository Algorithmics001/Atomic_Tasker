import { DatePickerIOSBase, Dimensions, StyleSheet, Text, TextInput, View, modal } from "react-native"

import DatePicker from 'react-native-date-picker'
import React from "react"

const {scale} = Dimensions.get("window")
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e']
const AddTask = () =>{
    return(
        <View>
            <TextInput 
            placeholder="Title"
            allowFontScaling={false}
            style={{ margin:scale*5, backgroundColor:'#E0DFE3', fontSize: scale*6, padding:scale*5, paddingLeft:scale*7, borderRadius:scale*5, borderColor:colors[3]}}
            ></TextInput>

            <TextInput
            placeholder="Description"
            multiline={true}
            allowFontScaling={false}
            style={{ margin:scale*5, backgroundColor:'#E0DFE3', fontSize: scale*6, padding:scale*5, paddingLeft:scale*7, borderRadius:scale*5, borderColor:colors[3]}}
            ></TextInput>

        </View>
    )
}
export default AddTask


