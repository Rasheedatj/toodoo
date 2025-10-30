import { StyleSheet } from 'react-native';
import { appColors, deviceWidth } from '../constants/colors';

export const homeStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greetingText: {
    fontSize: deviceWidth < 400 ? 14 : 18,
    fontWeight: 'medium',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: deviceWidth < 400 ? 4 : 8,
  },
  locationIcon: {
    marginRight: 6,
  },
  locationText: {
    color: appColors.primary,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EDF1F3',
    paddingVertical: deviceWidth < 400 ? 12 : 18,
    paddingHorizontal: deviceWidth < 400 ? 10 : 14,
    marginTop: deviceWidth < 400 ? 22 : 28,
  },

  searchText: {
    marginLeft: 10,
    color: '#1A1C1E',
  },

  hero: {
    backgroundColor: appColors.primary,
    height: deviceWidth < 400 ? 180 : 200,
    borderRadius: 14,
    padding: 20,
    marginTop: 20,
    alignItems: 'flex-start',
  },

  heroHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: deviceWidth < 400 ? 16 : 18,
  },

  heroDescription: {
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
    fontSize: deviceWidth < 400 ? 12 : 14,
  },
  serviceCardListContainer: {
    flexDirection: 'column',
    flex: 1,
  },

  serviceCardList: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  serviceCard: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  serviceImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    width: deviceWidth < 400 ? 55 : 65,
    height: deviceWidth < 400 ? 55 : 65,
    borderRadius: 14,
  },

  serviceText: {
    color: '#646363',
    textAlign: 'center',
    fontSize: deviceWidth < 400 ? 13 : 15,
  },

  providerContainer: {
    flexDirection: 'row',
  },

  providerCard: {
    flex: 1,
    marginRight: 14,
  },

  providerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },

  providerInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },

  providerInfoItemText: {
    marginLeft: 4,
    color: '#A3A2A9',
    fontSize: deviceWidth < 400 ? 12 : 14,
  },

  providerPrice: {
    color: '#A3A2A9',
    marginBottom: deviceWidth < 400 ? 8 : 12,
    marginTop: deviceWidth < 400 ? 3 : 4,
    fontSize: deviceWidth < 400 ? 13 : 15,
  },

  bookedServiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bookedServiceCard: {
    marginLeft: 6,
    width: '33%',
  },

  bookedServiceDescription: {
    marginTop: 10,
  },

  bookedHeader: {
    fontWeight: 'semibold',
    fontSize: deviceWidth < 400 ? 13 : 16,
    textTransform: 'capitalize',
  },
  bookedRating: {
    marginVertical: deviceWidth < 400 ? 5 : 9,
    color: appColors['text-gray'],
    fontSize: 12,
  },
  bookedPrice: {
    color: appColors['text-gray'],
    fontSize: 12,
  },
});

export const searchModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 65,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backText: {
    color: appColors['text-gray'],
    marginLeft: 8,
    fontSize: 16,
  },

  input: {
    flex: 1,
    paddingVertical: 4,
    marginLeft: 10,
    textTransform: 'none',
  },

  recent: {
    marginTop: 28,
  },

  searchItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F9',
  },

  searchItemText: {
    color: appColors['text-gray'],
    fontSize: 16,
    textTransform: 'capitalize',
    flex: 1,
  },
});

export const serviceListStyles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  serviceList: {
    marginTop: 30,
  },
  serviceItem: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F9',
    borderRadius: 10,
    marginBottom: 20,
  },
  serviceTitle: {
    width: '50%',
  },
  availaible: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  availableText: {
    flexDirection: 'row',
    marginLeft: 6,
    color: '#A3A2A9',
    fontSize: 13,
  },
});
