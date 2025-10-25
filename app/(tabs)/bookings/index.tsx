import BookingItem from '@/components/BookingItem';
import ScreenHeader from '@/components/ScreenHeader';
import { appColors } from '@/utils/constants/colors';
import { tabParentStyles } from '@/utils/styles';
import { bookingsStyle } from '@/utils/styles/bookings';
import { Booking } from '@/utils/types/UI';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

const bookingsMenu = [
  { id: ' ', title: 'All' },
  { id: 'pending', title: 'In-Progress' },
  { id: 'completed', title: 'Completed' },
  { id: 'cancelled', title: 'Cancelled' },
];

const bookings: Booking[] = [
  {
    id: 'a',
    serviceImage: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../../assets/images/Vector.png')}
      />
    ),
    charge: 3000,
    location: 'Lagos, Nigeria',
    service: 'laundry',
    status: 'pending',
  },
  {
    id: 'ab',
    serviceImage: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../../assets/images/Vector.png')}
      />
    ),
    charge: 30000,
    location: 'Lagos, Nigeria',
    service: 'cleaning',
    status: 'completed',
  },
  {
    id: 'abc',
    serviceImage: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../../assets/images/Vector.png')}
      />
    ),
    charge: 30000,
    location: 'Lagos, Nigeria',
    service: 'plumbing',
    status: 'cancelled',
  },
  {
    id: 'ab2c',
    serviceImage: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../../assets/images/Vector.png')}
      />
    ),
    charge: 30000,
    location: 'Lagos, Nigeria',
    service: 'plumbing',
    status: 'completed',
  },
  {
    id: 'ab2d',
    serviceImage: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../../assets/images/Vector.png')}
      />
    ),
    charge: 30000,
    location: 'Lagos, Nigeria',
    service: 'plumbing',
    status: 'pending',
  },
];

const BookingsScreen = () => {
  const [activeMenu, setActiveMenu] = useState(' ');

  return (
    <View style={tabParentStyles.container}>
      <ScreenHeader title='Bookings' />
      <View style={bookingsStyle.menu}>
        {bookingsMenu.map((item) => (
          <Pressable
            onPress={() => setActiveMenu(item.id)}
            key={item.id}
            style={[
              bookingsStyle.menuItem,
              activeMenu === item.id && {
                borderBottomColor: appColors.primary,
              },
            ]}
          >
            <Text
              style={[
                bookingsStyle.menuTitle,
                activeMenu === item.id && {
                  color: appColors.primary,
                },
              ]}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={
          activeMenu === ' '
            ? bookings
            : bookings.filter((item) => item.status === activeMenu)
        }
        renderItem={(itemData) => <BookingItem booking={itemData.item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={bookingsStyle.bookingList}
      />
    </View>
  );
};

export default BookingsScreen;
