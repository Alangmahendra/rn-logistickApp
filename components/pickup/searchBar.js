import React, { Component } from 'react'
import { Container, Header, Item, Input, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import {StyleSheet} from 'react-native'

export default class SearchBar extends Component {
  render() {
    return (
        <Header searchBar rounded style={styles.root}>
          <Item >
            <Ionicons name={'ios-pin'} size={45} color={'indigo'}/>
            <Input placeholder="Pick Up Location"/>
          </Item>
        </Header>
    )
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: '#f2f2f2'
  }
})
