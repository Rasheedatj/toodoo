import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import React from 'react';
import { Image, Text, View } from 'react-native';

const MostBookedServices = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.previewHeader}>
        <Text style={commonStyles.previewHeaderText}>Most Booked Services</Text>
      </View>

      <View style={homeStyles.bookedServiceContainer}>
        <View style={[homeStyles.bookedServiceCard, commonStyles.card]}>
          <Image source={require('../assets/images/booked_service.png')} />
          <View style={homeStyles.bookedServiceDescription}>
            <Text style={homeStyles.bookedHeader}>Cleaning</Text>
            <Text style={homeStyles.bookedRating}>4.7(1k)</Text>
            <Text style={homeStyles.bookedPrice}>From N3,000.00</Text>
          </View>
        </View>
        <View style={[homeStyles.bookedServiceCard, commonStyles.card]}>
          <Image source={require('../assets/images/booked_service.png')} />
          <View style={homeStyles.bookedServiceDescription}>
            <Text style={homeStyles.bookedHeader}>Cleaning</Text>
            <Text style={homeStyles.bookedRating}>4.7(1k)</Text>
            <Text style={homeStyles.bookedPrice}>From N3,000.00</Text>
          </View>
        </View>
        <View style={[homeStyles.bookedServiceCard, commonStyles.card]}>
          <Image source={require('../assets/images/booked_service.png')} />
          <View style={homeStyles.bookedServiceDescription}>
            <Text style={homeStyles.bookedHeader}>Cleaning</Text>
            <Text style={homeStyles.bookedRating}>4.7(1k)</Text>
            <Text style={homeStyles.bookedPrice}>From N3,000.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MostBookedServices;
