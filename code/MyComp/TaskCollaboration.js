import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CollaborativeTaskList = ({ tasks }) => {
    return (
        <View style={styles.collaborativeTaskListContainer}>
            <Text style={styles.collaborativeTaskListTitle}>Collaborative Task List</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.collaborativeTaskItem}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>Assigned to: {item.assignee}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    collaborativeTaskListContainer: {
        margin: 20,
    },
    collaborativeTaskListTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    collaborativeTaskItem: {
        backgroundColor: '#eef8ef',
        padding: 10,
        marginVertical: 5,
    },
});

export default CollaborativeTaskList;
