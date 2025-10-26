import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { searchModalStyles } from '@/utils/styles/home';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text } from 'react-native';

const Back = ({ onClick }: { onClick: () => void }) => {
  return (
    <Pressable onPress={onClick} style={commonStyles.back}>
      <Ionicons name='chevron-back' size={24} color={appColors['text-gray']} />
      <Text style={searchModalStyles.backText}>Back</Text>
    </Pressable>
  );
};

export default Back;
