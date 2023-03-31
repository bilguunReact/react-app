import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Home () {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.srcollbain}>
        <View style={styles.roooow}>
          <View style={styles.huwaaltsah}>
            <Text>{greeting}</Text>
            <FontAwesome5
              style={styles.share}
              name="caret-left"
              size={28}
              color="white"
              paddingTop={5}
            />
          </View>
          <View style={styles.huwaahtwo}>
            <FontAwesome5
              style={styles.sharetwo}
              name="caret-left"
              size={28}
              color="white"
              paddingTop={5}
            />
          </View>
        </View>
        <View style={styles.nom}>
          <Pressable onPress={() => {textWorkPressed();
          }}/>
          <Image
            source={require("../assets/1521804401-13464317.jpg")}
            style={styles.zurag}
          ></Image>
          <Text style={styles.bookName}>Алхимч</Text>
        </View>
        <View style={styles.zohiagch}>
          <Image
            source={require("../assets/1521804401-13464317.jpg")}
            style={styles.prozurag}
          ></Image>
          <Text style={styles.porname}> Bilguun</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C4C4C",
  },
  roooow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  huwaaltsah: {
    borderRadius: 5,
    backgroundColor: "black",
    width: 40,
    height: 40,
    margin: 30,
  },
  share: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  sharetwo: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  huwaahtwo: {
    borderRadius: 5,
    backgroundColor: "black",
    width: 40,
    height: 40,
    margin: 30,
  },
  zurag: {
    width: 200,
    height: 310,
    borderRadius: 20,
  },
  bookName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    margin: 10,
  },
  nom: {
    alignItems: "center",
    justifyContent: "center",
  },
  prozurag: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  porname: {
    color: "#868686",
  },
  zohiagch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
