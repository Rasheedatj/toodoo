import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';

const ProvidersPreview = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.previewHeader}>
        <Text style={commonStyles.previewHeaderText}>Nearby Providers</Text>
        <Button title='View All' color='#88898F' />
      </View>

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
          <Text style={homeStyles.bookedHeader}>Oghechi Kanu</Text>
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
      </View>
    </View>
  );
};

export default ProvidersPreview;
