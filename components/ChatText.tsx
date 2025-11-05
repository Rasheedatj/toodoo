import { appColors } from '@/utils/constants/colors';
import { Chat } from '@/utils/types/UI';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

const ChatText = ({ isUser, message }: Chat) => {
  if (isUser)
    return (
      <View style={[styles.messageContainer, styles.myMessage]}>
        <View style={[styles.myMessageBubble, styles.bubble]}>
          <Text style={[styles.myText, styles.text]}> {message.text}</Text>
        </View>
        <Text style={[styles.time, { textAlign: 'left' }]}>{message.time}</Text>
      </View>
    );
  return (
    <View style={[styles.senderBox, styles.messageContainer]}>
      <Avatar src={message.senderImage} size={37} />
      <View style={{ flex: 1 }}>
        <Text>{message.senderName}</Text>
        <Text style={[styles.senderMessageBubble, styles.text, styles.bubble]}>
          {message.text}
        </Text>
        <Text style={[styles.time, { textAlign: 'right' }]}>
          {message.time}
        </Text>
      </View>
    </View>
  );
};

export default ChatText;

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%',
    marginBottom: 30,
  },

  myMessage: {
    alignSelf: 'flex-end',
  },

  bubble: {
    paddingVertical: 11,
    paddingHorizontal: 14,
  },

  myMessageBubble: {
    backgroundColor: appColors.primary,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
    marginBottom: 10,
    maxWidth: '90%',
  },

  senderMessageBubble: {
    backgroundColor: '#F1F7FF',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopEndRadius: 10,
    marginVertical: 10,
  },

  text: {
    lineHeight: 20,
    fontSize: 14.7,
  },

  myText: {
    color: '#ffffff',
  },

  senderBox: {
    flexDirection: 'row',
  },

  time: {
    color: '#0D082C66',
  },
});
