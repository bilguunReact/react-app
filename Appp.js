import {
    StyleSheet,
    Text, View, Image, Button, ScrollView, TextInput,
    SafeAreaView,
    Platform,
    StatusBar,
   } from "react-native";
  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
  <Button title="Click Me" />
  </SafeAreaView>
    )};
  
  const styles = StyleSheet.create({
          container: {
          flex: 1,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
   }});
  