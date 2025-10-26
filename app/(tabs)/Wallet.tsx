import Balance from '@/components/Balance';
import RecentActivities from '@/components/RecentActivities';
import ScreenHeader from '@/components/ScreenHeader';
import WalletModal from '@/components/WalletModal';
import { tabParentStyles } from '@/utils/styles';
import { walletStyles } from '@/utils/styles/wallet';
import { WalletAction } from '@/utils/types/UI';
import React, { useState } from 'react';
import { View } from 'react-native';

const WalletScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openModal, setOpenModal] = useState<WalletAction>('deposit');

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const handleSetModal = (type: WalletAction) => setOpenModal(type);
  return (
    <View style={[tabParentStyles.container, walletStyles.container]}>
      <View style={walletStyles.box1}>
        <ScreenHeader title='Wallet' />
        <Balance onOpenModal={handleOpenModal} onSetModal={handleSetModal} />
      </View>

      <RecentActivities />

      <WalletModal
        isOpen={isModalVisible}
        onClose={handleCloseModal}
        type={openModal}
      />
    </View>
  );
};

export default WalletScreen;
