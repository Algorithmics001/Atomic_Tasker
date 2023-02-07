import { DatePickerIOSBase, Dimensions, TouchableOpacity, StyleSheet, Label, Text, TextInput, View, modal, Button } from "react-native"

import DatePicker from 'react-native-date-picker'
import React from "react"
import { useState } from "react"

import SharedPreferences from '../node_modules/react-native-shared-preferences';

const {scale} = Dimensions.get("window")
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e']

const TaskView = () => {
    return (
        <View>
            <Label>Task1</Label>
        </View>
    )
}
export default TaskView