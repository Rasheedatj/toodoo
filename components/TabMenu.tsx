import { appColors } from '@/utils/constants/colors';
import { bookingsStyle } from '@/utils/styles/bookings';
import { TabProps } from '@/utils/types/UI';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const TabMenu = ({ tabItems, activeMenu, setActiveMenu }: TabProps) => {
  return (
    <View style={bookingsStyle.menu}>
      {tabItems.map((item) => (
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
  );
};

export default TabMenu;
