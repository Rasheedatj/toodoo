import { bookingsStyle } from '@/utils/styles/bookings';
import { homeStyles } from '@/utils/styles/home';
import { Booking } from '@/utils/types/UI';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import Status from './Status';

const BookingItem = ({ booking }: { booking: Booking }) => {
  const { serviceImage, status, charge, location, service } = booking;
  return (
    <View style={[bookingsStyle.bookingItem]}>
      {serviceImage}
      <View style={bookingsStyle.bookingDetails}>
        <Text style={bookingsStyle.bookingService}>{service} service</Text>
        <Text style={bookingsStyle.bookingChargeBox}>
          Charge: <Text style={bookingsStyle.bookingCharge}>NGN{charge}</Text>{' '}
        </Text>

        <View style={bookingsStyle.itemFooter}>
          <Status status={status} />

          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='map-marker-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingItem;
