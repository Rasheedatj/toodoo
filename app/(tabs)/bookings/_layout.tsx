// app/tabs/bookings/_layout.tsx
import { Stack } from 'expo-router';

export default function BookingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Bookings' }} />
      <Stack.Screen name='[id]' options={{ title: 'Booking Details' }} />
    </Stack>
  );
}
