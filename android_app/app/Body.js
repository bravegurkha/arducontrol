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
        message: 'Control Your Home!',
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

  write1(){
      if(this.statBulb1 == true){
          BluetoothSerial.write('10')
          .then(() => {
              this.setState({
                  statBulb1: false,
              })
          }).catch((err) => this.setState({
              message : err
          }));
      }else{
          BluetoothSerial.write('11')
          .then(() => {
              this.setState({
                  statBulb1: true,
              })
          }).catch((err) => this.setState({
              message : err
          }));
      }
  }

  write2(){
      if(this.statBulb2 == true){
          BluetoothSerial.write('20')
          .then(() => {
              this.setState({
                  statBulb2: false,
              })
          }).catch((err) => this.setState({
              message : err
          }));
      }else{
          BluetoothSerial.write('21')
          .then(() => {
              this.setState({
                  statBulb2: true,
              })
          }).catch((err) => this.setState({
              message : err
          }));
      }
  }

  write3(){
      if(this.statRadio == true){
          BluetoothSerial.write('30')
          .then(() => {
              this.setState({
                  statRadio: false,
              })
          }).catch((err) => this.setState({
              message : err
          }));
      }else{
          BluetoothSerial.write('31')
          .then(() => {
              this.setState({
                  statRadio: true,
              })
          }).catch((err) => this.setState({
              message : err
          }));
      }
  }

  render(){
    return(

      <View style={styles.body}>

        <Switch
        value={this.state.isEnabled}
        onValueChange={(value) => this.toggle(value)}
        />
        <Text >{this.state.message}</Text>
        <ScrollView style={styles.controlRoom}>

          <View style={styles.controls}>

            <Text style={styles.controlsText}>Bulb 1</Text>
            <Switch style={styles.switchMe}
            value={this.state.statBulb1}
            onValueChange = {this.write1}
            />

          </View>

          <View style={styles.controls}>

            <Text style={styles.controlsText}>Bulb 2</Text>
            <Switch style={styles.switchMe}
            value={this.state.statBulb2}
            onValueChange = {this.write1}
            />

          </View>

          <View style={styles.controls}>

            <Text style={styles.controlsText}>Radio</Text>
            <Switch style={styles.switchMe}
            value={this.state.statRadio}
            onValueChange = {this.write1}
            />

          </View>
        </ScrollView>
      </View>

    );
  }
}
