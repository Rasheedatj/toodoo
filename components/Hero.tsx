import { homeStyles } from '@/utils/styles/home';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Button from './Button';

const Hero = () => {
  return (
    <View style={homeStyles.hero}>
      <ImageBackground
        source={require('../assets/images/radial.png')}
        resizeMode='cover'
        style={{
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        <Text style={homeStyles.heroHeader}>
          Reliable services, Anytime, Anywhere.
        </Text>
        <Text style={homeStyles.heroDescription}>
          Connecting you to skilled artisans for all your home and business
          needs
        </Text>
        {/* <View> */}
        <Button onPress={() => {}} style={{ backgroundColor: '#558D2F' }}>
          Find an artisan
        </Button>
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};

export default Hero;
