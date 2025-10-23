import { bookingsStyle } from '@/utils/styles/bookings';
import { homeStyles } from '@/utils/styles/home';
import { Booking } from '@/utils/types/UI';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const BookingItem = ({ booking }: { booking: Booking }) => {
  const { userAvatar, name, charge, location, rating, service } = booking;
  return (
    <View style={[bookingsStyle.bookingItem]}>
      {userAvatar}
      <View style={bookingsStyle.bookingDetails}>
        <Text style={bookingsStyle.bookingName}>{name}</Text>
        <Text style={bookingsStyle.bookingChargeBox}>
          Charge: <Text style={bookingsStyle.bookingCharge}>NGN{charge}</Text>{' '}
        </Text>

        <View style={homeStyles.providerInfo}>
          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='map-marker-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>{location}</Text>
          </View>
          <View style={homeStyles.providerInfoItem}>
            <Ionicons name='basket-outline' color='#A3A2A9' size={14} />
            <Text style={homeStyles.providerInfoItemText}>
              {service} service
            </Text>
          </View>
          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='star-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>{rating}(2)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingItem;
