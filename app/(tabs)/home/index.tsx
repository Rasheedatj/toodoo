import Hero from '@/components/Hero';
import HomeProfile from '@/components/HomeProfile';
import HomeSeearch from '@/components/HomeSeearch';
import MostBookedServices from '@/components/MostBookedServices';
import ProvidersPreview from '@/components/ProvidersPreview';
import ServicesPreview from '@/components/ServicesPreview';
import { tabParentStyles } from '@/utils/styles';
import { ScrollView, View } from 'react-native';

export default function Home() {
  return (
    <View style={tabParentStyles.container}>
      <HomeProfile />

      <HomeSeearch />

      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        <Hero />

        <ServicesPreview />
        <ProvidersPreview />
        <MostBookedServices />
      </ScrollView>
    </View>
  );
}
