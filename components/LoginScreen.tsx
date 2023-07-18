import { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        clearButtonMode={"always"}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      ></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    margin: 12,
    padding: 8,
    backgroundColor: "white",
  },
});
