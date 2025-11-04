import { StyleSheet } from 'react-native';
import { appColors, deviceWidth } from '../constants/colors';

export const chatHomeStyle = StyleSheet.create({
  messageList: {
    marginTop: deviceWidth ? 20 : 28,
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

  name: {
    fontWeight: 'medium',
    fontSize: deviceWidth < 400 ? 14 : 16,
  },
  lastMessage: {
    marginVertical: deviceWidth < 400 ? 3 : 5,
    color: appColors['text-gray'],
    fontSize: deviceWidth < 400 ? 13 : 14,
  },
  time: {
    color: appColors.primary,
    fontWeight: 'medium',
    fontSize: deviceWidth < 400 ? 13 : 14,
  },

  pressed: {
    backgroundColor: '#F2FAEC',
    borderWidth: 0,
    borderColor: 'none',
    overflow: 'hidden',
  },
});
