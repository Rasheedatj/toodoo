import { walletStyles } from '@/utils/styles/wallet';
import { ActivityProp } from '@/utils/types/UI';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const Activity = ({ activity }: { activity: ActivityProp }) => {
  const { type, date, amount } = activity;
  return (
    <View style={walletStyles.activityItem}>
      <View style={walletStyles.iconBox}>
        {type === 'withdraw' ? (
          <View
            style={[walletStyles.activityIcon, { backgroundColor: '#FFEDEC' }]}
          >
            <Feather name='arrow-up-right' size={18} color='red' />
          </View>
        ) : (
          <View
            style={[walletStyles.activityIcon, { backgroundColor: '#E2FEE8' }]}
          >
            <Feather name='arrow-down-left' size={18} color='green' />
          </View>
        )}
        <View>
          <Text style={walletStyles.activityType}>{type}</Text>
          <Text style={walletStyles.activityDate}>{date}</Text>
        </View>
      </View>
      <Text style={walletStyles.activityPrice}>NGN {amount}</Text>
    </View>
  );
};

export default Activity;
