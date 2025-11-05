import LogoComponent from '@/components/Logo';
import { appColors } from '@/utils/constants/colors';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const SignUpAsScreen = () => {
  return (
    <View style={styles.rootContianer}>
      <LogoComponent />

      <View style={styles.article}>
        <Text style={styles.title}> Create an Account</Text>
        <Text style={styles.description}>
          Get started by setting up your account
        </Text>
      </View>

      <View style={styles.selectContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.selectItem,
            pressed && styles.pressed,
          ]}
        >
          {({ pressed }) => (
            <>
              <View style={[styles.selectIcon, pressed && styles.pressedIcon]}>
                <Feather
                  name='search'
                  size={16}
                  color={pressed ? 'white' : appColors.primary}
                />
              </View>
              <View style={styles.selectArticle}>
                <Text style={styles.selectTitle}>I want to hire</Text>
                <Text style={styles.selectDetails}>
                  Easily find skilled artisans for your home and business needs,
                  all vetted and ready to work near you.
                </Text>
              </View>

              <MaterialCommunityIcons
                name='chevron-right'
                color='#999999'
                size={32}
              />
            </>
          )}
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.selectItem,
            pressed && styles.pressed,
          ]}
        >
          {({ pressed }) => (
            <>
              <View style={[styles.selectIcon, pressed && styles.pressedIcon]}>
                <MaterialCommunityIcons
                  name='hammer-wrench'
                  size={16}
                  color={pressed ? 'white' : appColors.primary}
                />
              </View>
              <View style={styles.selectArticle}>
                <Text style={styles.selectTitle}>I want to work</Text>
                <Text style={styles.selectDetails}>
                  Register to offer your services, connect with clients nearby,
                  and grow your earnings with reliable bookings.
                </Text>
              </View>

              <MaterialCommunityIcons
                name='chevron-right'
                color='#999999'
                size={32}
              />
            </>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpAsScreen;

const styles = StyleSheet.create({
  rootContianer: {
    padding: 16,
  },
  article: {
    marginBottom: 40,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 48,
    paddingBottom: 10,
  },

  description: {
    fontSize: 14,
    color: '#999999',
    fontWeight: 'medium',
  },

  selectContainer: {},

  selectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: appColors.border,
    borderRadius: 14,
    marginBottom: 30,
  },
  selectIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectArticle: {
    // width: '80%',
    flex: 1,
    marginHorizontal: 10,
  },
  selectTitle: {
    fontWeight: 'semibold',
    paddingBottom: 14,
    fontSize: 20,
  },
  selectDetails: {
    color: appColors['text-gray'],
    lineHeight: 20,
  },

  pressed: {
    borderColor: appColors.primary,
    backgroundColor: '#D6FFDF33',
  },

  pressedIcon: {
    backgroundColor: appColors.primary,
  },
});
