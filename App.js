// import { Text, Pressable, Alert ,View,StyleSheet, Button,TextInput} from 'react-native';


// export default function App  () {
//   return (
//      <View style={styles.container}>
//         <View style={styles.div}>
//             {/* <Text style={styles.name}>Name</Text> */}
//             <TextInput placeholder='Name'style={styles.nameinput}/>
//             <TextInput placeholder='Password'style={styles.nameinput}/>
//             <Text  style={styles.buttons} onPress={() => {
//     console.log('You tapped the button!');
//   }}>LOGIN</Text>
//         </View>
        
//      </View>
//   );
// };
// const styles=StyleSheet.create({
//     container:{  
//         flex:1,
//         backgroundColor: 'powderblue',
//     },
//     div:{
//         position:'absolute',
//         marginLeft:30,
//         marginTop:150,
//         borderColor:'skyblue',
//         borderRadius:20,
//         borderWidth:5,
         
//         width: 300,
//         height: 450,
//         backgroundColor: 'white',
//     },
//     // name:{
//     //     width:120,
//     //     height:30,
//     //     marginLeft:30,
//     //     marginTop:30,
//     //     backgroundColor: 'skyblue'
//     // },
//     nameinput:{
//         marginLeft:35,
//         width:220,
//         height:40, 
//         marginTop:40,
//         backgroundColor: 'skyblue',
//         borderRadius:10, 
//     },
//     buttons:{
//         width:120,
//         height:40,
//         marginLeft:85,
//         marginTop:60,
//         backgroundColor: 'lightblue',
//         borderRadius:8,
//         paddingTop:8,
//         textAlign:'center',
//         fontWeight: 'bold',
//     }

// });
// import createStackNavigator from react-navigation-stack
import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import Home from './components/Home'
import Quiz from './components/quiz'
import Result from './components/result'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Stack=createStackNavigator();
const App = () => {
  return ( 
    // <Quiz />
<NavigationContainer>
  <Stack.Navigator  >
    <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
    <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/> 
  </Stack.Navigator>
</NavigationContainer> 
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    padding:40,
    paddingHorizontal:16,
  }
})