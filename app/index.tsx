import Button from '@/components/Button';
import { appColors } from '@/utils/constants/colors';
import { Introduction } from '@/utils/types/UI';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const introductions: Introduction[] = [
  {
    id: 1,
    title: 'Reliable Services at Your Fingertips',
    description:
      'Find skilled artisans and book reliable services quickly and securely.',
  },
  {
    id: 2,
    title: 'Book, Track, and Connect with Ease',
    description:
      'Browse services, select your preferred artisan, and track their arrival in real-time.',
  },
  {
    id: 3,
    title: 'Trusted Artisans and Secure Payments',
    description:
      'Make secure payments, check artisan ratings, and leave reviews after each service.',
  },
];

const AppIntroScren = () => {
  const [activeIntroId, setActiveIntroId] = useState(1);
  const router = useRouter();

  const handleChangeActiveId = (type: 'prev' | 'next') => {
    if (type === 'next') setActiveIntroId((prev) => prev + 1);
    if (type === 'prev') setActiveIntroId((prev) => prev - 1);
  };

  const handleGoToLogin = () => router.push('/auth/Login');

  const activeIntro = introductions.find((intro) => intro.id === activeIntroId);

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require('../assets/images/oval.png')}
        resizeMode='cover'
        style={styles.greenContainer}
      >
        <Pressable onPress={handleGoToLogin}>
          <Text>Skip</Text>
        </Pressable>
      </ImageBackground>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{activeIntro?.title}</Text>
        <Text style={styles.description}>{activeIntro?.description}</Text>

        <View style={styles.control}>
          <Pressable
            onPress={() => handleChangeActiveId('prev')}
            style={styles.controlButton}
          >
            <Text style={activeIntroId === 1 && styles.hiddenControl}>
              Prev
            </Text>
          </Pressable>

          <View style={styles.indicatorContainer}>
            <Text
              style={[
                styles.indicator,
                activeIntroId === 1 && styles.activeIndicator,
              ]}
            ></Text>
            <Text
              style={[
                styles.indicator,
                activeIntroId === 2 && styles.activeIndicator,
              ]}
            ></Text>
            <Text
              style={[
                styles.indicator,
                activeIntroId === 3 && styles.activeIndicator,
              ]}
            ></Text>
          </View>

          <Pressable
            onPress={() => handleChangeActiveId('next')}
            style={[
              styles.controlButton,
              { alignItems: 'flex-end' },
              activeIntroId === 3 && styles.hiddenControl,
            ]}
          >
            <Text style={activeIntroId === 3 && styles.hiddenControl}>
              Next
            </Text>
          </Pressable>

          {activeIntroId === 3 && (
            <Button onPress={handleGoToLogin} style={styles.actionButton}>
              Get Started
            </Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default AppIntroScren;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  greenContainer: {
    height: 500,
    paddingTop: 30,
    paddingRight: 20,
    alignItems: 'flex-end',
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    color: '#333333',
    lineHeight: 46,
    textAlign: 'center',
    fontWeight: 'semibold',
    paddingBottom: 20,
  },

  description: {
    color: '#999999',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
  },

  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },

  controlButton: {
    flex: 1,
  },

  indicator: {
    width: 6,
    height: 6,
    backgroundColor: '#D9D9D9',
    marginRight: 4,
    borderRadius: 3,
  },

  activeIndicator: {
    width: 20,
    backgroundColor: appColors.primary,
  },

  indicatorContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
  },

  hiddenControl: {
    display: 'none',
  },

  actionButton: {
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginVertical: 0,
  },
});
