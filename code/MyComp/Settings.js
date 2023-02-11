import {TouchableOpacity,View, ScrollTouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Modal, Button} from 'react-native'
import { create } from 'react-test-renderer';

const colors = ['#e4def2', '#e2ddd8','#eef8ef','#2d414e','#E0DFE3', '#fff']
const {scale} = Dimensions.get("window")
const {width, height} = Dimensions.get("window")
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

import * as appInfo from '../package.json'
import { useState } from 'react';

let x = 3.5/scale
Scale = scale*x

let y  = 411.42857142857144/width
Width = width*y

let z = 804.5714285714286/height

Height = height*z

function Settings() {
    const [aboutVisible, setAboutVisible] = useState(false)

    const styles = StyleSheet.create({
        TouchableOpacityStyle:{
            backgroundColor:colors[5],
            paddingHorizontal: Width*0.04,
            paddingVertical: height*0.02,
            borderBottomWidth : scale*0.2,
            borderBottomColor : 'grey'
        },
        text:{
            fontSize: Scale*5,
        },
        ModalOuter:{
            flex:1,
            backgroundColor:'#000000aa'
          },
        
          ModalIner:{
            flex:1,
            backgroundColor: '#fff',
            margin:Scale*40,
            marginHorizontal: Width*0.1,
            marginVertical: Height*0.3,
            borderRadius: Scale*6,
            padding: Scale*5,
            alignItems:'center'
          },
    })
    

    return ( 
        <ScrollView>
        

        <TouchableOpacity
        style={styles.TouchableOpacityStyle}
        >
        <Text
        style={styles.text}
        >
            Version
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.TouchableOpacityStyle}
        >
        <Text
        style={styles.text}
        >
            Version
        </Text>
        </TouchableOpacity>

        
        <TouchableOpacity
        style={styles.TouchableOpacityStyle}
        ><View style={{flexDirection:'row'}}>
        <Text
        style={styles.text}
        >
            Version
        </Text>
        <View style={{paddingLeft: Width*0.65}}><Text style={{paddingVertical:Height*0.004}}>{appInfo.version}</Text></View></View>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.TouchableOpacityStyle}
        onPress={()=>{setAboutVisible(true)}}
        ><View style={{flexDirection:'row'}}>
        <Text
        style={styles.text}
        >
            About
        </Text>
        <Modal 
        animationType='fade'
        transparent={true}
        visible={aboutVisible}
        >
          <View
          style={styles.ModalOuter}
          >
            <View
            style={styles.ModalIner}
            >
                <FontAwesome5 name='info-circle' size={scale*13} color={colors[3]}/>
                <Text style={{fontSize: Scale*5, textAlign: 'center'}}>
                This is a open-source gem sparkles with wealth of features, minimalist design, and dynamic wallpapers that will keep you motivated and organized.
                    </Text>
                    <Text style={{fontSize: Scale*5, textAlign: 'center', fontWeight:'bold'}}>
                    First Collaborators:
                    </Text>
                    <Text style={{fontSize: Scale*5, textAlign: 'center', fontWeight:'bold'}}>
                    Raghav Jit, Gurdev Singh, Amrinder Singh, Sangam Arora, Rajveer Singh
                    </Text>
                <TouchableOpacity
                    style={{   
                        backgroundColor: colors[3],
                        padding: Scale*3,
                        borderRadius: Scale*2,
                        margin: Scale*4
                    }}
                    onPress={()=>(setAboutVisible(false))}
                >
                    
                    <Text
                    style={{color:colors[5], fontWeight:'bold', fontSize:Scale*5}}
                    >OK</Text>
                </TouchableOpacity>
                
            </View>
          </View>
        </Modal>


        <View style={{paddingLeft: Width*0.72}}><FontAwesome5 name='info-circle' size={scale*6} color={colors[3]}/></View></View>
        </TouchableOpacity>
        
        </ScrollView>
    )
}



export default Settings;