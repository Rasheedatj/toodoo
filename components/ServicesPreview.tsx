import AutoRepair from '@/assets/images/AutoRepair';
import Barbing from '@/assets/images/Barbing';
import Carpentry from '@/assets/images/Carpentry';
import Clean from '@/assets/images/Clean';
import Electrical from '@/assets/images/Electrical';
import Hairstyling from '@/assets/images/Hairstyling';
import Laundry from '@/assets/images/Laundry';
import Painting from '@/assets/images/Painting';
import Plumbing from '@/assets/images/plumbing';
import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ServicesPreview = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.previewHeader}>
        <Text style={commonStyles.previewHeaderText}>Services</Text>
        <Link href='/(tabs)/home/ServicesList' style={commonStyles.viewLink}>
          View All
        </Link>
      </View>

      <View style={homeStyles.serviceCardListContainer}>
        <View style={homeStyles.serviceCardList}>
          {/* start */}
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Plumbing />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Carpentry />
            </View>
            <Text style={homeStyles.serviceText}>Carpentry</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Painting />
            </View>
            <Text style={homeStyles.serviceText}>Painting</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Barbing />
            </View>
            <Text style={homeStyles.serviceText}>Barbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Electrical />
            </View>
            <Text style={homeStyles.serviceText}>Electrical</Text>
          </View>
        </View>

        <View style={homeStyles.serviceCardList}>
          {/* start */}
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Hairstyling />
            </View>
            <Text style={homeStyles.serviceText}>Hairstyling</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Clean />
            </View>
            <Text style={homeStyles.serviceText}>Cleaning</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <AutoRepair />
            </View>
            <Text style={homeStyles.serviceText}>Mechanics</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Laundry />
            </View>
            <Text style={homeStyles.serviceText}>Laundry</Text>
          </View>
          <View style={homeStyles.serviceCard}></View>
        </View>
      </View>
    </View>
  );
};

export default ServicesPreview;
