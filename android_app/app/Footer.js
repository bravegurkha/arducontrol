import React,{Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

const styles = require('./styles.js');


export default class Footer extends Component{

  render(){
    return(
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created By Swornim Shrestha</Text>
      </View>
    );
  }
}
