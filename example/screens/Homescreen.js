import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function Hoyrdahi({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.second}>
          <Button style={styles.buttun}
            title="Миний мэргэжил"
            onPress={() => navigation.navigate("Second")}
          />
        </View>
        <View>
          <Button
            title="Hoyr dahi huudas baih english"
            onPress={() => navigation.navigate("Guravdahi")}
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  second: {
    backgroundColor: "blue",
    borderRadius: 10,
    height: 40,
    width: 140,
    color: "white",
    fontSize: 54,
    fontWeight: "bold",
  },
  buttun: {
  
  }
});
