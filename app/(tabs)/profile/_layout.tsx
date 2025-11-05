import { Stack } from 'expo-router';
import React from 'react';

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      {/* <Stack.Screen
        name='index'
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      /> */}
    </Stack>
  );
};

export default ProfileLayout;
