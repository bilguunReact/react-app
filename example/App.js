import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Миний ертөнцөд тавтай морил</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF6F61' }]} onPress={() => navigation.navigate('Миний тухай')}>
        <Image source={require("./assets/bilguun.png")} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Миний тухай</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#6B5B95' }]} onPress={() => navigation.navigate('Мэргэжил')}>
        <Image source={require('./assets/bilguun.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Мэргэжил</Text>
        </TouchableOpacity>
      </View>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7CAC9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#F7CAC9',
    borderBottomWidth: 2,
    borderBottomColor: '#A7A7A7',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6B5B95',
  },
  button: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 5,
    margin: 10,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#6B5B95',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonImage: {
    width: 5,
    height: 5,
    marginRight: 10,
  },
});
