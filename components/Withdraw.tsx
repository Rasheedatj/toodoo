import { walletStyles } from '@/utils/styles/wallet';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Button from './Button';

const Withdraw = ({ setSuccess }: { setSuccess: () => void }) => {
  return (
    <View style={walletStyles.modalContent}>
      <View>
        <Text style={walletStyles.modalTitle}>Withdraw</Text>
        <Text style={walletStyles.modaldescription}>
          Withdraw out of your wallet
        </Text>
      </View>

      <View style={walletStyles.formItem}>
        <Text style={walletStyles.modalLabel}>Amount</Text>
        <TextInput style={walletStyles.modalInput} placeholder='e.g 10,000' />
      </View>

      <View style={walletStyles.formItem}>
        <Text style={walletStyles.modalLabel}>Amount</Text>
        <TextInput style={walletStyles.modalInput} placeholder='e.g 10,000' />
      </View>

      <View style={walletStyles.formItem}>
        <Text style={walletStyles.modalLabel}>Account Number</Text>
        <TextInput
          style={walletStyles.modalInput}
          placeholder='e.g 2153026690'
        />
      </View>

      <Button
        onPress={() => {
          setSuccess();
        }}
        style={{ marginTop: 46 }}
      >
        Proceed
      </Button>
    </View>
  );
};

export default Withdraw;
