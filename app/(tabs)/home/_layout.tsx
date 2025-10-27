import { Stack } from 'expo-router';
import React from 'react';

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Home ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='ServicesList'
        options={{
          title: 'Services ',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
