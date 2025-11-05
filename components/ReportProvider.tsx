import { cancelStyles } from '@/utils/styles/bookings';
import { commonStyles } from '@/utils/styles/common';
import { ModalProps } from '@/utils/types/UI';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Alert, Modal, Text, TextInput, View } from 'react-native';
import Back from './Back';
import Button from './Button';

const ReportProvider = ({ isOpen, onClose, bookingId }: ModalProps) => {
  const handleSubmitReport = () => {
    Alert.alert(
      'Report submitted',
      `Your report for booking #${bookingId} has been submitted`,
      [
        {
          text: 'Ok',
          style: 'default',
          onPress: onClose,
        },
      ]
    );
  };
  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={{ backgroundColor: '#33333333', flex: 1 }}>
        <BlurView intensity={10} tint='extraLight' style={{ flex: 1 }}>
          <View style={commonStyles.formModal}>
            <Back onClick={onClose} />
            <Text style={[commonStyles.header, { paddingTop: 18 }]}>
              Lodge Complaints
            </Text>
            <Text style={cancelStyles.warning}>
              Lodge a complaint about Ogechi Kanu(Cleaner)
            </Text>
            <View style={commonStyles.formItem}>
              <Text style={commonStyles.label}>Subject</Text>
              <TextInput
                style={commonStyles.input}
                placeholder='e.g Low quality plumbing materials'
              />
            </View>
            <View style={commonStyles.formItem}>
              <Text style={commonStyles.label}>Description</Text>
              <TextInput style={commonStyles.input} placeholder='' />
            </View>

            <Button onPress={handleSubmitReport} style={{ marginTop: 50 }}>
              Submit report
            </Button>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ReportProvider;
