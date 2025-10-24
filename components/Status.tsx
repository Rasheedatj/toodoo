import { bookingsStyle } from '@/utils/styles/bookings';
import React from 'react';
import { Text, View } from 'react-native';

const Status = ({ status }: { status: string }) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
      }}
    >
      <Text
        style={[
          bookingsStyle.status,
          status === 'pending' && {
            color: '#B7791F',
            backgroundColor: '#FEF9E7',
          },
          status === 'completed' && {
            color: 'green',
            backgroundColor: '#E2FEE8',
          },
          status === 'cancelled' && {
            color: 'red',
            backgroundColor: '#FFEDEC',
          },
        ]}
      >
        {status}
      </Text>
    </View>
  );
};

export default Status;
