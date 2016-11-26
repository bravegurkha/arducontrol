import React,{Component} from 'react';

import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  Switch,
} from 'react-native';


const styles= require('./styles.js');
import BluetoothSerial from 'react-native-bluetooth-serial';

export default class Body extends Component{

  constructor(props){
      super(props);

      this.state = {
        message: 'Control Your Home with Arduino | Bluetooth Enabled!',
        isEnabled: false,
        devices: [],
        statRadio: false,
        statBulb1: false,
        statBulb2: false,
      }
  }
  toggle(value){

    if(value == true){
      BluetoothSerial.enable()
      .then(this.setState({isEnabled:value}));
    }else{
      BluetoothSerial.disable()
      .then(this.setState({isEnabled:value}));
    }

  }

  componentWillMount(){
    BluetoothSerial.isEnabled().then((value) => this.setState({isEnabled:value}));

    
  }

  render(){
    return(

      <View style={styles.body}>

        <Switch
        value={this.state.isEnabled}
        onValueChange={(value) => this.toggle(value)}
        />

        <Text style={styles.bodyMessage}>{this.state.message}</Text>
        <ScrollView style={styles.controlRoom}>

          <View style={styles.controls}>

          </View>

          <View style={styles.controls}>

            <Text style={styles.controlsText}>Bulb 1</Text>
            <Switch style={styles.switchMe}
            value={this.state.statBulb1}
            onValueChange = {(value) => this.setState({statBulb1: value})}
            />

          </View>

          <View style={styles.controls}>

            <Text style={styles.controlsText}>Bulb 2</Text>
            <Switch style={styles.switchMe}
            value={this.state.statBulb2}
            onValueChange = {(value) => this.setState({statBulb2: value})}
            />

          </View>

          <View style={styles.controls}>

            <Text style={styles.controlsText}>Radio</Text>
            <Switch style={styles.switchMe}
            value={this.state.statRadio}
            onValueChange = {(value) => this.setState({statRadio: value})}
            />

          </View>
        </ScrollView>
      </View>

    );
  }
}
