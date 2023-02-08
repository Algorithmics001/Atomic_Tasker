import React from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      todos: []
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  addTodo = async () => {
    const newTodo = { title: 'New Todo', description: 'Description' };
    try {
      const todos = [...this.state.todos, newTodo];
      this.setState({ todos });
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.log(error);
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
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={this.addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
        {this.state.todos.map((todo, index) => (
          <View key={index} style={styles.todoContainer}>
            <Text style={styles.todoTitle}>{todo.title}</Text>
            <Text>{todo.description}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default AddTask