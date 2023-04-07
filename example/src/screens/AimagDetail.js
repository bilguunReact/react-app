import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function AimagDetail({navigation}) {
  const aimag = () => {navigation.navigate("bbb");};
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        <Pressable onPress={() => {AimagDetail(); }} style={styles.huwaaltsah}>
        <Text style={styles.ner}>Товч ном</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
