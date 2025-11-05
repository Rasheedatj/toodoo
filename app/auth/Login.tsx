import Button from '@/components/Button';
import LogoComponent from '@/components/Logo';
import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.rootContainer}>
      <LogoComponent />

      <View style={styles.article}>
        <Text style={styles.title}> Sign in to your Account</Text>
        <Text style={styles.description}>
          Enter the necessary details to sign in to ToDoo
        </Text>
      </View>

      <View style={styles.form}>
        <View style={commonStyles.formItem}>
          <Text style={commonStyles.label}>Email address</Text>
          <TextInput
            textContentType='emailAddress'
            autoCapitalize='none'
            style={commonStyles.input}
            placeholder='e.g jane@doe.com'
          />
        </View>

        <View style={commonStyles.formItem}>
          <Text style={commonStyles.label}>Password</Text>
          <TextInput
            style={commonStyles.input}
            autoCapitalize='none'
            placeholder='******'
            secureTextEntry
          />
        </View>

        <Text style={styles.forgot}>Forgot Password?</Text>
        <Button
          onPress={() => {
            router.push('/(tabs)/home');
          }}
          style={{ marginTop: 20 }}
        >
          Sign in
        </Button>
      </View>

      <Text style={styles.footer}>
        Don&apos;t have an account?{' '}
        <Link href='/auth/SignUpAs' style={styles.signUp}>
          Sign up
        </Link>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    flex: 1,
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

  forgot: {
    textAlign: 'right',
    color: appColors.primary,
    fontWeight: 'semibold',
  },

  form: {
    // marginVertical: 10,
  },

  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6C7278',
    marginTop: 'auto',
  },

  signUp: {
    color: appColors.primary,
  },
});
