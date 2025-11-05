import { StyleSheet } from 'react-native';
import { appColors, deviceWidth } from '../constants/colors';

export const commonStyles = StyleSheet.create({
  container: {
    marginBlock: 16,
  },
  avatar: {
    marginRight: 16,
    borderWidth: 1,
    borderColor: appColors.primary,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  fullModal: {
    padding: 16,
    paddingTop: 65,
  },
  formModal: {
    padding: 16,
    paddingTop: 35,
    paddingBottom: 100,
    backgroundColor: 'white',
    marginTop: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  header: {
    fontWeight: 500,
    fontSize: deviceWidth < 400 ? 16 : 20,
    color: '#1A1C1E',
    marginBottom: 10,
  },

  previewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  previewHeaderText: {
    fontWeight: 'bold',
    fontSize: deviceWidth < 400 ? 19 : 24,
    color: '#3D3F33',
  },

  card: {
    borderWidth: 0.5,
    borderColor: '#EDF1F3',
    borderRadius: 6.21,
    padding: 9.82,
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backText: {
    marginLeft: 8,
  },
  successTitle: {
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 14,
  },
  successContainer: {
    marginVertical: 28,
  },
  successImage: {
    alignItems: 'center',
  },
  successDescription: {
    textAlign: 'center',
    color: appColors['text-gray'],
  },

  formItem: {
    marginBottom: 25,
  },
  label: {
    marginBottom: 8,
    color: '#6C7278',
  },
  input: {
    borderWidth: 1,
    borderColor: appColors.border,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },

  viewLink: {
    color: '#88898F',
    fontWeight: 'medium',
    fontSize: deviceWidth < 400 ? 14 : 18,
  },
});
