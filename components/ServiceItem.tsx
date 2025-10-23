import { appColors } from '@/utils/constants/colors';
import { serviceListStyles } from '@/utils/styles/home';
import { Service } from '@/utils/types/UI';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const ServiceItem = ({ service }: { service: Service }) => {
  const { title, id, providers } = service;
  return (
    <View style={serviceListStyles.serviceItem}>
      <Text style={serviceListStyles.serviceTitle}>{title} Service</Text>

      <View style={serviceListStyles.availaible}>
        <FontAwesome5 name='dot-circle' size={16} color={appColors.primary} />
        <Text style={serviceListStyles.availableText}>
          {providers} {providers > 1 ? 'Providers' : 'Provider'} Available
        </Text>
      </View>
    </View>
  );
};

export default ServiceItem;
