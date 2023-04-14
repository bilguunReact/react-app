import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../example/src/screens/Home';
import MplusTwo from '../example/src/screens/mplusTwo';
import TowchTwo from './src/screens/TowchTwo';
import AimagDetail from './src/screens/AimagDetail';
import AimagList from './src/screens/AimagList';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' 
    screenOptions={{headerShown: false}}> 
      <Stack.Screen name="Nuur"  component={Home}/>
      <Stack.Screen name="Two" component={MplusTwo}/>
      <Stack.Screen name='Towch' component={TowchTwo}/>
      <Stack.Screen name='AimagList' component={AimagList}/>
      <Stack.Screen name='AimagDetail' component={AimagDetail}/>
      {/* <Stack.Screen name='Aimaglist' component={AimagList}/> */}
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})