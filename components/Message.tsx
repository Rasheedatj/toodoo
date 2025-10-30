import { chatHomeStyle } from '@/utils/styles/chat';
import { commonStyles } from '@/utils/styles/common';
import { MessageProp } from '@/utils/types/UI';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const Message = ({ message }: { message: MessageProp }) => {
  const { name, title, lastSent } = message;
  return (
    <Pressable
      style={({ pressed }) => [
        chatHomeStyle.message,
        pressed && chatHomeStyle.pressed,
      ]}
    >
      <View style={commonStyles.avatar}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
          }}
          style={{ flex: 1 }}
        />
      </View>

      <View style={chatHomeStyle.description}>
        <Text style={chatHomeStyle.name}>{name}</Text>
        <Text style={chatHomeStyle.lastMessage}>{title}</Text>
        <Text style={chatHomeStyle.time}>{lastSent}</Text>
      </View>
    </Pressable>
  );
};

export default Message;
