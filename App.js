import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fb from './fb'
import insta from './insta'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render() {
    return (
      <AppContainer></AppContainer>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {fb},
  Insta: {insta}
})

const AppContainer = createAppContainer(TabNavigator);



