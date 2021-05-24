import React, { Component } from 'react';
import * as Google from 'expo-google-app-auth';
import {
    View,
    Text,
    StyleSheet,
    Button,
}from 'react-native';


export default class LoginScreen extends Component {

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: `198417691799-0ec5f1l3vlcv0acbui7ua3j048a59h36.apps.googleusercontent.com`,
                behavior: 'web',
                // iosClientId: '', //enter ios client id
                scopes: ['profile', 'email']
              });

          if (result.type === 'success') {
           
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
    };
    render() {
        return (
            <View style = {styles.container}>
             <Button
                title="Sign In With Google"
                onPress={() => this.signInWithGoogleAsync()}
              />
              
            
        </View>
        )
    }
}
const  styles = StyleSheet.create({

    container :{
        flex : 1,
        alignItems :'center',
        
        justifyContent:'center'
    }
})