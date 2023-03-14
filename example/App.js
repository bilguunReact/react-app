import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Drawer } from "@react-navigation/drawer";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      type="overlay"
      content={
        <View style={styles.drawerContent}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate("Миний тухай")}
          >
            <Text style={styles.drawerItemText}>Миний тухай</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate("Мэргэжил")}
          >
            <Text style={styles.drawerItemText}>Мэргэжил</Text>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setIsOpen(true)}>
            <Image
              source={require("./assets/favicon.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Миний ертөнцөд тавтай морил</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#EF961B" }]}
            onPress={() => navigation.navigate("Миний тухай")}
          >
            <Image
              source={require("./assets/favicon.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Миний тухай</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#E4B612" }]}
            onPress={() => navigation.navigate("Мэргэжил")}
          >
            <Image
              source={require("./assets/favicon.png")}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonText}>Мэргэжил</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Drawer>
  );
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Миний түүх</Text>
      <Text>Энэ бол миний хувийн апп</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Программист</Text>
      <Text>Мандах Их Сургууль Мэдээлэл Технологийн Сургууль</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Нүүр" component={HomeScreen} />
        <Stack.Screen name="Миний тухай" component={AboutScreen} />
        <Stack.Screen name="Мэргэжил" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3D6DCC",
    height: 80,
    paddingTop: 20,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    paddingLeft: 10,
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: window.width * 0.8,
    height: 60,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  drawerContent: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingLeft: 10,
  },
  drawerItem: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  drawerItemText: {
    fontSize: 18,
  },
});
