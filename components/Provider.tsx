import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { homeStyles } from '@/utils/styles/home';
import { ProviderProps } from '@/utils/types/UI';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import Button from './Button';

const Provider = ({ provider }: { provider: ProviderProps }) => {
  const router = useRouter();
  const { name, userAvatar, price, location, service, rateAmount, rating } =
    provider;
  return (
    <View style={[commonStyles.card, homeStyles.providerCard]}>
      <Image
        source={{ uri: userAvatar }}
        style={{
          width: '100%',
          height: 100,
          objectFit: 'cover',
          borderRadius: 4,
          flex: 1,
        }}
      />
      <View style={homeStyles.bookedServiceDescription}>
        <Text style={commonStyles.header}>{name}</Text>
        <Text style={homeStyles.providerPrice}>From NGN {price}</Text>

        <View style={homeStyles.providerInfo}>
          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='map-marker-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>{location}</Text>
          </View>
          <View style={homeStyles.providerInfoItem}>
            <Ionicons name='basket-outline' color='#A3A2A9' size={14} />
            <Text style={homeStyles.providerInfoItemText}>{service}</Text>
          </View>
          <View style={homeStyles.providerInfoItem}>
            <MaterialCommunityIcons
              name='star-outline'
              color='#A3A2A9'
              size={14}
            />
            <Text style={homeStyles.providerInfoItemText}>
              {rating}({rateAmount})
            </Text>
          </View>
        </View>
      </View>
      <Button
        onPress={() => router.push(`/(tabs)/home/12`)}
        variant='outline'
        style={{ borderColor: appColors.primary, marginTop: 18 }}
      >
        Hire me
      </Button>
    </View>
  );
};

export default Provider;
