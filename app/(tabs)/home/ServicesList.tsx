import ServiceItem from '@/components/ServiceItem';
import { commonStyles } from '@/utils/styles/common';
import { serviceListStyles } from '@/utils/styles/home';
import { Service } from '@/utils/types/UI';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import BackHeader from '../../../components/BackHeader';

const services: Service[] = [
  {
    id: '123',
    title: 'Cleaner',
    providers: 4,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
  {
    id: '133',
    title: 'Cleaner',
    providers: 1,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
  {
    id: '143',
    title: 'Cleaner',
    providers: 5,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
  {
    id: '144',
    title: 'Cleaner',
    providers: 5,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
  {
    id: '145',
    title: 'Cleaner',
    providers: 5,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
  {
    id: '146',
    title: 'Cleaner',
    providers: 5,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
  {
    id: '147',
    title: 'Cleaner',
    providers: 5,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
  {
    id: '148',
    title: 'Cleaner',
    providers: 5,
    rating: 4.5,
    rateAmount: 10,
    price: 1000,
  },
];

const ServicesList = () => {
  const navigation = useNavigation();
  return (
    <View>
      <BackHeader onClick={() => navigation.goBack()} />

      <View style={serviceListStyles.container}>
        <Text style={commonStyles.header}>Services</Text>

        <FlatList
          data={services}
          renderItem={(itemData) => <ServiceItem service={itemData.item} />}
          keyExtractor={(item) => item.id}
          style={serviceListStyles.serviceList}
        />
      </View>
    </View>
  );
};

export default ServicesList;
