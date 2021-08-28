import React from 'react'
import {Header} from 'react-native-elements'
import {Image} from 'react-native'

export default class MyHeader extends React.Component{
  render(){
    return(
      <Header
    leftComponent={<Image 
      source={require("../assets/logo.png")}
      style={{width:60,height:60}}
    />}
  centerComponent={{ text: this.props.title, style: { color: 'blue',fontSize:34, fontWeight:'bold',fontFamily:'Cursive', alignSelf:'center'} }}
  backgroundColor="#EDC8DA"
  containerStyle={{
    borderWidth:5,
    borderColor:'#78D1CA'
  }}
/>

    )
  }
}