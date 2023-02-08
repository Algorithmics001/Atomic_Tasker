import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {scale} = Dimensions.get("window")
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e']
var temp = {
  
}




const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  todoContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  todoTitle: {
    fontWeight: 'bold'
  },
  addButton: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3399ff',
    borderRadius: 5
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold'
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
          placeholder="Description"
          multiline={true}
          allowFontScaling={false}
          style={{ margin: scale * 5, backgroundColor: '#E0DFE3', fontSize: scale * 6, padding: scale * 5, paddingLeft: scale * 7, borderRadius: scale * 5, borderColor: colors[3] }}
          onChangeText={(e)=>{this.setState({dec:e})}}
        >{this.state.dec}</TextInput>

        <TouchableOpacity onPress={this.addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>

        {this.state.todos.map((todo, index) => (

          <View key={index} style={styles.todoContainer}>

            <Text style={styles.todoTitle}>{}</Text>
            <Text>{}</Text>

          </View>

        ))}
      </View>

    );
  }
}

export default AddTask