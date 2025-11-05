import ChatText from '@/components/ChatText';
import ScreenHeader from '@/components/ScreenHeader';
import { appColors } from '@/utils/constants/colors';
import { ChatMessage } from '@/utils/types/UI';
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const messages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hey, how are you?',
    senderId: 'friend123',
    senderName: 'Dapo Johnson',
    senderImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    time: '08:16 AM',
  },
  {
    id: '2',
    text: "I'm good! What about you?",
    senderId: 'me123',
    senderName: 'Rasheedat Jinadu',
    senderImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    time: '08:17 AM',
  },
  {
    id: '3',
    text: "I'm alright too. Just been busy with work lately. What are you up to these days?",
    senderId: 'friend123',
    senderName: 'Dapo Johnson',
    senderImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    time: '08:18 AM',
  },
  {
    id: '4',
    text: "Same here. I've been working on some React Native projects and trying to level up my skills.",
    senderId: 'me123',
    senderName: 'Rasheedat Jinadu',
    senderImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    time: '08:20 AM',
  },
  {
    id: '5',
    text: "That's awesome! I’ve been meaning to learn React Native too. How’s it going so far?",
    senderId: 'friend123',
    senderName: 'Dapo Johnson',
    senderImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    time: '08:21 AM',
  },
  {
    id: '6',
    text: 'Pretty good actually. It’s been fun building mobile UIs and seeing them run smoothly on both Android and iOS.',
    senderId: 'me123',
    senderName: 'Rasheedat Jinadu',
    senderImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    time: '08:23 AM',
  },
  {
    id: '7',
    text: 'Nice! I might ask you for some tips soon 😂',
    senderId: 'friend123',
    senderName: 'Dapo Johnson',
    senderImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    time: '08:24 AM',
  },
  {
    id: '8',
    text: 'Haha, no problem. Just let me know whenever you start. I can send some beginner-friendly resources.',
    senderId: 'me123',
    senderName: 'Rasheedat Jinadu',
    senderImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    time: '08:25 AM',
  },
  {
    id: '9',
    text: 'Thanks! By the way, are you free this weekend? We could grab lunch and catch up properly.',
    senderId: 'friend123',
    senderName: 'Dapo Johnson',
    senderImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    time: '08:27 AM',
  },
  {
    id: '10',
    text: 'Yeah sure! Saturday afternoon sounds good. Let’s pick a spot later.',
    senderId: 'me123',
    senderName: 'Rasheedat Jinadu',
    senderImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    time: '08:29 AM',
  },
  {
    id: '11',
    text: "Perfect 😎 I'll text you on Friday to confirm.",
    senderId: 'friend123',
    senderName: 'Dapo Johnson',
    senderImage: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    time: '08:30 AM',
  },
];
const ChatRoomScreen = () => {
  const userId = 'me123';
  return (
    <View style={styles.parent}>
      <ScreenHeader isBack={true} />

      <Text style={styles.name}>Oghechi Kanu</Text>

      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={(itemData) => (
            <ChatText
              isUser={itemData.item.senderId === userId}
              message={itemData.item}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.texts}
        />
        <View style={styles.footer}>
          <FontAwesome name='smile-o' size={24} color='=#999999' />
          <TextInput style={styles.reply} placeholder='Reply...' />

          <View style={styles.imageSend}>
            <SimpleLineIcons name='picture' size={24} color='#999999' />
            <View style={styles.send}>
              <MaterialCommunityIcons
                name='chevron-right'
                color={'white'}
                size={24}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },

  main: {
    flex: 1,
    paddingHorizontal: 16,
  },

  name: {
    padding: 16,
    backgroundColor: '#D7EFC7',
    color: '#1A1C1E',
    fontSize: 14,
    fontWeight: 500,
    marginVertical: 20,
  },

  texts: {
    flex: 1,
    marginVertical: 20,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reply: { flex: 1, marginHorizontal: 16 },

  imageSend: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  send: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: appColors.primary,
    marginLeft: 20,
  },
});
