import Logo from '@/assets/images/Logo';
import Button from '@/components/Button';
import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
];

const SignUpScreen = () => {
  const router = useRouter();
  const [gender, setGender] = useState('female');
  return (
    <ScrollView
      style={styles.rootContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.logo}>
        <Logo />
      </View>

      <Pressable style={styles.back} onPress={() => router.back()}>
        <MaterialCommunityIcons name='chevron-left' size={18} color='#999999' />
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      <View style={styles.article}>
        <Text style={styles.title}> Create an Account</Text>
        <Text style={styles.description}>
          Enter the necessary details to sign up to ToDoo
        </Text>
      </View>

      <View style={styles.form}>
        <View style={commonStyles.formItem}>
          <Text style={commonStyles.label}>Full Name</Text>
          <TextInput
            autoCapitalize='none'
            style={commonStyles.input}
            placeholder='e.g Jane Doe'
          />
        </View>
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
          <Text style={commonStyles.label}>Phone Number</Text>
          <TextInput
            autoCapitalize='none'
            style={commonStyles.input}
            placeholder='e.g +234 813 7823 384'
          />
        </View>

        <View style={commonStyles.formItem}>
          <Text style={commonStyles.label}>Gender</Text>
          <Dropdown
            style={commonStyles.input}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            labelField='label'
            valueField='value'
            placeholder='Choose language'
            value={gender}
            onChange={(item) => setGender(item.value)}
          />
        </View>

        <View style={commonStyles.formItem}>
          <Text style={commonStyles.label}>Password</Text>
          <TextInput
            autoCapitalize='none'
            style={commonStyles.input}
            placeholder='******'
            secureTextEntry
          />
        </View>

        <View style={styles.passwordChecker}>
          <MaterialCommunityIcons
            name='check-circle-outline'
            size={16}
            color={appColors.primary}
          />
          <Text style={styles.passwordText}>8+ Alphanumeric characters</Text>
        </View>
        <Button onPress={() => {}} style={{ marginTop: 20 }}>
          Sign Up
        </Button>
      </View>

      <Text style={styles.footer}>
        Already have an account?{' '}
        <Link href='/auth/Login' style={styles.signUp}>
          Sign in
        </Link>
      </Text>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    flex: 1,
  },

  logo: {
    marginBottom: 30,
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backText: {
    marginLeft: 3,
    color: '#999999',
    fontSize: 14,
  },

  article: {
    marginBottom: 40,
    marginTop: 10,
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

  placeholderStyle: {
    fontSize: 16,
    color: '#888',
  },
  selectedTextStyle: {
    color: '#000',
  },

  passwordChecker: {
    flexDirection: 'row',
  },
  passwordText: {
    color: appColors.primary,
    fontWeight: 'semibold',
    marginLeft: 5,
  },

  form: {
    // marginVertical: 10,
  },

  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6C7278',
    marginTop: 15,
  },

  signUp: {
    color: appColors.primary,
  },
});
