import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import { Service } from '@/utils/types/UI';
import React from 'react';
import { Image, Text, View } from 'react-native';

const mostBookedServices: Service[] = [
  {
    id: '1',
    title: 'laundry',
    price: 3000,
    rating: 4.3,
    rateAmount: 21,
  },
  {
    id: '12',
    title: 'laundry',
    price: 3000,
    rating: 4.3,
    rateAmount: 13,
  },
  {
    id: '13',
    title: 'laundry',
    price: 3000,
    rating: 4.3,
    rateAmount: 5,
  },
];

const MostBookedServices = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.previewHeader}>
        <Text style={commonStyles.previewHeaderText}>Most Booked Services</Text>
      </View>

      <View style={homeStyles.bookedServiceContainer}>
        {mostBookedServices.map((service) => (
          <View
            key={service.id}
            style={[homeStyles.bookedServiceCard, commonStyles.card]}
          >
            <Image
              source={require('../assets/images/booked_service.png')}
              style={{ flex: 1, width: '100%', borderRadius: 3 }}
            />
            <View style={homeStyles.bookedServiceDescription}>
              <Text style={homeStyles.bookedHeader}>{service.title}</Text>
              <Text style={homeStyles.bookedRating}>
                {service.rating}({service.rateAmount})
              </Text>
              <Text style={homeStyles.bookedPrice}>
                From NGN {service.price}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MostBookedServices;
