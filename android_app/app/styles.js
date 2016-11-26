import React from 'react';
import {StyleSheet} from 'react-native';

const myStyles = StyleSheet.create({
  container:{
    flex:1,
  },
  navbar: {
    flex:3,
    padding:10,
    backgroundColor: '#990033',
    justifyContent:'center',
  },
  navbarText: {
    flex:1,
    color: 'white',
    fontSize:30,
    paddingLeft:20,
    fontWeight:'600',
  },
  body:{
    flex:35,
    backgroundColor:'white',
    padding:10,
  },
  bodyMessage: {
    fontSize:21,
    alignSelf:'center',
    padding:20,
    borderBottomWidth:4,
    borderColor:'#999',
  },
  controlRoom: {
    marginTop:30,
  },
  controls: {
    flex:1,
    backgroundColor: '#990033',
    padding:10,
    height:80,
    margin:3,
    justifyContent: 'center',
    flexDirection:'row',
  },
  controlsText: {
    flex:1,
    color: 'white',
    fontSize:20,
    marginLeft:30,
    alignSelf:'center',
  },
  switchMe:{
    flex:1,
  },
  footer: {
    flex:1,
    backgroundColor: '#990033',
    height:70,
    justifyContent:'center',
  },
  footerText:{
    color: 'white',
    fontSize:20,
    alignSelf:'center',
  }
});

module.exports = myStyles;
