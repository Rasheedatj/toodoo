import { walletStyles } from '@/utils/styles/wallet';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Balance = ({ onOpenModal }: { onOpenModal: () => void }) => {
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
        }}
      >
        <Button title='Deposit' onPress={onOpenModal} />
        <Button title='Withdraw' onPress={onOpenModal} />
      </View>
    </View>
  );
};

export default Balance;
