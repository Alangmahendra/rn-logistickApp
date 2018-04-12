import React, {Component} from 'react';
import {Container, Text, View, Card, CardItem, Body, Icon, Button} from 'native-base';
import {StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons'

class PackagePhotoCard extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Body>
          <View style={styles.wrapper}>
            <View style={{flex: 1}}>
              <Text>
                Your Package Photo
              </Text>
            </View>
            <View>
              <Button transparent>
              <Ionicons name={'ios-add-circle'} size={30} color={'indigo'} />
              </Button>
            </View>
          </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // backgroundColor: 'red'
  }

});


export default PackagePhotoCard;
