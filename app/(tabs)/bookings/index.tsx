import BookingItem from '@/components/BookingItem';
import ScreenHeader from '@/components/ScreenHeader';
import TabMenu from '@/components/TabMenu';
import { bookings } from '@/utils/dummyData';
import { tabParentStyles } from '@/utils/styles';
import { bookingsStyle } from '@/utils/styles/bookings';
import { TabItem } from '@/utils/types/UI';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

const bookingsMenu: TabItem[] = [
  { id: ' ', title: 'All' },
  { id: 'pending', title: 'In-Progress' },
  { id: 'completed', title: 'Completed' },
  { id: 'cancelled', title: 'Cancelled' },
];

const BookingsScreen = () => {
  const [activeMenu, setActiveMenu] = useState(' ');

  return (
    <View style={tabParentStyles.container}>
      <ScreenHeader title='Bookings' />
      <TabMenu
        tabItems={bookingsMenu}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

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
