import User from '@/assets/images/user';
import { chatHomeStyle } from '@/utils/styles/chat';
import { MessageProp } from '@/utils/types/UI';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Message = ({ message }: { message: MessageProp }) => {
  const { name, title, lastSent } = message;
  return (
    <Pressable
      style={({ pressed }) => [
        chatHomeStyle.message,
        pressed && chatHomeStyle.pressed,
      ]}
    >
      <User />

      <View style={chatHomeStyle.description}>
        <Text style={chatHomeStyle.name}>{name}</Text>
        <Text style={chatHomeStyle.lastMessage}>{title}</Text>
        <Text style={chatHomeStyle.time}>{lastSent}</Text>
      </View>
    </Pressable>
  );
};

export default Message;
