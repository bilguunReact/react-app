import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../example/src/screens/Home';
import MplusTwo from '../example/src/screens/mplusTwo';
import TowchTwo from './src/screens/TowchTwo';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' 
    screenOptions={{headerShown: false}}> 
      <Stack.Screen name="Nuur"  component={Home}/>
      <Stack.Screen name="Two" component={MplusTwo}/>
      <Stack.Screen name='Towch' component={TowchTwo}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})