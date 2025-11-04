import Avatar from '@/components/Avatar';
import ScreenHeader from '@/components/ScreenHeader';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CallingScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader isBack={true} />

      <View style={styles.main}>
        <View style={styles.image}>
          <Avatar
            src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
            size='large'
            style={{ marginRight: 0 }}
          />
        </View>

        <View>
          <Text style={styles.name}>Ogechi kanu</Text>
          <Text style={styles.status}>Calling</Text>
        </View>
        <View style={styles.callIcons}>
          <View style={styles.iconbox}>
            <MaterialIcons name='call-end' size={24} color='#848484' />
          </View>
          <View style={[styles.iconbox, styles.endIcon]}>
            <MaterialIcons name='call' size={24} color='white' />
          </View>
          <View style={styles.iconbox}>
            <FontAwesome name='microphone-slash' size={24} color='#848484' />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    width: '70%',
    margin: 'auto',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    color: '#0E0E0E',
    fontWeight: 500,
    fontSize: 26,
    textAlign: 'center',
    paddingBottom: 12,
  },

  status: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
  },

  callIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
  },

  iconbox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#EDEDED',
  },

  endIcon: {
    backgroundColor: '#C50E0E',
  },
});
