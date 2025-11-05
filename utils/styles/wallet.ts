import { StyleSheet } from 'react-native';
import { appColors, deviceWidth } from '../constants/colors';

export const walletStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balance: {
    marginTop: deviceWidth < 400 ? 20 : 30,
  },
  balanceHeader: {
    color: appColors['text-gray'],
    fontSize: deviceWidth < 400 ? 14 : 18,
  },
  balanceAmount: {
    fontWeight: 'semibold',
    fontSize: 20,
    color: '#1C1B1E',
    marginVertical: deviceWidth < 400 ? 8 : 14,
  },
  message: {
    color: appColors['text-gray'],
    // fontSize: 16,
  },
  activity: {
    marginTop: deviceWidth < 400 ? 40 : 50,
    flex: deviceWidth < 400 ? 6 : 8,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    marginBottom: 20,
    borderRadius: 22,
    backgroundColor: '#FFEDD5',
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: { color: '#1B1C1E', fontSize: 20, fontWeight: 'medium' },
  emptyDescription: {
    textAlign: 'center',
    color: appColors['text-gray'],
    marginTop: 8,
  },
  activityList: {
    marginTop: deviceWidth < 400 ? 15 : 24,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: deviceWidth < 400 ? 10 : 14,
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: deviceWidth < 400 ? 10 : 16,
    marginBottom: deviceWidth < 400 ? 12 : 20,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: '50%',
    marginRight: 12,
  },
  activityType: {
    textTransform: 'capitalize',
    color: '#1B1C1E',
    fontWeight: 'medium',
    marginBottom: deviceWidth ? 10 : 14,
    fontSize: deviceWidth < 400 ? 13 : 16,
  },
  activityDate: {
    fontSize: deviceWidth < 400 ? 13 : 14,
  },
  activityPrice: {
    color: '#1B1C1E',
    fontWeight: 'medium',
    fontSize: deviceWidth < 400 ? 14 : 16,
  },
  modalContent: {
    marginTop: 10,
  },
  modalTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'medium',
    fontSize: 20,
  },
  modaldescription: {
    color: '#6C7278',
  },
  formItem: {
    marginTop: 35,
  },
  modalLabel: {
    marginBottom: 8,
    color: '#6C7278',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: appColors.border,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
});
