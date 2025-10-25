import { commonStyles } from '@/utils/styles/common';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { ProviderProps } from '../utils/types/UI';
import Provider from './Provider';

const nearbyProviders: ProviderProps[] = [
  {
    id: '123',
    name: 'Oghechi Kanu',
    userAvatar: '../assets/images/booked_service.png',
    location: 'Lagos, Nigeria',
    price: 30000,
    service: 'laundry',
    rating: 4.5,
    rateAmount: 20,
  },
  {
    id: '124',
    name: 'Oghechi Kanu',
    userAvatar: '../assets/images/booked_service.png',
    location: 'Lagos, Nigeria',
    price: 30000,
    service: 'laundry',
    rating: 4.5,
    rateAmount: 20,
  },
];

const ProvidersPreview = () => (
  <View style={commonStyles.container}>
    <View style={commonStyles.previewHeader}>
      <Text style={commonStyles.previewHeaderText}>Nearby Providers</Text>
      <Link href='/' style={commonStyles.viewLink}>
        View All
      </Link>
    </View>

    {/* <FlatList
      data={nearbyProviders}
      renderItem={(itemData) => <Provider provider={itemData.item} />}
      keyExtractor={(item) => item.id}
      // style={{ flexDirection: 'row' }}
    /> */}
    <Provider provider={nearbyProviders[0]} />
  </View>
);

export default ProvidersPreview;
