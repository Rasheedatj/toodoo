import Notification from '@/assets/images/notification';
import { commonStyles } from '@/utils/styles/common';
import { walletStyles } from '@/utils/styles/wallet';
import { ScreenHeaderProps } from '@/utils/types/UI';
import React from 'react';
import { Text, View } from 'react-native';
import Back from './Back';

const ScreenHeader = ({ title, hasBell = true, isBack }: ScreenHeaderProps) => {
  return (
    <View style={walletStyles.header}>
      {isBack ? (
        <Back />
      ) : (
        <Text style={commonStyles.previewHeaderText}>{title}</Text>
      )}
      {hasBell && <Notification />}
    </View>
  );
};

export default ScreenHeader;
