import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {  Text, View, Icon, Button,Container } from 'native-base'
import DefaultPickCard from './defaultPickCard'
import OtherCard from './otherCard'

const Locations = [
  {
    name:'HOME',
    iconName:'ios-star-outline',
    address:'jl.mana aja 69',
    active:false
  },
  {
    name:'WORK',
    iconName:'ios-star-outline',
    address:'jl.ya sudahlah 88',
    active:false
  },
  {
    name:'DAYLY MARKET',
    iconName:'ios-star-outline',
    address:'jl.apa aja 29',
    active:false
  },
  {
    name:'HOSPITAL',
    iconName:'ios-star-outline',
    address:'jl.lupa dimana 73',
    active:false
  }
]

const setLocations=[
  {
    name:'Set route from favorite list',
    iconName:'ios-navigate',
  },
  {
    name:'Set location on map',
    iconName:'ios-map',
  },
]

export default class PickLoc extends Component {
  
  handleOnChange = (unique,value) =>{

  }

  render() {
    return (
     <View>
       <OtherCard setloc={setLocations}/>
       <DefaultPickCard locations={Locations} onChange={this.handleOnChange}/>
     </View>
    )
  }
}
