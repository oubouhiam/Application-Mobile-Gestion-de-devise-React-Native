import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, Pressable } from 'react-native';

import axios from "axios"

const image = { uri: "https://images.unsplash.com/photo-1613442368724-5bea257f8cbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" };

const WalletNav = ({ navigation, route }) => {
    const { userData, data } = route.params;

    useEffect(() => {
        getWalletValue();
    });
    const [Wallet, SetWallet] = useState([])
    const [Sold, SetSold] = useState([])

    const getWalletValue = async () => {
        await axios.get(`https://foreexapp.herokuapp.com/api/user/info/${userData.email}`).then((walletdata) => {
            SetWallet(walletdata.data.walletSold)
            SetSold(walletdata.data.sold)
        })
        .catch((e) => {
            console.log(e)
        })
    }
  return (
 <ImageBackground source={image} style={styles.image}>
         <View style={styles.userInfo}>
       <Image source={{uri: `${userData.photo_url}`}} style={{width:80, height:80,borderRadius:30,marginLeft : 160,marginTop:30}} />
        <Text style={styles.userInfoTxt}>{userData.name}</Text>
        </View>

        <Text style={styles.walletNum}>Your Wallet: {Wallet}0,0 $</Text>
        <Text style={styles.walletNum}>Your Sold is: {Sold} 0,0 $</Text>
    </ImageBackground>
  );
};

export default WalletNav;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
    userInfoTxt: {
    color:"white",
    fontWeight: "bold", 
    marginTop : 2,
    textAlign : "center",
    fontSize : 30
    },
    walletNum: {
        fontSize: 60,
        fontWeight: "bold",
        marginTop: 100,
        textAlign: "center",
        color:"white",
    }
});

