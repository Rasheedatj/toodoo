import { StyleSheet } from 'react-native';
import { appColors } from '../constants/colors';

export const chatHomeStyle = StyleSheet.create({
  messageList: {
    marginTop: 28,
  },

  message: {
    borderWidth: 0.5,
    borderColor: appColors.border,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 14,
  },

  description: { marginLeft: 10 },
  name: {
    fontWeight: 'medium',
    fontSize: 16,
  },
  lastMessage: {
    marginVertical: 5,
    color: appColors['text-gray'],
  },
  time: {
    color: appColors.primary,
    fontWeight: 'medium',
  },

  pressed: {
    backgroundColor: '#F2FAEC',
    borderWidth: 0,
    borderColor: 'none',
    overflow: 'hidden',
  },
});
