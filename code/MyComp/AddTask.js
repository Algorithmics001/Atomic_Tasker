import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
});

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id:1,
      title:'',
      dec:'',
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  addTodo = async () => {
    const newTodo = { title: this.state.title, description: this.state.dec };
    try {
      const todos = [...this.state.todos, newTodo];
      this.setState({ todos });
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
      alert('To-do added successfully')

      this.setState({dec:''})
      this.setState({title:''}) 

      this.showTodo()

      console.log(getPath())
      
    } catch (error) {
      console.log(error);
    }
  };

  showTodo = async () => {
    try {
      const value = await AsyncStorage.getItem('todos');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      console.log(error)
      // Error retrieving data
    }
  };

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('todos');
      if (value !== null) {
        this.setState({ todos: JSON.parse(value) });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
  
    
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          allowFontScaling={false}
          style={{ margin: scale * 5, backgroundColor: '#E0DFE3', fontSize: scale * 6, padding: scale * 5, paddingLeft: scale * 7, borderRadius: scale * 5, borderColor: colors[3] }}
          onChangeText={(e)=>{this.setState({title:e})}}
        >{this.state.title}</TextInput>

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