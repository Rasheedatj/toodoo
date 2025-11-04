import { deviceWidth } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { AvatarProp } from '@/utils/types/UI';
import React from 'react';
import { Image, View } from 'react-native';

const Avatar = ({ src, size = 'medium', style }: AvatarProp) => {
  const calculatedSize =
    deviceWidth < 400
      ? size === 'medium'
        ? 50
        : 70
      : size === 'large'
      ? 200
      : 70;

  return (
    <View
      style={[
        {
          width: calculatedSize,
          height: calculatedSize,
          borderRadius:
            deviceWidth < 400
              ? size === 'medium'
                ? 25
                : 35
              : size === 'large'
              ? 100
              : 35,
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
