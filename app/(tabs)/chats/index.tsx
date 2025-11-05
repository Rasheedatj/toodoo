import Button from '@/components/Button';
import MessageList from '@/components/MessageList';
import ScreenHeader from '@/components/ScreenHeader';
import TabMenu from '@/components/TabMenu';
import { tabParentStyles } from '@/utils/styles';
import { TabItem } from '@/utils/types/UI';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

const callMenu: TabItem[] = [
  {
    id: 'messages',
    title: 'Messages',
    component: <MessageList />,
  },
  {
    id: 'call',
    title: 'Call',
  },
];
const ChatsScreen = () => {
  const [activeMenu, setActiveMenu] = useState('messages');
  const router = useRouter();
  return (
    <View style={tabParentStyles.container}>
      <ScreenHeader title='Chat' />
      <TabMenu
        tabItems={callMenu}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      {callMenu.find((menu) => menu.id === activeMenu)?.component}

      {activeMenu === 'call' && (
        <Button onPress={() => router.push('/(tabs)/chats/CallingScreen')}>
          Go to calling
        </Button>
      )}
    </View>
  );
};

export default ChatsScreen;
