import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen name='(tabs)'></Stack.Screen>
        <Stack.Screen name='auth' />
      </Stack>
    </SafeAreaView>
  );
}
