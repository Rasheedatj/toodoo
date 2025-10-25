import { StyleSheet } from 'react-native';
import { appColors } from '../constants/colors';

export const bookingsStyle = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    marginTop: 60,
  },
  menuItem: {
    paddingHorizontal: 10,
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
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
  bookingDetails: {
    flex: 1,
    marginLeft: 10,
  },
  bookingService: {
    fontWeight: 'semibold',
    fontSize: 18,
    color: '#333333',
    textTransform: 'capitalize',
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
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    textTransform: 'capitalize',
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontWeight: 'semibold',
    borderRadius: 20,
    textAlign: 'center',
  },
});

export const bookingDetStyle = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },

  serviceText: {
    textTransform: 'capitalize',
    fontWeight: 'semibold',
    color: '#0E0E0E',
    marginBottom: 10,
    fontSize: 18,
  },

  serviceDate: {
    color: appColors['text-gray'],
  },

  section: {
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },

  sectionBoxTitle: {
    fontSize: 16,
    paddingBottom: 10,
  },

  sectionBox: {
    flex: 1,
  },

  sectionBoxValue: {
    color: appColors['text-gray'],
  },

  title: {
    paddingBottom: 18,
    fontWeight: 'medium',
    fontSize: 16,
  },

  descriptionArticle: {
    color: appColors['text-gray'],
    fontSize: 13,
    lineHeight: 20,
  },

  provider: {
    marginTop: 20,
  },
  providerCard: {
    flexDirection: 'row',
    paddingInline: 10,
    paddingTop: 10,
  },

  buttons: {
    // flexDirection: 'row',
    marginTop: 28,
  },
});

export const cancelStyles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    paddingTop: 20,
    fontSize: 16,
  },
  warning: {
    paddingBlock: 10,
    color: appColors['text-gray'],
    lineHeight: 19,
  },
});
