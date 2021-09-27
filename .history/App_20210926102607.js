/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home';
import UserScreen from './screen/User';
import ConfirmationScreen from './screen/Confirmation';
import ConnexionScreen from './screen/Connexion';
import InscriptionScreen from './screen/Inscription';
import CategorieScreen from './screen/Categorie';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Compte" component={UserScreen}/>
        <Tab.Screen name="Confirmation" component={ConnexionScreen}/>
      </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="Home" component={BottomScreen} />
        <Stack.screen name="Categorie" component={CategorieScreen} />
        <Stack.screen name="Inscription" component={InscriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;