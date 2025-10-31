import { appColors, deviceWidth } from '@/utils/constants/colors';
import { ButtonProps } from '@/utils/types/UI';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Button = ({
  onPress,
  children,
  variant = 'primary',
  style,
  icon,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.buttonContainer,
      ]}
      android_ripple={{ color: 'red' }}
    >
      <View
        style={[
          styles[`${variant}Container`],
          styles.buttonInnerContainer,
          style,
        ]}
      >
        <View style={styles.icon}>{icon}</View>
        <Text style={[styles.buttonText, styles[`${variant}Text`]]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 4,
    marginVertical: deviceWidth < 400 ? 8 : 10,
  },

  buttonInnerContainer: {
    paddingHorizontal: deviceWidth < 400 ? 10 : 14,
    paddingVertical: deviceWidth < 400 ? 8 : 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  primaryContainer: {
    backgroundColor: appColors.primary,
  },

  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },

  icon: {
    marginRight: 4,
  },

  buttonText: {
    fontSize: deviceWidth < 400 ? 13 : 16,
    fontWeight: 'medium',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },

  primaryText: {
    color: 'white',
  },

  outlineText: {
    color: '#333333',
  },
});
