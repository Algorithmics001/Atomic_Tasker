import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { Button, Text, Layout, List, ListItem } from '@ui-kitten/components'; // Import Eva Design System components
import { addQTask, getList } from '../brain/QuickTasker';

export default function QuickTasker() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [undoItems, setUndoItems] = useState([]); // State for undoing actions

  const calculateTotalPrice = () => {
    const totalPrice = taskList.reduce((total, item) => total + (item.quantity * item.price), 0);
    return totalPrice;
  };

  const checkValidation = () => {
    if (itemName === '' || quantity === '' || price === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      addTask();
    }
  };

  useEffect(() => {
    // Load data from the 'getList' function when the component mounts.
    getList().then(data => {
      setTaskList(data);
    });
  }, []);

  const addTask = () => {
    const newItem = {
      itemName,
      quantity: parseFloat(quantity),
      price: parseFloat(price),
    };
    const updatedTaskList = [...taskList, newItem];

    // Save the updated list to the 'addQTask' function and also update the state.
    addQTask(updatedTaskList);
    setTaskList(updatedTaskList);

    // Clear input fields
    setItemName('');
    setQuantity('');
    setPrice('');
  };

  const deleteTask = (index) => {
    if (taskList.length > 0) {
      const newTaskList = [...taskList];
      newTaskList.splice(index, 1);
      addQTask(newTaskList); // Update the data in addQTask function.
      setTaskList(newTaskList); // Update the state.
    }
  };

  const undoItemsAction = () => {
    if (undoItems.length > 0) {
      const lastUndoItem = undoItems[undoItems.length - 1];
      setUndoItems(undoItems.slice(0, -1));
      setTaskList([...taskList, lastUndoItem]);
      addQTask([...taskList, lastUndoItem]);
    }
  };

  return (
    <Layout style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        onChangeText={text => setItemName(text)}
        value={itemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        onChangeText={text => setQuantity(text)}
        value={quantity}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={text => setPrice(text)}
        value={price}
        keyboardType="numeric"
      />
      <Button style={styles.button} onPress={checkValidation}>
        Add Item
      </Button>
      <Text style={styles.totalPrice}>Total Price: {calculateTotalPrice()}</Text>

      {/* Display Items in a List */}
      <List
        style={styles.table}
        data={taskList}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.itemName}`}
            description={`Quantity: ${item.quantity}, Price: ${item.price}, Total: ${item.quantity * item.price}`}
          />
        )}
      />

      {/* Delete Last Item Button */}
      <Button style={styles.button} onPress={() => deleteTask(taskList.length - 1)}>
        Delete Last Item
      </Button>

      {/* Undo Items Button */}
      <Button style={styles.button} onPress={undoItemsAction}>
        Undo Items
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    color: 'black',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  button: {
    marginBottom: 10,
    paddingBottom: 5,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  table: {
    marginBottom: 10,
  },
});
