import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import AimagList from './AimagList';
import AimagDetail from './AimagDetail';
import search from './search';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='AimagList' component={AimagList}></Tab.Screen>
            <Tab.Screen name='AimagList' component={AimagDetail}></Tab.Screen>
            <Tab.Screen name='AimagList' component={search}></Tab.Screen>
        </Tab.Navigator>
    );
}