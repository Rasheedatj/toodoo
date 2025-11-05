import { appColors } from '@/utils/constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  rating: number;
  review: string;
  userName: string;
  userPicture: string;
}

const RatingCard = ({ rating, review, userName, userPicture }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: userPicture }} style={styles.image} />
        <Text style={styles.headerText}>{userName}</Text>
      </View>

      <Text style={styles.review}>{review}</Text>

      <View style={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <MaterialCommunityIcons
            key={index}
            name={index + 1 <= rating ? 'star' : 'star-outline'}
            color='#E7C30B'
            size={24}
            style={styles.star}
          />
        ))}
      </View>
    </View>
  );
};

export default RatingCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: 12,
    padding: 10,
    marginRight: 20,
    width: 320,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    marginLeft: 10,
  },

  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  review: {
    marginVertical: 20,
    fontSize: 15,
    lineHeight: 22,
    color: '#464646',
  },

  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    marginRight: 4,
  },
});
