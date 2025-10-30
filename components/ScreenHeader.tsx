import { deviceWidth } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { walletStyles } from '@/utils/styles/wallet';
import { ScreenHeaderProps } from '@/utils/types/UI';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const ScreenHeader = ({ title, hasBell = true }: ScreenHeaderProps) => {
  return (
    <View style={walletStyles.header}>
      <Text style={commonStyles.previewHeaderText}>{title}</Text>
      {hasBell && (
        <MaterialCommunityIcons
          name='bell-outline'
          size={deviceWidth < 400 ? 24 : 32}
          color={'#141B34'}
        />
      )}
    </View>
  );
};

export default ScreenHeader;
