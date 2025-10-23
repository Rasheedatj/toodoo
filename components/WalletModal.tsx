import { commonStyles } from '@/utils/styles/common';
import { ModalProps } from '@/utils/types/UI';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, View } from 'react-native';
import Back from './Back';
import Deposit from './Deposit';
import Success from './Success';
import Withdraw from './Withdraw';

const WalletModal = ({ onClose, isOpen, type = 'deposit' }: ModalProps) => {
  const isSuccessful = false;
  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={{ backgroundColor: '#33333333', flex: 1 }}>
        <BlurView intensity={10} tint='extraLight' style={{ flex: 1 }}>
          <View style={commonStyles.formModal}>
            <Back onClick={onClose} />

            {isSuccessful ? (
              <Success
                description={`NGN ${3000} has been withdrawn successfully.`}
              />
            ) : type === 'deposit' ? (
              <Deposit />
            ) : (
              <Withdraw />
            )}
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default WalletModal;
