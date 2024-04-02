import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Agradecimento from './Agradecimento';
import RecupSenha from './RecupSenha';
import Cadastro from './Cadastro';
import Login from './Login';
import Inicio from './Inicio';
import Cardapio from './Cardapio';
import Pedido from './Pedido';
import Locais from './Locais';
import Reserva from './Reserva'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import Localizar from './Localizar';
import Perfil from './Perfil';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    const {logado} = useContext(UserContext);

    if(logado == false) {
        return(<Login/>)
    }
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Início'
      screenOptions={{
        tabBarActiveTintColor: '#ffff',
        tabBarInactiveTintColor: '#B1B1B1',
        tabBarStyle: {
          backgroundColor: '#8C0000',
        },

        headerStyle: {
          backgroundColor:  '#8C0000',
        },
        headerTintColor: "#ffff",

      }}
      > 
        <Tab.Screen 
          name="Início" 
          component={Inicio} 
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen 
          name="Cardápio" 
          component={Cardapio}
          options={{
            tabBarLabel: 'Cardápio',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-variant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Pedido" 
          component={Pedido} 
          options={{
            tabBarLabel: 'Pedido',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell-outline" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
          name="Locais" 
          component={Locais}
          options={{
            tabBarLabel: 'Locais',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen 
          name="Reservas" 
          component={Reserva}
          options={{
            tabBarLabel: 'Reservas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={size} />
            ),
          }} />
          <Tab.Screen 
          name="Perfil" 
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }} />
          
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
/*<Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Agradecimento" component={Agradecimento} />
          <Tab.Screen name="RecupSenha" component={RecupSenha} />
          <Tab.Screen name="Cadastro" component={Cadastro} />
          <Tab.Screen name="Localizar Pedido" component={Localizar} />*/