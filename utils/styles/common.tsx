import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    marginBlock: 16,
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
});
