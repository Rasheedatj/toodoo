import { bookingDetStyle, bookingsStyle } from '@/utils/styles/bookings';
import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import { BookingDetails } from '@/utils/types/UI';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import BackHeader from './BackHeader';
import CancelBooking from './CancelBooking';
import ReportProvider from './ReportProvider';
import Status from './Status';

const Booking = ({ booking }: { booking: BookingDetails }) => {
  const [isCancelVisible, setIsCancelVisible] = useState(false);
  const [isReportVisible, setIsReportVisible] = useState(false);
  const { service, date, description, id, address, charge, status, provider } =
    booking;
  return (
    <View>
      <BackHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={bookingDetStyle.container}
      >
        <Text style={[commonStyles.header, { paddingBottom: 40 }]}>
          Booking #{id}
        </Text>
        <View style={bookingDetStyle.service}>
          <View>
            <Text style={bookingDetStyle.serviceText}>{service} service</Text>
            <Text style={bookingDetStyle.serviceDate}>{date} </Text>
          </View>
        </View>

        <View style={bookingDetStyle.section}>
          <Text style={bookingDetStyle.title}>Job Description</Text>
          <Text style={bookingDetStyle.descriptionArticle}>{description}</Text>
        </View>

        <View style={[bookingDetStyle.section]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={bookingDetStyle.sectionBox}>
              <Text style={bookingDetStyle.sectionBoxTitle}>Date</Text>
              <Text style={bookingDetStyle.sectionBoxValue}>{date}</Text>
            </View>
            <View style={bookingDetStyle.sectionBox}>
              <Text style={bookingDetStyle.sectionBoxTitle}>Time</Text>
              <Text style={bookingDetStyle.sectionBoxValue}>11:30 pm</Text>
            </View>
          </View>
          <View style={[bookingDetStyle.sectionBox, { marginBlock: 30 }]}>
            <Text style={bookingDetStyle.sectionBoxTitle}>Address</Text>
            <Text style={bookingDetStyle.sectionBoxValue}>{address}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={bookingDetStyle.sectionBox}>
              <Text style={bookingDetStyle.sectionBoxTitle}>Total Cost</Text>
              <Text style={bookingDetStyle.sectionBoxValue}>NGN {charge}</Text>
            </View>
            <View style={bookingDetStyle.sectionBox}>
              <Text style={bookingDetStyle.sectionBoxTitle}>Status</Text>
              <Status status={status} />
            </View>
          </View>
        </View>

        <View style={bookingDetStyle.provider}>
          <Text style={bookingDetStyle.title}>Service Provider</Text>

          <View style={bookingDetStyle.providerCard}>
            {provider.userAvatar}
            <View style={bookingsStyle.bookingDetails}>
              <Text style={bookingsStyle.bookingService}>{provider.name}</Text>
              <Text style={bookingsStyle.bookingChargeBox}>
                Price:{' '}
                <Text style={bookingsStyle.bookingCharge}>NGN{charge}</Text>{' '}
              </Text>

              <View style={bookingsStyle.itemFooter}>
                <View style={homeStyles.providerInfoItem}>
                  <MaterialCommunityIcons
                    name='map-marker-outline'
                    color='#A3A2A9'
                    size={14}
                  />
                  <Text style={homeStyles.providerInfoItemText}>
                    {provider.location}
                  </Text>
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

          <Button
            title='Cancel booking'
            onPress={() => setIsCancelVisible(true)}
          />
          <Button title='Report' onPress={() => setIsReportVisible(true)} />
        </View>
      </ScrollView>

      <CancelBooking
        isOpen={isCancelVisible}
        onClose={() => setIsCancelVisible(false)}
      />
      <ReportProvider
        isOpen={isReportVisible}
        onClose={() => setIsReportVisible(false)}
      />
    </View>
  );
};

export default Booking;
