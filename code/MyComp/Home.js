import { View, Text, Button, Touchable, TouchableOpacity, StyleSheet, Dimensions, Modal, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AddTask from './AddTask';
import ViewTask from './ViewTask';


const {scale} = Dimensions.get("screen")
const {width, height} = Dimensions.get("screen")
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e']
const iconSize = scale*9
const Home = ({navigation}) => {

  return (
    
    <View style={{backgroundColor:'#2d414e', flex:1, alignItems:'center'}}>

      {/* <View style={{backgroundColor:'#fff',height:scale*200}}>
      </View> */}
      <View style={{flex:1, flexWrap:'wrap'}}>
     <TouchableOpacity 
     style={styles.TouchableOpacity1}
     onPress={()=>{navigation.navigate(AddTask)}}
     >

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name={'plus'} size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        Add New Task
      </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacity2}>

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name={'question'} size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        How To Use
      </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacity3}>

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name='user' size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        My Profile
      </Text>

      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.TouchableOpacity4}
      onPress={()=>{navigation.navigate(ViewTask)}}
      >

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name='list' size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        View All Tasks
      </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacity5}>

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name='gear' size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        Settings
      </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacity6}>

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name='exclamation' size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        Settings
      </Text>

      </TouchableOpacity>

      
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  TouchableOpacity1:{
    backgroundColor:'#e4def2',
    width:scale*45,
    height:scale*53,
    margin:scale*3,
    marginVertical:scale*9,
    borderRadius:scale*8,
    marginBottom:scale*1,
  },
  TouchableOpacity2:{
    backgroundColor:colors[1],
    width:scale*45,
    height:scale*53,
    margin:scale*3,
    marginVertical:scale*9,
    borderRadius:scale*8,
    marginBottom:scale*1,
  },
  TouchableOpacity3:{
    backgroundColor:colors[2],
    width:scale*45,
    height:scale*53,
    margin:scale*3,
    marginVertical:scale*9,
    borderRadius:scale*8,
    marginBottom:scale*1,
  },
  TouchableOpacity4:{
    backgroundColor:colors[1],
    width:scale*45,
    height:scale*53,
    margin:scale*3,
    marginVertical:scale*9,
    borderRadius:scale*8,
    marginBottom:scale*1,
  },
  TouchableOpacity5:{
    backgroundColor:colors[2],
    width:scale*45,
    height:scale*53,
    margin:scale*3,
    marginVertical:scale*9,
    borderRadius:scale*8,
    marginBottom:scale*1,
  },
  TouchableOpacity6:{
    backgroundColor:'#e4def2',
    width:scale*45,
    height:scale*53,
    margin:scale*3,
    marginVertical:scale*9,
    borderRadius:scale*8,
    marginBottom:scale*1,
  },
  

  TouchableOpacityView:{
    height:scale*15,
    width:scale*15, 
    backgroundColor:'#fff', 
    margin:scale*5, 
    borderRadius:scale*5,
    alignItems:'center',
    padding:scale*3,
  },
  TouchableOpacityText1:{
    marginHorizontal:scale*7, 
    fontSize:scale*6,
    fontWeight:'bold',
  },
})

export default Home