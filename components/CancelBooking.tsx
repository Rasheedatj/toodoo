import { cancelStyles } from '@/utils/styles/bookings';
import { commonStyles } from '@/utils/styles/common';
import { ModalProps } from '@/utils/types/UI';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, Text, View } from 'react-native';
import Back from './Back';

const CancelBooking = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={{ backgroundColor: '#33333333', flex: 1 }}>
        <BlurView intensity={10} tint='extraLight' style={{ flex: 1 }}>
          <View style={commonStyles.formModal}>
            <Back onClick={onClose} />
            <Text style={[commonStyles.header, { paddingTop: 18 }]}>
              Cancel Booking?{' '}
            </Text>

            <View>
              <Text style={cancelStyles.title}>
                Are you sure you want to cancel your booking?
              </Text>
              <Text style={cancelStyles.warning}>
                Canceling your appointment will remove it from your upcoming
                bookings.
              </Text>
              <Text style={cancelStyles.warning}>
                Cancelling your appointment might result in fees deducted.
              </Text>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default CancelBooking;
