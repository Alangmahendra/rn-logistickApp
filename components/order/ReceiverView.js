import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, View, Card, CardItem, Body, Item, Input } from 'native-base'

import CollapsibleView from './CollapsibleView'
import { Ionicons } from '@expo/vector-icons'

class ReceiverView extends Component {
  render() {
    return (
      <CollapsibleView
        title={this.props.receiver.name}
        subtitle={this.props.receiver.address}
        iconLeft={'ios-star'}
        iconLeftColor={'orange'}
        isReceiver
      >
        <Item>
            <Ionicons name={'ios-person'} size={25} color={'orange'} />
            <Input placeholder="Name" />
          </Item>
          <Item>
            <Ionicons name={'ios-call'} size={25} color={'orange'} />
            <Input placeholder="Phone number" />
          </Item>
      </CollapsibleView>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

export default ReceiverView
