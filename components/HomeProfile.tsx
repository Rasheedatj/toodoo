import { appColors, deviceWidth } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const HomeProfile = () => {
  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.userProfile}>
        <View style={commonStyles.avatar}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
            }}
            style={{ flex: 1 }}
          />
        </View>

        <View>
          <Text style={homeStyles.greetingText}>Hello Tobi</Text>
          <View style={homeStyles.location}>
            <MaterialCommunityIcons
              size={20}
              color={appColors.primary}
              style={homeStyles.locationIcon}
              name='map-marker-outline'
            />
            <Text style={homeStyles.locationText}>Abuja mgt</Text>
          </View>
        </View>
      </View>

      <View>
        <MaterialCommunityIcons
          name='bell-outline'
          size={deviceWidth < 400 ? 24 : 32}
          color={'#141B34'}
        />
      </View>
    </View>
  );
};

export default HomeProfile;
