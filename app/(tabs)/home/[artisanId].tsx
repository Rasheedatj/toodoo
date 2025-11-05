import Check from '@/assets/images/Check';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import RatingCard from '@/components/RatingCard';
import ScreenHeader from '@/components/ScreenHeader';
import { appColors } from '@/utils/constants/colors';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const stats = [
  {
    icon: <Ionicons name='timer-outline' size={24} color='#999999' />,
    number: 54,
    title: 'Hours',
  },
  {
    icon: <Ionicons name='clipboard-outline' size={24} color='#999999' />,
    number: 30,
    title: 'Jobs completed',
  },
  {
    icon: <Ionicons name='star-outline' size={24} color='#999999' />,
    number: 5,
    title: 'Stars',
  },
];

const ArtisanProfileScreen = () => {
  const { artisanId } = useLocalSearchParams<{ artisanId: string }>();
  const router = useRouter();
  return (
    <>
      <ScreenHeader isBack={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.summary}>
            <Avatar
              src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
              size={150}
              style={{ marginRight: 0 }}
            />

            <View style={styles.name}>
              <Text style={styles.nameText}>Dapo Johnson</Text>
              <Check />
            </View>

            <View style={styles.availability}>
              <Text style={styles.servvice}>Carpentry</Text>
              <Text style={styles.distance}>12 km away</Text>
              <View style={styles.status}>
                <FontAwesome
                  name='circle'
                  size={10}
                  color={appColors.primary}
                />
                <Text style={styles.statusText}>Open to work</Text>
              </View>
            </View>

            <View style={styles.contactIcons}>
              <Pressable
                onPress={() => router.push('/(tabs)/chats/CallingScreen')}
                style={styles.iconView}
              >
                <MaterialIcons
                  name='call'
                  size={24}
                  color={appColors.primary}
                />
              </Pressable>
              <Pressable
                onPress={() => router.push('/(tabs)/chats/ChatRoom')}
                style={styles.iconView}
              >
                <Ionicons
                  name='chatbubble-ellipses-outline'
                  size={24}
                  color={appColors.primary}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.stats}>
            {stats.map((stat) => (
              <View key={stat.title} style={styles.stat}>
                {stat.icon}
                <Text style={styles.statNumber}>{stat.number}+</Text>
                <Text>{stat.title}</Text>
              </View>
            ))}
          </View>

          <View style={styles.bio}>
            <View>
              <Text style={styles.bioHeader}>Bio</Text>
              <Text style={styles.bioDescription}>
                A professional carpenter
              </Text>
            </View>
            <View>
              <Text style={styles.bioHeader}>Skills</Text>
              <Text style={styles.bioDescription}>
                Join finishing, upholstery, chairs and tables building
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.pricingTitle}>Pricing List</Text>

            <View style={styles.priceItem}>
              <Text style={styles.priceText}>Rought carpentry</Text>
              <Text style={styles.priceText}>N 3000</Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={styles.priceText}>Rought carpentry</Text>
              <Text style={styles.priceText}>N 3000</Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={styles.priceText}>Rought carpentry</Text>
              <Text style={styles.priceText}>N 3000</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.pricingTitle}>Ratings & Reviews</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            >
              <RatingCard
                userName='Oghechi Kanu'
                review='He is an outstanding artisan with speed in delivery of his quality service. Kind and hardworking man.'
                rating={3}
                userPicture='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
              />
              <RatingCard
                userName='Oghechi Kanu'
                review='He is an outstanding artisan with speed in delivery of his quality service. Kind and hardworking man.'
                rating={4}
                userPicture='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
              />
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.pricingTitle}>Gallery</Text>

            <View style={styles.images}>
              <Image
                source={require('../../../assets/images/gallery.png')}
                style={styles.image}
              />
              <Image
                source={require('../../../assets/images/gallery.png')}
                style={styles.image}
              />
              <Image
                source={require('../../../assets/images/gallery.png')}
                style={styles.image}
              />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => {}}>Book a service</Button>
        </View>
      </ScrollView>
    </>
  );
};

export default ArtisanProfileScreen;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  summary: {
    width: '80%',
    alignItems: 'center',
    margin: 'auto',
  },

  name: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  nameText: {
    fontWeight: 500,
    fontSize: 18,
    color: '#1A1C1E',
    marginRight: 10,
  },

  availability: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '89%',
    justifyContent: 'space-between',
  },

  servvice: {
    color: appColors.primary,
    fontSize: 13,
  },
  distance: {
    color: appColors.error,
    fontSize: 13,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusText: {
    fontSize: 13,
    marginLeft: 10,
  },

  contactIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  iconView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D7EFC7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    width: '80%',
    justifyContent: 'space-between',
  },

  stat: {
    alignItems: 'center',
  },

  statNumber: {
    fontWeight: 500,
    color: '#222222',
    fontSize: 23,
    marginVertical: 10,
    textAlign: 'center',
  },

  statTitle: {
    fontWeight: 500,
    color: '#222222',
    fontSize: 13,
  },

  bio: {
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    width: '100%',
    marginBottom: 30,
  },

  bioHeader: {
    fontSize: 16,
    fontWeight: 500,
    paddingBottom: 10,
  },
  bioDescription: {
    color: '#999999',
    fontSize: 15,
    paddingBottom: 16,
    lineHeight: 20,
  },

  section: {
    width: '100%',
    marginBottom: 20,
  },

  pricingTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: '#222222',
    marginBottom: 20,
  },

  priceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  priceText: {
    color: '#999999',
  },

  images: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 20,
  },

  footer: {
    marginVertical: 30,
  },
});
