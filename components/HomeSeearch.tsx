import { homeStyles } from '@/utils/styles/home';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import SearchModal from './modals/SearchModal';

const HomeSeearch = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Pressable
        style={homeStyles.searchBar}
        onPress={() => setIsModalVisible(true)}
      >
        <Feather name='search' size={24} color='#ACB5BB' />
        <Text style={homeStyles.searchText}>
          What services are you looking for?
        </Text>
      </Pressable>
      <SearchModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default HomeSeearch;
