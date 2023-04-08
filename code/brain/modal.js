import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import {modalVisible, setModalVisible} from '../MyComp/AddTask'
exports.showModal = (text) => {

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Show Modal</Text>
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text>Modal content goes here</Text>
                        <TouchableOpacity onPress={toggleModal} style={{ marginTop: 20 }}>
                            <Text>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


