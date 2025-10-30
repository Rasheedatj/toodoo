import { commonStyles } from '@/utils/styles/common';
import React from 'react';
import { Image, View } from 'react-native';

const Avatar = ({ src }: { src: string }) => {
  return (
    <View style={commonStyles.avatar}>
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
