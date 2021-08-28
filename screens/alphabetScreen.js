import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import {SafeAreaProvider} from 'react-native-safe-area-context'

import * as Speech from 'expo-speech' 

import MyHeader from '../components/MyHeader'

export default class AlphabetScreen extends React.Component{

  speak=(letter)=>{
    Speech.speak(letter)
  }

  render(){
    return(
      <View style={styles.container}>
      <SafeAreaProvider>
      <MyHeader title='ALPHABET'/>
      <ScrollView>
        <View style={styles.numberContainer}>
          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('a for apple')}}>
              <Image source={require('../assets/Aa.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('b for ball')}}>
              <Image source={require('../assets/Bb.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('c for cat')}}>
              <Image source={require('../assets/Cc.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('d')}}>
              <Image source={require('../assets/Dd.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('e')}}>
              <Image source={require('../assets/Ee.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('f')}}>
              <Image source={require('../assets/Ff.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('g')}}>
              <Image source={require('../assets/Gg.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('h')}}>
              <Image source={require('../assets/Hh.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('i')}}>
              <Image source={require('../assets/Ii.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('j')}}>
              <Image source={require('../assets/Jj.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('k')}}>
              <Image source={require('../assets/Kk.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('l')}}>
              <Image source={require('../assets/Ll.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity> 
          </View>

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('m')}}>
              <Image source={require('../assets/Mm.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('n')}}>
              <Image source={require('../assets/Nn.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('o')}}>
              <Image source={require('../assets/Oo.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity> 
          </View>

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('p')}}>
              <Image source={require('../assets/Pp.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('q')}}>
              <Image source={require('../assets/Qq.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('r')}}>
              <Image source={require('../assets/Rr.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity> 
          </View>

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('s')}}>
              <Image source={require('../assets/Ss.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('t')}}>
              <Image source={require('../assets/Tt.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('u')}}>
              <Image source={require('../assets/Uu.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity> 
          </View> 

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('v')}}>
              <Image source={require('../assets/Vv.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('w')}}>
              <Image source={require('../assets/Ww.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('x')}}>
              <Image source={require('../assets/Xx.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity> 
          </View>

          <View style={styles.rowcontainer}>
            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('y')}}>
              <Image source={require('../assets/Yy.PNG')} style={styles.imageIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.speak('z')}}>
              <Image source={require('../assets/Zz.PNG')} style={styles.imageIcon}/>
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
    alignSelf: 'center',
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
    borderRadius:25,
    backgroundColor:'lightyellow'
    } 
}) 