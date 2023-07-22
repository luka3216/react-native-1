import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { ScreenFunctionComponent } from "../lib/HelperTypes";

export default function LoginScreen({navigation}) : ScreenFunctionComponent {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return isLoggedIn ? (
    LoggedInView()
  ) : (
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
      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
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
  loginButton: {
    marginTop: 24,
    borderRadius: 24,
    height: 48,
    backgroundColor: "white",
    alignSelf: "center",
    paddingHorizontal: 48,
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
  },
});

function LoggedInView() {
  return (
    <ScrollView style={loggedInStyles.view}>
      <Text style={loggedInStyles.title}>Welcome to Little Lemon</Text>
      <Text style={loggedInStyles.subTitle}>Your are logged in!</Text>
    </ScrollView>
  );
}

const loggedInStyles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    padding: 24,
  },
  subTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    padding: 24,
  },
});