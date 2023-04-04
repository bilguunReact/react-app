import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Towch ({navigation}) {
    const towchtwo = () => {navigation.navigate("tooowch")};
  return (
    <SafeAreaView style={styles.container}>
    <View>
        <Pressable onPress={() => {towchtwo(); }}></Pressable>
      <Text style={styles.towch}>TowchTwo</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4C4C4C",
    },
    towch: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
  