import { deviceWidth } from '@/utils/constants/colors';
import { searchModalStyles } from '@/utils/styles/home';
import { BackProp } from '@/utils/types/UI';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import Back from './Back';

const BackHeader = ({ onClick }: BackProp) => {
  const navigtion = useNavigation();
  return (
    <View style={searchModalStyles.header}>
      <Back onClick={() => (onClick ? onClick() : navigtion.goBack())} />
      <MaterialCommunityIcons
        name='bell-outline'
        size={deviceWidth < 400 ? 24 : 32}
        color={'#141B34'}
      />
    </View>
  );
};

export default BackHeader;
