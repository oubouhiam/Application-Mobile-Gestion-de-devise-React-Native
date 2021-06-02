import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, Linking, Pressable } from 'react-native';

import axios from "axios"

const image = { uri: "https://images.unsplash.com/photo-1613442368724-5bea257f8cbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" };


const ChartScreen = ({ navigation, route }) => {
    const { userData, data, cryptoPrice } = route.params;

    const webView = () => {
        navigation.navigate("WebviewNav", { userData, data });
    }
    const walletFun = () => {
        navigation.navigate("WalletNav", { userData, data })
    }
    const buyFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreexapp.herokuapp.com/api/user/buy", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('Your wallet is empty')
          })
    }
    const sellFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreexapp.herokuapp.com/api/user/sell", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('Your wallet is empty')
          })
    }

  return (
    <ImageBackground source={image} style={styles.image}>
        <View style={styles.userInfo}>
       <Image source={{uri: `${userData.photo_url}`}} style={{width:80, height:80,borderRadius:30,marginLeft : 160,marginTop:30}} />
        <Text style={styles.userInfoTxt}>{userData.name}</Text>
        </View>

        {/* <Pressable onPress={webView} style={{marginTop: 100}} >
            <Text style={{fontWeight: "bold", textAlign: "center"}} >View chart</Text>
        </Pressable> */}
        <View style={{fontWeight: "bold",flexDirection: "row", alignItems: "center"}} >
            <Pressable onPress={webView} style={styles.BTN1}>
                <Text style={{fontWeight: "bold",textAlign:"center"}} >View chart</Text>
            </Pressable>
            <Pressable onPress={walletFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold",textAlign:"center"}} >YOUR WALLET</Text>
            </Pressable> 
        </View>
            <Pressable onPress={buyFun} style={styles.BTN2}>
                <Text style={{fontWeight: "bold",textAlign:"center"}} >BUY CURRENCY</Text>
            </Pressable>
            <Pressable onPress={sellFun} style={styles.BTN2}>
                <Text style={{fontWeight: "bold",textAlign:"center"}} >SELL CURRECNCY</Text>
            </Pressable>          
    </ImageBackground>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
    userInfoTxt: {
        color:"white",
    fontWeight: "bold", 
    textAlign : "center",
    fontSize : 30
    },
    btnGroup: {
        // display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
        BTN: {
        width: 170,
        marginLeft: -10,
        padding: 20,
        borderRadius: 10,
        color:"white",
        textAlign: "center",
        backgroundColor: "lightblue",
        margin: 20,
    },
    BTN1: {
        width: 170,
        padding: 20,
        borderRadius: 10,
        color:"white",
        textAlign: "center",
        backgroundColor: "lightblue",
        margin: 20,
    },
    BTN2: {
        alignItems: "center",
        justifyContent: "center",
        width: 170,
        padding: 20,
        borderRadius: 10,
        color:"white",
        textAlign: "center",
        backgroundColor: "lightblue",
        margin: 20,
        marginLeft: 110
        
    },
});
