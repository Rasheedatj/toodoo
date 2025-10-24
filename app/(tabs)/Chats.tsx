import Booking from '@/components/Booking';
import { tabParentStyles } from '@/utils/styles';
import { bookingsStyle } from '@/utils/styles/bookings';
import { BookingDetails } from '@/utils/types/UI';
import React from 'react';
import { Image, View } from 'react-native';

const ChatsScreen = () => {
  const booking: BookingDetails = {
    id: '123',
    serviceImage: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../assets/images/Vector.png')}
      />
    ),
    description:
      'My grandma is having running stomach and she has been feeling nausea. I would need you come help me treat her asap. She is also complaining of severe migrain, I believe you can help me treat her.',
    service: 'laundry',
    date: 'Mon - 24th June, 2022',
    address: 'Admiralty Way, Lekki Phase 1 234001, Lekki',
    status: 'pending',
    charge: 10000,
    provider: {
      name: 'Jane doe',
      userAvatar: (
        <Image
          style={bookingsStyle.bookingImage}
          source={require('../../assets/images/user.png')}
        />
      ),
      location: 'Lagos, Nigeria',
      rateAmount: 20,
      rating: 4.3,
      price: 3000,
    },
  };
  return (
    <View style={tabParentStyles.container}>
      <Booking booking={booking} />
    </View>
  );
};

export default ChatsScreen;
