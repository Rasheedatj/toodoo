import MessageList from '@/components/MessageList';
import ScreenHeader from '@/components/ScreenHeader';
import TabMenu from '@/components/TabMenu';
import { tabParentStyles } from '@/utils/styles';
import { TabItem } from '@/utils/types/UI';
import React, { useState } from 'react';
import { View } from 'react-native';

const callMenu: TabItem[] = [
  {
    id: 'messages',
    title: 'Messages',
  },
  {
    id: 'call',
    title: 'Call',
  },
];
const ChatsScreen = () => {
  const [activeMenu, setActiveMenu] = useState('messages');
  return (
    <View style={tabParentStyles.container}>
      <ScreenHeader title='Chat' />
      <TabMenu
        tabItems={callMenu}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <MessageList />
    </View>
  );
};

export default ChatsScreen;
