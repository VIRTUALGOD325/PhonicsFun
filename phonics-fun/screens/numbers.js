import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image, 
  TouchableOpacity,
  ScrollView
} from 'react-native'

import * as Speech from 'expo-speech' 

import {SafeAreaProvider} from 'react-native-safe-area-context'

import MyHeader from '../components/MyHeader'

export default class NumberScreen extends React.Component{

   speak=(number)=>{
    Speech.speak(number)
  }

  render(){
    return(
      <View style={styles.container}>
      <SafeAreaProvider>
      <MyHeader title='NUMBERS'/>
      <ScrollView>
        <View style={styles.numberContainer}>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('1')}}>
              <Image source={require('../assets/1.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('2')}}>
              <Image source={require('../assets/2.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('3')}}>
              <Image source={require('../assets/3.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('4')}}>
              <Image source={require('../assets/4.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('5')}}>
              <Image source={require('../assets/5.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('6')}}>
              <Image source={require('../assets/6.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('7')}}>
              <Image source={require('../assets/7.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('8')}}>
              <Image source={require('../assets/8.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('9')}}>
              <Image source={require('../assets/9.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('0')}}>
              <Image source={require('../assets/0.png')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>    
        </View>
      </ScrollView>  
      </SafeAreaProvider>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    },
  numberContainer:{
    alignSelf: "center",
    backgroundColor:'#2B4E64'
    },
  rowcontainer:{
    flexDirection:'row',
    },
  imageIcon:{
    width:90,
    height:120  
    }, 
  button:{
    borderWidth:3,
    margin:5,
    padding:2,
    borderRadius:20,
    backgroundColor:'lightyellow',
    borderColor:'#A10532'
    } 
}) 