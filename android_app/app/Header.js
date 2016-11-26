import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = require('./styles.js');

export default class Header extends Component{

  render(){
    return(
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Arducontrol</Text>
        </View>
    );
  }
}
