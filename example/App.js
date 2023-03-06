 import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.srcollbain}>
              <View style={styles.paddingg}>
              <Text style={styles.texthel}>MY CV</Text>
              </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    
  },
   srcollbain: {
    backgroundColor: "#008B8B",
   },
   paddingg: {
    flex: 1,
    margin: 100,
    alignItems: "center",
   },
   texthel: {
    fontSize: 24,
    fontWeight: 100,
   }

  });
