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
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        useLegacyImplementation
        screenOptions={{
          drawerPosition: 'right',
        }}
      >
        <Drawer.Screen name="Welcome" component={WelcomeWithLogo}></Drawer.Screen>
        <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
      </Drawer.Navigator>
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
