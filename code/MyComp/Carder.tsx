import React from 'react';
import { Card, Divider, Icon, Text, Button, ButtonGroup } from '@ui-kitten/components';
import { ToastAndroid, TouchableOpacity, NativeModules, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';

const { width, height } = Dimensions.get("window");
const { scale } = Dimensions.get("window");

let x = 3.5 / scale
let Scale = scale * x

let y = 411.42857142857144 / width
let Width = width * y

let z = 804.5714285714286 / height

let Height = height * z

const iconSize = Scale * 5;
var colors = ['#e4def2', '#e2ddd8', '#eef8ef', '#2d414e', '#E0DFE3', '#fff', '#6D726E', '#fff'];

const Header = (props:any): React.ReactElement => (
  <View {...props}>
    <Text category='h6'>
      Maldives
    </Text>
    <Text category='s1'>
      Priority : High
    </Text>
    <Text category='s1'>
      Date : 26-09-2023
    </Text>
  </View>
);

const Footer = (props: any): React.ReactElement => (
  <ButtonGroup style={styles.buttonGroup}>
  <View>
  <Button
   accessoryLeft={DurationIcon}
   accessoryRight={DurationText}
   
   />
  </View>
  <View style={styles.operationButton}>
  <Button accessoryLeft={PencilIcon} appearance='outline'/>
  <Button accessoryLeft={DoneIcon} />
  </View>
</ButtonGroup>
);

const PencilIcon = (props:any) => (
  <Icon
    {...props}
    name='edit'
  />
);

const DoneIcon = (props:any) => (
  <Icon
    {...props}
    name='checkmark'
  />
);

const DurationIcon = (props:any) => (
  <Icon
    {...props}
    name='clock'
  />
);

const DurationText = (props:any) => (
  <Text
    status='control'
    style={styles.durationText}
  >01:30</Text>
)

const Carder = (): React.ReactElement => (
  <Card
    style={styles.Card}
    status='primary'
    header={Header}
    footer={Footer}
  >

    <Text
      style={styles.descText}
    >
      The Maldives, officially the Republic of Maldives, is a small country in South Asia,
      located in the Arabian Sea of the Indian Ocean.
      It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
</Card>

 
);


const styles = StyleSheet.create({
  buttonGroup: {
    flex:1,
    justifyContent:'space-between',
  },
  operationButton:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  Card:{
    marginHorizontal: '4%',
    marginTop:'4%',
    flex:1,
    flexWrap:'wrap',
  },
  viewStyle: {
    marginTop: Height * 0.004 * 3,
    marginHorizontal: Width * 0.009 * 5,
    marginBottom: Scale * 3,
    backgroundColor: colors[2],
    borderTopRightRadius: Scale * 5,
    paddingBottom: Height * 0
  },
  titleText: {
    fontSize: Scale * 6,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingLeft: Width * 0.009 * 4,
    color: colors[5]
  },
  doneText: {
    fontSize: Scale * 6,
    paddingVertical: Height * 0.004 * 2,
    paddingHorizontal: Width * 0.22,
    color: colors[5]
  },
  dateText: {
    color: colors[5],
    fontSize: Scale * 6,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingHorizontal: Width * 0.03,
    // color: colors[5]
  },
  descText: {
    fontSize: Scale * 5,
    // fontWeight: 'bold',
    // paddingTop: Height * 0.004 * 2,
    // paddingLeft: Width * 0.009 * 4,
    // color: colors[6]
  },
  priorText: {
    fontSize: Scale * 5,
    fontWeight: 'bold',
    paddingTop: Height * 0.004 * 2,
    paddingLeft: Width * 0.009 * 4,
    color: colors[6]
  },
  durationText: {
    fontSize: Scale * 4,
    fontWeight: 'bold',
    paddingRight:'4%'
  },
  addBtnPos: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999,
  },
  addBtn: {
    width: Width * 0.16,
    height: Width * 0.16,
    borderRadius: width * 2,
    backgroundColor: colors[3],
  },
  noTasksContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center'
  }
})
export default Carder