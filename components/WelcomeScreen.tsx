import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <>
      <ScrollView style={welcomeStyles.view} indicatorStyle={'white'}>
        <View>
          <Text
            style={welcomeStyles.title}
          >
            Welcome to Little Lemon
          </Text>
        </View>
        <View>
          <Text
            style={welcomeStyles.subTitle}
          >
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            would love to hear more about your experience with us!
          </Text>
        </View>
      </ScrollView>

    </>
  );
}

const welcomeStyles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 64,
    color: "white",
    marginTop: 32,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 40,
    color: "white",
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 24,
  }
})
