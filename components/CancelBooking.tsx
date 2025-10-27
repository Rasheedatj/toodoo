import { cancelStyles } from '@/utils/styles/bookings';
import { commonStyles } from '@/utils/styles/common';
import { ModalProps } from '@/utils/types/UI';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Modal, Text, View } from 'react-native';
import Back from './Back';
import Button from './Button';

const CancelBooking = ({ isOpen, onClose }: ModalProps) => {
  const router = useRouter();
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

              <Button onPress={() => {}} style={{ flex: 1 }}>
                No, Keep appointment
              </Button>
            </View>

            <View>
              <Button onPress={onClose}>No, Keep Appointment</Button>
              <Button
                onPress={() => {
                  Alert.alert(
                    'Booking cancelled',
                    'Your booking has been cancelled',
                    [
                      {
                        text: 'ok',
                        onPress: () => {
                          onClose();
                          router.push('/(tabs)/bookings');
                        },
                      },
                    ]
                  );
                }}
                style={{ borderColor: 'red' }}
                variant='outline'
              >
                Yes, Cancel Booking
              </Button>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default CancelBooking;
