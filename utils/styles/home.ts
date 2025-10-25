import { StyleSheet } from 'react-native';
import { appColors } from '../constants/colors';

export const homeStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImage: {
    width: 70,
    height: 70,
    marginRight: 16,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'medium',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
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
    paddingVertical: 18,
    paddingHorizontal: 14,
    marginTop: 28,
  },

  searchText: {
    marginLeft: 10,
    color: '#1A1C1E',
  },

  hero: {
    backgroundColor: appColors.primary,
    height: 200,
    borderRadius: 14,
    padding: 20,
    marginTop: 20,
  },

  heroHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  heroDescription: {
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
    fontSize: 14,
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
    flex: 1,
  },

  serviceImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    width: 65,
    height: 65,
    borderRadius: 14,
  },

  serviceText: {
    color: '#646363',
    textAlign: 'center',
  },

  providerContainer: {
    flexDirection: 'row',
  },

  providerCard: {
    width: '80%',
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
  },

  providerInfoItemText: {
    marginLeft: 2,
    color: '#A3A2A9',
    fontSize: 14,
  },

  providerPrice: {
    color: '#A3A2A9',
    marginBottom: 12,
    marginTop: 4,
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
    fontSize: 16,
  },
  bookedRating: {
    marginVertical: 9,
    color: appColors['text-gray'],
    fontSize: 10,
  },
  bookedPrice: {
    color: appColors['text-gray'],
    fontSize: 10,
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
