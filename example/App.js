import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import MplusTwo from "./src/screens/mplusTwo";

const Stack = createNativeStackNavigator();
const mplusTwoStack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Homescreen'>
      <Stack.Screen name="Home" component={Home}/>
      <mplusTwoStack.Screen name="MplusTwo" component={MplusTwo}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})