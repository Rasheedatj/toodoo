import Activity from '@/components/Activity';
import { tabParentStyles } from '@/utils/styles';
import { commonStyles } from '@/utils/styles/common';
import { walletStyles } from '@/utils/styles/wallet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const WalletScreen = () => {
  const activities = [
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
  return (
    <View style={[tabParentStyles.container, walletStyles.container]}>
      <View style={walletStyles.box1}>
        <View style={walletStyles.header}>
          <Text style={commonStyles.previewHeaderText}>Wallet</Text>
          <MaterialCommunityIcons
            name='bell-outline'
            size={32}
            color={'#141B34'}
          />
        </View>

        <View style={walletStyles.balance}>
          <Text style={walletStyles.balanceHeader}>Your Balance</Text>
          <Text style={walletStyles.balanceAmount}>NGN 0.00</Text>
          <Text style={walletStyles.message}>
            {' '}
            You don’t have any money. Request or load money
          </Text>
        </View>
      </View>

      <View style={walletStyles.activity}>
        <Text style={commonStyles.header}>Recent Activity</Text>

        {activities.length === 0 ? (
          <View style={walletStyles.empty}>
            <View style={walletStyles.emptyImage}>
              <Image source={require('../../assets/images/smilie.png')} />
            </View>
            <Text style={walletStyles.emptyTitle}>No activity to show!</Text>
            <Text style={walletStyles.emptyDescription}>
              You don’t have any transactions done. Once you make any
              transactions it will show here.
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
    </View>
  );
};

export default WalletScreen;
