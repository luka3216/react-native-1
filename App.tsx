import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import MenuSectionItems from "./components/MenuSections";
import WelcomeWithName from "./components/WelcomeWithName";
import LoginScreen from "./components/LoginScreen";
import WelcomeWithLogo from "./components/WelcomeWithLogo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { IoniconsIconName } from "./lib/HelperTypes";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IoniconsIconName;
            if (route.name === "Welcome") {
              if (focused) {
                iconName = "ios-information-circle";
              } else {
                iconName = "ios-information-circle-outline";
              }
            } else if (route.name === "Login") {
              if (focused) {
                iconName = "ios-log-in";
              } else {
                iconName = "ios-log-in-outline";
              }
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeWithLogo}></Tab.Screen>
        <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
    justifyContent: "flex-start",
  },
});
