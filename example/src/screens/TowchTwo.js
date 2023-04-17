import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Towch ({navigation}) {
    const towchtwo = () => {navigation.navigate("tooowch")};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
      <View style={styles.roooow}>
          <Pressable onPress={() => navigation.popToTop()} style={styles.huwaaltsah}>
            <FontAwesome5
              style={styles.share}
              name="caret-left"
              size={28}
              color="white"
              paddingTop={5}

            />
          </Pressable>
      </View>
      <View style={styles.tolgoi}><Text style={styles.ner}>Цахим ном</Text></View>
      <ScrollView horizontal={true}>
      <View style={styles.zai}>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <View style={styles.neg}>
        <Image
            source={require('../../assets/1521804401-13464317.jpg')}
            style={styles.zurag}
          ></Image></View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <View style={styles.neg}>
          <Image
            source={require('../../assets/1521804401-13464317.jpg')}
            style={styles.zurag}
          ></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <View style={styles.neg}>
          <Image
            source={require('../../assets/1521804401-13464317.jpg')}
            style={styles.zurag}
          ></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <View style={styles.neg}>
          <Image
            source={require('../../assets/1521804401-13464317.jpg')}
            style={styles.zurag}
          ></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <View style={styles.neg}>
          <Image
            source={require('../../assets/1521804401-13464317.jpg')}
            style={styles.zurag}
          ></Image>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
    
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    towch: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    roooow: {
      flexDirection: "row",
      justifyContent: 'space-between',
    },
    huwaaltsah: {
      borderRadius: 50,
      backgroundColor: "grey",
      width: 40,
      height: 40,
      margin: 10,
    },
    share: {
      textAlign: "center",
      alignItems: "center",
    },
    font: {
      color: 'grey',
      fontSize: 20,
    },
    neg: {
      backgroundColor: "#4C4C4C",
      width: 350,
      height: 170,
      marginHorizontal: 10,
      borderRadius: 8,
      marginTop: 10,
      overflow: "hidden",
  },
  ner: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  zurag: {
    width: "100%",
    height: "100%",
  },
  zai: {
  
  }
})
  