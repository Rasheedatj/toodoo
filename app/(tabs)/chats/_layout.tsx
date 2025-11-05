import { Stack } from 'expo-router';
import React from 'react';

const ChatLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          contentStyle: {
            padding: 16,
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen
        name='CallingScreen'
        options={{
          contentStyle: {
            padding: 16,
            backgroundColor: 'white',
          },
        }}
      />
    </Stack>
  );
};

export default ChatLayout;
