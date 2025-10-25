import SvgComponent from '@/assets/images/user';
import { appColors } from '@/utils/constants/colors';
import { homeStyles } from '@/utils/styles/home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const HomeProfile = () => {
  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.userProfile}>
        {/* <Image
          source={require('../assets/images/user.tsx')}
          style={homeStyles.headerImage}
        /> */}
        <SvgComponent style={homeStyles.headerImage} />
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
          size={32}
          color={'#141B34'}
        />
      </View>
    </View>
  );
};

export default HomeProfile;
