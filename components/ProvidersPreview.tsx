import { commonStyles } from '@/utils/styles/common';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ProviderProps } from '../utils/types/UI';
import Provider from './Provider';

const nearbyProviders: ProviderProps[] = [
  {
    id: '123',
    name: 'Oghechi Kanu',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    location: 'Lagos, Nigeria',
    price: 30000,
    service: 'laundry',
    rating: 4.5,
    rateAmount: 20,
  },
  {
    id: '124',
    name: 'Oghechi Kanu',
    userAvatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
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
      <Link href='/home' style={commonStyles.viewLink}>
        View All
      </Link>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {nearbyProviders.map((provider) => (
        <Provider key={provider.id} provider={provider} />
      ))}
    </ScrollView>
  </View>
);

export default ProvidersPreview;
