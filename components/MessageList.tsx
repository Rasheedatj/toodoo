import { chatHomeStyle } from '@/utils/styles/chat';
import { MessageProp } from '@/utils/types/UI';
import React from 'react';
import { FlatList } from 'react-native';
import Message from './Message';

const message: MessageProp[] = [
  {
    id: '3ejf',
    name: 'Oghechi Kanu',
    title: 'Issues with payment',
    lastSent: 'Yesterday, 10:30pm',
  },
  {
    id: 'fjjf',
    name: 'Oghechi Joy',
    title: 'Issues with service delivery',
    lastSent: 'Yesterday, 10:30am',
  },
  {
    id: 'fedjjf',
    name: 'Oghechi Joy',
    title: 'Issues with service delivery',
    lastSent: 'Yesterday, 10:30am',
  },
  {
    id: 'fjei9f',
    name: 'Oghechi Joy',
    title: 'Issues with service delivery',
    lastSent: 'Yesterday, 10:30am',
  },
  {
    id: 'fjd0f',
    name: 'Oghechi Joy',
    title: 'Issues with service delivery',
    lastSent: 'Yesterday, 10:30am',
  },
  {
    id: '12dnf',
    name: 'Oghechi Joy',
    title: 'Issues with service delivery',
    lastSent: 'Yesterday, 10:30am',
  },
];

const MessageList = () => {
  return (
    <FlatList
      data={message}
      renderItem={(itemData) => <Message message={itemData.item} />}
      style={chatHomeStyle.messageList}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MessageList;
