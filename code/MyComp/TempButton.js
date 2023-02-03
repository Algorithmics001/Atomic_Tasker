import React from 'react'
import { Button, StyleSheet } from 'react-native'

export default function TempButton() {
  return (
    <Button
    title='temp'
    style = {styles.btn}

    />
  )
}

const styles = StyleSheet.create({
    btn : {
        color:'rgb(26,67,77)',
        backgroundColor:'rgb(26,67,77)',
    }
})
