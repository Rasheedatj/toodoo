import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from './Button';
import { appColors } from '@/utils/constants/colors';
import { homeStyles } from '@/utils/styles/home';
import { commonStyles } from '@/utils/styles/common';

const Provider = () => {
  return (
    <View style={[commonStyles.card, homeStyles.providerCard]}>
      <Image
        source={require('../assets/images/booked_service.png')}
        style={{
          width: '100%',
          height: 100,
          objectFit: 'cover',
          borderRadius: 4,
        }}
      />
      <View style={homeStyles.bookedServiceDescription}>
        <Text style={commonStyles.header}>Oghechi Kanu</Text>
        <Text style={homeStyles.providerPrice}>From NGN 3,000.00</Text>

        <View style={homeStyles.providerInfo}>
          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='map-marker-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>Lagos Nigeria</Text>
          </View>
          <View style={homeStyles.providerInfoItem}>
            <Ionicons name='basket-outline' color='#A3A2A9' size={14} />
            <Text style={homeStyles.providerInfoItemText}>Laundry</Text>
          </View>
          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='star-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>4.7(2)</Text>
          </View>
        </View>
      </View>
      <Button
        onPress={() => {}}
        variant='outline'
        style={{ borderColor: appColors.primary, marginTop: 18 }}
      >
        Hire me
      </Button>
    </View>
  );
};

export default Provider;
