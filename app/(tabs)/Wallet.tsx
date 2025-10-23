import Balance from '@/components/Balance';
import RecentActivities from '@/components/RecentActivities';
import WalletModal from '@/components/WalletModal';
import { tabParentStyles } from '@/utils/styles';
import { commonStyles } from '@/utils/styles/common';
import { walletStyles } from '@/utils/styles/wallet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const WalletScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
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
        <Balance onOpenModal={handleOpenModal} />
      </View>
      <RecentActivities />
      <WalletModal isOpen={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

export default WalletScreen;
