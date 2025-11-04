import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { searchModalStyles } from '@/utils/styles/home';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';

const Back = ({ onClick }: { onClick?: () => void }) => {
  const router = useRouter();
  const defaultClick = () => router.back();
  return (
    <Pressable
      onPress={onClick ? onClick : defaultClick}
      style={commonStyles.back}
    >
      <Ionicons name='chevron-back' size={24} color={appColors['text-gray']} />
      <Text style={searchModalStyles.backText}>Back</Text>
    </Pressable>
  );
};

export default Back;
