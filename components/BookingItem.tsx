import { appColors } from '@/utils/constants/colors';
import { bookingsStyle } from '@/utils/styles/bookings';
import { chatHomeStyle } from '@/utils/styles/chat';
import { homeStyles } from '@/utils/styles/home';
import { Booking } from '@/utils/types/UI';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Status from './Status';

const BookingItem = ({ booking }: { booking: Booking }) => {
  const router = useRouter();
  const { status, date, address, service, id, provider } = booking;

  return (
    <Pressable
      style={({ pressed }) => [
        bookingsStyle.bookingItem,
        pressed && chatHomeStyle.pressed,
      ]}
      onPress={() => router.push(`/(tabs)/bookings/${id}`)}
    >
      <View style={bookingsStyle.bookingDetails}>
        <Text style={bookingsStyle.bookingService}>{provider.name}</Text>
        <View style={bookingsStyle.serviceDateContainer}>
          <Text style={bookingsStyle.serviceDate}>{service} Service</Text>
          <Text style={bookingsStyle.serviceDate}>{date}</Text>
        </View>
        <View style={bookingsStyle.itemFooter}>
          <Status status={status} />

          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='map-marker-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>
              {address.slice(0, 28)}
              {address.length > 28 && '...'}
            </Text>
          </View>
        </View>
      </View>

      <Feather
        name='arrow-up-right'
        size={18}
        color={appColors['text-gray']}
        style={bookingsStyle.arrow}
      />
    </Pressable>
  );
};

export default BookingItem;
