import { appColors } from '@/utils/constants/colors';
import { profileHomeStyles } from '@/utils/styles/profile';
import { ProfileActionProp } from '@/utils/types/UI';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

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
  },
  {
    icon: (
      <Ionicons name='language-outline' color={appColors.primary} size={24} />
    ),
    title: 'Language',
    text: 'Choose your language',
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
  },
];

const ProfileOptions = () => {
  return (
    <View style={profileHomeStyles.optionsContainer}>
      {profileAction.map((action, index) => (
        <View key={action.title + index} style={profileHomeStyles.option}>
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
        </View>
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
