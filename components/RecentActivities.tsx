import { commonStyles } from '@/utils/styles/common';
import { walletStyles } from '@/utils/styles/wallet';
import { ActivityProp } from '@/utils/types/UI';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Activity from './Activity';

const activities: ActivityProp[] = [
  {
    id: '23',
    type: 'withdraw',
    date: 'Jun 26, 2021',
    amount: 3000,
  },
  {
    id: '24',
    type: 'deposit',
    date: 'Jun 26, 2021',
    amount: 3000,
  },
  {
    id: '29',
    type: 'deposit',
    date: 'Jun 26, 2021',
    amount: 3000,
  },
  {
    id: '22',
    type: 'deposit',
    date: 'Jun 26, 2021',
    amount: 3000,
  },
  {
    id: '25',
    type: 'deposit',
    date: 'Jun 26, 2021',
    amount: 3000,
  },
];

const RecentActivities = () => {
  return (
    <View style={walletStyles.activity}>
      <Text style={commonStyles.header}>Recent Activity</Text>

      {activities.length === 0 ? (
        <View style={walletStyles.empty}>
          <View style={walletStyles.emptyImage}>
            <Image source={require('../assets/images/smilie.png')} />
          </View>
          <Text style={walletStyles.emptyTitle}>No activity to show!</Text>
          <Text style={walletStyles.emptyDescription}>
            You don’t have any transactions done. Once you make any transactions
            it will show here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={activities}
          renderItem={(itemData) => <Activity activity={itemData.item} />}
          keyExtractor={(item) => item.id}
          style={walletStyles.activityList}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      )}
    </View>
  );
};

export default RecentActivities;
