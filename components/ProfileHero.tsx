import User from '@/assets/images/user';
import { profileHomeStyles } from '@/utils/styles/profile';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';

const ProfileHero = () => {
  return (
    <ImageBackground
      source={require('../assets/images/star.png')}
      style={profileHomeStyles.container}
      resizeMode='contain'
      imageStyle={{ opacity: 0.3 }}
    >
      <User />
      <View style={profileHomeStyles.article}>
        <Text style={profileHomeStyles.articleHeader}>Itunuoluwa Abidoye</Text>
        <Text style={profileHomeStyles.articleText}>
          Itunuoluwa@abidoye.com
        </Text>
        <Text style={profileHomeStyles.articleText}>B122345</Text>
      </View>
      <Pressable>
        <MaterialCommunityIcons name='pencil-outline' size={24} color='white' />
      </Pressable>
    </ImageBackground>
  );
};

export default ProfileHero;
