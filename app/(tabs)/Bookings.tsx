import BookingItem from '@/components/BookingItem';
import ScreenHeader from '@/components/ScreenHeader';
import { appColors } from '@/utils/constants/colors';
import { tabParentStyles } from '@/utils/styles';
import { bookingsStyle } from '@/utils/styles/bookings';
import { Booking } from '@/utils/types/UI';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

const bookingsMenu = [
  { id: 1, title: 'In-Progress' },
  { id: 2, title: 'Completed' },
  { id: 3, title: 'Cancelled' },
];

const bookings: Booking[] = [
  {
    id: 'a',
    userAvatar: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../assets/images/user.png')}
      />
    ),
    name: 'Jane Doe',
    charge: 3000,
    location: 'Lagos, Nigeria',
    rating: 5,
    service: 'laundry',
  },
  {
    id: '15',
    userAvatar: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../assets/images/user.png')}
      />
    ),
    name: 'Jane Doe',
    charge: 3000,
    location: 'Lagos, Nigeria',
    rating: 5,
    service: 'laundry',
  },
  {
    id: '13',
    userAvatar: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../assets/images/user.png')}
      />
    ),
    name: 'Jane Doe',
    charge: 3000,
    location: 'Lagos, Nigeria',
    rating: 5,
    service: 'laundry',
  },
  {
    id: '133',
    userAvatar: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../assets/images/user.png')}
      />
    ),
    name: 'Jane Doe',
    charge: 3000,
    location: 'Lagos, Nigeria',
    rating: 5,
    service: 'laundry',
  },
  {
    id: '1fg3',
    userAvatar: (
      <Image
        style={bookingsStyle.bookingImage}
        source={require('../../assets/images/user.png')}
      />
    ),
    name: 'Jane Doe',
    charge: 3000,
    location: 'Lagos, Nigeria',
    rating: 5,
    service: 'laundry',
  },
];

const BookingsScreen = () => {
  const [activeMenu, setActiveMenu] = useState(1);
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
        data={bookings}
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
