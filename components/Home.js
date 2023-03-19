import { Image,Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Title from './title'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Home ({navigation}) { 
    return (
      <View>
         <Title/>
         <View style={styles.bannerContainer}>
            <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'}}
            style={styles.banner}
            resizeMode="contain"/>
         </View>
         <TouchableOpacity onPress={()=>navigation.navigate('Quiz') }  style={styles.container}>
            <Text style={styles.but}>Start</Text>
         </TouchableOpacity>
         {/* <Text>
            sds
         </Text> */}
      </View>
    )
}

const styles=StyleSheet.create({
   banner:{
      height:220,
      width:180,
   },
   bannerContainer:{
      justifyContent:'center',
      alignItems:'center'
   },
   container:{
      padding:20,
      alignItems:'center'
   },
   but:{
      width:'100%',
      backgroundColor:'#1a759f',
      padding:20,
      borderRadius:16,
      fontSize:24,
      fontWeight:'600',
      color:'white',
      alignItems:'center',
      textAlign:'center'
   }
})