import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function WelcomeWithName() {
    const [name, setName] = useState('');
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.subTitle}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us.
      </Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder={'First Name'}>

      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        padding: 24,
        gap: 24,
    },
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
    subTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
    }
})