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
    ></Stack>
  );
};

export default ChatLayout;
