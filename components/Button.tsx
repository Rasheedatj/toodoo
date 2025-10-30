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
    <View
      style={[styles[`${variant}Container`], styles.buttonContainer, style]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.buttonInnerContainer,
        ]}
        android_ripple={{ color: 'red' }}
      >
        <View style={styles.icon}>{icon}</View>
        <Text style={[styles.buttonText, styles[`${variant}Text`]]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 4,
    marginVertical: deviceWidth < 400 ? 8 : 10,
    overflow: 'hidden',
    borderRadius: 8,
  },

  buttonInnerContainer: {
    paddingHorizontal: deviceWidth < 400 ? 12 : 14,
    paddingVertical: deviceWidth < 400 ? 10 : 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    marginRight: 4,
  },

  buttonText: {
    fontSize: deviceWidth < 400 ? 14 : 16,
    fontWeight: 'medium',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },

  primaryContainer: {
    backgroundColor: appColors.primary,
  },

  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },

  primaryText: {
    color: 'white',
  },

  outlineText: {
    color: '#333333',
  },
});
