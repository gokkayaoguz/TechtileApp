import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './MainScreen';
import CreateScreen from './CreateScreen';
import ProfileScreen from './ProfileScreen';

const TabNavigator = createMaterialBottomTabNavigator(
    { 
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: 'Home',
          
        },
      },
  
         Settings: {
        screen: CreateScreen,
        navigationOptions: {
          tabBarLabel: 'CreateScreen',
          
         
        },
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarLabel: 'Profile',
          
         
        },
      },
  
  
    },
  
       
    {
      initialRouteName: 'Home',
      activeColor: '#ff0045',
      inactiveColor: '#000000',
      barStyle: { backgroundColor: '#ffffff' },
    }
  );
  
  export default createAppContainer(TabNavigator);