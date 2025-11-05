import { Stack } from 'expo-router';
import React from 'react';

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    />
  );
};

export default HomeLayout;
