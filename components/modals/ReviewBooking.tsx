import { commonStyles } from '@/utils/styles/common';
import { ModalProps } from '@/utils/types/UI';
import { EvilIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../Button';

const ReviewBooking = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={{ backgroundColor: '#33333333', flex: 1 }}>
        <BlurView intensity={10} tint='extraLight' style={{ flex: 1 }}>
          <View style={commonStyles.formModal}>
            <View style={styles.header}>
              <Text style={commonStyles.header}>Review Service</Text>
              <Pressable onPress={onClose}>
                <EvilIcons name='close' size={24} color='black' />
              </Pressable>
            </View>

            <Button>Submit</Button>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ReviewBooking;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
