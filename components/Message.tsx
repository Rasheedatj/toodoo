import { chatHomeStyle } from '@/utils/styles/chat';
import { MessageProp } from '@/utils/types/UI';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Avatar from './Avatar';

const Message = ({ message }: { message: MessageProp }) => {
  const { name, title, lastSent } = message;
  return (
    <Pressable
      style={({ pressed }) => [
        chatHomeStyle.message,
        pressed && chatHomeStyle.pressed,
      ]}
    >
      <Avatar src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe' />

      <View>
        <Text style={chatHomeStyle.name}>{name}</Text>
        <Text style={chatHomeStyle.lastMessage}>{title}</Text>
        <Text style={chatHomeStyle.time}>{lastSent}</Text>
      </View>
    </Pressable>
  );
};

export default Message;
