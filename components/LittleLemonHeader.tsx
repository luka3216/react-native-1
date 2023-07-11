import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.view}>
      <Text style={headerStyles.text}>
        Welcome
        <Text style={headerStyles.boldText}> Little Lemon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  view: { backgroundColor: "#F4CE14", paddingTop: 48, paddingBottom: 8 },
  text: { fontSize: 30, textAlign: "center" },
  boldText: { fontWeight: "bold" 
},
});
