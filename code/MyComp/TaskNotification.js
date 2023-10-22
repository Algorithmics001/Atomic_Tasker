import React, { useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskNotifications = ({ task }) => {
    const [snoozeDuration, setSnoozeDuration] = useState(15); // Default snooze time in minutes

    const handleSnooze = () => {
        // Handle snooze action by scheduling the notification again after the snooze duration
        if (task.dueDate) {
            const newDueDate = new Date();
            newDueDate.setMinutes(newDueDate.getMinutes() + snoozeDuration);
            PushNotification.localNotificationSchedule({
                title: 'Task Reminder',
                message: `Don't forget your task: ${task.title}`,
                date: newDueDate,
            });
        }
    };

    useEffect(() => {
        if (task.dueDate) {
            // Configure and schedule the initial notification
            const notificationTime = new Date(task.dueDate);
            PushNotification.localNotificationSchedule({
                title: 'Task Reminder',
                message: `Don't forget your task: ${task.title}`,
                date: notificationTime,
            });
        }
    }, [task]);

    return (
        <View style={styles.taskNotificationContainer}>
            <Text>{task.title}</Text>
            <TouchableOpacity onPress={handleSnooze}>
                <Text style={styles.snoozeButton}>Snooze</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    taskNotificationContainer: {
        backgroundColor: '#eef8ef',
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    snoozeButton: {
        color: 'blue',
    },
});

export default TaskNotifications;
