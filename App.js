import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import JogoDetalhe from './src/screens/JogoDetalhe';
import Jogos from './src/screens/Jogos'

const Stack = createNativeStackNavigator();

function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header style={styles.bar}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Game Finder" />
    </Appbar.Header>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Jogos" component={Jogos} />
        <Stack.Screen name="Jogo" component={JogoDetalhe} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
    bar: {
      backgroundColor: '#004266',
    }
});
