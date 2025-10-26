import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name='(tabs)'
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
