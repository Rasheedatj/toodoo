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
        sceneStyle: {
          backgroundColor: 'white',
          padding: 16,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='bookings'
        options={{
          title: 'Bookings',
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
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='wallet-outline' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name='user' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;
