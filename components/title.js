import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

const Title =()=> { 
    return (
      <View>
        <Text style={styles.title}>Quizzler</Text>
      </View>
    )
}
export default Title
const styles=StyleSheet.create({
    title:{
      padding:50,
    }
})