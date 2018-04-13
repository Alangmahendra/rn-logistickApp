import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import Searchbar from '../pickup/searchBar'
import Location from '../pickup/defaultPickupLocation'
import { Container, Text, View, Content } from 'native-base'

class PickupLocationScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Searchbar style={styles.wrapper}/>
          <Location />
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  wrapper:{
    flex: 1,
    marginBottom:'30px'
  }
});

export default PickupLocationScreen;