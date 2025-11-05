import { appColors } from '@/utils/constants/colors';
import { commonStyles } from '@/utils/styles/common';
import { homeStyles, searchModalStyles } from '@/utils/styles/home';
import { ModalProps, RecentSearch } from '@/utils/types/UI';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';
import BackHeader from '../BackHeader';

const searches = [
  { title: 'carpentry 1', id: '244' },
  { title: 'carpentry 2', id: '245' },
  { title: 'carpentry 3', id: '246' },
  { title: 'carpentry 4', id: '247' },
];

const SearchModal = ({ isOpen, onClose }: ModalProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [recentSearches, setRecentSearches] =
    useState<RecentSearch[]>(searches);

  const handleDeleteSearch = (id: string) =>
    setRecentSearches((currentSearches) =>
      currentSearches.filter((item) => item.id !== id)
    );

  return (
    <Modal visible={isOpen} animationType='slide'>
      <View style={searchModalStyles.container}>
        <BackHeader onClick={onClose} />

        <View style={homeStyles.searchBar}>
          <Feather name='search' size={24} color='#ACB5BB' />
          <TextInput
            value={searchInput}
            onChangeText={setSearchInput}
            style={searchModalStyles.input}
            placeholder='Search'
          />
        </View>

        <View style={searchModalStyles.recent}>
          <Text style={commonStyles.header}>Recent Searches</Text>

          {recentSearches.map((search) => (
            <Pressable style={searchModalStyles.searchItem} key={search.id}>
              <Text style={searchModalStyles.searchItemText}>
                {search.title}
              </Text>
              <Pressable
                onPressIn={(e) => e.stopPropagation()}
                onPress={() => handleDeleteSearch(search.id)}
              >
                <Feather name='x' color={appColors['text-gray']} size={20} />
              </Pressable>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
