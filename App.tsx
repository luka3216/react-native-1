import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuSectionItems from './components/MenuSections';
import WelcomeWithName from './components/WelcomeWithName';
import LoginScreen from './components/LoginScreen';
import WelcomeWithLogo from './components/WelcomeWithLogo';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader/>
      <WelcomeWithLogo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    justifyContent: 'flex-start',
  },
});
