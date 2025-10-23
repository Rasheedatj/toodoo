import { commonStyles } from '@/utils/styles/common';
import { walletStyles } from '@/utils/styles/wallet';
import { ModalProps } from '@/utils/types/UI';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import Back from './Back';

const WalletModal = ({ onClose, isOpen }: ModalProps) => {
  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={{ backgroundColor: '#33333333', flex: 1 }}>
        <BlurView intensity={10} tint='extraLight' style={{ flex: 1 }}>
          <View style={commonStyles.formModal}>
            <Back onClick={onClose} />

            <View>
              <Text style={walletStyles.modalTitle}>Deposit</Text>
              <Text style={walletStyles.modaldescription}>
                Deposit into your wallet
              </Text>
            </View>

            <Text style={walletStyles.modalLabel}>Amount</Text>
            <TextInput
              style={walletStyles.modalInput}
              placeholder='e.g 10,000'
            />
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default WalletModal;
