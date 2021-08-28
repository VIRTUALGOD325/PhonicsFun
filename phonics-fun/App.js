import React from "react";
import {View, Image} from "react-native";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 

import NumberScreen from './screens/numbers'
import AlphabetScreen from './screens/alphabetScreen'


export default function App(){
    return(
        <AppContainer/>
    )
}
const TabNavigator =  createBottomTabNavigator({
  NumberScreen: {screen: NumberScreen},
  AlphabetScreen: {screen: AlphabetScreen}
},
{
   defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "NumberScreen"){
        return(
          <Image
          source={require("./assets/NumberTabIcon1.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "AlphabetScreen"){
        return(
          <Image
          source={require("./assets/EditedAlphabetTabIconNoBackground.png")}
          style={{width:40, height:40}}
        />)
      } 
      }
    })
}

)


const AppContainer = createAppContainer(TabNavigator)