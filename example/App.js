 import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.srcollbain}>
                <View style={styles.greeting}>
                    <Text style={styles.ogloo}>Өглөөний мэнд</Text>
                    <Text style={styles.ogloomassage}></Text>
                    <Text style={styles.neglogo}>&#128512;</Text>
                    <Text style={styles.hoyrlogo}>&#128157;</Text>
                    <Text style={styles.guravlogo}>&#128293;</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
  
    },
    srcollbain: {
      backgroundColor: "pink",

    },
    greeting: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",
    },
    ogloomassage: {
      fontSize: 24,
      fontWeight: "700",
      width: 250,
      paddingLeft: 20,
    },
    neglogo: {
      width: 100,
      height: 50,
      margin: 10,
    },
    hoyrlogo: {
      width: 100,
      height: 50,
      margin: 10,
    },
    guravlogo: {
      width: 100,
      height: 50,
      margin: 10,
    },
  });
