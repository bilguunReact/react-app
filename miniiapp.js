import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.srcollbain}>
              <View style={styles.paddingg}>
                <Image style={styles.zurag} source={require('../example/assets/bilguun.png')}/>
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
    height: 180,
   },
   paddingg: {
    flex: 1,
    margin: 40,
    alignItems: "center",
    
   },
   texthel: {
    fontSize: 24,
    fontWeight: 50,
   },
   zurag: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 100,
   },

  });
