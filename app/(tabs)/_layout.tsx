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
        headerStyle: {
          backgroundColor: 'red',
        },
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,
          backgroundColor: '#fff',
        },
        sceneStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='bookings/index'
        // name='Bookings'
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
        name='Chats'
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
        name='Profile'
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
