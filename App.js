import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/fb'
import Insta from './screens/insta'
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
  Facebook: {screens: fb},
  Insta: {screens: insta}
})

const AppContainer = createAppContainer(TabNavigator);



