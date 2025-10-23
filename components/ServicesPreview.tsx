import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';

const ServicesPreview = () => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.previewHeader}>
        <Text style={commonStyles.previewHeaderText}>Services</Text>
        <Button title='View All' color='#88898F' />
      </View>

      <View style={homeStyles.serviceCardListContainer}>
        <View style={homeStyles.serviceCardList}>
          {/* start */}
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
        </View>

        <View style={homeStyles.serviceCardList}>
          {/* start */}
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}>
            <View style={homeStyles.serviceImage}>
              <Image source={require('../assets/images/Vector.png')} />
            </View>
            <Text style={homeStyles.serviceText}>Plumbing</Text>
          </View>
          <View style={homeStyles.serviceCard}></View>
        </View>
      </View>
    </View>
  );
};

export default ServicesPreview;
