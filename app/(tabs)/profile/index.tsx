import ProfileHero from '@/components/ProfileHero';
import ProfileOptions from '@/components/ProfileOptions';
import ScreenHeader from '@/components/ScreenHeader';
import { tabParentStyles } from '@/utils/styles';
import React from 'react';
import { ScrollView, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={tabParentStyles.container}>
      <ScreenHeader title='Profile' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHero />
        <ProfileOptions />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
