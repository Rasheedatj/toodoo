import { appColors } from '@/utils/constants/colors';
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,
          backgroundColor: '#fff',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          sceneStyle: {
            padding: 16,
            backgroundColor: 'white',
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='bookings'
        options={{
          title: 'Bookings',
          sceneStyle: {
            padding: 16,
            backgroundColor: 'white',
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name='clipboard-list'
              size={size}
              color={color}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='chats'
        options={{
          title: 'Chats',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='chatbubbles-outline' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='Wallet'
        options={{
          title: 'Wallet',
          sceneStyle: {
            padding: 16,
            backgroundColor: 'white',
          },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='wallet-outline' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          sceneStyle: {
            padding: 16,
            backgroundColor: 'white',
          },
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name='user' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;
