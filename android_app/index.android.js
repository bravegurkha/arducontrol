import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './app/Header.js';
import Body from './app/Body.js';
import Footer from './app/Footer.js';
const styles = require('./app/styles.js');

export default class arducontrol extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </View>
    );
  }
}

AppRegistry.registerComponent('arducontrol', () => arducontrol);
