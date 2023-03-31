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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { mplusTwo } from "../example/screens/mplusTwo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="App" component={mplusTwo} />
          </Stack.Navigator>
        </NavigationContainer>
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
            <Text style={styles.ner}>Book</Text>
            <Ionicons name="rocket" size={30} color="white" paddingTop={5} />
          </View>
          <View style={styles.gurav}>
            <Text style={styles.ner}>Book</Text>
            <Ionicons name="rocket" size={30} color="white" paddingTop={5} />
          </View>
          <View style={styles.dorov}>
            <Text style={styles.ner}>Book</Text>
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
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})