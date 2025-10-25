import { commonStyles } from '@/utils/styles/common';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import Provider from './Provider';

const ProvidersPreview = () => (
  <View style={commonStyles.container}>
    <View style={commonStyles.previewHeader}>
      <Text style={commonStyles.previewHeaderText}>Nearby Providers</Text>
      <Link href='/' style={commonStyles.viewLink}>
        View All
      </Link>
    </View>

    <Provider />
  </View>
);

export default ProvidersPreview;
