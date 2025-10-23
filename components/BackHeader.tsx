import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { searchModalStyles } from '@/utils/styles/home';
import { BackProp } from '@/utils/types/UI';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const BackHeader = ({ onClick }: BackProp) => {
  return (
    <View style={searchModalStyles.header}>
      <Pressable onPress={onClick} style={commonStyles.back}>
        <Ionicons
          name='chevron-back'
          size={24}
          color={appColors['text-gray']}
        />
        <Text style={searchModalStyles.backText}>Back</Text>
      </Pressable>
      <MaterialCommunityIcons name='bell-outline' size={32} color={'#141B34'} />
    </View>
  );
};

export default BackHeader;
