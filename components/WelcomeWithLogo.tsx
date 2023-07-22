import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { ScreenFunctionComponent } from "../lib/HelperTypes";

export default function WelcomeWithLogo({navigation}) : ScreenFunctionComponent {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.view,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={styles.header}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          resizeMethod="scale"
          accessible={true}
          accessibilityLabel="Little Lemon logo"
          source={require("../assets/LittleLemonLogo.png")}
        ></Image>
        <Text
          style={[
            styles.title,
            colorScheme === "light"
              ? { color: "#333333" }
              : { color: "#EDEFEE" },
          ]}
        >
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.subTitle,
          colorScheme === "light" ? { color: "#333333" } : { color: "#EDEFEE" },
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
    gap: 24,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 24,
  },
  logo: {
    width: 128,
    aspectRatio: 1,
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