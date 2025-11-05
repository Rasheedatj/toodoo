import { commonStyles } from '@/utils/styles/common';
import { ModalProps } from '@/utils/types/UI';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import Back from '../Back';
import Deposit from '../Deposit';
import Success from '../Success';
import Withdraw from '../Withdraw';

const WalletModal = ({ onClose, isOpen, type = 'deposit' }: ModalProps) => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const handleOpenSuccessModal = () => setIsSuccessful(true);

  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={{ backgroundColor: '#33333333', flex: 1 }}>
        <BlurView intensity={10} tint='extraLight' style={{ flex: 1 }}>
          <View style={commonStyles.formModal}>
            <Back
              onClick={() => {
                onClose();
                setIsSuccessful(false);
              }}
            />

            {isSuccessful ? (
              <Success
                description={`NGN ${3000} has been ${
                  type === 'deposit' ? 'deposited' : 'withdrawn'
                } successfully.`}
              />
            ) : type === 'deposit' ? (
              <Deposit setSuccess={handleOpenSuccessModal} />
            ) : (
              <Withdraw setSuccess={handleOpenSuccessModal} />
            )}
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default WalletModal;
