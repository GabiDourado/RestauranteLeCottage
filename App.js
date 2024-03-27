import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Agradecimento from './src/Agradecimento';
import RecupSenha from './src/RecupSenha';
import Cadastro from './src/Cadastro';
import Login from './src/Login';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>  
        <Tab.Screen name="Agradecimento" component={Agradecimento} />
        <Tab.Screen name="RecupSenha" component={RecupSenha} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
