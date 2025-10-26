import { walletStyles } from '@/utils/styles/wallet';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Button from './Button';

const Deposit = ({ setSuccess }: { setSuccess: () => void }) => {
  return (
    <View style={walletStyles.modalContent}>
      <View>
        <Text style={walletStyles.modalTitle}>Deposit</Text>
        <Text style={walletStyles.modaldescription}>
          Deposit into your wallet
        </Text>
      </View>

      <View style={walletStyles.formItem}>
        <Text style={walletStyles.modalLabel}>Amount</Text>
        <TextInput style={walletStyles.modalInput} placeholder='e.g 10,000' />
      </View>

      <Button onPress={() => setSuccess()} style={{ marginTop: 46 }}>
        Proceed
      </Button>
    </View>
  );
};

export default Deposit;
