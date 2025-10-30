import SvgComponent from '@/assets/images/user';
import BackHeader from '@/components/BackHeader';
import Button from '@/components/Button';
import CancelBooking from '@/components/CancelBooking';
import ReportProvider from '@/components/ReportProvider';
import Status from '@/components/Status';
import { appColors } from '@/utils/constants/colors';
import { bookings } from '@/utils/dummyData';
import { bookingDetStyle, bookingsStyle } from '@/utils/styles/bookings';
import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';

const Booking = () => {
  const [isCancelVisible, setIsCancelVisible] = useState(false);
  const [isReportVisible, setIsReportVisible] = useState(false);
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const booking = bookings.filter((booking) => booking.id === id)[0];

  const { service, date, description, address, charge, status, provider } =
    booking;
  return (
    <View>
      <BackHeader onClick={() => router.back()} />
      <View style={{ paddingBottom: 80 }}>
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

            <Pressable onPress={() => setIsReportVisible(true)}>
              <MaterialIcons
                name='report-gmailerrorred'
                size={24}
                color={appColors.error}
              />
            </Pressable>
          </View>

          <View style={bookingDetStyle.section}>
            <Text style={bookingDetStyle.title}>Job Description</Text>
            <Text style={bookingDetStyle.descriptionArticle}>
              {description}
            </Text>
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
                <Text style={bookingDetStyle.sectionBoxValue}>
                  NGN {charge}
                </Text>
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
              <SvgComponent />
              <View style={bookingsStyle.bookingDetails}>
                <Text style={bookingsStyle.bookingService}>
                  {provider.name}
                </Text>
                <Text style={bookingsStyle.bookingChargeBox}>
                  Price:{' '}
                  <Text style={bookingsStyle.bookingCharge}>
                    NGN {provider.price}
                  </Text>
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

            <View style={bookingDetStyle.buttons}>
              {status === 'completed' ? (
                <Button onPress={() => {}}>Reorder again</Button>
              ) : status === 'pending' ? (
                <>
                  <Button
                    onPress={() =>
                      Alert.alert(
                        'Completed!',
                        'This booking is now completed',
                        [
                          {
                            text: 'Ok',
                            onPress: () => router.push('/(tabs)/bookings'),
                          },
                        ]
                      )
                    }
                    style={{ flex: 1 }}
                  >
                    Mark as done
                  </Button>
                  <Button
                    onPress={() => setIsCancelVisible(true)}
                    style={{ flex: 1, borderColor: 'red' }}
                    variant='outline'
                  >
                    Cancel Booking
                  </Button>
                </>
              ) : (
                ''
              )}
            </View>
          </View>
        </ScrollView>
      </View>

      <CancelBooking
        isOpen={isCancelVisible}
        onClose={() => setIsCancelVisible(false)}
      />
      <ReportProvider
        isOpen={isReportVisible}
        onClose={() => setIsReportVisible(false)}
        bookingId={id.toString()}
      />
    </View>
  );
};

export default Booking;
