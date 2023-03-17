import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-ionicons";

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
                <View style={styles.tomView}>
                  <View style={styles.neg}>
                  <Icon name="information-circle-outline" />
                    <Text style={styles.ner}>Book</Text>
                  </View>
                  <View style={styles.hoyr}>
                  <Text style={styles.ner}>Book</Text>
                  </View>
                  <View style={styles.gurav}>
                  <Text style={styles.ner}>Book</Text>
                  </View>
                  <View style={styles.dorov}>
                  <Text style={styles.ner}>Book</Text>
                  </View>
                </View>
                <View style={styles.ontsloh}>
                  <Text style={styles.deed}>cxvbcb</Text>
                  <Text style={styles.dood}>fdgnhgdgs</Text>
                  <Image style={styles.book}></Image>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
      alignItems: 'center',
      
    },
    greeting: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",
    },
    // ogloomassage: {
    //   fontSize: 24,
    //   fontWeight: "700",
    //   width: 250,
    //   paddingLeft: 20,
    // },
    // neglogo: {
    //   width: 100,
    //   height: 50,
    //   margin: 10,
    // },
    // hoyrlogo: {
    //   width: 100,
    //   height: 50,
    //   margin: 10,
    // },
    // guravlogo: {
    //   width: 100,
    //   height: 50,
    //   margin: 10,
    // },
    tomView: {
      backgroundColor: 'grey',
      width: 350,
      height: 300,
      borderRadius: 10,
      marginHorizontal: 10,
      flexDirection: 'row',
      flexWrap: "wrap",
      },
    neg: {
      backgroundColor: 'black',
      width: 150,
      height: 100,
      margin: 10,
      borderRadius: 10,
    },
    hoyr: {
      backgroundColor: 'black',
      width: 150,
      height: 100,
      margin: 10,
      borderRadius: 10,
    },
    gurav: {
      backgroundColor: 'black',
      width: 150,
      height: 100,
      margin: 10,
      borderRadius: 10,
    },
    dorov: {
      backgroundColor: 'black',
      width: 150,
      height: 100,
      margin: 10,
      borderRadius: 10,
    },
    ner: {
      fontSize: 15,
    },
    ontsloh: {
      backgroundColor: '#fff',
      width: 350,
      height: 300,
      marginHorizontal: 10,
      borderRadius: 15,
      marginTop: 10,
    },
    deed: {
      margin: 10,
    }
  });
