import React, { Component } from 'react'
import { Container, Text, View, Card, CardItem, Body, List } from 'native-base'
import { StyleSheet } from 'react-native'

import LineSpacer from '../base/LineSpacer'
import SectionPayWith from './SectionPayWith'
import SectionPaymentRadio from './SectionPaymentRadio'
import SectionPrice from './SectionPrice'

class BottomSheet extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('props on bottom shest',this.props)
  }
  render() {
    return (
      <View style={styles.root}  elevation={10}>
        <SectionPrice />
        <LineSpacer/>
        <SectionPaymentRadio />
        <LineSpacer/>
        <SectionPayWith navigate={this.props}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    shadowRadius: 20,

  }
})

export default BottomSheet
