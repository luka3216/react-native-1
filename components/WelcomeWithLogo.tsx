import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function WelcomeWithLogo() {
  const [name, setName] = useState("");
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          resizeMethod="scale"
          accessible={true}
          accessibilityLabel="Little Lemon logo"
          source={require("../assets/LittleLemonLogo.png")}
        ></Image>
        <Text style={styles.title}>Little Lemon</Text>
      </View>
      <Text style={styles.subTitle}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 24,
    gap: 24,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 24
  },
  logo: {
    width: 128,
    aspectRatio: 1
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  subTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
  },
});
