import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{backgroundColor: '#F4CE14', paddingTop: 48, paddingBottom: 8}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          Welcome
          <Text style={{fontWeight: 'bold'}}> Little Lemon</Text>
        </Text>
    </View>
  );
}