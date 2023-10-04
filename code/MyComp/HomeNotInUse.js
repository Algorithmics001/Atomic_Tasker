import { NativeModules, PermissionsAndroid, Platform, View, Text, Button, Touchable, TouchableOpacity, StyleSheet, Dimensions, Modal, ScrollView } from 'react-native'
import {useState, useEffect, React} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AddTask from './AddTask';
import ViewTask from './ViewTask';
import {Appearance} from 'react-native';
import Settings from './Settings';
import SetWallpaper from './SetWallpaper';
import QuickTasker from './QuickTasker';
import MyProfile from './MyProfile';
import {resetAIjson} from '../brain/testing'
import {resetHIjson} from '../brain/testing'
import {resetJson} from '../brain/QuickTasker'
const RNFS = require('react-native-fs')


const {scale} = Dimensions.get("window")
const {width, height} = Dimensions.get("screen")
let colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#69666F']

let temps = scale

let x = 3.5/scale
Scale = scale*x

const iconSize = 39

const colorscheme = Appearance.getColorScheme()

if(colorscheme === 'dark'){
  colors[3] = 'black'
  colors[4] = 'black'
}
const packageName = NativeModules?.AppInfo?.packageName ?? '';
const filePath1 = `${RNFS.DocumentDirectoryPath}/${packageName}/hi.json`;
const filePath2 = `${RNFS.DocumentDirectoryPath}/${packageName}/Avalible_ID.json`;
const filePath3 = `${RNFS.DocumentDirectoryPath}/${packageName}/QuickTasks.json`;

const Home = ({navigation}) => {


z
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Atomic-Tasker App needs storage permission ',
          message:
            'Atomic-Tasker App needs access to your storage ' +
            'to save the data',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the storage')

        RNFS.exists(filePath1)
          .then((exists) => {
            if (exists) {
              console.log('File exists');
            } else {
              resetHIjson()
              resetAIjson()
            }
          })
          .catch((error) => {
            console.log(error);
        });

        RNFS.exists(filePath2)
          .then((exists) => {
            if (exists) {
              console.log('File exists');
            } else {
              resetAIjson()
              resetHIjson()
            }
          })
          .catch((error) => {
            console.log(error);
        });

        RNFS.exists(filePath3)
          .then((exists) => {
            if (exists) {
              console.log('File exists');
              resetJson()
            } else {
              resetJson()
            }
          })
          .catch((error) => {
            console.log(error);
        });

      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  requestStoragePermission()  
  return (
    <View style={{
      backgroundColor: colors[3], 
      alignItems: 'center', 
      padding: 10,
      flexWrap:'wrap'
      }}>

      {/* <View style={{backgroundColor:'#fff',height:Scale*200}}>
      </View> */}
      {/* <View style={{
        
        flex:1,flexWrap:'wrap',
        }}> */}
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

      <TouchableOpacity style={styles.TouchableOpacity2}
      onPress={() => {navigation.navigate(QuickTasker)}}
      >

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name={'bolt'} size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}
      >
        Zap Tasker
      </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacity3}
      onPress={()=>{navigation.navigate(MyProfile)}}
      >

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

      <TouchableOpacity style={styles.TouchableOpacity5}
        onPress={()=>{navigation.navigate(Settings)}}
      >

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name='gear' size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        Settings
      </Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacity6}
            onPress={()=>{navigation.navigate(SetWallpaper)}}
      >

      <View style={styles.TouchableOpacityView}>
      <FontAwesome5 name='exclamation' size={iconSize} color={colors[3]}/>
      </View>

      <Text style={styles.TouchableOpacityText1}>
        Set Wallpaper
      </Text>

      </TouchableOpacity>

      
      {/* </View> */}
    </View>
  )
}
const styles = StyleSheet.create({
  TouchableOpacity1:{
    backgroundColor:'#e4def2',
    width: '45%',
    height:'30%',
    margin: 10,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity2:{
    backgroundColor: colors[1],
    width: '45%',
    height:'30%',
    margin: 10,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity3:{
    backgroundColor: colors[2],
    width: '45%',
    height:'30%',
    margin: 10,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity4:{
    backgroundColor: colors[2],
    width: '45%',
    height:'30%',
    margin: 10,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity5:{
    backgroundColor: colors[0],
    width: '45%',
    height:'30%',
    margin: 10,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity6:{
    backgroundColor: colors[1],
    width: '45%',
    height:'30%',
    margin: 10,
    borderRadius: 35,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  

  TouchableOpacityView:{
    // height:Scale*15,
    // width:Scale*15, 
    backgroundColor:'#fff', 
    margin:Scale*5, 
    borderRadius:Scale*5,
    alignItems:'center',
    padding:Scale*3,
    aspectRatio: 1
  },
  TouchableOpacityText1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors[3],
    marginTop: 10,
  },  
})

export default Home