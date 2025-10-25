import { appColors } from '@/utils/constants/colors';
import { walletStyles } from '@/utils/styles/wallet';
import { BalanceProp } from '@/utils/types/UI';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import Button from './Button';

const Balance = ({ onOpenModal, onSetModal }: BalanceProp) => {
  return (
    <View style={walletStyles.balance}>
      <Text style={walletStyles.balanceHeader}>Your Balance</Text>
      <Text style={walletStyles.balanceAmount}>NGN 0.00</Text>
      <Text style={walletStyles.message}>
        You don’t have any money. Request or load money
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          width: '70%',
        }}
      >
        <Button
          onPress={() => {
            onOpenModal();
            onSetModal('deposit');
          }}
          style={{ flex: 1 }}
          icon={<Feather name='arrow-down-left' size={18} color='white' />}
        >
          Deposit
        </Button>
        <Button
          onPress={() => {
            onOpenModal();
            onSetModal('withdraw');
          }}
          style={{ flex: 1, borderColor: appColors.primary }}
          variant='outline'
          icon={
            <Feather
              name='arrow-up-right'
              size={18}
              color={appColors.primary}
            />
          }
        >
          Withdraw
        </Button>
      </View>
    </View>
  );
};

export default Balance;
