import { appColors } from '@/utils/constants/colors';
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
      style={[styles.buttonContainer, style, styles[`${variant}Container`]]}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.buttonInnerContainer,
        ]}
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
    marginVertical: 10,
    overflow: 'hidden',
    borderRadius: 8,
  },

  buttonInnerContainer: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  icon: {
    marginRight: 4,
  },

  buttonText: {
    fontSize: 16,
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
    borderWidth: 1,
  },

  primaryText: {
    color: 'white',
  },

  outlineText: {
    color: '#333333',
  },
});
