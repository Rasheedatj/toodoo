import { homeStyles } from '@/utils/styles/home';
import React from 'react';
import { ImageBackground, Text } from 'react-native';
import Button from './Button';

const Hero = () => {
  return (
    <ImageBackground
      source={require('../assets/images/radial.png')}
      resizeMode='contain'
      style={homeStyles.hero}
    >
      <Text style={homeStyles.heroHeader}>
        Reliable services, Anytime, Anywhere.
      </Text>
      <Text style={homeStyles.heroDescription}>
        Connecting you to skilled artisans for all your home and business needs
      </Text>
      <Button onPress={() => {}} style={{ backgroundColor: '#558D2F' }}>
        Find an artisan
      </Button>
    </ImageBackground>
  );
};

export default Hero;
