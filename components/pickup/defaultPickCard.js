import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Text, Icon, Body } from 'native-base';
import {TouchableOpacity,StyleSheet} from 'react-native'

export default class PickCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  handleOnPress = (unique) => {
    this.setState({
      selectedValue: unique
    }, () => {
      this.props.locations.filter(location => {
        if(location.name === this.state.selectedValue){
          this.props.onChange(!location.active)
        }
      })
    })
  }

  render() {
    return (
        <Content>
         {
           this.props.locations.map(location =>{
            const isActive = this.state.selectedValue === location.name
            const unique = location.name
            return(
              <TouchableOpacity key={location.name} onPress={()=> this.handleOnPress(unique)}>
              <Card style={styles.root}>
                <CardItem>
                  <Body>
                    <Text style={styles.title}>{location.name}</Text>
                    <Text style={styles.subtitle}>{location.address}</Text>
                  </Body>
                  <Icon name={location.iconName} style={isActive? styles.activeIcon:{}} size={30}/>
                </CardItem>
              </Card>
              </TouchableOpacity>
            )
           })
         }
        </Content>

    )
  }
}
const styles = StyleSheet.create({
  root:{
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  title:{
    fontSize: 19,
  },
  subtitle:{
     fontSize: 15,
    color: 'grey'
  },
  activeIcon:{
    color:'yellow'
  }
})