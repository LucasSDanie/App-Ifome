import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import CarrinhoScreen from './screen/CarrinhoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MeuApp">
        <Stack.Screen
          name="MeuApp"
          component={HomeScreen}
          options={{
            title: 'iFome',
            headerStyle: {
              backgroundColor: 'red',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Carrinho"
          component={CarrinhoScreen}
          options={{
            title: 'Carrinho',
            headerStyle: {
              backgroundColor: 'red',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
