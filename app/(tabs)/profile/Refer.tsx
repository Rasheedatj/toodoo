import ReferSVG from '@/assets/images/Refer';
import Button from '@/components/Button';
import ReferModalScreen from '@/components/modals/ReferModal';
import ScreenHeader from '@/components/ScreenHeader';
import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ReferScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCopyCode = () => {};
  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader isBack={true} />
      <Text style={[commonStyles.header, { paddingTop: 30 }]}>
        Refer & Earn
      </Text>

      <View style={styles.main}>
        <ReferSVG />
        <Text style={styles.boldText}>
          Get 1 free delivery for each friend you refer
        </Text>

        <View style={styles.shareBox}>
          <Text style={styles.shareTetx}>234545454545</Text>
          <Button
            onPress={handleCopyCode}
            style={{ marginVertical: 0, marginHorizontal: 0 }}
          >
            Share
          </Button>
        </View>

        <Text style={styles.description}>
          You get a free delivery coupon code everytime a friend places their
          first booking above N2000 and is valid for 30 days.
        </Text>

        <Pressable style={styles.button} onPress={() => setIsModalOpen(true)}>
          <Text style={styles.buttonText}>View referral history</Text>
          <MaterialCommunityIcons
            name='chevron-right'
            size={20}
            color={'#ada9a9'}
          />
        </Pressable>
      </View>

      <ReferModalScreen
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </View>
  );
};

export default ReferScreen;

const styles = StyleSheet.create({
  main: {
    width: '90%',
    margin: 'auto',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  boldText: {
    textAlign: 'center',
    color: '#1B1C1E',
    fontWeight: 600,
    fontSize: 16,
    width: '70%',
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 20,
  },

  shareBox: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColors.border,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  shareTetx: {
    marginRight: 80,
    fontSize: 14,
  },

  description: {
    color: '#6C757D',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginVertical: 30,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonText: {
    color: '#ada9a9',
    marginRight: 10,
    fontSize: 15,
  },
});
