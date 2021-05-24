import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginScreen'
 import LoadingScreen from './screens/LoadingScreen'
 import DashboardScreen from './screens/DashboardScreen'

  import * as firebase from 'firebase';

  import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component{

  render(){

    return(
        <AppNavigator/>
    );
  }
}


 const AppSwichNavigator = createSwitchNavigator({
   
   LoadingScreen:LoadingScreen,
   LoginScreen:LoginScreen,
   DashboardScreen:DashboardScreen,

 })



const AppNavigator = createAppContainer(AppSwichNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
