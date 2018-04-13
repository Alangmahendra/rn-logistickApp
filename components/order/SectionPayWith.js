import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {  Text, View, Icon, Button } from 'native-base'


import ButtonIconSelector from '../base/ButtonIconSelector'

 const items  = [
   {
     title: 'Cash',
     value: 'cash',
     iconName: 'ios-cash'
   },
   {
     title: 'Wallet',
     value: 'wallet',
     iconName: 'ios-card'
   },
   {
     title: 'Billed',
     value: 'billed',
     iconName: 'ios-sad'
   },
 ]

class SectionPayWith extends Component {
  constructor(props){
    super(props)
  }

  handleOnChange = (value) => {

  }

  onPress = () =>{
    this.props.navigate.navigate('pickupLocation')
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Pay with</Text>
        <ButtonIconSelector
          onChange={this.handleOnChange}
          items={items}
        />
        <TouchableOpacity style={styles.mainButton} onPress={this.onPress}>
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 25
    // backgroundColor: 'blue'
  },
  title: {
    fontWeight: '500',
    marginBottom: 15,
  },
  mainButton:{
    marginTop: 30,
    marginBottom: 5,
    backgroundColor: 'indigo',
    borderRadius: 6,
    padding: 15,
    alignItems: 'center'
  },
  buttonText:{
    color: 'white',
    fontWeight: '500'
  }
})

export default SectionPayWith
