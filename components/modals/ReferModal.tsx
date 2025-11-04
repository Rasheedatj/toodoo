import { commonStyles } from '@/utils/styles/common';
import { ModalProps } from '@/utils/types/UI';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import Back from '../Back';

const ReferModalScreen = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal visible={isOpen} transparent={true}>
      <View style={{ backgroundColor: '#33333333', flex: 1 }}>
        <BlurView intensity={10} tint='extraLight' style={{ flex: 1 }}>
          <View
            style={[
              commonStyles.formModal,
              {
                paddingBottom: 40,
              },
            ]}
          >
            <Back onClick={onClose} />
            <Text style={[commonStyles.header, styles.heading]}>
              Referral History
            </Text>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Total cash earned</Text>
              <Text style={styles.cardText}>N 0</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Total coupons earned</Text>
              <Text style={styles.cardText}>0</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Friends who signed up</Text>
              <Text style={styles.cardText}>0</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Friends who ordered</Text>
              <Text style={styles.cardText}>0</Text>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ReferModalScreen;

const styles = StyleSheet.create({
  heading: {
    marginVertical: 20,
  },

  card: {
    marginTop: 30,
  },

  cardTitle: {
    color: '#555555',
    fontSize: 15,
  },

  cardText: {
    marginTop: 10,
    fontSize: 24,
  },
});
