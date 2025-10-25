import ProfileHero from '@/components/ProfileHero';
import ProfileOptions from '@/components/ProfileOptions';
import ScreenHeader from '@/components/ScreenHeader';
import { tabParentStyles } from '@/utils/styles';
import React from 'react';
import { View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={tabParentStyles.container}>
      <ScreenHeader title='Profile' />
      <ProfileHero />
      <ProfileOptions />
    </View>
  );
};

export default ProfileScreen;
