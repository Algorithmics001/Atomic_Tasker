import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, } from 'react-native';
import {useState} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native/Libraries/Components/ScrollView/ScrollView'imp
import * as ob from 'react-native-vector-icons'

const {scale} = Dimensions.get("window")
const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#E0DFE3']

const ViewTask = (navigation) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Todo 1',
      date: '2022-01-01',
      description: 'This is the third todo item sdbfasdgguiodgcfyvydcfgbagfbodgyfcaybidufasicybafdyuafdyusagyugfygfydgfyugfgasyugfsgfasogfasduogfasdhbfsdsihvsiuhfoisadjffoisidhgfuisdhfoisdhfsdfhasdfhadjokslkfhasfhaw0heaifhw9fhiafhisdfhauidoasdfuasifh',
    },
    {
      id: 2,
      title: 'Todo 2',
      date: '2022-02-01',
      description: 'This is the second todo item',
    },
    {
      id: 3,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
    },
    {
      id: 4,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
    },
    {
      id: 5,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
    },
    {
      id: 6,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item',
    },
    {
      id: 7,
      title: 'Todo 3',
      date: '2022-03-01',
      description: 'This is the third todo item sdbfasdgguiodgcfyvydcfgbagfbodgyfcaybidufasicybafdyuafdyusagyugfygfydgfyugfgasyugfsgfasogfasduogfasdhbfsdsihvsiuhfoisadjffoisidhgfuisdhfoisdhfsdfhasdfhadjokslkfhasfhaw0heaifhw9fhiafhisdfhauidoasdfuasifh',
    },
  ]);

  const iconSize = scale*7


  return (
    <>
    <ScrollView >
      {todos.map(todo => (
        <View style={styles.viewStyle}>
          <View style={{backgroundColor:colors[3], borderTopEndRadius:scale*5,flex:1,flexDirection:'row'}}>
            <View
            style={{
              backgroundColor:colors[1],
              width:scale*12,
              height:scale*12,
              alignItems:'center',
              padding:scale*2
            }}
            >
            <FontAwesome5 name={'check'} size={iconSize} color={colors[3]}/>
            </View>
          

          <Text
          style={styles.titleText}
          >
          {todo.title}
          </Text>
          </View>
          

          <Text
          style={styles.dateText}
          >
          Date : {todo.date}
          </Text>

          <Text
          style={styles.descText}
          >
          Description : {todo.description}
          </Text>
          </View>
      ))}
    </ScrollView>
    </>
  );
};

const styleParameter = {
  paddingForDateDesc : scale*1,
  fontSizeForDateDesc : scale*5,
  fontWeightForDateDesc:'bold',
  leftpaddingForDateDesc: scale*4,
  bottomPaddingForDateDesc: scale*3,
}



const styles = StyleSheet.create({
  viewStyle:{
    marginTop:scale*3,
    marginHorizontal:scale*5,
    marginBottom:scale*1,
    backgroundColor: colors[2],
    borderRadius:scale*5,
    borderBottomRightRadius:0,

  },
  titleText:{
    padding: scale*1,
    fontSize:scale*7,
    fontWeight: 'bold',
    fontFamily :'roboto',
    color:'#fff',
    marginHorizontal:scale*3
  },
  dateText:{
    padding: styleParameter.paddingForDateDesc,
    fontSize:styleParameter.fontSizeForDateDesc,
    paddingHorizontal: styleParameter.leftpaddingForDateDesc,
    paddingBottom: styleParameter.bottomPaddingForDateDesc,
    fontWeight: styleParameter.fontWeightForDateDesc,
  },
  descText:{
    padding: styleParameter.paddingForDateDesc,
    fontSize: styleParameter.fontSizeForDateDesc,
    paddingHorizontal: styleParameter.leftpaddingForDateDesc,
    paddingBottom: styleParameter.bottomPaddingForDateDesc,
    fontWeight: styleParameter.fontWeightForDateDesc,
  }
})

export default ViewTask;