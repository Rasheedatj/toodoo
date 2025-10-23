import { StyleSheet } from 'react-native';
import { appColors } from '../constants/colors';

export const bookingsStyle = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    marginTop: 60,
  },
  menuItem: {
    paddingRight: 20,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: appColors.border,
  },
  activeMenuItem: {
    borderBottomColor: appColors.primary,
  },
  menuTitle: {
    color: '#3D3F33',
    fontWeight: 'medium',
  },
  bookingList: {
    marginTop: 20,
  },
  bookingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: appColors.border,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookingImage: {
    width: 87,
    height: 87,
  },
  bookingDetails: {
    flex: 1,
    marginLeft: 10,
  },
  bookingName: {
    fontWeight: 'semibold',
    fontSize: 18,
    color: '#333333',
  },
  bookingChargeBox: {
    color: appColors['text-gray'],
    marginVertical: 10,
  },
  bookingCharge: {
    fontSize: 16,
    fontWeight: 'bold',
    color: appColors['text-gray'],
    paddingLeft: 10,
  },
});
