import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import { StackActions } from "@react-navigation/native";
  
  export default function Hoyrdahi({ navigation, greeting }) {
        return (
        <View style={styles.container}>
         <Text>{greeting}</Text>
         <Button 
            title="Go to third screen "
            onPress={() => navigation.push("Guravdahi")}
         />
          <Button 
            title="Go to third screen hamt shuu"
            onPress={() => {
                 navigation.dispatch(
                    StackActions.replace('Guravdahi')
                 );
            }}
         />
         <StatusBar style="auto"/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
})
