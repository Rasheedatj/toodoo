import { deviceWidth } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { AvatarProp } from '@/utils/types/UI';
import React from 'react';
import { Image, View } from 'react-native';

const Avatar = ({ src, size = 70, style }: AvatarProp) => {
  return (
    <View
      style={[
        {
          width: deviceWidth < 400 ? 50 : size,
          height: deviceWidth < 400 ? 50 : size,
          borderRadius: deviceWidth < 400 ? 25 : size / 2,
        },
        commonStyles.avatar,
        style,
      ]}
    >
      <Image
        source={{
          uri: src,
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Avatar;
