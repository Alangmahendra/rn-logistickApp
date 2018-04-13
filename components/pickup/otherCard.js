import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Text, Icon, Body, View } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native'

export default class PickCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  render() {
    return (
      <Content>
        {
          this.props.setloc.map(location => {
            return (
              <Card key={location.name} style={styles.root}>
                <CardItem>
                    <Icon name={location.iconName} />
                  <Body>
                    <Text style={styles.title}>{location.name}</Text>
                    <Text>{location.address}</Text>
                  </Body>

                </CardItem>
              </Card>
            )
          })
        }
      </Content>
    )
  }
}
const styles = StyleSheet.create({
  root: {
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 19,
  },
  titleWrapper: {
    flex: 2,
    flexDirection: 'column'
  },
  subtitle: {
    fontSize: 15,
    color: 'grey'
  },
  iconWrapper: {
    width: 30
  }
})