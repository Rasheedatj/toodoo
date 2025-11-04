import Logo from '@/assets/images/Logo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const LogoComponent = () => {
  return (
    <View style={styles.logo}>
      <Logo />
    </View>
  );
};

export default LogoComponent;

const styles = StyleSheet.create({
  logo: {
    marginBottom: 30,
  },
});
