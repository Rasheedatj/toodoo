import { appColors } from '@/utils/constants/colors';
import { profileHomeStyles } from '@/utils/styles/profile';
import { ProfileActionProp } from '@/utils/types/UI';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const profileAction: ProfileActionProp[] = [
  {
    icon: (
      <MaterialCommunityIcons
        name='heart-outline'
        color={appColors.primary}
        size={24}
      />
    ),
    title: 'Favourite',
    text: 'List of favourite',
    path: '/(tabs)/profile/Refer',
  },
  {
    icon: (
      <MaterialCommunityIcons
        name='headphones'
        color={appColors.primary}
        size={24}
      />
    ),
    title: 'Help & support',
    text: 'Contact Support',
    path: '/(tabs)/profile/Refer',
  },
  {
    icon: (
      <Ionicons name='language-outline' color={appColors.primary} size={24} />
    ),
    title: 'Language',
    text: 'Choose your language',
    path: '/(tabs)/profile/Refer',
  },
  {
    icon: (
      <MaterialCommunityIcons
        name='gift-outline'
        color={appColors.primary}
        size={24}
      />
    ),
    title: 'Refer & Earn',
    text: 'Refer and earn easily',
    path: '/(tabs)/profile/Refer',
  },
  {
    icon: (
      <MaterialCommunityIcons
        name='list-box-outline'
        color={appColors.primary}
        size={24}
      />
    ),
    title: 'Subscription',
    text: 'Manage your subscription',
    path: '/(tabs)/profile/Refer',
  },
];

const ProfileOptions = () => {
  const router = useRouter();
  return (
    <View style={profileHomeStyles.optionsContainer}>
      {profileAction.map((action, index) => (
        <Pressable
          onPress={() => router.push(action.path)}
          key={action.title + index}
          style={profileHomeStyles.option}
        >
          <View style={profileHomeStyles.icon}>{action.icon}</View>

          <View style={profileHomeStyles.optionArticle}>
            <Text>{action.title}</Text>
            <Text style={profileHomeStyles.optionArticleText}>
              {action.text}
            </Text>
          </View>
          <MaterialCommunityIcons
            name='chevron-right'
            color={appColors['text-gray']}
            size={18}
          />
        </Pressable>
      ))}

      <View style={profileHomeStyles.option}>
        <View
          style={[profileHomeStyles.icon, { borderColor: appColors.error }]}
        >
          <MaterialCommunityIcons
            name='logout'
            color={appColors.error}
            size={22}
          />
        </View>

        <View style={profileHomeStyles.optionArticle}>
          <Text>Logout</Text>
          <Text style={profileHomeStyles.optionArticleText}>
            Logout of your current session
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileOptions;
