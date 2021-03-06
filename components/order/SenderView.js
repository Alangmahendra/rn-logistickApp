import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Text,
  View,
  Card,
  CardItem,
  Body,
  Form,
  Item,
  Input,
  Label
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'

import CollapsibleView from './CollapsibleView'

class ReceiverView extends Component {
  state = {}

  render() {
    return (
      <CollapsibleView
        title={this.props.sender.name}
        subtitle={this.props.sender.address}
        iconLeft={'ios-star'}
        iconLeftColor={'indigo'}
      >
       
          <Item>
            <Ionicons name={'ios-person'} size={25} color={'indigo'} />
            <Input placeholder="Name" />
          </Item>
          <Item>
            <Ionicons name={'ios-call'} size={25} color={'indigo'} />
            <Input placeholder="Phone number" />
          </Item>
          <Item>
            <Input placeholder="Notes,instruction,location detail" />
          </Item>
       
      </CollapsibleView>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default ReceiverView
