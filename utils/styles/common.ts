import { StyleSheet } from 'react-native';
import { appColors } from '../constants/colors';

export const commonStyles = StyleSheet.create({
  container: {
    marginBlock: 16,
  },
  fullModal: {
    padding: 16,
    paddingTop: 65,
  },
  formModal: {
    padding: 16,
    paddingTop: 35,
    paddingBottom: 100,
    // height: 400,
    backgroundColor: 'white',
    marginTop: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  header: {
    fontWeight: 'medium',
    fontSize: 20,
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
    fontSize: 20,
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
    marginTop: 35,
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
});
