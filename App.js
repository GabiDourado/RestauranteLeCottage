import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from './src/Inicio';
import Cardapio from './src/Cardapio';
import Pedido from './src/Pedido';
import Locais from './src/Locais';
import Reserva from './src/Reserva'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
