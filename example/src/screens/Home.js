import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


export default function Home () {
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
            <Text style={styles.ner}>Товч ном</Text>
            <FontAwesome5
              name="caret-left"
              size={40}
              color="white"
              paddingTop={5}
            />
          </View>
          <View style={styles.hoyr}>
            <Text style={styles.ner}>Цахим ном</Text>
            <Ionicons name="" size={30} color="white" paddingTop={5} />
          </View>
          <View style={styles.gurav}>
            <Text style={styles.ner}>Аудио ном</Text>
            <Ionicons name="rocket" size={30} color="white" paddingTop={5} />
          </View>
          <View style={styles.dorov}>
            <Text style={styles.ner}>Подкаст</Text>
            <Ionicons name="rocket" size={30} color="white" paddingTop={5} />
          </View>
        </View>

        <View style={styles.ontsloh}>
          <Text style={styles.deed}>Алхимч</Text>
          <Text style={styles.dood}>Энэ 7 хоногийн онцлох</Text>
          <Image
            source={require("../example/assets/1521804401-13464317.jpg")}
            style={styles.book}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  ogloo: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginTop: 15,
  },
  tomView: {
    backgroundColor: "#4C4C4C",
    width: 350,
    height: 250,
    borderRadius: 18,
    marginHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neg: {
    backgroundColor: "#20B2AA",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 20,
    padding: 18,
  },
  hoyr: {
    backgroundColor: "#FF6347",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 20,
    padding: 18,
  },
  gurav: {
    backgroundColor: "#FFA500",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 20,
    padding: 18,
  },
  dorov: {
    backgroundColor: "#800080",
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 20,
    padding: 18,
  },
  ner: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  ontsloh: {
    backgroundColor: "#4C4C4C",
    width: 350,
    height: 400,
    marginHorizontal: 10,
    borderRadius: 15,
    marginTop: 10,
    overflow: "hidden",
  },
  deed: {
    margin: 10,
    marginLeft: 20,
    marginBottom: 2,
    color: "white",
  },
  dood: {
    margin: 5,
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 2,
    color: "white",
  },
  book: {
    width: "100%",
    height: "80%",
  },
});
