import { StyleSheet } from 'react-native';
import { appColors } from '../constants/colors';

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
    marginTop: 30,
  },
  balanceHeader: {
    color: appColors['text-gray'],
    fontSize: 16,
  },
  balanceAmount: {
    fontWeight: 'semibold',
    fontSize: 20,
    color: '#1C1B1E',
    marginVertical: 14,
  },
  message: {
    color: appColors['text-gray'],
  },
  activity: {
    marginTop: 50,
    flex: 10,
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
    marginTop: 24,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: 16,
    marginBottom: 20,
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
    marginBottom: 14,
    fontSize: 16,
  },
  activityDate: {},
  activityPrice: {
    color: '#1B1C1E',
    fontWeight: 'medium',
    fontSize: 16,
  },
});
